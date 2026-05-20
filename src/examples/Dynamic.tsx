import { apply } from 'vicinage'
import { color } from 'solarwindcss/color.stylex'
import { spacing } from 'solarwindcss/spacing.stylex'
import { defineComponent, ref, watch } from 'vue'
import { transition } from 'solarwindcss'

export const Dynamic = defineComponent(function () {
  const percentage = ref(0)

  watch([percentage], () => {
    if (percentage.value > 100) {
      percentage.value = 0
    }
  })

  return () => (
    <>
      <button
        onClick={() => {
          percentage.value += 10
        }}
        {...apply(
          {
            '--initial-size': spacing[32],
            borderRadius: 'var(--initial-size)',
            backgroundColor: color.yellow500,
            display: 'flex',
            justifyContent: 'end',
            height: 'var(--initial-size)',
            minWidth: 'var(--initial-size)',
            width: () =>
              `calc(var(--initial-size) + ${percentage.value} / 100 * (100% - var(--initial-size)))`,
          },
          transition.all,
          //
        )}
      ></button>
      <div>click it</div>
    </>
  )
})
