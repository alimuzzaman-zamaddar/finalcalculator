import ShowGrade from "../ShowResult/ShowGrade";
import "./GreadArea.css";
// eslint-disable-next-line react/prop-types
const GreadArea = ({selectedCourses,grandFinalResult}) => {

  
  const grades = selectedCourses;
  const result = grandFinalResult;

  console.log(grades,result)
  









  return (
    <>
      <div className="flex flex-wrap gread-area-border ">
        <div className="md:w-1/4 sm:w-1/2 w-full ">
          <div className=" grade9-border-redious bgorange pt-3 pb-3">
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
              <h4 className="">{grades[0]?.course ? grades[0].course : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[0]?.grade} > </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{grades[1]?.course ? grades[1].course : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[1]?.grade} > </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{grades[2]?.course ? grades[2].course : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[2]?.grade}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{grades[3]?.course ? grades[3].course : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[3]?.grade}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{grades[4]?.course ? grades[4].course : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[4]?.grade}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{grades[5]?.course ? grades[5].course : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[5]?.grade}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{grades[6]?.course ? grades[6].course : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[6]?.grade}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{grades[7]?.course ? grades[7].course : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[7]?.grade}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{grades[8]?.course ? grades[8].course : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[8]?.grade}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{grades[9]?.course ? grades[9].course : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[9]?.grade}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="font-bold text-xl">GPA </h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">{result && grades[0]?.grade ? result : "_____"}</h4>
            </div>
          </div>
        </div>
 

        <div className="md:w-1/4 sm:w-1/2 w-full">
          <div className=" bgorange  pt-3 pb-3">
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
              <h4 className="">{grades[0]?.course10 ? grades[0].course10 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
              <ShowGrade number={grades[0]?.grade10}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[1]?.course10 ? grades[1].course10 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[1]?.grade10}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[2]?.course10 ? grades[2].course10 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[2]?.grade10}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[3]?.course10 ? grades[3].course10 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[3]?.grade10}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[4]?.course10 ? grades[4].course10 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[4]?.grade10}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[5]?.course10 ? grades[5].course10 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[5]?.grade10}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[6]?.course10 ? grades[6].course10 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[6]?.grade10}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[7]?.course10 ? grades[7].course10 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[7]?.grade10}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[8]?.course10 ? grades[8].course10 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[8]?.grade10}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[9]?.course10 ? grades[9].course10 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[9]?.grade10}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="font-bold text-xl">GPA </h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">{result && grades[0]?.grade10 ? result : "_____"}</h4>
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
              <h4 className="">{grades[0]?.course11 ? grades[0].course11 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[0]?.grade11}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[1]?.course11 ? grades[1].course11 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[1]?.grade11}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[2]?.course11 ? grades[2].course11 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[2]?.grade11}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[3]?.course11 ? grades[3].course11 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[3]?.grade11}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[4]?.course11 ? grades[4].course11 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[4]?.grade11}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[5]?.course11 ? grades[5].course11 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[5]?.grade11}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[6]?.course11 ? grades[6].course11 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[6]?.grade11}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[7]?.course11 ? grades[7].course11 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[7]?.grade11}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[8]?.course11 ? grades[8].course11 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[8]?.grade11}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[9]?.course11 ? grades[9].course11 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={grades[9]?.grade11}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="font-bold text-xl">GPA </h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">{result && grades[0]?.grade11 ? result : "_____"}</h4>
            </div>
          </div>
        </div>

        <div className="md:w-1/4 sm:w-1/2 w-full">
          <div className=" bgorange grade12-border-redious pt-3 pb-3 ">
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
              <h4 className="">{grades[0]?.course12 ? grades[0].course12 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={grades[0]?.grade12}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[1]?.course12 ? grades[1].course12 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={grades[1]?.grade12}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[2]?.course12 ? grades[2].course12 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={grades[2]?.grade12}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[3]?.course12 ? grades[3].course12 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={grades[3]?.grade12}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[4]?.course12 ? grades[4].course12 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={grades[4]?.grade12}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[5]?.course12 ? grades[5].course12 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={grades[5]?.grade12}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[6]?.course12 ? grades[6].course12 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={grades[6]?.grade12}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[7]?.course12 ? grades[7].course12 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={grades[7]?.grade12}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[8]?.course12 ? grades[8].course12 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={grades[8]?.grade12}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{grades[9]?.course12 ? grades[9].course12 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={grades[9]?.grade12}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="font-bold text-xl">GPA </h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">{result && grades[0]?.grade12 ? result : "_____"}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GreadArea;
