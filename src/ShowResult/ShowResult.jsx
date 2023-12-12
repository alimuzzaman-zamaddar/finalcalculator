
import "./ShereResult";

import { useLoaderData } from "react-router-dom"; // Import useParams from react-router-dom
import GreadArea from "../GreadArea/GreadArea";
import LineProg from "../LineProg/LineProg";
import CircularProgress from "../CircularProgress/CircularProgress";
import Swal from "sweetalert2";


const ShowResult = () => {
  //   const { id } = useParams(); // Get the insertedId from route params





  const selectedCourse = useLoaderData();

  const {
    satScore,
    g9c1grade1point,
    g9c1cradit1,
    g9c2grade2point,
    g9c2cradit2,
    g9c3grade3point,
    g9c3cradit3,
    g9c4grade4point,
    g9c4cradit4,
    g9c5grade5point,
    g9c5cradit5,
    g9c6grade6point,
    g9c6cradit6,
    g9c7grade7point,
    g9c7cradit7,
    g9c8grade8point,
    g9c8cradit8,
    g9c9grade9point,
    g9c9cradit9,
    g9c10grade10point,
    g9c10cradit10,
    g10c1grade1point,
    g10c1cradit1,
    g10c2grade2point,
    g10c2cradit2,
    g10c3grade3point,
    g10c3cradit3,
    g10c4grade4point,
    g10c4cradit4,
    g10c5grade5point,
    g10c5cradit5,
    g10c6grade6point,
    g10c6cradit6,
    g10c7grade7point,
    g10c7cradit7,
    g10c8grade8point,
    g10c8cradit8,
    g10c9grade9point,
    g10c9cradit9,
    g10c10grade10point,
    g10c10cradit10,
    g11c1grade1point,
    g11c1cradit1,
    g11c2grade2point,
    g11c2cradit2,
    g11c3grade3point,
    g11c3cradit3,
    g11c4grade4point,
    g11c4cradit4,
    g11c5grade5point,
    g11c5cradit5,
    g11c6grade6point,
    g11c6cradit6,
    g11c7grade7point,
    g11c7cradit7,
    g11c8grade8point,
    g11c8cradit8,
    g11c9grade9point,
    g11c9cradit9,
    g11c10grade10point,
    g11c10cradit10,
    g12c1grade1point,
    g12c1cradit1,
    g12c2grade2point,
    g12c2cradit2,
    g12c3grade3point,
    g12c3cradit3,
    g12c4grade4point,
    g12c4cradit4,
    g12c5grade5point,
    g12c5cradit5,
    g12c6grade6point,
    g12c6cradit6,
    g12c7grade7point,
    g12c7cradit7,
    g12c8grade8point,
    g12c8cradit8,
    g12c9grade9point,
    g12c9cradit9,
    g12c10grade10point,
    g12c10cradit10,
  } = selectedCourse;

  const g9class1grade1 = parseFloat(g9c1grade1point) * parseFloat(g9c1cradit1);
  const g9class2grade2 = parseFloat(g9c2grade2point) * parseFloat(g9c2cradit2);
  const g9class3grade3 = parseFloat(g9c3grade3point) * parseFloat(g9c3cradit3);
  const g9class4grade4 = parseFloat(g9c4grade4point) * parseFloat(g9c4cradit4);
  const g9class5grade5 = parseFloat(g9c5grade5point) * parseFloat(g9c5cradit5);
  const g9class6grade6 = parseFloat(g9c6grade6point) * parseFloat(g9c6cradit6);
  const g9class7grade7 = parseFloat(g9c7grade7point) * parseFloat(g9c7cradit7);
  const g9class8grade8 = parseFloat(g9c8grade8point) * parseFloat(g9c8cradit8);
  const g9class9grade9 = parseFloat(g9c9grade9point) * parseFloat(g9c9cradit9);
  const g9class10grade10 =
    parseFloat(g9c10grade10point) * parseFloat(g9c10cradit10);

  const TotalQualityPointG9 =
    g9class1grade1 +
    g9class2grade2 +
    g9class3grade3 +
    g9class4grade4 +
    g9class5grade5 +
    g9class6grade6 +
    g9class7grade7 +
    g9class8grade8 +
    g9class9grade9 +
    g9class10grade10;

  const TotalQualityCraditG9 =
    parseFloat(g9c1cradit1) +
    parseFloat(g9c2cradit2) +
    parseFloat(g9c3cradit3) +
    parseFloat(g9c4cradit4) +
    parseFloat(g9c5cradit5) +
    parseFloat(g9c6cradit6) +
    parseFloat(g9c7cradit7) +
    parseFloat(g9c8cradit8) +
    parseFloat(g9c9cradit9) +
    parseFloat(g9c10cradit10);

  const Course9gpa = TotalQualityPointG9 / TotalQualityCraditG9;
  const Grade9FinalGPA = Course9gpa.toFixed(2);

  //    console.log(Grade9FinalGPA)
  const g10class1grade1 =
    parseFloat(g10c1grade1point) * parseFloat(g10c1cradit1);
  const g10class2grade2 =
    parseFloat(g10c2grade2point) * parseFloat(g10c2cradit2);
  const g10class3grade3 =
    parseFloat(g10c3grade3point) * parseFloat(g10c3cradit3);
  const g10class4grade4 =
    parseFloat(g10c4grade4point) * parseFloat(g10c4cradit4);
  const g10class5grade5 =
    parseFloat(g10c5grade5point) * parseFloat(g10c5cradit5);
  const g10class6grade6 =
    parseFloat(g10c6grade6point) * parseFloat(g10c6cradit6);
  const g10class7grade7 =
    parseFloat(g10c7grade7point) * parseFloat(g10c7cradit7);
  const g10class8grade8 =
    parseFloat(g10c8grade8point) * parseFloat(g10c8cradit8);
  const g10class9grade9 =
    parseFloat(g10c9grade9point) * parseFloat(g10c9cradit9);
  const g10class10grade10 =
    parseFloat(g10c10grade10point) * parseFloat(g10c10cradit10);
  //    console.log(g9class1grade1,g9c1grade1point,g9c1cradit1)

  const TotalQualityPointG10 =
    g10class1grade1 +
    g10class2grade2 +
    g10class3grade3 +
    g10class4grade4 +
    g10class5grade5 +
    g10class6grade6 +
    g10class7grade7 +
    g10class8grade8 +
    g10class9grade9 +
    g10class10grade10;

  const TotalQualityCraditG10 =
    parseFloat(g10c1cradit1) +
    parseFloat(g10c2cradit2) +
    parseFloat(g10c3cradit3) +
    parseFloat(g10c4cradit4) +
    parseFloat(g10c5cradit5) +
    parseFloat(g10c6cradit6) +
    parseFloat(g10c7cradit7) +
    parseFloat(g10c8cradit8) +
    parseFloat(g10c9cradit9) +
    parseFloat(g10c10cradit10);

  const Course10gpa = TotalQualityPointG10 / TotalQualityCraditG10;
  const Grade10FinalGPA = Course10gpa.toFixed(2);

  //    console.log(Grade10FinalGPA,Grade9FinalGPA)

  const g11class1grade1 =
    parseFloat(g11c1grade1point) * parseFloat(g11c1cradit1);
  const g11class2grade2 =
    parseFloat(g11c2grade2point) * parseFloat(g11c2cradit2);
  const g11class3grade3 =
    parseFloat(g11c3grade3point) * parseFloat(g11c3cradit3);
  const g11class4grade4 =
    parseFloat(g11c4grade4point) * parseFloat(g11c4cradit4);
  const g11class5grade5 =
    parseFloat(g11c5grade5point) * parseFloat(g11c5cradit5);
  const g11class6grade6 =
    parseFloat(g11c6grade6point) * parseFloat(g11c6cradit6);
  const g11class7grade7 =
    parseFloat(g11c7grade7point) * parseFloat(g11c7cradit7);
  const g11class8grade8 =
    parseFloat(g11c8grade8point) * parseFloat(g11c8cradit8);
  const g11class9grade9 =
    parseFloat(g11c9grade9point) * parseFloat(g11c9cradit9);
  const g11class10grade10 =
    parseFloat(g11c10grade10point) * parseFloat(g11c10cradit10);
  //    console.log(g9class1grade1,g9c1grade1point,g9c1cradit1)

  const TotalQualityPointGg11 =
    g11class1grade1 +
    g11class2grade2 +
    g11class3grade3 +
    g11class4grade4 +
    g11class5grade5 +
    g11class6grade6 +
    g11class7grade7 +
    g11class8grade8 +
    g11class9grade9 +
    g11class10grade10;

  const TotalQualityCraditGg11 =
    parseFloat(g11c1cradit1) +
    parseFloat(g11c2cradit2) +
    parseFloat(g11c3cradit3) +
    parseFloat(g11c4cradit4) +
    parseFloat(g11c5cradit5) +
    parseFloat(g11c6cradit6) +
    parseFloat(g11c7cradit7) +
    parseFloat(g11c8cradit8) +
    parseFloat(g11c9cradit9) +
    parseFloat(g11c10cradit10);

  const Course11gpa = TotalQualityPointGg11 / TotalQualityCraditGg11;
  const Gradeg11FinalGPA = Course11gpa.toFixed(2);

  //    console.log(Grade10FinalGPA,Grade9FinalGPA,Gradeg11FinalGPA)

  const g12class1grade1 =
    parseFloat(g12c1grade1point) * parseFloat(g12c1cradit1);
  const g12class2grade2 =
    parseFloat(g12c2grade2point) * parseFloat(g12c2cradit2);
  const g12class3grade3 =
    parseFloat(g12c3grade3point) * parseFloat(g12c3cradit3);
  const g12class4grade4 =
    parseFloat(g12c4grade4point) * parseFloat(g12c4cradit4);
  const g12class5grade5 =
    parseFloat(g12c5grade5point) * parseFloat(g12c5cradit5);
  const g12class6grade6 =
    parseFloat(g12c6grade6point) * parseFloat(g12c6cradit6);
  const g12class7grade7 =
    parseFloat(g12c7grade7point) * parseFloat(g12c7cradit7);
  const g12class8grade8 =
    parseFloat(g12c8grade8point) * parseFloat(g12c8cradit8);
  const g12class9grade9 =
    parseFloat(g12c9grade9point) * parseFloat(g12c9cradit9);
  const g12class10grade10 =
    parseFloat(g12c10grade10point) * parseFloat(g12c10cradit10);
  //    console.log(g9class1grade1,g9c1grade1point,g9c1cradit1)

  const TotalQualityPointGg12 =
    g12class1grade1 +
    g12class2grade2 +
    g12class3grade3 +
    g12class4grade4 +
    g12class5grade5 +
    g12class6grade6 +
    g12class7grade7 +
    g12class8grade8 +
    g12class9grade9 +
    g12class10grade10;

  const TotalQualityCraditGg12 =
    parseFloat(g12c1cradit1) +
    parseFloat(g12c2cradit2) +
    parseFloat(g12c3cradit3) +
    parseFloat(g12c4cradit4) +
    parseFloat(g12c5cradit5) +
    parseFloat(g12c6cradit6) +
    parseFloat(g12c7cradit7) +
    parseFloat(g12c8cradit8) +
    parseFloat(g12c9cradit9) +
    parseFloat(g12c10cradit10);

  const Course12gpa = TotalQualityPointGg12 / TotalQualityCraditGg12;
  const Gradeg12FinalGPA = Course12gpa.toFixed(2);

  console.log(
    Grade10FinalGPA,
    Grade9FinalGPA,
    Gradeg11FinalGPA,
    Gradeg12FinalGPA
  );

  const averageTotal =
    parseFloat(Grade10FinalGPA) +
    parseFloat(Grade9FinalGPA) +
    parseFloat(Gradeg11FinalGPA) +
    parseFloat(Gradeg12FinalGPA);

  const avarage = averageTotal / 4;
  const finalAvarage = avarage.toFixed(2);




  const copyURLToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      console.log('Page URL copied to clipboard:', window.location.href);
      Swal.fire("SUCCESS", "YOUR RESULT IS READY TO SHERE", "success");
    } catch (error) {
      console.error('Unable to copy page URL:', error);
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
                finalAvarage={finalAvarage}
              ></CircularProgress>
            </section>
          </section>
        </section>

        <section className=" ">
          <section className="w-full flex justify-center md:mb-11 mb-6 ">
            <section className=" w-full grid-cols-1 items-center ">
              <section className="hg bgpic ">
                <LineProg finalAvarage={finalAvarage}></LineProg>
              </section>
            </section>
          </section>

          <section className="border">
            <GreadArea
              Grade9FinalGPA={Grade9FinalGPA}
              Grade10FinalGPA={Grade10FinalGPA}
              Gradeg11FinalGPA={Gradeg11FinalGPA}
              Gradeg12FinalGPA={Gradeg12FinalGPA}
              selectedCourse={selectedCourse}
            ></GreadArea>
          </section>
        </section>

        <div className="text-center mt-16">
          <button onClick={copyURLToClipboard} className="text-center px-6 py-4 rounded-lg cursor-pointer  hover:bg-[#0b111c] duration-500  bg-[#21498B] text-white">Share Result
          </button>
        </div>
      </section>
    </>
  );
};

export default ShowResult;
