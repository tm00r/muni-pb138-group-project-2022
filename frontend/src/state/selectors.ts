// Selectors go here
// if you have too many selectors feel free to split them into multiple files based on their purpose

import {selector} from "recoil";
import {itemsListAtom, orderIdAtom, stepsListAtom} from "./atom";

export const orderIdSelector = selector({
  key: "orderIdSelector",
  get: ({get}) => {
    return get(orderIdAtom);
  }
})
export const itemsListSelector = selector({
  key: "itemsListSelector",
  get: ({get}) => {
    return get(itemsListAtom);
  }
})
export const stepsListSelector = selector({
  key: "stepsListSelector",
  get: ({get}) => {
    return get(stepsListAtom);
  }
})
