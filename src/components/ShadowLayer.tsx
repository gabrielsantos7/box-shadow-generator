import { BoxShadowProperties } from '../model';
import { TrashIcon } from './Icons';
import { ColorPicker } from './ColorPicker';
import { ColorResult } from 'react-color';

interface ShadowLayerProps {
  index: number;
  layer: BoxShadowProperties;
}

export const ShadowLayer = ({ index, layer }: ShadowLayerProps) => {

  const handleColorChange = (colorRes: ColorResult) => {
    console.log(colorRes);
  };

  return (
    <div className='py-5 border-b-2 '>
      {index} + {layer.color}
      <div className='text-right'>
        <button
          type='button'
          className='bg-red-500 text-white w-8 p-2 rounded-sm hover:bg-red-600 mt-3'
        >
          <TrashIcon />
        </button>
      </div>
      <div className='mt-5'>
        <p className='py-2'>Color</p>
        <ColorPicker color={layer.color} onChange={handleColorChange} />
      </div>
    </div>
  );
};
