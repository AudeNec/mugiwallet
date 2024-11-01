import FoundButton from "./FoundButton";
import Favorite from "./Favorite";

interface CardProps {
	card: {
		Img: string;
		CardNum: string;
		CardType: string;
		Name: string;
		Alt: boolean;
		Rarity: string;
		"Type 1": string;
		"Type 2"?: string;
		Effect?: string;
	};
	found: boolean;
	setFound: React.Dispatch<React.SetStateAction<boolean>>;
	favorite: boolean;
	setFavorite: React.Dispatch<React.SetStateAction<boolean>>;
}

function CardBack({ card, found, setFound, favorite, setFavorite }: CardProps) {
	return (
		<div className="flip-card-back">
			<header className="card-header">
				<h3>
					{card.CardNum} | {card.CardType}
					{card.Alt ? "| Alt" : ""}
				</h3>
				<h2>{card.Name}</h2>
			</header>
			<p>
				<strong>Rarity</strong> {card.Rarity}
			</p>
			<p>
				<strong>Type{card["Type 2"] ? "s" : ""}</strong> <br />
				{card["Type 1"]}
				{card["Type 2"] ? card["Type 2"] : ""}
			</p>
			{card.Effect ? (
				<p className="effect">
					<strong>Effect</strong>
					<br />
					{card.Effect}
				</p>
			) : (
				<></>
			)}
			<footer>
				<FoundButton state={found} setState={setFound} />
				<Favorite favorite={favorite} setFavorite={setFavorite} />
			</footer>
		</div>
	);
}
export default CardBack;
