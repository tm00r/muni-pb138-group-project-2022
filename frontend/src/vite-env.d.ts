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

type SubmitStep = {
  orderSequenceNumber: number,
  name: string,
  description: string,
  deadline: Date,
  isFinished: boolean
}
type SubmitItem= {
  name: string,
  count: number
}

type ItemsType = {
  id: string;
  name: string;
  count: number;
};

type StepsType = {
  id: string;
  name: string;
  description: string;
  orderSequenceNumber: number;
  deadline: string;
  isFinished?: boolean;
  isEditable: boolean;
};
