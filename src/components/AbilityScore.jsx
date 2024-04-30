import PropTypes from "prop-types";
import { useState } from "react";

const AbilityScore = ({ name, score, modifier }) => {
  const [currentScore, setCurrentScore] = useState(score);

  function handlePlus() {
    setCurrentScore(currentScore + 1);
  }

  function handleMinus() {
    setCurrentScore(currentScore - 1);
  }

  const [currentModifier, setCurrentModifier] = useState(modifier);

  function handlePlusModifier() {
    setCurrentModifier(currentModifier + 1);
  }

  function handleMinusModifier() {
    setCurrentModifier(currentModifier - 1); 
  }

  return (
    <div className="abilityName">
      <h3>{name}</h3>

      <button className="plus" onClick={handlePlus} disabled={currentScore === 15}>
        +
      </button>

      <p>{currentScore}</p>

      <button className="minus" onClick={handleMinus} disabled={currentScore === 0}>
        -
      </button>

      <button className="plus" onClick={handlePlusModifier} disabled={currentModifier === 5}>
        +
      </button>

      <p>+ {currentModifier}</p>

      <button className="minus" onClick={handleMinusModifier} disabled={currentModifier === 0}>
        -
      </button>
    </div>
  );
};

AbilityScore.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  modifier: PropTypes.number.isRequired,
};

export default AbilityScore;