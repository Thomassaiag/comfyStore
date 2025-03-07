import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const SubmitBtn = ({ buttonText, buttonClass, isSubmitting, buttonType }) => {
	return (
		<button
			className={`${buttonClass} uppercase my-3`}
			disabled={isSubmitting}
			type={buttonType}
		>
			{/* {isSubmitting ? "Submitting" : { buttonText }} */}
			{isSubmitting ? <>
                <LoadingSpinner />Sending...
            </>
             : buttonText || 'submit'}
		</button>
	);
};

export default SubmitBtn;
