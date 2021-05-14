import { createWrapper } from '../../factory'
import ItemDimmer from '@/components/List/ItemDimmer'
import Dimmer from '@/components/Dimmer'
import { initState } from '../../store/mock.window'

const { state } = initState(768, 1000)
const wrapper = createWrapper(ItemDimmer, {
  mocks: {
    $store: { state },
  },
  stubs: {
    Dimmer,
  },
})

describe('ListProfile', () => {
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders Dimmer component', async () => {
    expect(wrapper.findComponent(Dimmer).exists()).toBe(true)
  })
})
