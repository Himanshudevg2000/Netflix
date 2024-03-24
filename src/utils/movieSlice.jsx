import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlaying: null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlaying =  action.payload;
        },
        addTrailer: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
})

export const {addNowPlayingMovies, addTrailer} = movieSlice.actions;

export default movieSlice.reducer;