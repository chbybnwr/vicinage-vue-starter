import { apply, sheet } from 'vicinage'
import { atMedia } from 'solarwindcss/at-media.stylex'
import { Link } from './components/Link'
import { LinkIcon } from './components/LinkIcon'
import { LinkItem } from './components/LinkItem'
import { LinkList } from './components/LinkList'
import { NextStep } from './components/NextStep'
import { Ticks } from './components/Ticks'
import { defineComponent } from 'vue'

export const Layout = defineComponent(function (_props, context) {
  return () => (
    <>
      <div
        {...apply({
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        })}
      >
        {context.slots.default?.()}
      </div>

      <Ticks />

      <section
        {...apply({
          display: 'flex',
          flexDirection: {
            default: 'column',
            [atMedia.lg]: 'initial',
          },
          textAlign: {
            default: 'center',
            [atMedia.lg]: 'left',
          },
          borderTopColor: 'var(--border)',
          borderTopStyle: 'solid',
          borderTopWidth: '1px',
        })}
      >
        <NextStep
          style={sheet({
            borderRightWidth: {
              default: 'none',
              [atMedia.lg]: '1px',
            },
            borderRightStyle: {
              default: 'none',
              [atMedia.lg]: 'solid',
            },
            borderRightColor: {
              default: 'none',
              [atMedia.lg]: 'var(--border)',
            },
            borderBottomWidth: {
              default: '1px',
              [atMedia.lg]: 'none',
            },
            borderBottomStyle: {
              default: 'solid',
              [atMedia.lg]: 'none',
            },
            borderBottomColor: {
              default: 'var(--border)',
              [atMedia.lg]: 'none',
            },
          })}
        >
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <LinkList>
            <LinkItem>
              <Link href="https://github.com/chbybnwr/vicinage" target="_blank">
                <LinkIcon>
                  <use href="/icons.svg#github-icon"></use>
                </LinkIcon>
                Vicinage
              </Link>
            </LinkItem>
            <LinkItem>
              <Link
                href="https://github.com/chbybnwr/solarwindcss"
                target="_blank"
              >
                SolarWind CSS
              </Link>
            </LinkItem>
          </LinkList>
        </NextStep>
        <NextStep>
          <h2>Connect with us</h2>
          <p>Join the community</p>
          <LinkList>
            <LinkItem>
              <Link href="https://github.com/chbybnwr" target="_blank">
                <LinkIcon>
                  <use href="/icons.svg#github-icon"></use>
                </LinkIcon>
                GitHub
              </Link>
            </LinkItem>
            <LinkItem>
              <Link href="https://x.com/chbybnwr" target="_blank">
                <LinkIcon>
                  <use href="/icons.svg#x-icon"></use>
                </LinkIcon>
                X.com
              </Link>
            </LinkItem>
            <LinkItem>
              <Link
                href="https://bsky.app/profile/chbybnwr.bsky.social"
                target="_blank"
              >
                <LinkIcon>
                  <use href="/icons.svg#bluesky-icon"></use>
                </LinkIcon>
                Bluesky
              </Link>
            </LinkItem>
          </LinkList>
        </NextStep>
      </section>
    </>
  )
})
