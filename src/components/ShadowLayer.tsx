import { IBoxShadowProps } from '../model';
import { TrashIcon } from './Icons';
import { ColorPicker } from './ColorPicker';
import { ColorResult } from 'react-color';
import { Slider } from './Slider';
import { ChangeEvent, useContext } from 'react';
import Collapsible from 'react-collapsible';
import { AppContext } from '../context';

interface IShadowLayerProps {
  index: number;
  layer: IBoxShadowProps;
}

export const ShadowLayer = ({ index, layer }: IShadowLayerProps) => {
  const { state, removeLayer, setShadowProperty } = useContext(AppContext);

  const handleColorChange = (colorRes: ColorResult) => {
    const { r, g, b, a } = colorRes.rgb;
    setShadowProperty(layer.id, 'color', `rgba(${r}, ${g}, ${b}, ${a})`);
  };

  const handleSliderChange = (
    key: keyof IBoxShadowProps,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    setShadowProperty(layer.id, key, Number(e.target.value));
  };

  return (
    <div className='py-5 border-b-2'>
      <Collapsible trigger={`Camada ${index + 1}`} open={index == 0}>
        <div className='text-right'>
          <button
            type='button'
            onClick={() => removeLayer(layer.id)}
            className='bg-red-500 text-white w-8 p-2 rounded-sm hover:bg-red-600 mt-3'
            disabled={state.boxShadows.length === 1}
          >
            <TrashIcon />
          </button>
        </div>

        <div className='mt-5'>
          <p className='py-2'>Color</p>
          <ColorPicker color={layer.color} onChange={handleColorChange} />
        </div>

        <Slider
          minValue={-200}
          maxValue={200}
          value={layer.horizontalOffset}
          label='Eixo Horizontal'
          onChange={(e) => handleSliderChange('horizontalOffset', e)}
        />

        <Slider
          minValue={-200}
          maxValue={200}
          value={layer.verticalOffset}
          label='Eixo Vertical'
          onChange={(e) => handleSliderChange('verticalOffset', e)}
        />

        <Slider
          minValue={0}
          maxValue={200}
          value={layer.blurRadius}
          label='Desfoque'
          onChange={(e) => handleSliderChange('blurRadius', e)}
        />

        <Slider
          minValue={0}
          maxValue={200}
          value={layer.spreadRadius}
          label='Propagação'
          onChange={(e) => handleSliderChange('spreadRadius', e)}
        />

        <label className='flex justify-between items-center space-x-2'>
          <span className='text-gray-700'>Inset</span>
          <input
            type='checkbox'
            className='form-checkbox'
            checked={layer.activeInset != null && layer.activeInset !== ''}
            onChange={(e) =>
              setShadowProperty(
                layer.id,
                'activeInset',
                e.target.checked ? 'inset' : '',
              )
            }
          />
        </label>
      </Collapsible>
    </div>
  );
};
