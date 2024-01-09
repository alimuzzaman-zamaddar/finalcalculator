import "./ShereResult";

import MyBackgroundImage from "../assets/line.png";

import { useLoaderData } from "react-router-dom"; // Import useParams from react-router-dom
import GreadArea from "../GreadArea/GreadArea";
import LineProg from "../LineProg/LineProg";
import CircularProgress from "../CircularProgress/CircularProgress";
import Swal from "sweetalert2";

const ShowResult = () => {
  const  selectedCourse =useLoaderData();

  const calculateGPA = (selectedCourse) => {
    const { formDataG9, formDataG10, formDataG11, formDataG12 } = selectedCourse.allData;
  
    const allData = [formDataG9, formDataG10, formDataG11, formDataG12];
    const allData3 = [formDataG9, formDataG10, formDataG11];
    const allData2 = [formDataG9, formDataG10];
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
      return grandTotalGPA;
    };
  
    const selectedCourses =
      formDataG9 || formDataG10 || formDataG11 || formDataG12;
  
    const finalGPA = calculateGradeCreditProduct(selectedCourses);
    const grandFinalResult = finalGPA.toFixed(2);
  
    if (formDataG9 && formDataG10 && formDataG11 && formDataG12) {
      const GPAs = allData.map((formData) => calculateGradeCreditProduct(formData));
  
      return {
        grade9result: GPAs[0].toFixed(2),
        grade10result: GPAs[1].toFixed(2),
        grade11result: GPAs[2].toFixed(2),
        grade12result: GPAs[3].toFixed(2),
        satScore,
        grandFinalResult
      };
    } else if(formDataG9 && formDataG10 && formDataG11) {
      const GPAs = allData3.map((formData) => calculateGradeCreditProduct(formData));
      return {
        grade9result: GPAs[0].toFixed(2),
        grade10result: GPAs[1].toFixed(2),
        grade11result: GPAs[2].toFixed(2),
        satScore,
      };
    }else if(formDataG9 && formDataG10 ){
      const GPAs = allData2.map((formData) => calculateGradeCreditProduct(formData));
      return {
        grade9result: GPAs[0].toFixed(2),
        grade10result: GPAs[1].toFixed(2),
        satScore,
      };
    }else if(formDataG9){
      const GPAs = allData9.map((formData) => calculateGradeCreditProduct(formData));
      return {
        grade9result: GPAs[0].toFixed(2),
        satScore,
      };
    }else if (formDataG10){
      const GPAs = allData10.map((formData) => calculateGradeCreditProduct(formData));
      return {
        grade10result: GPAs[0].toFixed(2),
        satScore,
      };
    }else if(formDataG11){
      const GPAs = allData11.map((formData) => calculateGradeCreditProduct(formData));
      return {
        grade11result: GPAs[0].toFixed(2),
        satScore,
      };
    }else if(formDataG12){
      const GPAs = allData12.map((formData) => calculateGradeCreditProduct(formData));
      return {
        grade12result: GPAs[0].toFixed(2),
        satScore,
      };
    }

  };
  const totalGPAforall = calculateGPA(selectedCourse);
  console.log(totalGPAforall);
 






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
            {totalGPAforall?.satScore ? (
              <h1 className="pb-10  text-center">
                SAT Score : {totalGPAforall.satScore}
              </h1>
            ) : (
              " "
            )}
            <section className="progressbar  ">
              <CircularProgress
                grandFinalResult={
                  totalGPAforall.grade9result ||
                  totalGPAforall.grade10result ||
                  totalGPAforall.grade11result ||
                  totalGPAforall.grade12result ||
                  ""
                }
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
                <LineProg
                  grandFinalResult={
                    totalGPAforall.grade9result ||
                    totalGPAforall.grade10result ||
                    totalGPAforall.grade11result ||
                    totalGPAforall.grade12result ||
                    ""
                  }
                ></LineProg>
              </section>
            </section>
          </section>

          <section className="border">
            <GreadArea
              key={totalGPAforall.grade9result} // Use a specific property for the key
              grandFinalResult9={totalGPAforall.grade9result} // Pass a specific property
              grandFinalResult10={totalGPAforall.grade10result} // Pass a specific property
              grandFinalResult11={totalGPAforall.grade11result} // Pass a specific property
              grandFinalResult12={totalGPAforall.grade12result} // Pass a specific property
              selectedCourses={selectedCourse}
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
