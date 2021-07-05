import {
  ADD_FUNGI,
  SET_CURRENT_FUNGI,
  GET_FUNGI_LIST,
  DELETE_FUNGI,
  UPDATE_FUNGI,
} from "./mutation-types";

import { Fungi, State } from "@/interfaces";

export default {
  [ADD_FUNGI](state: State, fungi: Fungi) {
    state.fungiList.push(fungi);
  },
  [SET_CURRENT_FUNGI](state: State, fungi: Fungi) {
    state.currentFungi = fungi;
  },
  [GET_FUNGI_LIST](state: State, fungiList: Array<Fungi>) {
    state.fungiList = fungiList;
  },
  [DELETE_FUNGI](state: State, fungi: Fungi) {
    console.log("Deleting fungi!");
    const index: number = state.fungiList.findIndex(
      (productItem) => productItem._id === fungi._id
    );
    state.fungiList.splice(index, 1);
  },
  [UPDATE_FUNGI](state: State, newFungi: Fungi) {
    state.currentFungi = { ...state.currentFungi, ...newFungi };
  },
};
