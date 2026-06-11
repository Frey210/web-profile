import ReactMarkdown from "react-markdown";

export function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      className="prose-engineering max-w-none"
      components={{
        a: ({ href, children }) => (
          <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
            {children}
          </a>
        )
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
