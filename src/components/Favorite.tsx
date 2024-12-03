interface FavoriteProps {
	favorite: boolean;
	setFavorite: React.Dispatch<React.SetStateAction<boolean>>;
}

function Favorite({ favorite, setFavorite }: FavoriteProps) {
	return (
		<button
			type="button"
			className="favorite"
			onClick={(event) => {
				setFavorite(!favorite);
				event?.stopPropagation();
			}}
		>
			{favorite ? "❤" : "🤍"}{" "}
		</button>
	);
}

export default Favorite;
