import * as constant from "./constant.js";

const initialState = {
  connectContentList: "",
  connectContentFilterPaid: false,
  connectContentFilterFree: false,
  connectContentFilterView: false,
  connectContentFilter: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.GET_CONTENT_LIST:
      return {
        ...state,
        connectContentList: action.payload,
      };
    case constant.GET_CONTENT_FILTER_PAID:
      return {
        ...state,
        connectContentFilterPaid: action.payload,
      };
    case constant.GET_CONTENT_FILTER_FREE:
      return {
        ...state,
        connectContentFilterFree: action.payload,
      };
    case constant.GET_CONTENT_FILTER_VIEW:
      return {
        ...state,
        connectContentFilterView: action.payload,
      };
    case constant.GET_CONTENT_FILTER:
      return {
        ...state,
        connectContentFilter: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
