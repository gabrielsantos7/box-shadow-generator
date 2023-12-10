/*
  We use the nomenclature of creating interfaces with the
  capital I in the first letter, to identify that it is an
  interface
*/

// Represents the properties of a box shadow
export interface IBoxShadowProps {
  id: string;
  horizontalOffset: number;
  verticalOffset: number;
  blurRadius: number;
  spreadRadius: number;
  color: string;
  activeInset?: '' | 'inset';
}

// Represents the properties of the container element
export interface IContainerProps {
  width: number;
  height: number;
  borderRadious: number;
  backgroundColor: string;
}

// Represents the properties of a container state, including the box shadow and container properties
export interface IBoxShadowState {
  boxShadows: IBoxShadowProps[];
  containerProps: IContainerProps;
}

export interface IAppContext {
  state: IBoxShadowState;
  addNewLayer: () => void;
  removeLayer: (id: string) => void;
  setShadowProperty: (
    id: string,
    shadowKey: keyof IBoxShadowProps,
    value: IBoxShadowProps[keyof IBoxShadowProps],
  ) => void;
  setContainerProperty: <K extends keyof IContainerProps>(
    key: K,
    value: IContainerProps[K],
  ) => void;
}
