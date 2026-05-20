import { apply } from 'vicinage'
import { defineComponent } from 'vue'

export const NextStepIcon = defineComponent(function (_props, context) {
  return () => (
    <svg
      role="presentation"
      aria-hidden="true"
      {...apply({
        height: '22px',
        marginBottom: '16px',
        width: '22px',
      })}
    >
      {context.slots.default?.()}
    </svg>
  )
})
