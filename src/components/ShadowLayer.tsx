import { IBoxShadowProps } from '../model';
import { TrashIcon } from './Icons';
import { ColorPicker } from './ColorPicker';
import { ColorResult } from 'react-color';
import { Slider } from './Slider';
import { ChangeEvent } from 'react';
import Collapsible from 'react-collapsible';

interface IShadowLayerProps {
  index: number;
  layer: IBoxShadowProps;
}

export const ShadowLayer = ({ index, layer }: IShadowLayerProps) => {
  const handleColorChange = (colorRes: ColorResult) => {
    console.log(colorRes);
  };

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(`Slide changed: ${e}`);
  };

  return (
    <div className='py-5 border-b-2 '>
      <Collapsible trigger={`Camada ${index + 1}`} open={index == 0}>
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
        <div>
          <Slider
            minValue={-200}
            maxValue={200}
            value={layer.horizontalOffset}
            label='Horizontal Length'
            onChange={(e) => handleSliderChange(e)}
          />

          <Slider
            minValue={-200}
            maxValue={200}
            value={layer.verticalOffset}
            label='Vertical Length'
            onChange={(e) => handleSliderChange(e)}
          />

          <Slider
            minValue={0}
            maxValue={200}
            value={layer.blurRadius}
            label='Blur Radius'
            onChange={(e) => handleSliderChange(e)}
          />

          <Slider
            minValue={0}
            maxValue={200}
            value={layer.spreadRadius}
            label='Spread Radius'
            onChange={(e) => handleSliderChange(e)}
          />

          <div className='flex justify-between items-center space-x-2'>
            <label htmlFor='check-inset' className='text-gray-700'>
              Inset
            </label>
            <input type='checkbox' className='form-checkbox' id='check-inset' />
          </div>
        </div>
      </Collapsible>
    </div>
  );
};
