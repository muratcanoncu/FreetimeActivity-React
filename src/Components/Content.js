import React, { useContext } from "react";
import UserContext from "../Context/ContextProvider";
function Content() {
  const context = useContext(UserContext);

  const changeHandler = (dispatch) => {
    dispatch({
      type: "NEW_ACTIVITY",
    });
  };
  console.log(context.myState.newActivity);
  return (
    <div className="d-flex flex-column align-items-center">
      <h1
        className="mb-5"
        style={{
          textShadow: "2px 2px grey",
        }}
      >
        {context.myState.activity.activity}
      </h1>
      <p style={{ textShadow: "1px 1px grey", fontWeight: "bolder" }}>
        Type: {context.myState.activity.type}
      </p>
      <p style={{ textShadow: "1px 1px grey", fontWeight: "bolder" }}>
        Price: {context.myState.activity.price} €
      </p>
      <button
        className="btn-primary py-1 px-4 font-weight-bolder"
        onClick={() => changeHandler(context.myDispatch)}
      >
        Another One
      </button>
    </div>
  );
}

export default Content;
