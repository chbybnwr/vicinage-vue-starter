import { apply } from 'vicinage'
import { color } from 'solarwindcss/color.stylex'
import { spacing } from 'solarwindcss/spacing.stylex'
import { transition } from 'solarwindcss'
import { defineComponent, ref } from 'vue'

export const Logical = defineComponent(function () {
  const isRound = ref(false)

  return () => (
    <>
      <button
        {...apply(
          {
            borderRadius: isRound.value && '50%',
            alignItems: 'center',
            aspectRatio: 1,
            backgroundColor: color.green500,
            display: 'flex',
            justifyContent: 'center',
            width: spacing[32],
          },
          transition.all,
          //
        )}
        onClick={() => (isRound.value = !isRound.value)}
      ></button>
      <div>click it</div>
    </>
  )
})
