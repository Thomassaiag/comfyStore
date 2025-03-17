import { React } from "react";

const FormCheckBox = ({ label, size, name, defaultValue }) => {
	return (
		<div className="form-control flex flex-col items-center">
			<label className="label cursor-pointer" htmlFor={name}>
				<span className="label-text capitalize">{label}</span>
			</label>
			<input
				id={name}
				name={name}
				type="checkbox"
				defaultChecked={defaultValue}
				className={`checkbox checkbox-primary mt-4 ${size}`}
			/>
		</div>
	);
};

export default FormCheckBox;
