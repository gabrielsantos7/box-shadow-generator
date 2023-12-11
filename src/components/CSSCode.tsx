import MEditor from '@monaco-editor/react';
import { editorOptions, getStringifiedShadowLayers } from '../helpers';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import { FileCopy } from './Icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const CSSCode = () => {
  const { state } = useContext(AppContext);
  const [css, setCss] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const boxShadows = getStringifiedShadowLayers(state.boxShadows);

    const timeout = setTimeout(() => {
      const cssStyle = `.container {
    width: ${state.containerProps.width}px;
    height: ${state.containerProps.height}px;
    border-radius: ${state.containerProps.borderRadius}px;
    background-color: ${state.containerProps.backgroundColor};

    box-shadow: ${boxShadows};
    --webkit-box-shadow: ${boxShadows};
    --moz-box-shadow: ${boxShadows};
}`;

      setCss(cssStyle);
    }, 1000);

    return () => clearInterval(timeout);
  }, [state]);

  const handleCopyClick = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div>
      <div className='flex justify-between items-center px-10 py-3 bg-blue-500'>
        <p className='text-white'>Código CSS</p>
        <CopyToClipboard text={css} onCopy={handleCopyClick}>
          <button className='bg-white flex items-center py-1 px-2 rounded-sm active:bg-slate-200'>
            <span className='inline'>
              <FileCopy />
            </span>
            <span className='mx-1'>{copied ? 'Copiado!' : 'Copiar'}</span>
          </button>
        </CopyToClipboard>
      </div>
      <MEditor
        options={{ ...editorOptions }}
        height='30vh'
        language='css'
        theme='vs-dark'
        value={css}
      />
    </div>
  );
};
