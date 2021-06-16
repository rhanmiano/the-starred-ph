import ItemDimmer from '@/components/List/ItemDimmer'
import Dimmer from '@/components/Dimmer'
import { createTestWrapper } from '../../factory'
import { initWindow } from '../../store/mock.window'

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
