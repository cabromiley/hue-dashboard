import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import Hue from '@/api/hue'

describe('Home.vue', () => {
  let mocks = {}

  beforeEach(() => {
    mocks = {
      $hue: Hue({
        get () {
          return new Promise(resolve => {
            return resolve({
              data: {
                lights: [{ name: 'first light', modelid: '123' }, { name: 'second light', modelid: '124w' }]
              }
            })
          })
        }
      })
    }
  })

  it('sets hue.data.lights equal to the api response lights array', async () => {
    const wrapper = shallowMount(Home, { mocks })

    await wrapper.vm.$nextTick()

    expect(wrapper.vm.hue.data.lights[0].name).toBe('first light')
    expect(wrapper.vm.hue.data.lights[1].name).toBe('second light')
  })

  it('should print a light component for each light', async () => {
    const wrapper = shallowMount(Home, { mocks })

    await wrapper.vm.$nextTick()

    expect(wrapper.html()).toContain('id="0"')
    expect(wrapper.html()).toContain('id="1"')
    expect(wrapper.html()).toContain('light-stub')
  })
})