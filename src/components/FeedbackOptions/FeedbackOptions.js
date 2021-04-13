import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
  return (
    <ul>
      <li className={s.buttonList__item}>
        <button
          type="button"
          data-feedback={feedback}
          onClick={onLeaveFeedback}
          className={s.button}
        >
          {feedback}
        </button>
      </li>
    </ul>
  );
};
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option, index) => (
    <FeedbackButton
      feedback={option}
      key={index}
      onLeaveFeedback={onLeaveFeedback}
    />
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
