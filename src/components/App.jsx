import { useState, useEffect } from 'react';
import Feedback from './Feedback/Feedback.jsx';
import Options from './Options/Options.jsx';
import Notification from './Notification/Notification.jsx';

const App = () => {
    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = localStorage.getItem('feedback');
        return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
    });

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback]);

    const updateFeedback = (feedbackType) => {
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1
        }));
    };

    const resetFeedback = () => {
        setFeedback({
            good: 0,
            neutral: 0,
            bad: 0
        });
    };

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedbackPercentage = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

    return (
        <div>
            <h1>Sip Happens Café</h1>
            <p>Please leave your feedback about our service by selecting one of the options below.</p>
            <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
            {totalFeedback > 0 ? (
                <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedbackPercentage={positiveFeedbackPercentage} />
            ) : (
                <Notification message="No feedback given yet" />
            )}
        </div>
    );
};

export default App;