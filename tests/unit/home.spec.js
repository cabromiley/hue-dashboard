import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import homeApi from '../../src/api/home-api'

describe('Home.vue', () => {
  let mocks = {}

  beforeEach(() => {
    mocks = {
      $api: homeApi({
        get () {
          return new Promise(resolve => {
            return resolve({
              data: { 1: { name: 'first light', modelid: '123' }, 2: { name: 'second light', modelid: '124w' } }
            })
          })
        }
      })
    }
  })

  it('sets lights equal to the api response lights array', async () => {
    const wrapper = shallowMount(Home, { mocks })

    await wrapper.vm.$nextTick()

    expect(wrapper.vm.lights['1'].name).toBe('first light')
    expect(wrapper.vm.lights['2'].name).toBe('second light')
  })

  it('should print a light component for each light', async () => {
    const wrapper = shallowMount(Home, { mocks })

    await wrapper.vm.$nextTick()

    expect(wrapper.html()).toContain('id="1"')
    expect(wrapper.html()).toContain('id="2"')
    expect(wrapper.html()).toContain('light-stub')
  })

  it('should show error message if unable to find to find hue lights', async () => {
    const api = homeApi({
      get () {
        return new Promise((resolve, reject) => {
          return reject(new Error('Oops unable to find hub'))
        })
      }
    })

    const wrapper = shallowMount(Home, {
      mocks: {
        $api: api
      }
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.html()).toContain('Oops unable to find hub')
  })
})
