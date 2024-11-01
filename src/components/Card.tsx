import { useState } from "react";

import "./Card.css";

import CardBack from "./CardBack";
import Favorite from "./Favorite";

interface CardProps {
	card: {
		id: number;
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
	filterFav: boolean;
	filterFound: boolean;
}

function Card({ card, filterFav, filterFound }: CardProps) {
	const [isFlipped, setIsFlipped] = useState(false);
	const [found, setFound] = useState(false);
	const [favorite, setFavorite] = useState<boolean>(false);

	const flipCard = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<article
			className={`flip-card ${isFlipped ? "active" : ""} ${favorite && filterFav ? "fav" : ""} ${found && filterFound ? "found" : ""}`}
			onClick={flipCard}
		>
			<div className="flip-card-inner">
				<div className="flip-card-front">
					<img
						src={card.Img}
						alt={`Card n° ${card.CardNum}`}
						className={found ? "found" : ""}
					/>
					<Favorite favorite={favorite} setFavorite={setFavorite} />
				</div>
				<CardBack
					card={card}
					found={found}
					setFound={setFound}
					favorite={favorite}
					setFavorite={setFavorite}
				/>
			</div>
		</article>
	);
}

export default Card;
