import PropTypes from "prop-types";

const FeedbackDataButton = () => ({ feedback, onLeaveFeedback }) => {
  return (
    <button type="button" data-feedback={feedback} onClick={onLeaveFeedback}>
      {feedback}
    </button>
  );
};
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option) => (
    <FeedbackDataButton feedback={option} onLeaveFeedback={onLeaveFeedback} />
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
