import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

class Services extends Component {
    state ={
        services: [
            {
                icon:<FaCocktail/>,
                title: "free cocktails",
                info: "Let’s say you have slim glasses in the bathroom and slightly larger ones next to the minibar. Fit the larger glass over the mouth of the small one, and voilà: cocktail shaker. Just do your shaking over the bathroom sink."
            },
            {
                icon:<FaHiking/>,
                title: "Endless Hiking",
                info: "Hiking is so much fun and full of adventures. Hiking is all about walking through the long distances , fresh air , observing the beautiful nature and that smell of nature is just mind blowing."
            },
            {
                icon:<FaShuttleVan/>,
                title: "Free shuttle",
                info: "A shorter trip from the resort means you’ll save on public transportation, rideshare, or taxi service costs. MAs Dunepira resort also provide a complimentary shuttle in our luxury rides"
            },
            {
                icon:<FaBeer/>,
                title: "Strongest Beer",
                info: "The first steps on your journey of dunepira beer discovery. our beer is approachable, balanced and endlessly crushable. With a juicy dry-hop and grapefruit zest this sour IPA is just the beginning."
            }


        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                {this.state.services.map((item, index) => {
                 return <article key={index} className="service">
                 <span>
                 {item.icon}
                 </span>
                 <h6>{item.title}</h6>
                 <p>{item.info}</p>
                 </article>   
                })}
                </div>
            </section>
        );
    }
}

export default Services;