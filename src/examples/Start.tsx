import { color } from 'solarwindcss/color.stylex'
import { apply } from 'vicinage'
import { defineComponent } from 'vue'

export const Start = defineComponent(function () {
  return () => (
    <section
      {...apply({
        gap: '18px',
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
        </p>
      </div>
    </section>
  )
})
