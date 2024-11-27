const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => {
    return (
        <div>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Total Feedback: {totalFeedback}</p>
            <p>Positive Feedback: {positiveFeedbackPercentage}%</p>
        </div>
    );
};

export default Feedback;