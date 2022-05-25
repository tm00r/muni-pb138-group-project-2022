import React from 'react';

import '../styles/reducer.css';
import '../styles/variables.css';
import { Button } from './Button';

interface ReducerProps {
    initialCount: number;
}

interface ReducerState {
    count: number;
}

interface ActionType {
    type: 'increment' | 'decrement'
}


const reducer = (state: ReducerState, action: ActionType)  => {
    if ( state.count === 1 && action.type === 'decrement') {
        return state;
    };
    switch (action.type) {
        case 'increment':
            return {
                count: state.count + 1
            };
        case 'decrement':
            return {
                count: state.count - 1
            };
        default:
            throw new Error();
    }
}

export const Reducer: React.FC<ReducerProps> = (props) => {

    const { initialCount } = props;

    const [state, setCount] = React.useReducer(reducer,  {count: initialCount});

    return (
        <div className="list-item__reducer">
            <Button
                size="small"
                color="gray"
                label="-"
                eventProp={() => setCount({ type: 'decrement' })}
            >
                <span>-</span>
            </Button>
            <span className=''>{state.count}</span>
            <Button
                size="small"
                color="gray"
                label="+"
                eventProp={() => setCount({ type: 'increment' })}
            >
                <span>+</span>
            </Button>
        </div>
    );
};
