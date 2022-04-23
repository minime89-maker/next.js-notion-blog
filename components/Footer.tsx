import * as Icon from 'react-feather';
import React from 'react';

export type FooterProps = {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
  authorName?: string;
};

const Footer = ({
  facebook,
  twitter,
  linkedin,
  github,
  authorName,
}: FooterProps) => {
  return (
    <footer className="pt-20 pb-6">
      <div className="flex items-center justify-center py-2 space-x-3">
        <a
          href={facebook}
          target="_blank"
          aria-label="Facebook"
          rel="noreferrer"
        >
          <Icon.Facebook
            className="text-social dark:text-socialDark hover:opacity-75"
            size={26}
          />
        </a>
        <a href={twitter} target="_blank" aria-label="Twitter" rel="noreferrer">
          <Icon.Twitter
            className="text-social dark:text-socialDark hover:opacity-75"
            size={26}
          />
        </a>
        <a
          href={linkedin}
          target="_blank"
          aria-label="Linkedin"
          rel="noreferrer"
        >
          <Icon.Linkedin
            className="text-social dark:text-socialDark hover:opacity-75"
            size={26}
          />
        </a>
        <a href={github} target="_blank" aria-label="Github" rel="noreferrer">
          <Icon.GitHub
            className="text-social dark:text-socialDark hover:opacity-75"
            size={26}
          />
        </a>
      </div>
      <p className="text-center text-xs text-textTertiary dark:text-textTertiaryDark">
        Copyright © 2021. {authorName}.
      </p>
    </footer>
  );
};

export default Footer;
