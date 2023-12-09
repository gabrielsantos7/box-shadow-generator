import { useState } from 'react';
import { ShadowLayer } from './ShadowLayer';
import { BoxShadowProperties } from '../model';
import {v4 as uid} from 'uuid';

export const Shadows = () => {
  const [state, setState] = useState<BoxShadowProperties[]>([
    {
      id: uid(),
      horizontalOffset: 0,
      verticalOffset: 0,
      blurRadius: 0,
      spreadRadius: -5,
      color: 'rgba(0, 0, 0, 0.1)',
      activeInset: '',
    },
  ]);
  return (
    <>
      <h1 className='text-lg font-bold mb-5 text-center'>Box Shadows</h1>

      <div>
        <button className='py-2 rounded-md w-full shadow-sm bg-blue-600 text-white hover:bg-blue-700'>
          Nova camada
        </button>
      </div>

      <div>
        {state.map((shadowLayer, index) => (
          <ShadowLayer key={shadowLayer.id} index={index} layer={shadowLayer} />
        ))}
      </div>
    </>
  );
};
