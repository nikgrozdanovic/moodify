import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { songsData } from '@/mockData/data'

const initialState = {
  mood: 'happy',
  songs: songsData,
}

export const moodSlice = createSlice({
  name: 'moodSlice',
  initialState: initialState,
  reducers: {
    changeMood: (state, action) => {
      return {
        ...state,
        mood: action.payload,
      }
    },
    addSong: (state, action) => {
      const { mood, name } = action.payload

      // Create a copy of the songs object
      const newSongs = { ...state.songs }

      // Add the new song to the specified mood's array
      if (newSongs[mood]) {
        newSongs[mood].push(name)
      } else {
        newSongs[mood] = [name]
      }

      // Update the state with the new songs object
      state.songs = newSongs
    },
    removeSong: (state, action) => {
      const { name } = action.payload

      // Create a copy of the songs object
      const newSongs = { ...state.songs }

      // Iterate through each mood and remove the song from its array
      for (const mood in newSongs) {
        newSongs[mood] = newSongs[mood].filter((song) => song !== name)
      }

      // Update the state with the new songs object
      state.songs = newSongs
    },
  },
})

export const { changeMood, removeSong, addSong } = moodSlice.actions
export default moodSlice.reducer
