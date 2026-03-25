import { useEffect, useRef } from 'react'
import hljs from 'highlight.js/lib/core'
import c from 'highlight.js/lib/languages/c'
import bash from 'highlight.js/lib/languages/bash'
import makefile from 'highlight.js/lib/languages/makefile'
import 'highlight.js/styles/github-dark-dimmed.css'
import './CodeBlock.css'

hljs.registerLanguage('c', c)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('makefile', makefile)

export default function CodeBlock({ code, language = 'c', title }) {
  const codeRef = useRef(null)

  useEffect(() => {
    if (codeRef.current) {
      delete codeRef.current.dataset.highlighted
      hljs.highlightElement(codeRef.current)
    }
  }, [code, language])

  return (
    <div className="codeblock">
      {title && <div className="codeblock-header">{title}</div>}
      <pre className="codeblock-pre">
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  )
}
