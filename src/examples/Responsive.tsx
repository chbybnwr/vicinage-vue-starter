import type { StyleXStyles } from '@stylexjs/stylex'
import { color } from 'solarwindcss/color.stylex'
import { spacing } from 'solarwindcss/spacing.stylex'
import { apply, sheet } from 'vicinage'
import { defineComponent } from 'vue'

export const Responsive = defineComponent(function () {
  return () => (
    <div
      {...apply({
        alignItems: 'center',
        display: 'flex',
      })}
    >
      <div
        {...apply({
          containerType: 'inline-size',
          width: '640px',
        })}
      >
        <TrafficLight />
      </div>
      <div
        {...apply({
          containerType: 'inline-size',
          width: '320px',
        })}
      >
        <TrafficLight />
      </div>
    </div>
  )
})

const TrafficLight = defineComponent(function () {
  return () => (
    <div
      {...apply({
        columnGap: spacing[4],
        display: 'grid',
        gridTemplateColumns: {
          default: 'minmax(0, 128px)',
          '@container (width >= 640px)': 'repeat(3, minmax(0, 128px))',
        },
        rowGap: spacing[4],
      })}
    >
      <Light style={sheet({ backgroundColor: color.red500 })} />
      <Light style={sheet({ backgroundColor: color.yellow500 })} />
      <Light style={sheet({ backgroundColor: color.green500 })} />
    </div>
  )
})

const Light = defineComponent(
  function (props: {
    style?: StyleXStyles<{
      backgroundColor: string
    }>
  }) {
    return () => (
      <div
        {...apply(
          {
            borderRadius: '100%',
            aspectRatio: 1,
            backgroundColor: 'white',
          },
          props.style,
        )}
      ></div>
    )
  },
  {
    props: ['style'],
  },
)
