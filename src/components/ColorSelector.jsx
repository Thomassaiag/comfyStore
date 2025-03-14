import React from "react";

const ColorSelector = ({ color, productColor, setProductColor }) => {
	return (
		<>
			<button
				type="button"
				className={`badge w-6 h-6 mr-2 ${
					color === productColor && "border-2 border-secondary"
				} hover:cursor-pointer`}
				style={{ backgroundColor: color }}
				onClick={() => setProductColor(color)}
			></button>
		</>
	);
};

export default ColorSelector;
