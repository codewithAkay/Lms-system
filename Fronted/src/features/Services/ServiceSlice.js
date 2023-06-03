import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../helpers/api";

export const addAsyncService = createAsyncThunk(
  "service/addAsyncService",
  async (payload) => {
    console.log(payload)
    const response = await axios.post(baseUrl + "/services", payload);
    console.log(response)
    return response.data;
  }
);

export const deleteAsyncService = createAsyncThunk(
  "service/deleteAsyncService",
  async (id) => {
    // console.log(payload)
    const response = await axios.delete(baseUrl + "/services/"+id);
    console.log(response)
    return response.data;
  }
);

export const fetchAsyncServiceById = createAsyncThunk(
  "service/fetchAsyncServiceById",
  async (id) => {
    // console.log(payload)
    const response = await axios.get(baseUrl + "/services/"+id);
    console.log(response)
    return response.data;
  }
);

export const updateAsyncService = createAsyncThunk(
  "service/updateAsyncService",
  async (payload) => {
    // console.log(payload)
    const response = await axios.patch(baseUrl + "/services/"+payload.id, payload.data);
    console.log(response)
    return response.data;
  }
);

export const getAllAsyncService = createAsyncThunk(
  "service/getAllAsyncService",
  async ({ currentPage, limit }) => {
    // console.log(payload)
    const response = await axios.get(baseUrl + `/services?limit=${limit}&page=${currentPage}`);
    console.log(response)
    return response.data;
  }
);


export const getAsyncServiceByUser = createAsyncThunk(
  "service/getAsyncServiceByUser",
  async (id) => {
    console.log(id)
    const response = await axios.get(`${baseUrl}/services/professional/${id}`);
    console.log(response)
    return response.data;
  }
);

export const getAsyncServiceByStatus = createAsyncThunk(
  "service/getAsyncServiceByStatus",
  async (id) => {
    console.log(id)
    const response = await axios.get(`${baseUrl}/services/professional/status/${id}`);
    console.log(response)
    return response.data;
  }
);

const initialState = {
  allServices:[],
  service: {},
  servicesByUser:[],
  servicesByStatus:[],
  deleteService: {},
  updateService:{},
  serviceById: {}
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: {
    [getAsyncServiceByUser.pending]: () => {
      console.log("service is loading");
    },
    [addAsyncService.fulfilled]: (state, { payload }) => {
      console.log("add successfully");
      return { ...state, service: payload };
    },
    [getAsyncServiceByUser.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, servicesByUser: payload };
    },
    [getAsyncServiceByStatus.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, servicesByStatus: payload };
    },
    [getAllAsyncService.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, allServices: payload };
    },
    [deleteAsyncService.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, deleteService: payload };
    },
    [fetchAsyncServiceById.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, serviceById: payload };
    },
    [updateAsyncService.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, updateService: payload };
    },
    [getAsyncServiceByUser.rejected]: () => {
      console.log("rejected");
    },
  },
});
export const updateService = state => state.service.updateService;
export const getDeleteService = state => state.service.deleteService;
export const addService = (state) => state.service.service;
export const getServicesByUser = (state) => state.service.servicesByUser;
export const getServicesByStatus = (state) => state.service.servicesByStatus;
export const getAllServices = (state) => state.service.allServices;
export const getServiceById = (state) => state.service.serviceById;
export default serviceSlice.reducer;
