import { GET_EVENTS } from "./types";
import { ADD_EVENTS } from "./types";
import { DELETE_EVENTS } from "./types";
import axios from "axios";

export const getEvents = () => async (dispatch) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  dispatch({
    type: GET_EVENTS,
    payload: res.data,
  });
};
export const deleteEvents = (id) => async (dispatch) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  dispatch({
    type: DELETE_EVENTS,
    payload: id,
  });
};
export const addEvents = (event) => async (dispatch) => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    event
  );
  dispatch({
    type: ADD_EVENTS,
    payload: res.data,
  });
};
