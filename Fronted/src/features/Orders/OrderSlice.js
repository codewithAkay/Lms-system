import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../helpers/api";

export const addAsyncOrder = createAsyncThunk(
  "order/addAsyncOrder",
  async (payload) => {
    console.log(payload)
    const response = await axios.post(baseUrl + "/orders", payload);
    console.log(response)
    return response.data;
  }
);

export const deleteAsyncOrder = createAsyncThunk(
  "order/deleteAsyncOrder",
  async (payload) => {
    // console.log(payload)
    const response = await axios.patch(baseUrl + "/orders/"+payload.id, payload.data);
    console.log(response)
    return response.data;
  }
);

export const updateAsyncOrder = createAsyncThunk(
  "order/updateAsyncOrder",
  async (payload) => {
    // console.log(payload)
    const response = await axios.patch(baseUrl + "/orders/"+payload.id, payload.data);
    console.log(response)
    return response.data;
  }
);

export const getAsyncOrderByUser = createAsyncThunk(
  "order/getAsyncOrderByUser",
  async (id) => {
    console.log(id)
    const response = await axios.get(`${baseUrl}/orders/professional/${id}`);
    console.log(response)
    return response.data;
  }
);
// 

export const getAsyncOrderByUserId = createAsyncThunk(
  "order/getAsyncOrderByUserId",
  async (id) => {
    console.log(id)
    const response = await axios.get(`${baseUrl}/orders/getOrderByUserId/${id}`);
    console.log(response)
    return response.data;
  }
);
export const getOrderByProfessionalId = createAsyncThunk(
  "order/getOrderByProfessionalId",
  async (id) => {
    console.log(id)
    const response = await axios.get(`${baseUrl}/orders/getOrderByProfessionalId/${id}`);
    console.log(response)
    return response.data;
  }
);
export const getUpcomingOrder = createAsyncThunk(
  "order/getUpcomingOrder",
  async (id) => {
    console.log(id)
    const response = await axios.get(`${baseUrl}/orders/upcomingorder/${id}`);
    console.log(response)
    return response.data;
  }
);


export const getAsyncCompletedOrder = createAsyncThunk(
  "order/getAsyncCompletedOrder",
  async (id) => {
    console.log(id)
    const response = await axios.get(`${baseUrl}/orders/getCompletedOrder/${id}`);
    console.log(response)
    return response.data;
  }
);


const initialState = {
  order: {},
  ordersByUser:[],
  deleteOrder: {},
  updateOrder:{},
  orderByUserId:[],
  completedOrders: [],
  orderByProfessional:[],
  upcomingOrder:[]
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: {
    [getAsyncOrderByUser.pending]: () => {
      console.log("order is loading");
    },
    [addAsyncOrder.fulfilled]: (state, { payload }) => {
      console.log("add successfully");
      return { ...state, order: payload };
    },
    [getAsyncOrderByUser.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, ordersByUser: payload };
    },
    [getOrderByProfessionalId.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, orderByProfessional: payload };
    },
    [getUpcomingOrder.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, upcomingOrder: payload };
    },
    [getAsyncOrderByUserId.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, orderByUserId: payload };
    },
    [deleteAsyncOrder.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, deleteOrder: payload };
    },
    [updateAsyncOrder.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, updateOrder: payload };
    },
    [getAsyncCompletedOrder.fulfilled]: (state, { payload }) => {
      console.log("data fetched successfully");
      return { ...state, completedOrders: payload };
    },
    [getAsyncOrderByUser.rejected]: () => {
      console.log("rejected");
    },
  },
});
export const updateOrder = state => state.order.updateOrder;
export const getDeleteOrder = state => state.order.deleteOrder;
export const addOrder = (state) => state.order.order;
export const getOrdersByUser = (state) => state.order.ordersByUser;
export const getOrdersByUserId = (state) => state.order.orderByUserId;
export const getCompletedOrder = (state) => state.order.completedOrders;
export const getAllOrderByProfessional = (state) => state.order.orderByProfessional;
export const getAllUpcomingOrder = (state) => state.order.upcomingOrder;

export default orderSlice.reducer;
