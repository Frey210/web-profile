import ReactMarkdown from "react-markdown";

export function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      className="prose-engineering max-w-none"
      components={{
        h1: ({ children }) => <h3>{children}</h3>,
        h2: ({ children }) => <h3>{children}</h3>,
        h3: ({ children }) => <h4 className="mt-5 font-display text-base font-bold text-white">{children}</h4>,
        table: ({ children }) => <div className="overflow-x-auto"><table>{children}</table></div>,
        a: ({ href, children }) => (
          <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noreferrer" : undefined}>
            {children}
          </a>
        )
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
