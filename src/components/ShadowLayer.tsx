import React from 'react';
import { BoxShadowProperties } from '../model';

interface ShadowLayerProps {
  index: number,
  layer: BoxShadowProperties
}

export const ShadowLayer = ({index, layer}: ShadowLayerProps) => {
  return <div className='py-5 border-b-2 '>
    {index} + {layer.color}
    <div className='text-right'>
      <button type='button' className='bg-red-500 text-white w-8 p-2 rounded-sm hover:bg-red-600 mt-3'>Delete</button>
    </div>
  </div>;
};
