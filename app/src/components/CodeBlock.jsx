import { useEffect, useRef, useState } from 'react'
import hljs from 'highlight.js/lib/core'
import c from 'highlight.js/lib/languages/c'
import cpp from 'highlight.js/lib/languages/cpp'
import bash from 'highlight.js/lib/languages/bash'
import python from 'highlight.js/lib/languages/python'
import makefile from 'highlight.js/lib/languages/makefile'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/github-dark-dimmed.css'

hljs.registerLanguage('c', c)
hljs.registerLanguage('cpp', cpp)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('shell', bash)
hljs.registerLanguage('python', python)
hljs.registerLanguage('makefile', makefile)
hljs.registerLanguage('javascript', javascript)

export default function CodeBlock({ code, language = '', title = '' }) {
  const codeRef = useRef(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.removeAttribute('data-highlighted')
      hljs.highlightElement(codeRef.current)
    }
  }, [code, language])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-4 rounded-lg overflow-hidden border border-surface-200 dark:border-surface-700">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-surface-100 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">
          <span className="text-xs font-medium text-surface-500 dark:text-surface-400">{title}</span>
          <div className="flex items-center gap-2">
            {language && <span className="text-xs text-surface-400 uppercase">{language}</span>}
            <button onClick={handleCopy} className="text-xs text-surface-400 hover:text-surface-600 dark:hover:text-surface-300 transition-colors">
              {copied ? '✓ 已复制' : '复制'}
            </button>
          </div>
        </div>
      )}
      {!title && (
        <div className="flex justify-end px-4 py-1 bg-surface-100 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">
          <button onClick={handleCopy} className="text-xs text-surface-400 hover:text-surface-600 dark:hover:text-surface-300 transition-colors">
            {copied ? '✓ 已复制' : '复制'}
          </button>
        </div>
      )}
      <pre className="!m-0 !rounded-none p-4 bg-[#22272e] overflow-x-auto">
        <code ref={codeRef} className={language ? `language-${language}` : ''}>
          {code}
        </code>
      </pre>
    </div>
  )
}
