import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../helpers/api";

export const deleteAsyncProfessional = createAsyncThunk(
  "professional/deleteAsyncProfessional",
  async (id) => {
    // console.log(payload)
    const response = await axios.delete(baseUrl + "/user/updateInfo/"+id);
    console.log(response)
    return response.data;
  }
);

export const updateAsyncProfessional = createAsyncThunk(
  "professional/updateAsyncProfessional",
  async (payload) => {
    // console.log(payload)
    const response = await axios.patch(baseUrl + "/user/updateInfo/"+payload.id, payload.data);
    console.log(response)
    return response.data;
  }
);

export const getAllAsyncProfessional = createAsyncThunk(
  "professional/getAllAsyncProfessional",
  async ({ currentPage, limit }) => {
    // console.log(payload)
    const response = await axios.get(baseUrl + `/user/professional/all?limit=${limit}&page=${currentPage}`);
    console.log(response)
    return response.data;
  }
);

export const getAllAsyncProfessionalFilter = createAsyncThunk(
  "professional/getAllAsyncProfessionalFilter",
  async ({ currentPage, currentFilter }) => {
    // console.log(payload)
    const response = await axios.get(baseUrl + `/user/professional?limit=${12}&page=${currentPage}&expertise=${currentFilter}`);
    console.log(response)
    return response.data;
  }
);


export const getAsyncProfessionalByUser = createAsyncThunk(
  "professional/getAsyncProfessionalByUser",
  async (id) => {
    console.log(id)
    const response = await axios.get(`${baseUrl}/user/professional/${id}`);
    console.log(response)
    return response.data;
  }
);



const initialState = {
  professional: {},
  professionalsByUser:[],
  allProfessionals:[],
  allProfessionalsFilter:[],
  deleteProfessional: {},
  updateProfessional:{}
};

const professionalSlice = createSlice({
  name: "professional",
  initialState,
  reducers: {},
  extraReducers: {
    [getAsyncProfessionalByUser.pending]: () => {
      console.log("professional is loading");
    },
    [getAsyncProfessionalByUser.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, professionalsByUser: payload };
    },
    [getAllAsyncProfessional.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, allProfessionals: payload };
    },
    [getAllAsyncProfessionalFilter.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, allProfessionalsFilter: payload };
    },
    [deleteAsyncProfessional.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, deleteProfessional: payload };
    },
    [updateAsyncProfessional.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, updateProfessional: payload };
    },
    [getAsyncProfessionalByUser.rejected]: () => {
      console.log("rejected");
    },
  },
});
export const updateProfessional = state => state.professional.updateProfessional;
export const getDeleteProfessional = state => state.professional.deleteProfessional;
export const addProfessional = (state) => state.professional.professional;
export const getProfessionalsByUser = (state) => state.professional.professionalsByUser;
export const getAllProfessionals = (state) => state.professional.allProfessionals;
export const getAllProfessionalsFilter = (state) => state.professional.allProfessionalsFilter;
export default professionalSlice.reducer;
