const calculateOverallGPA = (allDataOverall) => {
  const totalGradeCreditProduct = allDataOverall.reduce((acc, data) => {
    let gradeValue = 0, creditValue = 0;

    for (let i = 0; i < data.length; i++) {
      const { grade9, credit9, grade10, credit10, grade11, credit11, grade12, credit12 } = data[i];

      if (grade9 && credit9) {
        gradeValue = parseFloat(grade9);
        creditValue = parseFloat(credit9);
      } else if (grade10 && credit10) {
        gradeValue = parseFloat(grade10);
        creditValue = parseFloat(credit10);
      } else if (grade11 && credit11) {
        gradeValue = parseFloat(grade11);
        creditValue = parseFloat(credit11);
      } else if (grade12 && credit12) {
        gradeValue = parseFloat(grade12);
        creditValue = parseFloat(credit12);
      }

      if (!isNaN(gradeValue) && !isNaN(creditValue)) {
        acc.gradeCreditProduct += gradeValue * creditValue;
        acc.totalCredits += creditValue;
      }
    }

    return acc;
  }, { gradeCreditProduct: 0, totalCredits: 0 });

  const overallGPA = totalGradeCreditProduct.totalCredits !== 0
    ? totalGradeCreditProduct.gradeCreditProduct / totalGradeCreditProduct.totalCredits
    : 0;

  return overallGPA.toFixed(2);
};

const calculateGPA = (selectedCourse) => {
  const { formDataG9, formDataG10, formDataG11, formDataG12 } = selectedCourse.allData;

  const allData = [formDataG9, formDataG10, formDataG11, formDataG12];
  const allData3 = [formDataG9, formDataG10, formDataG11];
  const allData2 = [formDataG9, formDataG10];
  const allData5 = [formDataG10, formDataG11, formDataG12];
  const allData4 = [formDataG11, formDataG12];
  const allData9 = [formDataG9];
  const allData10 = [formDataG10];
  const allData11 = [formDataG11];
  const allData12 = [formDataG12];
  const satScore = selectedCourse.satscore;

  const calculateGradeCreditProduct = (data) => {
    let totalGradeCreditProduct = 0;
    let totalCredits = 0;

    for (let i = 0; i < data.length; i++) {
      const { grade9, credit9, grade10, credit10, grade11, credit11, grade12, credit12 } = data[i];

      let gradeValue, creditValue;

      if (grade9 && credit9) {
        gradeValue = parseFloat(grade9);
        creditValue = parseFloat(credit9);
      } else if (grade10 && credit10) {
        gradeValue = parseFloat(grade10);
        creditValue = parseFloat(credit10);
      } else if (grade11 && credit11) {
        gradeValue = parseFloat(grade11);
        creditValue = parseFloat(credit11);
      } else if (grade12 && credit12) {
        gradeValue = parseFloat(grade12);
        creditValue = parseFloat(credit12);
      }

      if (!isNaN(gradeValue) && !isNaN(creditValue)) {
        totalGradeCreditProduct += gradeValue * creditValue;
        totalCredits += creditValue;
      }
    }

    const grandTotalGPA = totalCredits !== 0 ? totalGradeCreditProduct / totalCredits : 0;
    return grandTotalGPA.toFixed(2);
  };

  const selectedCourses =
    formDataG9 || formDataG10 || formDataG11 || formDataG12;

  const finalGPA = calculateGradeCreditProduct(selectedCourses);
  const grandFinalResult = finalGPA.toFixed(2);

  if (formDataG9 && formDataG10 && formDataG11 && formDataG12) {
    const GPAs = allData.map((formData) => calculateGradeCreditProduct(formData));
    const grandTotalGPA = GPAs.reduce((acc, gpa) => acc + gpa, 0) / allData.length;
    const overallGPA = calculateOverallGPA(allData);

    return {
      grade9result: GPAs[0].toFixed(2),
      grade10result: GPAs[1].toFixed(2),
      grade11result: GPAs[2].toFixed(2),
      grade12result: GPAs[3].toFixed(2),
      grandTotalGPA: grandTotalGPA.toFixed(2),
      satScore,
      grandOverallGPA: overallGPA,
      grandFinalResult,
    };
  } else if(formDataG9 && formDataG10 && formDataG11) {
    const GPAs = allData3.map((formData) => calculateGradeCreditProduct(formData));
    const grandTotalGPA = GPAs.reduce((acc, gpa) => acc + gpa, 0) / allData3.length;

    return {
      grade9result: GPAs[0].toFixed(2),
      grade10result: GPAs[1].toFixed(2),
      grade11result: GPAs[2].toFixed(2),
      grandTotalGPA: grandTotalGPA.toFixed(2),
      satScore,
      grandFinalResult,
    };
  }


  // ... (similar blocks for other cases)
};

const totalGPAforall = calculateGPA(selectedCourse);
console.log(totalGPAforall);




// Function to calculate overall GPA based on data for all grades
const calculateOverallGPA = (allDataOverall) => {
  // Using reduce to iterate over all grades and accumulate grade * credit products and total credits
  const totalGradeCreditProduct = allDataOverall.reduce((acc, data) => {
    // Initialize variables to store numeric values of grade and credit
    let gradeValue = 0, creditValue = 0;

    // Iterate over courses in the current grade's data
    for (let i = 0; i < data.length; i++) {
      // Destructuring to extract grade and credit values for each course
      const { grade9, credit9, grade10, credit10, grade11, credit11, grade12, credit12 } = data[i];

      // Check for the presence of grade and credit values and assign their parsed floating-point representations
      if (grade9 && credit9) {
        gradeValue = parseFloat(grade9);
        creditValue = parseFloat(credit9);
      } else if (grade10 && credit10) {
        gradeValue = parseFloat(grade10);
        creditValue = parseFloat(credit10);
      } else if (grade11 && credit11) {
        gradeValue = parseFloat(grade11);
        creditValue = parseFloat(credit11);
      } else if (grade12 && credit12) {
        gradeValue = parseFloat(grade12);
        creditValue = parseFloat(credit12);
      }

      // Check if both gradeValue and creditValue are valid numbers, then update the accumulator
      if (!isNaN(gradeValue) && !isNaN(creditValue)) {
        acc.gradeCreditProduct += gradeValue * creditValue;
        acc.totalCredits += creditValue;
      }
    }

    // Return the accumulator for the current grade's data
    return acc;
  }, { gradeCreditProduct: 0, totalCredits: 0 }); // Initial values for accumulator

  // Calculate overall GPA by dividing total grade * credit product by total credits (avoiding division by zero)
  const overallGPA = totalGradeCreditProduct.totalCredits !== 0
    ? totalGradeCreditProduct.gradeCreditProduct / totalGradeCreditProduct.totalCredits
    : 0;

  // Return the overall GPA rounded to two decimal places
  return overallGPA.toFixed(2);
};
