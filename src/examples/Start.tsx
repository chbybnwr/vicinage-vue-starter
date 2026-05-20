import { atMedia } from 'solarwindcss/at-media.stylex'
import { color } from 'solarwindcss/color.stylex'
import { apply } from 'vicinage'
import { defineComponent } from 'vue'

export const Start = defineComponent(function () {
  return () => (
    <section
      {...apply({
        padding: {
          default: '32px 20px 24px',
          [atMedia.lg]: 'initial',
        },
        gap: {
          default: '18px',
          [atMedia.lg]: '25px',
        },
        placeContent: 'center',
        placeItems: 'center',
        display: 'flex',
        flexDirection: {
          default: 'column',
          [atMedia.lg]: 'row',
        },
      })}
    >
      <div>
        <h1
          {...apply({
            color: color.blue500,
          })}
        >
          Get started
        </h1>
        <p>
          Open <code>src/App.tsx</code>
        </p>{' '}
      </div>
    </section>
  )
})
