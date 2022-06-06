/* Atoms go here */
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

export const allItemsListAtom = atom<ItemsType[]>({
  key: "allItemsList",
  default: []
})

export const allStepsListAtom = atom<StepsType[]>({
  key: "allStepsList",
  default: []
})
