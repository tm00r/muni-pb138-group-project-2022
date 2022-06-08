import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isTemplateAtom, reducerValue } from '../state/atom';
import { useForm } from "react-hook-form";

import { Button } from './Button';

import '../styles/reducer.css';
import '../styles/variables.css';

interface ReducerProps {
    initialCount: number;
}

interface ReducerState {
    count: number;
}

interface ActionType {
    type: 'increment' | 'decrement'
}


const reducer = (state: ReducerState, action: ActionType) => {
    switch (action.type) {
        case 'increment':
            if (state.count === 999) {
                return state;
            }
            return {
                count: state.count + 1
            };
        case 'decrement':
            if (state.count === 1) {
                return state;
            };
            return {
                count: state.count - 1
            };
        default:
            throw new Error();
    }
}

export const Reducer: React.FC<ReducerProps> = (props) => {

    const { initialCount } = props;

    const isTemplate = useRecoilValue(isTemplateAtom)
    const setValueFromReducer = useSetRecoilState(reducerValue);

    const { register } = useForm();

    const [state, setCount] = React.useReducer(reducer, { count: initialCount });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueFromReducer(e.target.value)
    }

    return (
        <div className="list-item__mode--reducer">
            <div className="reducer">
                {isTemplate &&
                    <Button
                        size="small"
                        color="gray"
                        label="+"
                        eventProp={() => setCount({ type: 'increment' })}
                    />
                }
                <form key={state.count}>
                    <input
                        type="number"
                        className="reducer__text"
                        min="1" max="999"
                        {...register("reducer", {
                            min: 1,
                            max: 999
                        })}
                        onChange={e => handleChange(e)}
                        value={state.count}

                    />
                </form>
                {isTemplate &&
                    <Button
                        size="small"
                        color="gray"
                        label="-"
                        eventProp={() => setCount({ type: 'decrement' })}
                    />
                }
            </div>
        </div>
    );
};
