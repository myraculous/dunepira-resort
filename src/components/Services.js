import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

class Services extends Component {
    state ={
        services: [
            {
                icon:<FaCocktail/>,
                title: "free cocktails",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, amet."
            },
            {
                icon:<FaHiking/>,
                title: "Endless Hiking",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, amet."
            },
            {
                icon:<FaShuttleVan/>,
                title: "Free shuttle",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, amet."
            },
            {
                icon:<FaBeer/>,
                title: "Strongest Beer",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, amet."
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