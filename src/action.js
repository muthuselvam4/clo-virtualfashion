import * as constant from './constant.js';

export const setContentList = (payload) => ({
  type: constant.GET_CONTENT_LIST,
  payload,
});
