import React, { useState, useReducer, useContext } from "react";
import * as ACTIONS from '../store/actions/actions';
import * as UserReducer from '../store/hook_state/user_input_reducer';
import Context from '../utils/context';


const HookForm = () => {
    const [valueChange, setValueChange] = useState('');
    const [valueSubmit, setValueSubmit] = useState('');

    const [userState, userDispatch] = useReducer(UserReducer.UserReducer,UserReducer.initialState)
    
    const context = useContext(Context)
    console.log("context ",context)

    const handleuseStateChange = event => {
        setValueChange(event.target.value);
    }
    const handleuseStateSubmit = event => {
        event.preventDefault();
        setValueSubmit(event.target.inputVal.value);
    }

    const handleuseReducerChange = event => {
        userDispatch(ACTIONS.user_input_change(event.target.value))
    }
    const handleuseReducerSubmit = event => {
        event.preventDefault();
        userDispatch(ACTIONS.user_input_submit(event.target.inputReducer.value))
    }

    return(
      <div>
          Hook Form
          <form onSubmit={handleuseStateSubmit}>
            <label>React useState: </label>
            <input id="inputVal" type="text" onChange={handleuseStateChange} />
            <button type="submit">Submit</button>
          </form>
          <form onSubmit={handleuseReducerSubmit}>
            <label>React useReducer: </label>
            <input id="inputReducer" type="text" onChange={handleuseReducerChange} />
            <button type="submit">Submit</button>
          </form>
          <form onSubmit={context.useContextHandleSubmit}>
            <label>React useContext: </label>
            <input id="inputContext" type="text" onChange={context.useContextHandleChange} />
            <button type="submit">Submit</button>
          </form>
          <h2>React useState: </h2>
          <p>Change: {valueChange}</p>
          <p>Submit: {valueSubmit}</p>
          <br />
          <h2>React useReducer: </h2>
          <p>Change: {userState.user_text_change}</p>
          <p>Submit: {userState.user_text_submit}</p>
          <br />
          <h2>React useContext: </h2>
          <p>Change: {context.userContextChange}</p>
          <p>Submit: {context.userContextSubmit}</p>
      </div>
    )
}

export default HookForm;

