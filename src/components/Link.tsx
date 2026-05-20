import { apply } from 'vicinage'
import { defineComponent, type IntrinsicElementAttributes } from 'vue'

export const Link = defineComponent(function (
  props: IntrinsicElementAttributes['a'],
  context,
) {
  return () => (
    <a
      {...props}
      {...apply({
        borderRadius: '6px',
        paddingBlock: '6px',
        paddingInline: '12px',
        textDecoration: 'none',
        transition: 'box-shadow 0.3s',
        alignItems: 'center',
        backgroundColor: 'var(--social-bg)',
        boxShadow: {
          default: null,
          ':hover': 'var(--shadow)',
        },
        boxSizing: {
          default: 'border-box',
          '@media (width >= 1024px)': 'initial',
        },
        color: 'var(--text-h)',
        columnGap: '8px',
        display: 'flex',
        fontSize: '16px',
        justifyContent: {
          default: 'center',
          '@media (width >= 1024px)': 'initial',
        },
        rowGap: '8px',
        width: {
          default: '100%',
          '@media (width >= 1024px)': 'initial',
        },
      })}
    >
      {context.slots.default?.()}
    </a>
  )
})
