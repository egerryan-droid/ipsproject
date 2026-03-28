'use client'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Components } from 'react-markdown'

const components: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-extrabold text-[#1a1a1f] mt-0 mb-6 pb-3 border-b-2 border-[#1B3A6B]">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-bold text-[#1a1a1f] mt-10 mb-4 pb-2 border-b border-gray-100 flex items-center gap-3 before:content-[''] before:block before:w-1 before:h-5 before:bg-[#1B3A6B] before:rounded-full">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-base font-bold text-[#1a1a1f] mt-8 mb-3">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-sm font-bold text-[#1B3A6B] uppercase tracking-wide mt-6 mb-2">{children}</h4>
  ),
  p: ({ children }) => (
    <p className="text-[#1a1a1f] leading-relaxed mb-4 text-[15px]">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="space-y-2 mb-4 ml-0 list-none">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="space-y-2 mb-4 ml-0 list-decimal list-inside">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="flex gap-3 text-[15px] text-[#1a1a1f] leading-relaxed">
      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#1B3A6B] flex-shrink-0" />
      <span>{children}</span>
    </li>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-[#1a1a1f]">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-[#80848f]">{children}</em>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[#1B3A6B] bg-[#e8edf7] px-6 py-4 my-6 rounded-r-xl">
      <div className="text-[#1a1a1f] leading-relaxed italic">{children}</div>
    </blockquote>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-8 rounded-xl border border-gray-100 shadow-sm">
      <table className="w-full text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-[#1a1a1f] text-white">{children}</thead>
  ),
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => (
    <tr className="even:bg-[#f5f5f8] border-b border-gray-100 last:border-0 hover:bg-[#e8edf7] transition-colors">{children}</tr>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide text-white">{children}</th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-[#1a1a1f] text-sm leading-relaxed">{children}</td>
  ),
  hr: () => <hr className="border-gray-100 my-10" />,
  code: ({ className, children }) => {
    const isBlock = className?.includes('language-')
    if (isBlock) {
      return (
        <pre className="bg-[#1a1a1f] text-green-400 rounded-xl p-5 overflow-x-auto my-6 text-sm font-mono leading-relaxed">
          <code>{children}</code>
        </pre>
      )
    }
    return (
      <code className="bg-[#f5f5f8] text-[#1B3A6B] px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
    )
  },
  a: ({ href, children }) => (
    <a href={href} className="text-[#1B3A6B] underline underline-offset-2 hover:text-[#122847] transition-colors">
      {children}
    </a>
  ),
}

export function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
