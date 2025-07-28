import * as constant from "./constant.js";

export const setContentList = (payload) => ({
  type: constant.GET_CONTENT_LIST,
  payload,
});

export const setContentFilterPaid = (payload) => ({
  type: constant.GET_CONTENT_FILTER_PAID,
  payload,
});

export const setContentFilterFree = (payload) => ({
  type: constant.GET_CONTENT_FILTER_FREE,
  payload,
});

export const setContentFilterView = (payload) => ({
  type: constant.GET_CONTENT_FILTER_VIEW,
  payload,
});

export const setContentFilter = (payload) => ({
  type: constant.GET_CONTENT_FILTER,
  payload,
});