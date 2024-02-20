import { useEffect } from "react";
import { addTrailer } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    const getMoviesTrailer = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            API_OPTIONS
        );
        const jsonData = await data.json();
        const filterData = jsonData.results.filter(
            (video) => video.type === "Trailer"
        );
        const Trailer = filterData.length ? filterData[0] : jsonData.results[0];
        // console.log("Trailer: ", Trailer);
        dispatch(addTrailer(Trailer));
    };

    useEffect(() => {
        getMoviesTrailer();
    }, []);


};

export default useMovieTrailer;
