import React, { useEffect, useState, useLayoutEffect } from 'react';
import useSWR from "swr";
import axios from "axios";
import { ListItem } from './ListItem';
import { ListItem2 } from './ListItem2';

import '../styles/list.css';
import '../styles/variables.css';


// // using union type
// type GeneralListType = OrdersType | ItemsType | StepsType

// type OrdersType = {
//     id: string;
//     name: string;
//     isActive: boolean;
//     isFinished?: boolean;
//     isTemplate: boolean;
// };

// type ItemsType = {
//     id: string;
//     name: string;
//     count: number;
// };

// type StepsType = {
//     id: string;
//     name: string;
//     description: string;
//     sequenceNumber: number;
//     deadline: string;
//     isFinished?: boolean;
// };


export interface ListProps {
    listType: "Items" | "Steps" | "Orders";
    isEditable: boolean;
    endPointId: string;

    // listProps: Array<GeneralListType>;

    // cropPosition?: string;
    // editable: boolean;
    // done?: boolean;
    // setDone?: any;
}


export const List: React.FC<ListProps> = (props) => {

    const { listType, endPointId } = props;


    const apiKey = 'http://127.0.0.1:4000/'   // TODO: change to production
    const URL = `${apiKey}${endPointId}`;
    const fetcher = async (url: string) => await (
        axios
            .get(url)
            .then((response) => response.data)
            .catch((error) => console.log(error))
    )
    const { data: data, error } = useSWR(URL, fetcher);



    return (
        <ul className={['list ', listType ? `list--${listType.toLowerCase()}` : 'list--template'].join(' ')}>
            {
                data.map((arg) => (
                    <ListItem2 key={arg.id}
                        listType={listType}
                        listProps={arg}
                    />
                ))
            }
        </ul>
    )

};


    // switch (listType) {

    //     case "Orders":
    //         return (
    //             {
    //                 getData.map((order) => (
    //                     <ul className={['list ', cropPosition ? `list--${cropPosition}` : 'list--main'].join(' ')}>

    //                         <ListItem
    //                             key={order.id}
    //                             text={order.name}
    //                             withReducer={false}
    //                         />

    //                     </ul>
    //                 ))
    //             }
    //         )

    //     case "Items":
    //         const URL = `${apiKey}/order/item/${endPoint}`;
    //         return (
    //             <ul className="list list--main">
    //                 {data && data.map((item: any) => (
    //                     <ListItem
    //                         key={data.id}
    //                         text={data.text}
    //                         withReducer={editable ? true : false}
    //                     />
    //                 ))}
    //             </ul>
    //         )

    //     case "Steps":
    //         const [count, setCount] = useState(1);
    //         useLayoutEffect(() => {
    //             if (count === 3 && !done) {
    //                 setDone(true);
    //             }
    //             if (done && count !== 3) {
    //                 setDone(false);
    //             }
    //         }, [count]);
    //         return (
    //             <ul className="list list--main">
    //                 <ListItem
    //                     key={item.id}
    //                     text={item.name}
    //                     withReducer={withReducer}
    //                     step={step}
    //                     count={count}
    //                     setCount={setCount}
    //                 />
    //             </ul>
    //         )

    //     default:
    //         if (error) return (<p>Failed...</p>);
    //         if (!data) return (<h1>Loading...</h1>);
    // }

    // return (

    //     {
    //         orders.data.map((item: any) => {
    //             return (
    //                 <>
    //                     {

    //                     }

    //                     {
    //                         !step &&
    //                         <ListItem
    //                             key={item.id}
    //                             text={item.name}
    //                             withReducer={withReducer}
    //                         />
    //                     }

    //                     {
    //                         step && <ListItem
    //                             key={item.id}
    //                             text={item.name}
    //                             withReducer={withReducer}
    //                             step={step}
    //                             count={count}
    //                             setCount={setCount} />
    //                     }

    //                 </>
    //             );
    //         })
    //     }
    //     </ul >
    // );