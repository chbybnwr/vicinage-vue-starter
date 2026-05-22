import { apply } from 'vicinage'
import type { StyleXStyles } from '@stylexjs/stylex'
import { defineComponent } from 'vue'

export const NextStep = defineComponent(
  function (props: { style?: StyleXStyles }, context) {
    return () => (
      <div
        {...apply(
          {
            padding: {
              default: '24px 20px',
              '@media (width >= 1024px)': '32px',
            },
            flex: '1',
          },
          props.style,
        )}
      >
        {context.slots.default?.()}
      </div>
    )
  },
  {
    props: ['style'],
  },
)
