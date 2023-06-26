import React, { useState } from 'react';
import './CodeSnippet.css'

const CodeSnippet = ({ accountId, websiteId }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyCode = () => {
    const codeToCopy = `<script src="http://localhost:3000/itc.js" data-account-id="${accountId}" 
            data-website-id="${websiteId}" ></script>`;

    navigator.clipboard.writeText(codeToCopy)
      .then(() => {
        setIsCopied(true);
      })
      .catch((error) => {
        console.error('Failed to copy code:', error);
      });
  };

  return (
    <div>
      <pre className='code-holder'>
        
        <code className='code'>
          {`<script 
                src="http://localhost:3000/itc.js"
                data-account-id="${accountId}" 
                data-website-id="${websiteId}"
            ></script>`}
        </code>
      </pre>
      <button className='btn btn-sm code-btn btn-secondary' onClick={handleCopyCode} disabled={isCopied}>
        {isCopied ? 'Code Copied!' : 'Copy Code'}
      </button>
    </div>
  );
};

export default CodeSnippet;
