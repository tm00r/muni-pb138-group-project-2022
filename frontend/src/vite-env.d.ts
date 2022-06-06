/// <reference types="vite/client" />

type GeneralListItemType = OrdersType | ItemsType | StepsType

type OrdersType = {
  id: string;
  name: string;
  isActive: boolean;
  isFinished?: boolean;
  isTemplate: boolean;
};

type SubmitOrder = {
  orderBy: string,
  name: string,
  steps: SubmitStep[],
  items: SubmitItem[],
  isFinished: Boolean
  isTemplate: Boolean
  createdAt: Date
}

type SubmitStep = {}
type SubmitItem= {}

type ItemsType = {
  id: string;
  name: string;
  count: number;
  isEditable: boolean;
};

type StepsType = {
  id: string;
  name: string;
  description: string;
  sequenceNumber: number;
  deadline: string;
  isFinished?: boolean;
  isEditable: boolean;
};
