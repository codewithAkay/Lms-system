import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseUrl } from '../../helpers/api'

export const fetchedAsyncUser = createAsyncThunk('user/fetchedAsyncUser', async (payload) => {
  const response = await axios.post(baseUrl + "/user/login", payload)
  return response.data
})
export const fetchedAsyncAllUser = createAsyncThunk('user/fetchedAsyncAllUser', async ({limit, currentPage}) => {
  const response = await axios.get(baseUrl + `/user/all?limit=${limit}&page=${currentPage}`)
  return response.data
})

const initialState = {
  user: {},
  allUsers: [],
  redirectCouponUrl: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) =>{
      state.user = {};
    },
    redirectCoupon: (state, action) => {
      state.redirectCouponUrl = action.payload
    }
  },
  extraReducers: {
    [fetchedAsyncUser.pending]: () => {
      console.log('user is loading')
    },
    [fetchedAsyncUser.fulfilled]: (state, { payload }) => {
      console.log('fetched successfully')
      return { ...state, user: payload }
    },
    [fetchedAsyncAllUser.fulfilled]: (state, { payload }) => {
      console.log('fetched successfully')
      return { ...state, allUsers: payload }
    },
    [fetchedAsyncUser.rejected]: () => {
      console.log('rejected')
    },
  },
})
export const { logout, redirectCoupon } = userSlice.actions

export const getUser = (state) => state.user.user;
export const getAllUser = (state) => state.user.allUsers;
export const getRedirect = (state) => state.user.redirectCouponUrl;
export default userSlice.reducer
