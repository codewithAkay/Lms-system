import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../helpers/api";

export const fetchedAsyncFavorite = createAsyncThunk(
  "favorite/fetchedAsyncFavorite",
  async (payload) => {
    const response = await axios.post(baseUrl + "/favorite", payload);
    return response.data;
  }
);
export const fetchedAsyncAllFavorite = createAsyncThunk(
  "favorite/fetchedAsyncAllFavorite",
  async (id) => {
    const response = await axios.get(baseUrl + `/favorite/${id}`);
    return response.data;
  }
);

export const fetchedAsyncAllFavoritesById = createAsyncThunk(
  "favorite/fetchedAsyncAllFavoritesById",
  async (id) => {
    const response = await axios.get(baseUrl + `/favorite/users/${id}`);
    return response.data;
  }
);
export const deleteAsyncAllFavoritesById = createAsyncThunk(
  "favorite/deleteAsyncAllFavoritesById",
  async (id) => {
    const response = await axios.delete(baseUrl + `/favorite/${id}`);
    return response.data;
  }
);

const initialState = {
  favorite: {},
  allFavorites: [],
  allFavoritesById: [],
  deleteFavorite: {},
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchedAsyncFavorite.pending]: () => {
      console.log("favorite is loading");
    },
    [fetchedAsyncFavorite.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, favorite: payload };
    },
    [fetchedAsyncAllFavorite.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, allFavorites: payload };
    },
    [fetchedAsyncAllFavoritesById.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, allFavoritesById: payload };
    },
    [deleteAsyncAllFavoritesById.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, deleteFavorite: payload };
    },
    [fetchedAsyncFavorite.rejected]: () => {
      console.log("rejected");
    },
  },
});

export const getFavorite = (state) => state.favorite.favorite;
export const getAllFavorite = (state) => state.favorite.allFavorites;
export const getAllFavoritesById = (state) => state.favorite.allFavoritesById;
export const getDeleteFavorite = (state) => state.favorite.deleteFavorite;
export default favoriteSlice.reducer;
