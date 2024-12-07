import { useState } from "react";

import "./reset.css";
import "./App.css";

import Header from "./components/Header";
import Card from "./components/Card";
import Filter from "./components/Filter";
import Hats from "./assets/hats.png";

import Cards from "./data/data.json";
import PopUp from "./components/PopUp";

function App() {
	const [search, setSearch] = useState<string>("");
	const [filterFav, setFilterFav] = useState<boolean>(false);
	const [filterFound, setFilterFound] = useState<boolean>(false);

	const [popUp, setPopUp] = useState<boolean>(true);

	return (
		<>
			{popUp ? <PopUp setPopUp={setPopUp} /> : <></>}
			<Header />
			<main>
				<Filter
					search={search}
					setSearch={setSearch}
					filterFav={filterFav}
					setFilterFav={setFilterFav}
					filterFound={filterFound}
					setFilterFound={setFilterFound}
				/>

				<section className="list-card">
					{Cards.filter((card) =>
						card.Name.toLowerCase().includes(search.toLowerCase()),
					).map((card) => (
						<Card
							key={card.id}
							card={card}
							filterFav={filterFav}
							filterFound={filterFound}
						/>
					))}
					{Cards.filter((card) =>
						card.Name.toLowerCase().includes(search.toLowerCase()),
					).length === 0 ? (
						<div>
							<img src={Hats} width="200px" alt="hats" />
							<p>Oops, nothing to see here.. Try another search</p>
						</div>
					) : (
						<></>
					)}
				</section>
			</main>
		</>
	);
}

export default App;
