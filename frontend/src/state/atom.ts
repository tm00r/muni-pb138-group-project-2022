/* Atoms go here */
import {atom} from "recoil";

export const orderIdAtom = atom<String>({
  key: "orderId",
  default: ""
})

export const orderNameAtom = atom<string>({
  key: "orderName",
  default: ""
})

export const isTemplateAtom = atom<Boolean>({
  key: "isTemplate",
  default: true
})

export const orderSubmitNameAtom = atom<string>({
  key: "orderSubmitName",
  default: ""
})

export const itemsListAtom = atom<ItemsType[]>({
  key: "itemsList",
  default: [],
  dangerouslyAllowMutability: true,
})

export const stepsListAtom = atom<StepsType[]>({
  key: "stepsList",
  default: []
})

export const allItemsListAtom = atom<ItemsType[]>({
  key: "allItemsList",
  default: [],
  dangerouslyAllowMutability: true,
})

export const allStepsListAtom = atom<StepsType[]>({
  key: "allStepsList",
  default: []
})

export const itemIdAtom = atom<String>({
  key: "itemIdAtom",
  default: ""
})

export const globalStateAtom = atom<GlobaLStateType>({
  key: "globalState",
  default: "New Order"
})


