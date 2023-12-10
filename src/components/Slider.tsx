import { ChangeEventHandler } from 'react';

interface ISliderProps {
  minValue: number;
  maxValue: number;
  value: number;
  label: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Slider = ({
  minValue,
  maxValue,
  value,
  label,
  onChange,
}: ISliderProps) => {
  return (
    <div className='my-6'>
      <div className='flex items-center justify-between'>
        <p className='py-1'>{label}</p>
        <p className='text-blue-600 font-medium pr-2'>{value}px</p>
      </div>

      <input
        type='range'
        min={minValue}
        max={maxValue}
        value={value}
        onChange={onChange}
        className='slider bg-gradient-to-r from-blue-300 to-blue-200 rounded-md appearance-none h-3 w-full'
      />
    </div>
  );
};
