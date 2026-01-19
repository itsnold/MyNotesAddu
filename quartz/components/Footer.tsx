import { QuartzComponent, QuartzComponentConstructor } from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
}

export default ((_opts?: Options) => {
  const Footer: QuartzComponent = () => {
    return null
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
