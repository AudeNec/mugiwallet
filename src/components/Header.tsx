import "./Header.css";
import header from "../assets/header.png";

function Header() {
	return (
		<header className="header">
			<img
				src={header}
				alt="Mugiwara, your full crew of cards-and the ones left to recruit!"
			/>
		</header>
	);
}

export default Header;
