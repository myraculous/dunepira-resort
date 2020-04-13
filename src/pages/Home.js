import React from "react";
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom'
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

 
export const Home = () => {
	return (
		
		<>
			<Hero>
			<Banner title="luxirios rooms" subtitle="deluxe rooms starting at  &#x20a6;100,000 ">
			<Link to="/rooms" className="btn-primary">our rooms</Link>
			
			</Banner>
			
			</Hero>
			<Services/>
			<FeaturedRooms />
			
		</>
			
		
	);
};
