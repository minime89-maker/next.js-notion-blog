import * as Icon from 'react-feather';
import Link from 'next/link';

export type FooterProps = {
  facebook: string;
  twitter: string;
  linkedin: string;
  github: string;
  authorName?: string;
};

const Footer = ({
  facebook,
  twitter,
  linkedin,
  github,
  authorName,
}: FooterProps) => (
  <footer className="pt-20 pb-6">
    <div className="flex items-center justify-center py-2 space-x-3">
      <Link href={facebook}>
        <a target="_blank" rel="noopener noreferrer">
          <Icon.Facebook
            className="text-social dark:text-socialDark hover:opacity-75"
            size={26}
          />
        </a>
      </Link>
      <Link href={twitter}>
        <a target="_blank" aria-label="Twitter" rel="noreferrer">
          <Icon.Twitter
            className="text-social dark:text-socialDark hover:opacity-75"
            size={26}
          />
        </a>
      </Link>
      <Link href={linkedin}>
        <a target="_blank" aria-label="Linkedin" rel="noreferrer">
          <Icon.Linkedin
            className="text-social dark:text-socialDark hover:opacity-75"
            size={26}
          />
        </a>
      </Link>
      <Link href={github}>
        <a target="_blank" aria-label="Github" rel="noreferrer">
          <Icon.GitHub
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
);

export default Footer;
