import React, { useState } from 'react';
import Button from './Button';
import Statistic from './Statistics';
import Constants from '../Constants';



const App = () => {

  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);


  const updateFeedback = (type) => () => {
    switch (type) {
      case Constants.GOOD:
        setGood(good + 1);
        break;
      case Constants.BAD:
        setBad(bad + 1);
        break;
      case Constants.NEUTRAL:
        setNeutral(neutral + 1);
        break;
      default:
        break;
    }
  }

  const getStatistics = (type) => {
    switch (type) {
      case Constants.TOTAL:
        return good + neutral + bad;
      case Constants.AVERAGE:
        return (good / (good + neutral + bad) * 100);
      default:
        return 0;
    }
  }
  const showStatistics = getStatistics(Constants.TOTAL) > 0 ? true : false;
  return (
    <>
      <h2>give feedback</h2>
      <Button text='good' updateFeedbackHandleClick={updateFeedback(Constants.GOOD)} />
      <Button text='neutral' updateFeedbackHandleClick={updateFeedback(Constants.NEUTRAL)} />
      <Button text='bad' updateFeedbackHandleClick={updateFeedback(Constants.BAD)} />

      <h2>statitics</h2>
      {showStatistics &&
        <table>
          <tbody>
            <tr>
              <td>
                <Statistic text={Constants.GOOD} value={good} />
              </td>
            </tr>
            <tr>
              <td>
                <Statistic text={Constants.NEUTRAL} value={neutral} />
              </td>
            </tr>
            <tr>
              <td>
                <Statistic text={Constants.BAD} value={bad} />
              </td>
            </tr>
            <tr>
              <td>
                <Statistic text={Constants.TOTAL} value={getStatistics(Constants.TOTAL)} />
              </td>
            </tr>
            <tr>
              <td>
                <Statistic text={Constants.POSITIVE} value={good} />
              </td>
            </tr>
            <tr>
              <td>
                <Statistic text={Constants.AVERAGE} value={getStatistics(Constants.AVERAGE)} /> %
              </td>
            </tr>
          </tbody>
        </table>
      }
      {!showStatistics &&
        <div>No Feedback Given</div>
      }
    </>
  );
}

export default App;
