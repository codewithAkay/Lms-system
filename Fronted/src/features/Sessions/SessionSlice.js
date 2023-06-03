import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../helpers/api";

export const addAsyncSession = createAsyncThunk(
  "session/addAsyncSession",
  async (payload) => {
    console.log(payload)
    const response = await axios.put(baseUrl + "/availableTime", payload);
    console.log(response)
    return response.data;
  }
);

export const deleteAsyncSession = createAsyncThunk(
  "session/deleteAsyncSession",
  async (payload) => {
    // console.log(payload)
    const response = await axios.patch(baseUrl + "/availableTime/"+payload.id, payload.data);
    console.log(response)
    return response.data;
  }
);

export const updateAsyncSession = createAsyncThunk(
  "session/updateAsyncSession",
  async (payload) => {
    // console.log(payload)
    const response = await axios.patch(baseUrl + "/availableTime/update/"+payload.id, payload.data);
    console.log(response)
    return response.data;
  }
);

export const getAsyncSessionByUser = createAsyncThunk(
  "session/getAsyncSessionByUser",
  async (payload) => {
    console.log(payload)
    const response = await axios.get(`${baseUrl}/availableTime/${payload.id}?year=${payload.year}`);
    console.log(response)
    return response.data;
  }
);


export const getAsyncSessionByDate = createAsyncThunk(
  "session/getAsyncSessionByDate",
  async (payload) => {
    console.log(payload)
    const response = await axios.get(`${baseUrl}/availableTime/date/${payload.id}?year=${payload.year}&month=${payload.month}&date=${payload.date}`);
    console.log(response)
    return response.data;
  }
);


const initialState = {
  session: {},
  sessionsByUser:[],
  deleteSession: {},
  updateSession:{},
  SessionByDate: {},
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {},
  extraReducers: {
    [getAsyncSessionByUser.pending]: () => {
      console.log("session is loading");
    },
    [addAsyncSession.fulfilled]: (state, { payload }) => {
      console.log("add successfully");
      return { ...state, session: payload };
    },
    [getAsyncSessionByDate.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, sessionsByDate: payload };
    },
    [getAsyncSessionByUser.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, sessionsByUser: payload };
    },
    [deleteAsyncSession.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, deleteSession: payload };
    },
    [updateAsyncSession.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, updateSession: payload };
    },
    [getAsyncSessionByUser.rejected]: () => {
      console.log("rejected");
    },
  },
});
export const updateSession = state => state.session.updateSession;
export const getDeleteSession = state => state.session.deleteSession;
export const addSession = (state) => state.session.session;
export const getSessionsByUser = (state) => state.session.sessionsByUser;
export const getSessionsByDate = (state) => state.session.sessionsByDate;

export default sessionSlice.reducer;
