import { apply } from 'vicinage'
import { defineComponent } from 'vue'

export const LinkIcon = defineComponent(function (_props, context) {
  return () => (
    <svg
      role="presentation"
      aria-hidden="true"
      {...apply({
        filter: {
          default: null,
          ['@media (prefers-color-scheme: dark)']: 'invert(1) brightness(2)',
        },
        height: '18px',
        width: '18px',
      })}
    >
      {context.slots.default?.()}
    </svg>
  )
})
