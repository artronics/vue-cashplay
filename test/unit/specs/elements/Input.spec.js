import Vue from 'vue'
import { mount } from 'avoriaz'
import ArtInput from '@/components/elements/Input'

describe('Input.vue', () => {
  var propsData = {
    artName: 'foo',
    artRequired: true,
    artHelp: 'some help',
    artValidator: (input) => {
      return 'some error occurred'
    }
  }
  const Ctor = Vue.extend(ArtInput)
  const vm = new Ctor({
    propsData
  }).$mount()
  it('should render help msg', () => {
    expect(vm.$el.querySelector('#fooHelp').textContent).to.equal('some help')
  })
  it('should have correct name', () => {
    expect(vm.$el.querySelector('label').textContent).to.equal('foo')
  })
  it('should have hasError if required and input is empty', () => {
    const input = mount(ArtInput, {propsData})
    input.find('input')[0].trigger('blur')
    expect(input.vm.hasError).to.equal(true)
    expect(input.contains('.form-control-feedback')).to.equal(true)
    expect(input.contains('.form-control-danger')).to.equal(true)
  })
  it('should run validator and display msg', () => {
    const input = mount(ArtInput, {propsData})
    input.find('input')[0].trigger('input')
    expect(input.vm.hasError).to.equal(true)
    expect(input.find('.form-control-feedback')[0].text()).to.equal('some error occurred')
    expect(input.contains('.form-control-danger')).to.equal(true)
  })
})
