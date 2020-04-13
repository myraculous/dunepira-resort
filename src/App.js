import React from "react";

import "./App.css";
import { Home } from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/rooms' component={Rooms} />
				<Route exact path='/rooms/:slug' component={SingleRoom} />
				<Route exact path='/about' component={AboutPage} />
				<Route component={ErrorPage} />
			</Switch>
		</>
	);
}

export default App;
