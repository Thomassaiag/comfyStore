import React from "react";

const FormSelect = ({ options, name, text }) => {
	return (
		<div className="form-control">
			<label htmlFor={name} className="label">
				<span className="label-text capitalize">{text}</span>
			</label>
			<select
				id={name}
				className="input input-bordered input-sm"
				defaultValue="all"
			>
				{options.map((option) => {
					return (
						<option key={option} value={option}>
							{option}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default FormSelect;
