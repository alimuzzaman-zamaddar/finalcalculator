import ShowGrade from "../ShowResult/ShowGrade";
import "./GreadArea.css";
const GreadArea = (selectedCourse) => {
  const grades = selectedCourse.selectedCourse;
  console.log(grades);
  const {
    g9c1course1name,
    g9c1grade1point,
    g9c2course2name,
    g9c2grade2point,
    g9c3course3name,
    g9c4course4name,
    g9c5course5name,
    g9c6course6name,
    g9c7course7name,
    g9c8course8name,
    g9c9course9name,
    g9c10course10name,
    g9c3grade3point,
    g9c4grade4point,
    g9c5grade5point,
    g9c6grade6point,
    g9c7grade7point,
    g9c8grade8point,
    g9c9grade9point,
    g9c10grade10point,
    g10c1course1name,
    g10c2course2name,
    g10c3course3name,
    g10c4course4name,
    g10c5course5name,
    g10c7course7name,
    g10c6course6name,
    g10c8course8name,
    g10c9course9name,
    g10c10course10name,
    g10c1grade1point,
    g10c2grade2point,
    g10c3grade3point,
    g10c4grade4point,
    g10c5grade5point,
    g10c6grade6point,
    g10c7grade7point,
    g10c8grade8point,
    g10c9grade9point,
    g10c10grade10point,
    g11c1course1name,
    g11c2course2name,
    g11c3course3name,
    g11c4course4name,
    g11c5course5name,
    g11c6course6name,
    g11c7course7name,
    g11c8course8name,
    g11c9course9name,
    g11c10course10name,
    g11c1grade1point,
    g11c2grade2point,
    g11c3grade3point,
    g11c4grade4point,
    g11c5grade5point,
    g11c6grade6point,
    g11c7grade7point,
    g11c8grade8point,
    g11c9grade9point,
    g11c10grade10point,


    g12c1course1name,
    g12c2course2name,
    g12c3course3name,
    g12c4course4name,
    g12c5course5name,
    g12c6course6name,
    g12c7course7name,
    g12c8course8name,
    g12c9course9name,
    g12c10course10name,



    g12c1grade1point,
    g12c2grade2point,
    g12c3grade3point,
    g12c4grade4point,
    g12c5grade5point,
    g12c6grade6point,
    g12c7grade7point,
    g12c8grade8point,
    g12c9grade9point,
    g12c10grade10point,
   
  } = grades;

  return (
    <>
      <div className="flex flex-wrap gread-area-border ">
        <div className="md:w-1/4 sm:w-1/2 w-full  ">
          <div className="  bgorange pt-3 pb-3">
            <h1 className="text-center">Grade 9 </h1>
          </div>

          <div className="cm w-full flex   justify-between  px-4">
            <div className="w-3/4">
              <h4>Course</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">Marks</h4>
            </div>
          </div>

          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{g9c1course1name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                {" "}
                <ShowGrade number={g9c1grade1point}> </ShowGrade>{" "}
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{g9c2course2name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                {" "}
                <ShowGrade number={g9c2grade2point}> </ShowGrade>{" "}
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{g9c3course3name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g9c3grade3point}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{g9c4course4name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g9c4grade4point}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{g9c5course5name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g9c5grade5point}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{g9c6course6name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g9c6grade6point}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{g9c7course7name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g9c7grade7point}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{g9c8course8name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g9c8grade8point}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{g9c9course9name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g9c9grade9point}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{g9c10course10name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g9c10grade10point}> </ShowGrade>
              </h4>
            </div>
          </div>
        </div>

        <div className="md:w-1/4 sm:w-1/2 w-full">
          <div className=" bgorange pt-3 pb-3">
            <h1 className="text-center">Grade 10 </h1>
          </div>

          <div className="cm w-full flex justify-between   px-4">
            <div className="w-3/4">
              <h4>Course</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">Marks</h4>
            </div>
          </div>

          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g10c1course1name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g10c1grade1point}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g10c2course2name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g10c2grade2point}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g10c3course3name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g10c3grade3point}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g10c4course4name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g10c4grade4point}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g10c5course5name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g10c5grade5point}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g10c6course6name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g10c6grade6point}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g10c7course7name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g10c7grade7point}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g10c8course8name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g10c8grade8point}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g10c9course9name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g10c9grade9point}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g10c10course10name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g10c10grade10point}> </ShowGrade>
              </h4>
            </div>
          </div>
        </div>
        <div className="md:w-1/4 sm:w-1/2 w-full">
          <div className=" bgorange pt-3 pb-3">
            <h1 className="text-center">Grade 11 </h1>
          </div>

          <div className="cm w-full flex justify-between   px-4">
            <div className="w-3/4">
              <h4>Course</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">Marks</h4>
            </div>
          </div>

          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g11c1course1name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g11c1grade1point}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g11c2course2name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g11c2grade2point}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g11c3course3name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g11c3grade3point}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g11c4course4name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g11c4grade4point}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g11c5course5name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g11c5grade5point}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g11c6course6name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g11c6grade6point}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g11c7course7name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g11c7grade7point}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g11c8course8name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g11c8grade8point}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g11c9course9name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g11c9grade9point}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g11c10course10name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={g11c10grade10point}> </ShowGrade>
              </h4>
            </div>
          </div>
        </div>

        <div className="md:w-1/4 sm:w-1/2 w-full">
          <div className=" bgorange pt-3 pb-3">
            <h1 className="text-center">Grade 12 </h1>
          </div>

          <div className="cm w-full flex justify-between   px-4">
            <div className="w-3/4">
              <h4>Course</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">Marks</h4>
            </div>
          </div>

          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g12c1course1name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={g12c1grade1point}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g12c2course2name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={g12c2grade2point}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g12c3course3name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={g12c3grade3point}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g12c4course4name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={g12c4grade4point}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g12c5course5name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={g12c5grade5point}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g12c6course6name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={g12c6grade6point}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g12c7course7name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={g12c7grade7point}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g12c8course8name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={g12c8grade8point}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g12c9course9name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={g12c9grade9point}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{g12c10course10name}</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={g12c10grade10point}> </ShowGrade></h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GreadArea;
