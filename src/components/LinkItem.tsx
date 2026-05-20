import { apply } from 'vicinage'
import { defineComponent } from 'vue'

export const LinkItem = defineComponent(function (_props, context) {
  return () => (
    <li
      {...apply({
        flex: {
          default: '1 1 calc(50% - 8px)',
          '@media (width >= 1024px)': 'initial',
        },
      })}
    >
      {context.slots.default?.()}
    </li>
  )
})
