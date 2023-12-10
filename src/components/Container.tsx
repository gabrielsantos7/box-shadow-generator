import { CSSProperties, useContext, useEffect, useState } from 'react';
import { getStringifiedShadowLayers } from '../helpers';
import { AppContext } from '../context';

export const Container = () => {
  const { state } = useContext(AppContext);
  const [boxShadowStyle, setBoxShadowStyle] = useState<CSSProperties>();

  useEffect(() => {
    const boxShadow = getStringifiedShadowLayers(state.boxShadows);
    const style: CSSProperties = {
      boxShadow: boxShadow,
      WebkitBoxShadow: boxShadow,
      MozBoxShadow: boxShadow,
    };

    setBoxShadowStyle(style);
  }, [state]);

  return (
    <div className='h-full w-full flex flex-col justify-center items-center overflow-auto'>
      <div style={{ ...state.containerProps, ...boxShadowStyle }} />
    </div>
  );
};
