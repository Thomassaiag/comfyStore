import { React, useState } from "react";

const FormCheckBox = ({ label, size, name }) => {
	const [isFreeShipping, setIsFreeShipping] = useState("off");

	return (
		<div className="form-control flex flex-col items-center">
			<label className="label cursor-pointer" htmlFor={name}>
				<span className="label-text capitalize">{label}</span>
			</label>
			<input
				id={name}
				name={name}
				type="checkbox"
				value={isFreeShipping}
				className={`checkbox checkbox-primary mt-4 ${size}`}
				onChange={(e) => {
					e.target.value === "off"
						? setIsFreeShipping("on")
						: setIsFreeShipping("off");
				}}
			/>
		</div>
	);
};

export default FormCheckBox;
