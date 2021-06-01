import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as runs } from '../redux/reduxStore';
function ScoreCard() {
    const [currentRuns, setCurrentRuns] = useState(0);
    const dispatch = useDispatch();
    const currentScore = useSelector(state => state.scoreCard.run);
    console.log(currentScore, runs, currentRuns);
    return (
        <div>
            <h1>Score card</h1>
            <h2>{currentScore}</h2>
            <input type='text' value={currentRuns} onChange={e => setCurrentRuns(e.target.value)} />
            <button onClick={() => dispatch(runs.addRun(currentRuns))}>Add Run</button>
        </div>
    )
}

export default ScoreCard
