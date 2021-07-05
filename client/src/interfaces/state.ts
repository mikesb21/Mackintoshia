import { Fungi } from "./fungi";

export interface State {
  fungiList: Array<Fungi>;
  currentFungi: Fungi;
  loading: boolean;
}
