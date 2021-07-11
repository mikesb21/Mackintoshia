import { Fungi, State } from "@/interfaces";
import {
  ADD_FUNGI,
  SET_CURRENT_FUNGI,
  SET_FUNGI_LIST,
  DELETE_FUNGI,
  UPDATE_FUNGI,
  UPDATE_LOADING,
} from "./mutation-types";

export default {
  [ADD_FUNGI](state: State, fungi: Fungi) {
    state.fungiList.push(fungi);
  },
  [SET_CURRENT_FUNGI](state: State, fungi: Fungi) {
    state.currentFungi = fungi;
  },
  [SET_FUNGI_LIST](state: State, fungiList: Array<Fungi>) {
    state.fungiList = fungiList;
  },
  [DELETE_FUNGI](state: State, fungi: Fungi) {
    console.log("Deleting fungi!");
    const index: number = state.fungiList.findIndex(
      // eslint-disable-next-line
      (fungiItem) => fungiItem.id === fungi.id
    );
    // eslint-disable-next-line
    state.fungiList?.splice(index, 1);
  },
  [UPDATE_FUNGI](state: State, newFungi: Fungi) {
    state.currentFungi = { ...state.currentFungi, ...newFungi };
  },
  [UPDATE_LOADING](state: State, loading: boolean) {
    state.loading = loading;
  },
};
