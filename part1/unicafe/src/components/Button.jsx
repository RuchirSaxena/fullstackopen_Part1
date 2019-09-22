import React from 'react';

const Button = ({ text, updateFeedbackHandleClick }) => {
    return (
        <button
            onClick={updateFeedbackHandleClick}>
            {text}
        </button>
    )
};
export default Button;