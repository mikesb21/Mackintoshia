import { State, Fungi } from "@/interfaces";

export default {
  currentFungi: (state: State): Fungi => state.currentFungi,
  fungiList: (state: State): Array<Fungi> => state.fungiList,
};
