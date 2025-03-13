import React from "react";
import Carousel from "./Carousel";
import { Link } from "react-router";

const Hero = () => {
	return (
		<>
			<div className="hero min-h-screen">
				<div className="hero-content flex">
					<div>
						<h1 className="max-w-2xl text-4xl font-bold tracking-tight sm: text-6xl">
							We're changing the way people shop!
						</h1>
						<p className="mt-8 max-w-xl text-lg leading-8">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Eaque, reprehenderit pariatur laborum sit amet
							vel, dolorem obcaecati tempora iure similique
							doloribus accusantium repellendus quam, temporibus
							iste. Obcaecati facere tenetur ipsum!
						</p>
                        <div className="mt-10">
                            <Link to='/products' className="btn btn-primary uppercase">our products</Link>
                        </div>
						
					</div>
					
						<Carousel />
					
				</div>
			</div>
		</>
	);
};

export default Hero;
