import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Users/userSlice'
import sessionReducer from './Sessions/SessionSlice'
import serviceReducer from './Services/ServiceSlice'
import professionalReducer from './Professionals/ProfessionalSlice'
import orderReducer from './Orders/OrderSlice'
import favoriteReducer from './Favorite/favoriteSlice'
import AvailableTimeReducer from './AvailableTime/AvailableTimeSlice'
export const store = configureStore({
  reducer: {
    user: userReducer,
    session: sessionReducer,
    service: serviceReducer,
    professional: professionalReducer,
    order: orderReducer,
    favorite: favoriteReducer,
    availableTime: AvailableTimeReducer
  },
})
