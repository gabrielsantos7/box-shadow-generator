import { CSSProperties, useState } from 'react';
import { ChromePicker } from 'react-color';

const popover: CSSProperties = {
  position: 'absolute',
  zIndex: 2,
};

const cover: CSSProperties = {
  position: 'fixed',
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px',
};

interface IColorPickerProps {
  color: string;
  onChange: (colorRes: any) => void;
}

export const ColorPicker = ({ color, onChange }: IColorPickerProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleClose = () => {
    setIsActive(false);
  };

  return (
    <div className='wrapper relative'>
      <button
        onClick={handleClick}
        style={{ backgroundColor: color }}
        className='w-full rounded-sm border-2 border-gray-400 text-black text-sm'
      >
        {color}
      </button>

      {isActive ? (
        <div style={popover}>
          <div style={cover} onClick={handleClose}>
            <ChromePicker color={color} onChange={onChange} />
          </div>
        </div>
      ) : null}
    </div>
  );
};
