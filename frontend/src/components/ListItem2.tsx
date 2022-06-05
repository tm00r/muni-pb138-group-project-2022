import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Reducer } from './Reducer';


import '../styles/listitem.css';
import '../styles/variables.css';


// using union type



// interface ListItemProps {
//   text: string;
//   withReducer: boolean;
//   step?: boolean;
//   count?: number;
//   setCount?: any;
// }

interface ListItemProps {
  listProps: GeneralListItemType;
  listType: "Items" | "Steps" | "Orders";
}

export const ListItem2: React.FC<ListItemProps> = (props) => {

  // const { text, withReducer, step, count, setCount } = props;

  const { listProps, listType } = props;





  const [checked, setChecked] = useState(false)
  const handleClick = () => { setChecked(!checked) }

  // useLayoutEffect(() => {
  //   if (count !== undefined && checked === true) {
  //     setCount(() => count + 1);
  //   }
  //   if (count !== undefined && checked === false) {
  //     setCount(() => count - 1);
  //   }
  // }, [checked]);




  switch (listType) {
    case 'Orders':
      const propOrders = listProps as OrdersType;
      return (
        <li className={'list-item'}>
          <a
            className='list-item__link link'
            href="/template/1"
          >
            {propOrders.name}
          </a>
        </li >
      )
    case 'Items':
      const propItems = listProps as ItemsType;
      return (
        <li className={'list-item'}>
          <a
            className='list-item__link link'
            href="/template/1"
          >
            {propItems.name}
          </a>
          <Reducer initialCount={propItems.count} />
        </li >
      )
    case 'Steps':
      const propSteps = listProps as StepsType;
      return (
        <li className={'list-item'}>
          <a
            className='list-item__link link'
            href="/template/1"
          >
            {propSteps.name}
          </a>
          <form>
            <input type="datetime-local" value={propSteps.deadline} readOnly />
            <input className="checkbox" onClick={handleClick} checked={propSteps.isFinished} type="checkbox" />
          </form>
        </li >
      )
  }





  // return (
  //   <li className={'list-item'}>
  //     <a
  //       className='list-item__link link'
  //       href="/template/1"
  //     >
  //       {text}
  //     </a>
  //     {withReducer && (<Reducer initialCount={16} />)}
  //     {step && (
  //       <input className="checkbox" onClick={handleClick} checked={checked} type="checkbox" />
  //     )}
  //   </li >
  // );
};

