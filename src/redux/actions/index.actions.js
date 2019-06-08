import { createAction } from "redux-actions";

export const TEST_ACTION = "TEST_ACTION";
export const SET_TEXT = "SET_TEXT";
export const SET_TITLE = "SET_TITLE";

export const setTitle = createAction(SET_TITLE);
// export const setTitle = payload => {
//   return {
//     type: SET_TITLE,
//     payload
//   };
// };

export const setText = createAction(SET_TEXT);
