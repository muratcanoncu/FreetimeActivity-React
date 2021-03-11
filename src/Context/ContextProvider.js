import React, { useReducer, useEffect } from "react";
const UserContext = React.createContext();
const initialState = {
  newActivity: true,
  activity: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ACTIVITY_STORE":
      return {
        ...state,
        activity: action.payload,
      };
    case "NEW_ACTIVITY":
      return {
        ...state,
        newActivity: !state.newActivity,
      };
  }
};
export function ContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity")
      .then((data) => data.json())
      .then((data) => {
        dispatch({
          type: "ACTIVITY_STORE",
          payload: data,
        });
      });
  }, [state.newActivity]);
  return (
    <UserContext.Provider value={{ myState: state, myDispatch: dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
