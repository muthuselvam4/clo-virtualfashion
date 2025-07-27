import * as constant from "./constant.js";

const initialState = {
  connectContentList: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.GET_CONTENT_LIST:
      return {
        ...state,
        connectContentList: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
