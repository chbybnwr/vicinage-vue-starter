import { transition } from 'solarwindcss'
import { color } from 'solarwindcss/color.stylex'
import { spacing } from 'solarwindcss/spacing.stylex'
import { apply } from 'vicinage'
import { defineComponent } from 'vue'

export const Pseudo = defineComponent(function () {
  return () => (
    <>
      <div
        {...apply(
          {
            borderRadius: {
              default: '50%',
              ':hover': '25%',
              ':active': 0,
            },
            backgroundColor: color.blue500,
            height: spacing[32],
            width: spacing[32],
          },
          transition.all,
        )}
      ></div>
      <div>click it or hover over it</div>
    </>
  )
})
