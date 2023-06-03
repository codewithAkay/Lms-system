import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../helpers/api";

export const addAsyncTime = createAsyncThunk(
  "/availableTime/addAsyncTime",
  async (payload) => {
    console.log(payload)
    const response = await axios.post(baseUrl + "/availableDate", payload);
    console.log(response)
    return response.data;
  }
);

export const deleteAsyncTime = createAsyncThunk(
  "/availableTime/deleteAsyncTime",
  async (id) => {
    // console.log(payload)
    const response = await axios.delete(baseUrl + "/availableDate/"+id);
    console.log(response)
    return response.data;
  }
);

export const updateAsyncTime = createAsyncThunk(
  "/availableTime/updateAsyncTime",
  async (payload) => {
    // console.log(payload)
    const response = await axios.patch(baseUrl + "/availableDate/"+payload.id, payload.data);
    console.log(response)
    return response.data;
  }
);

export const getAsyncTimeByUser = createAsyncThunk(
  "/availableTime/getAsyncTimeByUser",
  async (payload) => {
    console.log(payload)
    const response = await axios.get(`${baseUrl}/availableDate/${payload.id}`);
    console.log(response)
    return response.data;
  }
);


export const getAsyncTimeByDate = createAsyncThunk(
  "/availableTime/getAsyncTimeByDate",
  async (payload) => {
    console.log(payload)
    const response = await axios.get(`${baseUrl}/availableDate/date/${payload.id}?year=${payload.year}&month=${payload.month}&date=${payload.date}`);
    console.log(response)
    return response.data;
  }
);


const initialState = {
  availableTime: {},
  availableTimesByUser:[],
  deleteTime: {},
  updateTime:{},
  TimeByDate: {},
};

const availableTimeSlice = createSlice({
  name: "availableTime",
  initialState,
  reducers: {},
  extraReducers: {
    [getAsyncTimeByUser.pending]: () => {
      console.log("availableTime is loading");
    },
    [addAsyncTime.fulfilled]: (state, { payload }) => {
      console.log("add successfully");
      return { ...state, availableTime: payload };
    },
    [getAsyncTimeByDate.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, availableTimesByDate: payload };
    },
    [getAsyncTimeByUser.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, availableTimesByUser: payload };
    },
    [deleteAsyncTime.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, deleteTime: payload };
    },
    [updateAsyncTime.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, updateTime: payload };
    },
    [getAsyncTimeByUser.rejected]: () => {
      console.log("rejected");
    },
  },
});
export const updateTime = state => state.availableTime.updateTime;
export const getDeleteTime = state => state.availableTime.deleteTime;
export const addTime = (state) => state.availableTime.availableTime;
export const getTimesByUser = (state) => state.availableTime.availableTimesByUser;
export const getTimesByDate = (state) => state.availableTime.availableTimesByDate;

export default availableTimeSlice.reducer;
