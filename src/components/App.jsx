import { useState } from 'react'
import Feedback from './Feedback/Feedback.jsx';
import Options from './Options/Options.jsx';

const App = () => {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });

    const updateFeedback = (feedbackType) => {
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1
        }));
    };

    return (
        <div>
            <h1>Sip Happens Café</h1>
            <p>Please leave your feedback about our service by selecting one of the options below.</p>
            <Options updateFeedback={updateFeedback} />
            <Feedback feedback={feedback}/>
        </div>
    );
};

export default App;