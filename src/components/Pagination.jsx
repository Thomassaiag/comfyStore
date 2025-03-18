import React from "react";

const Pagination = () => {
	return (
		<div className="join">
			<button className="join-item btn uppercase">prev</button>
			<button className="join-item btn">1</button>
			<button className="join-item btn btn-active">2</button>
			<button className="join-item btn">3</button>
			<button className="join-item btn">4</button>
			<button className="join-item btn uppercase">next</button>
		</div>
	);
};

export default Pagination;
