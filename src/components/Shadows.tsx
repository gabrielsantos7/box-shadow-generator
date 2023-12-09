import React, { useState } from 'react';

export const Shadows = () => {
  const [state, setState] = useState([]);
  return (
    <>
      <h1 className='text-lg font-bold mb-5 text-center'>Box Shadows</h1>

      <div>
        <button className="py-2 rounded-md w-full shadow-sm bg-blue-600 text-white hover:bg-blue-700">
          Nova camada
        </button>
      </div>
    </>
  );
};
