import ShowGrade from "../ShowResult/ShowGrade";
import "./GreadArea.css";
// eslint-disable-next-line react/prop-types
const GreadArea = ({ selectedCourses, grandFinalResult9, grandFinalResult10, grandFinalResult11, grandFinalResult12 }) => {
  const gradeses = selectedCourses || {};
  const result = grandFinalResult9 || grandFinalResult10 || grandFinalResult11 || grandFinalResult12 || "";
  console.log(result)
  console.log(grandFinalResult9, grandFinalResult10, grandFinalResult11, grandFinalResult12)
  const { formDataG9 = [], formDataG10 = [], formDataG11 = [], formDataG12 = [] } = gradeses.allData || {};

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
              <h4 className="">{formDataG9[0]?.course9 ? formDataG9[0].course9 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG9[0]?.grade9} > </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{formDataG9[1]?.course9 ? formDataG9[1].course9 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG9[1]?.grade9} > </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{formDataG9[2]?.course9 ? formDataG9[2].course9 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG9[2]?.grade9}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{formDataG9[3]?.course9 ? formDataG9[3].course9 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG9[3]?.grade9}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{formDataG9[4]?.course9 ? formDataG9[4].course9 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG9[4]?.grade9}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{formDataG9[5]?.course9 ? formDataG9[5].course9 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG9[5]?.formDataG9}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{formDataG9[6]?.course9 ? formDataG9[6].course9 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG9[6]?.grade9}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{formDataG9[7]?.course9 ? formDataG9[7].course9 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG9[7]?.grade9}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{formDataG9[8]?.course9 ? formDataG9[8].course9 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG9[8]?.grade9}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="">{formDataG9[9]?.course9 ? formDataG9[9].course9 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG9[9]?.grade9}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="font-bold text-xl">GPA </h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">{grandFinalResult9 && formDataG9[0]?.grade9 ? grandFinalResult9 : "_____"}</h4>
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
              <h4 className="">{formDataG10[0]?.course10 ? formDataG10[0].course10 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
              <ShowGrade number={formDataG10[0]?.grade10}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG10[1]?.course10 ? formDataG10[1].course10 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG10[1]?.grade10}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG10[2]?.course10 ? formDataG10[2].course10 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG10[2]?.grade10}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG10[3]?.course10 ? formDataG10[3].course10 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG10[3]?.grade10}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG10[4]?.course10 ? formDataG10[4].course10 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG10[4]?.grade10}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG10[5]?.course10 ? formDataG10[5].course10 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG10[5]?.grade10}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG10[6]?.course10 ? formDataG10[6].course10 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG10[6]?.grade10}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG10[7]?.course10 ? formDataG10[7].course10 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG10[7]?.grade10}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG10[8]?.course10 ? formDataG10[8].course10 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG10[8]?.grade10}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG10[9]?.course10 ? formDataG10[9].course10 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG10[9]?.grade10}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="font-bold text-xl">GPA </h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">{grandFinalResult10 && formDataG10[0]?.grade10 ? grandFinalResult10 : "_____"}</h4>
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
              <h4 className="">{formDataG11[0]?.course11 ? formDataG11[0].course11 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG11[0]?.grade11}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG11[1]?.course11 ? formDataG11[1].course11 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG11[1]?.grade11}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG11[2]?.course11 ? formDataG11[2].course11 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG11[2]?.grade11}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG11[3]?.course11 ? formDataG11[3].course11 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG11[3]?.grade11}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG11[4]?.course11 ? formDataG11[4].course11 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG11[4]?.grade11}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG11[5]?.course11 ? formDataG11[5].course11 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG11[5]?.grade11}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG11[6]?.course11 ? formDataG11[6].course11 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG11[6]?.grade11}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG11[7]?.course11 ? formDataG11[7].course11 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG11[7]?.grade11}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG11[8]?.course11 ? formDataG11[8].course11 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG11[8]?.grade11}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG11[9]?.course11 ? formDataG11[9].course11 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">
                <ShowGrade number={formDataG11[9]?.grade11}> </ShowGrade>
              </h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="font-bold text-xl">GPA </h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">{grandFinalResult11 && formDataG11[0]?.grade11 ? grandFinalResult11 : "_____"}</h4>
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
              <h4 className="">{formDataG12[0]?.course12 ? formDataG12[0].course12 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={formDataG12[0]?.grade12}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG12[1]?.course12 ? formDataG12[1].course12 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={formDataG12[1]?.grade12}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG12[2]?.course12 ? formDataG12[2].course12 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={formDataG12[2]?.grade12}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG12[3]?.course12 ? formDataG12[3].course12 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={formDataG12[3]?.grade12}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG12[4]?.course12 ? formDataG12[4].course12 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={formDataG12[4]?.grade12}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG12[5]?.course12 ? formDataG12[5].course12 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={formDataG12[5]?.grade12}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG12[6]?.course12 ? formDataG12[6].course12 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={formDataG12[6]?.grade12}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG12[7]?.course12 ? formDataG12[7].course12 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={formDataG12[7]?.grade12}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG12[8]?.course12 ? formDataG12[8].course12 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={formDataG12[8]?.grade12}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms w-full flex  justify-between  px-4">
            <div className="w-3/4">
              <h4 className="">{formDataG12[9]?.course12 ? formDataG12[9].course12 : "" }</h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center"><ShowGrade number={formDataG12[9]?.grade12}> </ShowGrade></h4>
            </div>
          </div>
          <div className="cms flex  justify-between  px-4 w-full">
            <div className="w-3/4">
              <h4 className="font-bold text-xl">GPA </h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-center">{grandFinalResult12 && formDataG12[0]?.grade12 ? grandFinalResult12 : "_____"}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GreadArea;
