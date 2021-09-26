import React from "react";

const inititalState = {
  count: 1,
};

type State = typeof inititalState;
type Action = {
  type: "COUNT_CHANGE";
  payload: number;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "COUNT_CHANGE":
      return { ...state, count: action.payload };
    default:
      throw new Error("");
  }
};

const StoreContext = React.createContext({
  state: inititalState,
  dispatch: (action: Action) => {},
});
StoreContext.displayName = "StoreContext";

export const StoreProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(reducer, inititalState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
