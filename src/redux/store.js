import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import moodSliceReducer from './slices/moodSlice'

export const store = configureStore({
  reducer: {
    moodSliceReducer,
  },
})

export const useAppSelector = useSelector
export const { dispatch } = store
