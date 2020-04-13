import React from "react";
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default function AboutPage() {
	return (
		<div>
			<Hero>
			<Banner title="About" >
			<Link to="/about" className="btn-primary">Return Home</Link>
			</Banner>
            </Hero>
            <div>
                <p>
                Dunepira Resort is a wonderful resort located in Rivers state Nigeria
                </p>
            </div>
			
		</div>
	);
}
