import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from "./axios";

import "./Row.css";

const baseURL = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]);
	const [trailerURL, setTrailerURL] = useState("");

	const opts = {
		height: "390",
		width: "640",
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};

	useEffect(() => {
		async function fetchData(params) {
			const request = await axios.get(fetchUrl);

			//console.log(request.data.results);

			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

	//console.table(movies);

	const handleClick = (movie) => {
		if (trailerURL) {
			setTrailerURL("");
		} else {
			movieTrailer(movie?.name || "")
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerURL(urlParams.get("v"));
				})
				.catch((error) => console.log(error));
		}
	};

	return (
		<div className="row">
			<h2>{title}</h2>

			<div className="row_posters">
				{movies.map((movie) => (
					<img
						key={movie.id}
						onClick={() => handleClick(movie)}
						className={`row_poster ${
							isLargeRow && "row_posterLarge"
						}`}
						src={`${baseURL}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
					></img>
				))}
			</div>
			{trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
		</div>
	);
}

export default Row;
