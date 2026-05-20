import { apply } from 'vicinage'
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
          '@media (width >= 1024px)': 'initial',
        },
        justifyContent: {
          default: 'center',
          '@media (width >= 1024px)': 'initial',
        },
        rowGap: '8px',
        marginTop: {
          default: '20px',
          '@media (width >= 1024px)': '32px',
        },
      })}
    >
      {context.slots.default?.()}
    </ul>
  )
})
