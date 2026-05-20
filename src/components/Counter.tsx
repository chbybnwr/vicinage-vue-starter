import { textSize } from 'solarwindcss'
import { borderRadius } from 'solarwindcss/border-radius.stylex'
import { boxShadow } from 'solarwindcss/box-shadow.stylex'
import { color } from 'solarwindcss/color.stylex'
import { spacing } from 'solarwindcss/spacing.stylex'
import { theme } from 'solarwindcss/theme.stylex'
import { apply } from 'vicinage'
import { defineComponent, ref } from 'vue'

export const Counter = defineComponent(function () {
  const count = ref(0)

  return () => (
    <button
      type="button"
      onClick={() => (count.value += 1)}
      {...apply(textSize.sm, {
        borderColor: {
          default: 'transparent',
          ':hover': 'var(--accent-border)',
        },
        borderRadius: borderRadius.xl,
        borderStyle: 'solid',
        borderWidth: '2px',
        cornerShape: 'scoop',
        outline: {
          default: null,
          ':focus-visible': '2px solid var(--accent)',
        },
        paddingBlock: spacing[2],
        paddingInline: spacing[4],
        transition: 'border-color 0.3s',
        backgroundColor: 'var(--accent-bg)',
        boxShadow: {
          default: boxShadow.sm,
          ':active': 'none',
        },
        [theme['--sw-box-shadow-color']]: color.purple300,
        color: 'var(--accent)',
        outlineOffset: {
          default: null,
          ':focus-visible': '2px',
        },
        transform: {
          default: null,
          ':active': 'translateY(1px)',
        },
        marginBottom: '24px',
      })}
    >
      Count is {count.value}
    </button>
  )
})
