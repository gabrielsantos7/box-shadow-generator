import { ChangeEvent, useContext } from 'react';
import { ColorPicker } from './ColorPicker';
import { AppContext } from '../context';
import { ColorResult } from 'react-color';
import { IContainerProps } from '../model';
import { Slider } from './Slider';

export const ContainerProperties = () => {
  const { state, setContainerProperty } = useContext(AppContext);
  const { containerProps } = state;

  const handleColorChange = (colorRes: ColorResult) => {
    const { hex } = colorRes;
    setContainerProperty('backgroundColor', hex);
  };

  const handleSliderChange = (
    key: keyof IContainerProps,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    setContainerProperty(key, Number(e.target.value));
  };

  return (
    <>
      <h1 className='text-lg font-bold mb-x text-center'>
        Propriedades do Container
      </h1>

      <div>
        <div>
          <p className='py-2'>Cor de fundo</p>
          <ColorPicker
            color={containerProps.backgroundColor}
            onChange={handleColorChange}
          />
        </div>

        <Slider
          minValue={10}
          maxValue={350}
          value={containerProps.width}
          label='Largura'
          onChange={(e) => handleSliderChange('width', e)}
        />

        <Slider
          minValue={10}
          maxValue={350}
          value={containerProps.height}
          label='Altura'
          onChange={(e) => handleSliderChange('height', e)}
        />

        <Slider
          minValue={0}
          maxValue={300}
          value={containerProps.borderRadius}
          label='Border Radius'
          onChange={(e) => handleSliderChange('borderRadius', e)}
        />
      </div>
    </>
  );
};
