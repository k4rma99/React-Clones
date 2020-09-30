import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
	return (
		<div className="app">
			<Nav></Nav>
			<Banner />
			<Row
				title="Netflix Originals"
				fetchUrl={requests.fetchNetflixOrginals}
				isLargeRow
			/>
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchAction} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedy} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorror} />
			{/* <Row title="Romance Movies" fetchUrl={requests.fetchRomance} /> */}
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
