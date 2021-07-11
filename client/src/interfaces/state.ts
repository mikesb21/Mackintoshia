import { Fungi } from "./fungi";

export interface State {
  currentFungi?: Fungi;
  fungiList: Array<Fungi>;
  loading: boolean;
}
