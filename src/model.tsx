/*
  We use the nomenclature of creating interfaces with the
  capital I in the first letter, to identify that it is an
  interface
*/

export interface IBoxShadowProperties {
  id: string;
  horizontalOffset: number;
  verticalOffset: number;
  blurRadius: number;
  spreadRadius: number;
  color: string;
  activeInset?: '' | 'inset';
}
