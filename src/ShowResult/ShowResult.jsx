import "./ShereResult";

import MyBackgroundImage from "../assets/line.png";

import { useLoaderData } from "react-router-dom"; // Import useParams from react-router-dom
import GreadArea from "../GreadArea/GreadArea";
import LineProg from "../LineProg/LineProg";
import CircularProgress from "../CircularProgress/CircularProgress";
import Swal from "sweetalert2";

const ShowResult = () => {
  const selectedCourse = useLoaderData();

  const selectedCourses =
    selectedCourse.formDataG9 ||
    selectedCourse.formDataG10 ||
    selectedCourse.formDataG11 ||
    selectedCourse.formDataG12;
  console.log(selectedCourses);
  const satScore = selectedCourse.satscore;
  console.log(satScore);

  const calculateGradeCreditProduct = (data) => {
    let totalGradeCreditProduct = 0;
    let totalCredits = 0;
  
    for (let i = 0; i < data.length; i++) {
      const { grade, credit, grade10, credit10, grade11, credit11, grade12, credit12 } = data[i];
  
      let gradeValue, creditValue;
  
      if (grade && credit) {
        gradeValue = parseFloat(grade);
        creditValue = parseFloat(credit);
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
  
    return grandTotalGPA;
  };
  

  const totaGPA = calculateGradeCreditProduct(selectedCourses);



  const grandFinalResult = totaGPA.toFixed(2);
  console.log(grandFinalResult);

  const copyURLToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Share Link Has Been Copied",
        showConfirmButton: false,
        timer: 1800,
      });
    } catch (error) {
      console.error("Unable to copy page URL:", error);
    }
  };

  return (
    <>
      <section className="gpa-sections max-w-7xl mx-auto mt-11 p-2  md:p-14">
        <section className="w-full flex justify-center  mb-12 ">
          <section className="progressbar-area grid-cols-1 items-center justify-center ">
            {satScore ? (
              <h1 className="pb-10  text-center">SAT Score : {satScore}</h1>
            ) : (
              " "
            )}
            <section className="progressbar  ">
              <CircularProgress
                grandFinalResult={grandFinalResult}
              ></CircularProgress>
            </section>
          </section>
        </section>

        <section className=" ">
          <section className="w-full flex justify-center md:mb-11 mb-6 ">
            <section className=" w-full grid-cols-1 items-center ">
              <section
                style={{
                  backgroundImage: `url(${MyBackgroundImage})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "232px",
                }}
                className="hg"
              >
                <LineProg grandFinalResult={grandFinalResult}></LineProg>
              </section>
            </section>
          </section>

          <section className="border">
            <GreadArea
              key={grandFinalResult}
              grandFinalResult={grandFinalResult}
              selectedCourses={selectedCourses}
            ></GreadArea>
          </section>
        </section>

        <div className="text-center mt-16">
          <button
            onClick={copyURLToClipboard}
            className="text-center text-xl  px-6 py-4 rounded-lg cursor-pointer  hover:bg-[#ED692A] duration-500  bg-[#21498B] text-white"
          >
            Share Result
          </button>
        </div>
      </section>
    </>
  );
};

export default ShowResult;
