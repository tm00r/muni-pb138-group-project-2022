/* Atoms go here */
import {Song} from "../types";
import {atom} from "recoil";

export const orderIdAtom = atom<String>({
  key: "orderId",
  default: ""
})

export const itemsListAtom = atom<ItemsType[]>({
  key: "itemsList",
  default: []
})

export const stepsListAtom = atom<StepsType[]>({
  key: "stepsList",
  default: []
})
