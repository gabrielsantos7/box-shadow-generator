import { ReactNode, createContext, useState } from 'react';
import {
  IAppContext,
  IBoxShadowProps,
  IBoxShadowState,
  IContainerProps,
} from './model';
import { v4 as uid } from 'uuid';

export const AppContext = createContext<IAppContext>(null as any);

const defaultBoxShadowProps: IBoxShadowProps = {
  id: uid(),
  horizontalOffset: 0,
  verticalOffset: 5,
  blurRadius: 10,
  spreadRadius: -5,
  color: 'rgba(0,0,0,0.1)',
  activeInset: '',
};

const defaultContainerProps: IContainerProps = {
  width: 200,
  height: 200,
  borderRadious: 0,
  backgroundColor: '#FFFFFF',
};

const initialState: IBoxShadowState = {
  boxShadows: [{ ...defaultBoxShadowProps }],
  containerProps: { ...defaultContainerProps },
};

interface IContextProviderProps {
  children: ReactNode;
}

export function ContextProvider({ children }: IContextProviderProps) {
  const [state, setState] = useState(initialState);

  const addNewLayer = (): void => {
    setState((prevState) => ({
      ...prevState,
      boxShadows: [...prevState.boxShadows, { ...defaultBoxShadowProps }],
    }));
  };

  const removeLayer = (id: string): void => {
    setState((prevState) => ({
      ...prevState,
      boxShadows: prevState.boxShadows.filter(
        (shadowLayer) => shadowLayer.id !== prevState.boxShadows[0].id,
      ),
    }));
  };

  const setShadowProperty = <K extends keyof IBoxShadowProps>(
    id: string,
    shadowKey: K,
    value: IBoxShadowProps[K],
  ): void => {
    const boxShadows = [...state.boxShadows];
    const index = boxShadows.findIndex((shadowLayer) => shadowLayer.id === id);

    if(index > -1) {
      boxShadows[index][shadowKey] = value;

      setState(prevState => ({
        ...prevState,
        boxShadows: [...boxShadows]
      }))
    }
  };

  const setContainerProperty = <K extends keyof IContainerProps>(
    key: K,
    value: IContainerProps[K]
  ): void => {
    setState(prevState => ({
      ...prevState,
      containerProps: {...prevState.containerProps, [key]:value }
    }))
  };

  return (
    <AppContext.Provider
      value={{
        state,
        addNewLayer,
        removeLayer,
        setShadowProperty,
        setContainerProperty,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
