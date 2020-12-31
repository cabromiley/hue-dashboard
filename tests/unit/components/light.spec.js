import { shallowMount } from '@vue/test-utils'
import Light from '@/components/Light.vue'
import Hue from '@/api/hue'

describe('Light.vue', () => {
  let mocks = {}
  let light = {}

  beforeEach(() => {
    mocks = {
      $hue: Hue({
        get () {},
        put () {}
      })
    }

    light = {
      name: 'Kitchen',
      productname: 'Hue White Bulb',
      state: {
        on: true
      }
    }
  })

  it('should print light.name', async () => {
    const wrapper = shallowMount(Light, {
      mocks,
      propsData: {
        light,
        id: 1
      }
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.html()).toContain('Kitchen')
  })

  it('should print light.productname', async () => {
    const wrapper = shallowMount(Light, {
      mocks,
      propsData: {
        light,
        id: 1
      }
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.html()).toContain('Hue White Bulb')
  })

  it('should print On when light.state.on is true', async () => {
    const wrapper = shallowMount(Light, {
      mocks,
      propsData: {
        light,
        id: 1
      }
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.html()).toContain('On')
    expect(wrapper.html()).toContain('bg-green-500')
  })

  it('should print Off when light.state.on is false', async () => {
    const newLight = { ...light }
    newLight.state = {
      on: false
    }

    const wrapper = shallowMount(Light, {
      mocks,
      propsData: {
        light: newLight,
        id: 1
      }
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.html()).toContain('Off')
    expect(wrapper.html()).toContain('bg-red-500')
  })

  it('should call toggle api when onToggle is called', async () => {
    const spy = jest.spyOn(mocks.$hue.lights.state, 'setOn')
    const wrapper = shallowMount(Light, {
      mocks,
      propsData: {
        light,
        id: 1
      }
    })

    await wrapper.vm.onToggle()

    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledWith(1, false)
    expect(wrapper.vm.light.state.on = false)

    spy.mockRestore()
  })

  it('should create a clean acronym of the light.name', async () => {
    const newLight = { ...light }
    newLight.name = 'Kitchen Light'
    const wrapper = shallowMount(Light, {
      mocks,
      propsData: {
        light: newLight,
        id: 1
      }
    })

    expect(wrapper.vm.acronym).toBe('KL')
  })

  it('should print acronym', async () => {
    const newLight = { ...light }
    newLight.name = 'Kitchen Light'
    const wrapper = shallowMount(Light, {
      mocks,
      propsData: {
        light: newLight,
        id: 1
      }
    })

    expect(wrapper.html()).toContain('KL')
  })
})
