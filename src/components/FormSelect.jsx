import React from "react";

const FormSelect = ({ options, name, text, defaultValue, size }) => {
	return (
		<div className="form-control">
			<label htmlFor={name} className="label">
				<span className="label-text capitalize">{text}</span>
			</label>
			<select
				id={name}
                name={name}
				className={`select select-bordered ${size}}`}
				defaultValue={defaultValue}
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
