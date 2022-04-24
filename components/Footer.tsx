import { Facebook, Twitter, Linkedin, GitHub } from 'react-feather'
import Link from 'next/link'

export type FooterProps = {
  facebook: string
  twitter: string
  linkedin: string
  github: string
  authorName?: string
}

const Footer = ({
  facebook,
  twitter,
  linkedin,
  github,
  authorName,
}: FooterProps) => (
  <footer className="pt-20 pb-6">
    <div className="flex items-center justify-center py-2 space-x-3">
      <Link href={facebook && facebook}>
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook
            className="text-social dark:text-socialDark hover:opacity-75"
            size={26}
          />
        </a>
      </Link>
      <Link href={twitter && twitter}>
        <a
          target="_blank"
          aria-label="Twitter"
          rel="noreferrer"
        >
          <Twitter
            className="text-social dark:text-socialDark hover:opacity-75"
            size={26}
          />
        </a>
      </Link>
      <Link href={linkedin && linkedin}>
        <a
          target="_blank"
          aria-label="Linkedin"
          rel="noreferrer"
        >
          <Linkedin
            className="text-social dark:text-socialDark hover:opacity-75"
            size={26}
          />
        </a>
      </Link>
      <Link href={github && github}>
        <a
          target="_blank"
          aria-label="Github"
          rel="noreferrer"
        >
          <GitHub
            className="text-social dark:text-socialDark hover:opacity-75"
            size={26}
          />
        </a>
      </Link>
    </div>
    <p className="text-center text-xs text-textTertiary dark:text-textTertiaryDark">
      Copyright © 2022. {authorName}.
    </p>
  </footer>
)

export default Footer
