import "./PopUp.css";

function PopUp({
	setPopUp,
}: { setPopUp: React.Dispatch<React.SetStateAction<boolean>> }) {
	return (
		<section id="pop-up">
			<h2>Welcome !</h2>
			<p>
				This website is a fictive One Piece card wallet I created as a school
				project. This is the result of a "solo rush": I had one day to make a
				React project from scratch, right after we learned the React basis. It
				is not linked to a database so your actions are not saved. <br />
				Thank you for your understanding. If you like py work, please check my{" "}
				<a href="https://aude-nec.vercel.app/">portfolio</a> and see my
				evolution.
			</p>
			<p id="explanations">
				Click on the card to see more information, click on the heart to add to
				your favorite and on "add to your crew" if you own the card. Search or
				sort the cards thanks to the navigation bar.
			</p>
			<button
				type="button"
				onClick={() => setPopUp(false)}
				onKeyUp={() => setPopUp(false)}
			>
				Discover the website
			</button>
		</section>
	);
}

export default PopUp;
