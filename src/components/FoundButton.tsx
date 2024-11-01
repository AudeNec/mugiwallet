import Crew from "../assets/crew-black.png";

interface FoundButtonProps {
	state: boolean;
	setState: React.Dispatch<React.SetStateAction<boolean>>;
}

function FoundButton({ state, setState }: FoundButtonProps) {
	return (
		<button
			type="button"
			name="found"
			className="found"
			onClick={(event) => {
				setState(!state);
				event.stopPropagation();
			}}
		>
			{state ? (
				<img src={Crew} alt="On my crew" width="20px" />
			) : (
				"ADD TO MY CREW"
			)}
		</button>
	);
}

export default FoundButton;
