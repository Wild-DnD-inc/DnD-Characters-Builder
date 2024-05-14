
const Avatar = ({ race, classe, gender }) => {
  const imagePath = `src/images/${race}/${race}-${classe}-${gender}.png`;

  return (
    <div>
      <img src={imagePath} alt='Avatar of the character' />
    </div>
  );
};

export default Avatar;