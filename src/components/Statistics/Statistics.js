import propTypes from 'prop-types';
import Notification from '../Notification/Notification';
import s from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercantage }) => {
  return (
    <>
      {total > 0 && (
        <ul className={s.buttonList}>
          <li className={s.buttonList__item}>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive Percantage: {positivePercantage}</li>
        </ul>
      )}
      {total === 0 && <Notification message="No feedback given" />}
    </>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercantage: propTypes.number.isRequired,
};

export default Statistics;
