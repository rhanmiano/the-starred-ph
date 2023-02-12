import { createTestWrapper } from '../../factory'
import { initWindow } from '../../store/mock.window'
import ItemDimmer from '@/components/List/ItemDimmer'
import Dimmer from '@/components/Dimmer'

const { mockWindow } = initWindow(768, 1000)
const wrapper = createTestWrapper(ItemDimmer, {
  mocks: {
    $store: { state: { window: mockWindow } },
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
