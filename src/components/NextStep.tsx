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
            borderBottom: {
              default: null,
              '@media (width >= 1024px)': '1px solid var(--border)',
            },
            borderRight: {
              default: 'none',
              '@media (width >= 1024px)': '1px solid var(--border)',
            },
            flexBasis: '0',
            flexGrow: '1',
            flexShrink: '1',
            borderRightColor: 'var(--border)',
            borderRightStyle: 'solid',
            borderRightWidth: '1px',
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
