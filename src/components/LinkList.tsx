import { apply } from 'vicinage'
import { atMedia } from 'solarwindcss/at-media.stylex'
import { defineComponent } from 'vue'

export const LinkList = defineComponent(function (_props, context) {
  return () => (
    <ul
      {...apply({
        padding: 0,
        listStyle: 'none',
        columnGap: '8px',
        display: 'flex',
        flexWrap: {
          default: 'wrap',
          [atMedia.lg]: 'initial',
        },
        justifyContent: {
          default: 'center',
          [atMedia.lg]: 'initial',
        },
        rowGap: '8px',
        marginTop: {
          default: '20px',
          [atMedia.lg]: '32px',
        },
      })}
    >
      {context.slots.default?.()}
    </ul>
  )
})
