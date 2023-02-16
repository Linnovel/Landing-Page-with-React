import React from "react";
import { Navbar } from "./Navbar.jsx"
import { Footer } from "./Footer.jsx"
import { Jumbo, Jumbotron } from "./Jumbotron.jsx";
import { Main } from "./Main.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			
			<Navbar />
			<Jumbotron />
			<Main />
			<Footer />

		</React.Fragment>
	);
};

export default Home;
