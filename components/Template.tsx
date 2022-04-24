import Prism from 'prismjs'
import React, { useEffect } from 'react'

export type HeaderProps = {
  children: JSX.Element | JSX.Element[]
}

// @ts-ignore
export const Text = ({ text }) => {
  {
    !text && null
  }
  return (
    text &&
    // @ts-ignore
    text.map((value, id) => {
      const {
        annotations: { bold, italic, underline, strikethrough, code, color },
        text,
      } = value
      return (
        <span
          key={id}
          className={[
            'text-md leading-relax text-textSecondary dark:text-textSecondaryDark',
            bold ? 'font-bold' : '',
            italic ? 'italic' : '',
            underline ? 'underline' : '',
            strikethrough ? 'line-through' : '',
            code
              ? 'bg-gray-200 py-1 px-2 rounded-sm text-sm font-mono dark:text-textSecondary '
              : '',
          ].join(' ')}
          style={color !== 'default' ? { color } : {}}
        >
          {text.link ? (
            <a
              href={text.link.url}
              target="_blank"
              rel="noreferrer"
              className="underline text-social dark:text-socialDark hover:opacity-60"
            >
              {text.content}
            </a>
          ) : (
            text.content
          )}
        </span>
      )
    })
  )
}

// Header components
export const Heading_1 = ({ children }: HeaderProps) => {
  return (
    <h1 className="text-4xl mb-4 font-semibold text-textPrimary dark:text-textPrimaryDark">
      <br />
      {children}
    </h1>
  )
}

export const Heading_2 = ({ children }: HeaderProps) => {
  return (
    <h2 className="text-3xl mb-4 font-semibold text-textPrimary dark:text-textPrimaryDark">
      <br />
      {children}
    </h2>
  )
}

export const Heading_3 = ({ children }: HeaderProps) => {
  return (
    <h3 className="text-2xl mb-4 font-semibold text-textPrimary dark:text-textPrimaryDark">
      <br />
      {children}
    </h3>
  )
}

// Callout component
export const Callout = ({ children }: HeaderProps) => {
  return (
    <div className="bg-gray-200 dark:bg-calloutDark w-full p-4 rounded">
      {children}
    </div>
  )
}

// Divider component
export const Divider = () => {
  return <hr className="mt-4 text-gray-300 dark:text-gray-500" />
}

// Code component
export const Code = ({
  children,
  language,
}: {
  children: JSX.Element | JSX.Element[]
  language: string
}) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <pre className="rounded">
      <code className={`language-${language}`}>{children}</code>
    </pre>
  )
}
