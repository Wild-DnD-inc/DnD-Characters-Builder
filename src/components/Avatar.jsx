
const Avatar = ({ race, classe, gender }) => {
  const imagePath = `src/images/${race}/${race}-${classe}-${gender}.png`;

  return (
    <div>
      <img src={race === '' && classe === '' ? './src/images/dnd-symbol.png' : imagePath} alt='Avatar of the character' className="placeholder" />
      {console.log(race)}
      {console.log(classe)}
    </div>
  );
};

export default Avatar;