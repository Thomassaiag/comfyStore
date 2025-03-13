import React from "react";

import image1 from "../assets/hero1.webp";
import image2 from "../assets/hero2.webp";
import image3 from "../assets/hero3.webp";
import image4 from "../assets/hero4.webp";



const carrouselImages = [
	{
		id: 1,
		img: image1,
		alt: "image1",
	},
	{
		id: 2,
		img: image2,
		alt: "image2",
	},
	{
		id: 3,
		img: image3,
		alt: "image3",
	},
	{
		id: 4,
		img: image4,
		alt: "image4",
	},
];

const Carousel = () => {
	return (
		<div className="hidden h-[28rem] lg:carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
			{carrouselImages.map((image) => {
				const { id, img, alt } = image;
				return (
					<div key={id} className="carousel-item">
						<img src={img} className="rounded-box h-full w-80 object-cover" alt={alt} />
					</div>
				);
			})}
		</div>
	);
};

export default Carousel;
