import { apply } from 'vicinage'
import { atMedia } from 'solarwindcss/at-media.stylex'
import { defineComponent } from 'vue'

export const LinkItem = defineComponent(function (_props, context) {
  return () => (
    <li
      {...apply({
        flex: {
          default: '1 1 calc(50% - 8px)',
          [atMedia.lg]: 'initial',
        },
      })}
    >
      {context.slots.default?.()}
    </li>
  )
})
