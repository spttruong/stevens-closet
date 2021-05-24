import { expect } from 'chai'
import { shallowMount, RouterLinkStub, createLocalVue } from '@vue/test-utils';
import FilteredOutfitsPage from '@/components/pages/FilteredOutfitsPage.vue';
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('FilteredOutfitsPage.vue', () => {
  let sampleOutfits = [
    {
      id: 1,
      title: 'Rugged Mustard',
      clothes: {
        top: [
          'Goodfellow Flannel (Mustard)',
          'Ted Baker Cotton V-neck Undershirt (White)'
        ],
        accessories: [],
        bottom: 'Everlane Slim-fit Dark Wash Jeans',
        footwear: 'Ted Baker Ashcroft 4 (Black)'
      },
      description:
        "Ironically, I am not the biggest fan of mustard, the sauce. However, this flannel really caught my eye as a quality layering piece. It's sturdy, comfortable, and eye-catching (in my opinion). It errs on the less breathable side despite being 100% cotton due to the thickness. I think it's best worn on a chillier day.",
      categories: ['casual', 'flannel', 'jeans', 'boots']
    },
    {
      id: 10,
      title: 'Look Good, Feel Good',
      clothes: {
        top: [
          'H&M Duffle (Dark Navy)',
          'Banana Republic Non-Iron Tailored Slim-fit Shirt'
        ],
        accessories: ['Leather Belt (Brown)'],
        bottom: 'Goodfellow Hennepin Tech Chinos (Olive)',
        footwear: 'Ted Baker Sipadan 3 Leather Oxford (Brown)'
      },
      description:
        "What goes with olive just as well as navy, if not better? Light blue. I feel like this color combination is some kind of underrated hidden gem. This speaks more to my ignorance about style and color pallets than anything. I think it's fairly well known that grey can go well with blues, but olive just adds another dimension.",
      categories: ['business casual', 'jacket', 'chinos', 'leather shoes']
    }
  ];

  let store
  let actions

  beforeEach(() => {
    actions = {
      setOutfits() {
        return null;
      }
    }
    store = new Vuex.Store({
      state: {},
      actions
    })
  })

  it('filters outfits based on set category', () => {
    const wrapper = shallowMount(FilteredOutfitsPage, {
      localVue,
      store,
      data: function () {
        return {
          category: 'casual',
        }
      },
      computed: {
        outfits: function () {
          return [sampleOutfits];
        },
        filteredOutfits: function () {
          return sampleOutfits[0];
        }
      },
      methods: {
        mockMethod() {
          return null;
        }
      },
      mounted() {
        this.mockMethod()
      },
      stubs: {
        RouterLink: RouterLinkStub,
      }
    })
    
    expect(wrapper.text()).to.include('Filtered Outfits');
    
    let categorySelector = wrapper.find('[data-test="category-selection"]').exists();
    expect(categorySelector).to.equal(true);
    
    let filteredOutfits = wrapper
      .find('[data-test="filtered-outfits-rendered"]')
      .exists();
    expect(filteredOutfits).to.equal(true);
  })


})
