

function ShowGrade({ number }) {
  const numbers = parseFloat(number)
  const getLetter = (num) => {
    if (!num) {
      return '_____';
    }

    return num === 4 ? 'A' :
           num === 3 ? 'B' :
           num === 2 ? 'C' :
           num === 1 ? 'D' :
           'Invalid number';
  };

  const letter = getLetter(numbers);

  return letter;
}

export default ShowGrade;
