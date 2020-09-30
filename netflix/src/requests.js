const API_KEY = "cd8ac350e3a2c8499acd2276d6389653";

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&langauge=en-US`,
	fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&langauge=en-US`,
	fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
	// fetchRomance : `/discover/movie?api_key=${API_KEY}&with_genres=10479`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
