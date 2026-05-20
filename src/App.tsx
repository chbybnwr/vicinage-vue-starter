/* eslint-disable @typescript-eslint/no-explicit-any */

import { apply } from 'vicinage'
import { computed, defineComponent, ref } from 'vue'
import { Layout } from './Layout'
import { Start } from './examples/Start'
import { Hello } from './examples/Hello'
import { Pseudo } from './examples/Pseudo'
import { color } from 'solarwindcss/color.stylex'
import { spacing } from 'solarwindcss/spacing.stylex'
import { Logical } from './examples/Logical'
import { Dynamic } from './examples/Dynamic'
import { Responsive } from './examples/Responsive'

const examples: Record<string, any> = {
  Start,
  Hello,
  Responsive,
  Pseudo,
  Logical,
  Dynamic,
}

export const App = defineComponent(function () {
  const selectedExample = ref('Start')
  const Example = computed(() => examples[selectedExample.value])

  return () => (
    <Layout>
      <div
        {...apply({
          gap: spacing[8],
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'center',
        })}
      >
        <Example.value />
      </div>
      <div
        {...apply({
          paddingBlock: spacing[2],
          display: 'flex',
          justifyContent: 'space-around',
        })}
      >
        {Object.keys(examples).map((key) => (
          <button
            onClick={() => (selectedExample.value = key)}
            {...apply({
              textDecoration: selectedExample.value === key && 'underline',
              color: selectedExample.value === key && color.blue500,
              display: {
                default: () => (key === 'Responsive' ? 'none' : null),
                '@media (width >= 1280px)': 'block',
              },
            })}
          >
            {key}
          </button>
        ))}
      </div>
    </Layout>
  )
})
