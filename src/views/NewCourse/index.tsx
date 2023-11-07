/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from 'react';
import Markdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
type MarkComponentProps = {
  value: any;
  language: any;
};
export const NewCoursePage = () => {
  const [markdownInput, setMarkdownInput] = useState<string>();

  return (
    <>
      <div>
        <textarea
          autoFocus
          className='textarea'
          value={markdownInput}
          onChange={(e) => setMarkdownInput(e.target.value)}
        />
      </div>

      <Markdown
        children={markdownInput}
        components={{
          // @ts-ignore
          code: MarkComponent,
        }}
      />
    </>
  );
};

const MarkComponent: FC<MarkComponentProps> = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language ?? null} style={docco}>
      {value ?? ''}
    </SyntaxHighlighter>
  );
};
