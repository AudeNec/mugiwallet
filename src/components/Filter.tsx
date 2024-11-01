import Crew from "../assets/crew-black.png";
import NoCrew from "../assets/crew.jpg";

interface FilterProps {
	search: string;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
	filterFav: boolean;
	setFilterFav: React.Dispatch<React.SetStateAction<boolean>>;
	filterFound: boolean;
	setFilterFound: React.Dispatch<React.SetStateAction<boolean>>;
}

function Filter({
	search,
	setSearch,
	filterFav,
	setFilterFav,
	filterFound,
	setFilterFound,
}: FilterProps) {
	return (
		<nav className="search">
			<input
				type="text"
				placeholder="Search a card"
				value={search}
				onChange={(event) => {
					setSearch(event.target.value);
				}}
			/>
			<button type="button" onClick={() => setFilterFav(!filterFav)}>
				MY FAVORITE
				<br />
				<span> {filterFav ? "❤" : "🤍"} </span>
			</button>
			<button
				type="button"
				id="my-crew"
				onClick={() => setFilterFound(!filterFound)}
			>
				MY CREW
				<br />
				{filterFound ? (
					<img src={Crew} alt="My Crew" width="30px" />
				) : (
					<img src={NoCrew} alt="My Crew" width="30px" />
				)}
			</button>
		</nav>
	);
}

export default Filter;
