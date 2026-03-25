import { useEffect, useRef } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-c'
import 'prismjs/themes/prism-tomorrow.css'

export default function CodeBlock({ code, language = 'c', title }) {
  const codeRef = useRef(null)

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [code])

  return (
    <div className="my-4 rounded-lg overflow-hidden border border-gray-700">
      {title && (
        <div className="bg-gray-800 px-4 py-2 text-xs text-gray-400 font-mono border-b border-gray-700 flex items-center justify-between">
          <span>{title}</span>
          <span className="uppercase text-gray-500">{language}</span>
        </div>
      )}
      <pre className="!m-0 !rounded-none !bg-gray-900 p-4 overflow-x-auto">
        <code ref={codeRef} className={`language-${language}`}>
          {code.trim()}
        </code>
      </pre>
    </div>
  )
}
