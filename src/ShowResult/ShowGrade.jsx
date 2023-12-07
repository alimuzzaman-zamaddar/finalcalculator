

function ShowGrade({ number }) {
  const getLetter = (num) => {
    return num == 4 ? 'A' :
           num == 3 ? 'B' :
           num == 2 ? 'C' :
           num == 1 ? 'D' :
           'Invalid number';
  };

  const letter = getLetter(number);

  return letter

}

export default ShowGrade;
