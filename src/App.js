import React, { useState, useReducer } from 'react';
import Routes from './routes';
import Context from './utils/context';
import * as Reducer from './store/hook_state/hook_reducer';
import * as ACTIONS from './store/actions/actions';


import * as UserReducer from './store/hook_state/user_input_reducer';

//main app 
const App = () => {
  const [stateGlobal,setStateGlobal] = useState(0);
  const [stateContextGlobal, dispatchContextGlobal] = useReducer(Reducer.HooksReducer, Reducer.initialState);

  const [userState, userDispatch] = useReducer(UserReducer.UserReducer,UserReducer.initialState)

  const incrementGlobalValue = () => {
    setStateGlobal(stateGlobal + 1)
  }
  const decrementGlobalValue = () => {
      setStateGlobal(stateGlobal - 1)
  }
  const handleContextDispatchTrue = () => {
      dispatchContextGlobal(ACTIONS.success())
  }
  const handleContextDispatchFalse = () => {
      dispatchContextGlobal(ACTIONS.failure())
  }

  const handleuseContextChange = event => {
    userDispatch(ACTIONS.user_input_change(event.target.value))
  }
  const handleuseContextSubmit = event => {
      event.preventDefault();
      event.persist();
      userDispatch(ACTIONS.user_input_submit(event.target.inputContext.value))
  }
    return(
      <div>
        React
        <Context.Provider 
          value={{
            valueGlobalState: stateGlobal,
            addGlobalValue: () => incrementGlobalValue(),
            decGlobalValue: () => decrementGlobalValue(),

            reducerGlobalState: stateContextGlobal.stateprop2,
            dispatchContextTrue: () => handleContextDispatchTrue(),
            dispatchContextFalse: () => handleContextDispatchFalse(),

            userContextChange: userState.user_text_change,
            userContextSubmit: userState.user_text_submit,
            useContextHandleChange: event => handleuseContextChange(event),
            useContextHandleSubmit: event => handleuseContextSubmit(event),

          }}
        >
           <Routes />
        </Context.Provider>
      </div>
    )
}

export default App;
