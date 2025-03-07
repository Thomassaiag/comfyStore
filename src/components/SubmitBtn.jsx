import React from "react";

const SubmitBtn = ({ buttonText, buttonClass, isSubmitting }) => {
	return (
		<button
			className={`${buttonClass} uppercase my-3`}
			disabled={isSubmitting}
		>
			{/* {isSubmitting ? "Submitting" : { buttonText }} */}
			{isSubmitting ? 'submitting' : buttonText }
		</button>
	);
};

export default SubmitBtn;
