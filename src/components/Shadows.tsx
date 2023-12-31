import { useContext } from 'react';
import { ShadowLayer } from './ShadowLayer';
import { AppContext } from '../context';

export const Shadows = () => {
  const { state, addNewLayer } = useContext(AppContext);

  return (
    <>
      <h1 className='text-lg font-bold mb-5 text-center'>Box Shadows</h1>

      <div>
        <button
          onClick={addNewLayer}
          className='py-2 rounded-md w-full shadow-sm bg-blue-600 text-white hover:bg-blue-700'
        >
          Nova camada
        </button>
      </div>

      <div>
        {state.boxShadows.map((shadowLayer, index) => (
          <ShadowLayer key={shadowLayer.id} index={index} layer={shadowLayer} />
        ))}
      </div>
    </>
  );
};
