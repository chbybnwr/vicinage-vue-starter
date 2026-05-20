import { apply } from 'vicinage'
import { atMedia } from 'solarwindcss/at-media.stylex'
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
              [atMedia.lg]: '32px',
            },
            borderBottom: {
              default: null,
              [atMedia.lg]: '1px solid var(--border)',
            },
            borderRight: {
              default: 'none',
              [atMedia.lg]: '1px solid var(--border)',
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
