import React, { useState, useEffect, useReducer, useContext } from "react";
import * as Reducer from '../store/hook_state/hook_reducer';
import * as ACTIONS from '../store/actions/actions';
import Context from '../utils/context';

const HookContainer = () => {

    const context = useContext(Context);
    

    const [value, setValue] = useState(0);
    const [useEffectValue, setUseEffectValue] = useState(null);
    const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState)

    const incrementValue = () => {
        setValue(value + 1)
    }
    const decrementValue = () => {
        setValue(value - 1)
    }
    const changeUseEffectValue = () => {
        setUseEffectValue('Effect String');
    }
    const handleDispatchTrue = () => {
        dispatch(ACTIONS.success())
    }
    const handleDispatchFalse = () => {
        dispatch(ACTIONS.failure())
    }
    useEffect(() => {
        setTimeout(() => setUseEffectValue("useEffect Worked"))
        //console.log(context)
    },[value])
    return(
      <div>
        React Hook
        <br /><br />
        <button onClick={() => incrementValue()}>Add Local Value</button>
        <button onClick={() => decrementValue()}>Remove Local Value</button>
        <button onClick={() => changeUseEffectValue()}>Change Use Effect</button>
        <button onClick={() => handleDispatchTrue()}>Dispatch True</button>
        <button onClick={() => handleDispatchFalse()}>Dispatch False</button>
        <button onClick={() => context.addGlobalValue()}>Add Global Value</button>
        <button onClick={() => context.decGlobalValue()}>Remove Global Value</button>
        <button onClick={() => context.dispatchContextTrue()}>Dispatch Global True</button>
        <button onClick={() => context.dispatchContextFalse()}>Dispatch Global False</button>
        
        <div>
            {
                useEffectValue ? <p>Use Effect Status: {useEffectValue}</p> : <p>Use Effect Status: No value</p> 
            }
            <p>Local Value: {value}</p>
            
            <br />
            {
                state.stateprop1 ? <p>State Prop 1: TRUE</p> : <p>State Prop 1: FALSE</p> 
            }
            <br />
            <p>Global Value: {context.valueGlobalState}</p>
            <br />
            {
                context.reducerGlobalState ? <p>State Prop 2: TRUE</p> : <p>State Prop 2: FALSE</p> 
            }
        </div>
      </div>
    )
}

export default HookContainer;

