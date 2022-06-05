import React, { useEffect, useState, useLayoutEffect } from 'react';
import useSWR from "swr";
import fetch from 'unfetch'
import axios from "axios";
import { ListItem } from './ListItem';

import '../styles/list.css';
import '../styles/variables.css';

// using union type
type GeneralListType = OrdersType | ItemsType | StepsType;

type OrdersType = {
    id: string;
    name: number;
    isActive: boolean;
    isDone?: boolean;
    isTemplate: boolean;
};

type ItemsType = {
    id: string;
    name: number;
    count: number;
    isEditable: boolean;
};

type StepsType = {
    id: string;
    name: string;
    isDone?: boolean;
    isEditable: boolean;
};


export interface ListProps {
    listType?: "Items" | "Steps" | "Orders";
    listProps: GeneralListType;

    // cropPosition?: string;
    // editable: boolean;
    endPoint?: string;

    // done?: boolean;
    setDone?: any;
}





// // using type guards
// const isComponentA = (props: GeneralType): props is ComponentAType => {
//     // check if the specified property is in the given object
//     return "item1" in props;
// };

// const GeneralComponent = (props: GeneralType) => {
//     if (isComponentA(props)) {
//         return <ComponentA {...props} />;
//     } else {
//         return <ComponentB {...props} />;
//     }
// };


const apiKey = 'http://127.0.0.1:4000/'   // TODO: change to production

export const getData = async (endPoint: string) => {

    const fetcher = async (url: string) => await (
        axios
            .get(url)
            .then((response) => response.data)
            .catch((error) => console.log(error))
    )

    const { data: data, error } = useSWR(URL, fetcher);

    return { data, error };
}

export const List: React.FC<ListProps> = (props) => {

    const { cropPosition, editable, endPoint, listType, done, setDone } = props;

    const URL = `${apiKey}${endPoint}`;

    const [data, setData] = useState();

    useEffect(() => {
        getData(URL).then(({ data }) => {
            setData(data);
        })
    }, [])


    switch (listType) {

        case "Orders":
            return (

                <ul className={['list ', cropPosition ? `list--${cropPosition}` : 'list--main'].join(' ')}>
                    {getData.map((order) => (
                        <ListItem
                            key={order.id}
                            text={order.name}
                            withReducer={false}
                        />
                    ))}
                </ul>
            )

        case "Items":
            const URL = `${apiKey}/order/item/${endPoint}`;
            return (
                <ul className="list list--main">
                    {data && data.map((item: any) => (
                        <ListItem
                            key={data.id}
                            text={data.text}
                            withReducer={editable ? true : false}
                        />
                    ))}
                </ul>
            )

        case "Steps":
            const [count, setCount] = useState(1);
            useLayoutEffect(() => {
                if (count === 3 && !done) {
                    setDone(true);
                }
                if (done && count !== 3) {
                    setDone(false);
                }
            }, [count]);
            return (
                <ul className="list list--main">
                    <ListItem
                        key={item.id}
                        text={item.name}
                        withReducer={withReducer}
                        step={step}
                        count={count}
                        setCount={setCount}
                    />
                </ul>
            )

        default:
            if (error) return (<p>Failed...</p>);
            if (!data) return (<h1>Loading...</h1>);
    }

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
    );
};
