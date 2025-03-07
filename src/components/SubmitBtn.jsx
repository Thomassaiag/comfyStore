import React from "react";

const SubmitBtn = ({ buttonText, buttonClass }) => {
	return <button className={`${buttonClass} uppercase my-3`}>{buttonText}</button>;
};

export default SubmitBtn;
