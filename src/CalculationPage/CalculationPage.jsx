("use client");
import { Tabs } from "flowbite-react";
import "./CalculationPage.css";
import Swal from "sweetalert2";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Accordion } from "flowbite-react";

const CalculationPage = () => {
  const [requiredFields, setRequiredFields] = useState({
    g9c1subject1: false,
    g9c1grade1: false,
    g9c1cradit1: false,
    g9c2subject2: false,
    g9c2grade2: false,
    g9c2cradit2: false,
    g9c3subject3: false,
    g9c3grade3: false,
    g9c3cradit3: false,
    g9c4subject4: false,
    g9c4grade4: false,
    g9c4cradit4: false,
    g9c5subject5: false,
    g9c5grade5: false,
    g9c5cradit5: false,
    g9c6subject6: false,
    g9c6grade6: false,
    g9c6cradit6: false,
    g9c7subject7: false,
    g9c7grade7: false,
    g9c7cradit7: false,
    g9c8subject8: false,
    g9c8grade8: false,
    g9c8cradit8: false,
    g9c9subject9: false,
    g9c9grade9: false,
    g9c9cradit9: false,
    g9c10subject10: false,
    g9c10grade10: false,
    g9c10cradit10: false,

    g10c1subject1: false,
    g10c1grade1: false,
    g10c1cradit1: false,
    g10c2subject2: false,
    g10c2grade2: false,
    g10c2cradit2: false,
    g10c3subject3: false,
    g10c3grade3: false,
    g10c3cradit3: false,
    g10c4subject4: false,
    g10c4grade4: false,
    g10c4cradit4: false,
    g10c5subject5: false,
    g10c5grade5: false,
    g10c5cradit5: false,
    g10c6subject6: false,
    g10c6grade6: false,
    g10c6cradit6: false,
    g10c7subject7: false,
    g10c7grade7: false,
    g10c7cradit7: false,
    g10c8subject8: false,
    g10c8grade8: false,
    g10c8cradit8: false,
    g10c9subject9: false,
    g10c9grade9: false,
    g10c9cradit9: false,
    g10c10subject10: false,
    g10c10grade10: false,
    g10c10cradit10: false,

    g11c1subject1: false,
    g11c1grade1: false,
    g11c1cradit1: false,
    g11c2subject2: false,
    g11c2grade2: false,
    g11c2cradit2: false,
    g11c3subject3: false,
    g11c3grade3: false,
    g11c3cradit3: false,
    g11c4subject4: false,
    g11c4grade4: false,
    g11c4cradit4: false,
    g11c5subject5: false,
    g11c5grade5: false,
    g11c5cradit5: false,
    g11c6subject6: false,
    g11c6grade6: false,
    g11c6cradit6: false,
    g11c7subject7: false,
    g11c7grade7: false,
    g11c7cradit7: false,
    g11c8subject8: false,
    g11c8grade8: false,
    g11c8cradit8: false,
    g11c9subject9: false,
    g11c9grade9: false,
    g11c9cradit9: false,
    g11c10subject10: false,
    g11c10grade10: false,
    g11c10cradit10: false,

    g12c1subject1: false,
    g12c1grade1: false,
    g12c1cradit1: false,
    g12c2subject2: false,
    g12c2grade2: false,
    g12c2cradit2: false,
    g12c3subject3: false,
    g12c3grade3: false,
    g12c3cradit3: false,
    g12c4subject4: false,
    g12c4grade4: false,
    g12c4cradit4: false,
    g12c5subject5: false,
    g12c5grade5: false,
    g12c5cradit5: false,
    g12c6subject6: false,
    g12c6grade6: false,
    g12c6cradit6: false,
    g12c7subject7: false,
    g12c7grade7: false,
    g12c7cradit7: false,
    g12c8subject8: false,
    g12c8grade8: false,
    g12c8cradit8: false,
    g12c9subject9: false,
    g12c9grade9: false,
    g12c9cradit9: false,
    g12c10subject10: false,
    g12c10grade10: false,
    g12c10cradit10: false,
  });

  const handleCourseNameChangeG9 = (e, courseNumber) => {
    const fieldPrefix = `g9c${courseNumber}`;
    const subjectField = `${fieldPrefix}subject${courseNumber}`;
    const gradeField = `${fieldPrefix}grade${courseNumber}`;
    const creditField = `${fieldPrefix}cradit${courseNumber}`;

    if (e.target.value.trim() !== "") {
      setRequiredFields({
        ...requiredFields,
        [subjectField]: true,
        [gradeField]: true,
        [creditField]: true,
      });
    } else {
      setRequiredFields({
        ...requiredFields,
        [subjectField]: false,
        [gradeField]: false,
        [creditField]: false,
      });
    }
  };
  const handleCourseNameChangeG10 = (e, courseNumber) => {
    const fieldPrefix = `g10c${courseNumber}`;
    const subjectField = `${fieldPrefix}subject${courseNumber}`;
    const gradeField = `${fieldPrefix}grade${courseNumber}`;
    const creditField = `${fieldPrefix}cradit${courseNumber}`;

    if (e.target.value.trim() !== "") {
      setRequiredFields({
        ...requiredFields,
        [subjectField]: true,
        [gradeField]: true,
        [creditField]: true,
      });
    } else {
      setRequiredFields({
        ...requiredFields,
        [subjectField]: false,
        [gradeField]: false,
        [creditField]: false,
      });
    }
  };
  const handleCourseNameChangeG11 = (e, courseNumber) => {
    const fieldPrefix = `g11c${courseNumber}`;
    const subjectField = `${fieldPrefix}subject${courseNumber}`;
    const gradeField = `${fieldPrefix}grade${courseNumber}`;
    const creditField = `${fieldPrefix}cradit${courseNumber}`;

    if (e.target.value.trim() !== "") {
      setRequiredFields({
        ...requiredFields,
        [subjectField]: true,
        [gradeField]: true,
        [creditField]: true,
      });
    } else {
      setRequiredFields({
        ...requiredFields,
        [subjectField]: false,
        [gradeField]: false,
        [creditField]: false,
      });
    }
  };
  const handleCourseNameChangeG12 = (e, courseNumber) => {
    const fieldPrefix = `g12c${courseNumber}`;
    const subjectField = `${fieldPrefix}subject${courseNumber}`;
    const gradeField = `${fieldPrefix}grade${courseNumber}`;
    const creditField = `${fieldPrefix}cradit${courseNumber}`;

    if (e.target.value.trim() !== "") {
      setRequiredFields({
        ...requiredFields,
        [subjectField]: true,
        [gradeField]: true,
        [creditField]: true,
      });
    } else {
      setRequiredFields({
        ...requiredFields,
        [subjectField]: false,
        [gradeField]: false,
        [creditField]: false,
      });
    }
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formInputs = e.target.elements;
    const satscore = formInputs.satScore.value;
    const allData = {};
  
    for (let grade = 9; grade <= 12; grade++) {
      const courses = [];
  
      for (let i = 1; i <= 10; i++) {
        const courseInput = formInputs[`g${grade}c${i}course${i}`]?.value.trim();
        const subjectInput = formInputs[`g${grade}c${i}subject${i}`]?.value.trim();
        const gradeInput = formInputs[`g${grade}c${i}grade${i}`]?.value.trim();
        const creditInput = formInputs[`g${grade}c${i}cradit${i}`]?.value.trim();
  
        if (courseInput || subjectInput || gradeInput || creditInput) {
          const courseData = {
            [`course${grade}`]: courseInput,
            [`subject${grade}`]: subjectInput,
            [`grade${grade}`]: gradeInput,
            [`credit${grade}`]: creditInput,
          };
  
          // Add courseData to courses if any field has a value
          if (Object.values(courseData).some((value) => value !== '')) {
            courses.push(courseData);
          }
        }
      }
  
      if (courses.length > 0) {
        allData[`formDataG${grade}`] = courses;
      }
    }
  
    try {
      const response = await fetch('https://gpacalulatorserver.vercel.app/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ allData, satscore }),
      });
  
      const data = await response.json();
  
      if (data.insertedId) {
        Swal.fire('SUCCESS', 'Your GPA is Calculating', 'success');
        window.location.href = `/courses/${data.insertedId}`;
      } else {
        Swal.fire('ERROR', 'Failed to retrieve ID', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire('ERROR', 'Failed to fetch data', 'error');
    }
  };
  

  const [satCompleted, setSatCompleted] = useState("");

  const handleRadioChange = (e) => {
    setSatCompleted(e.target.value);
  };
  return (
    <div className="md:w-[1140px] p-5 mx-auto pt-16">
      <div className="my-24 relative">
        <Accordion collapseAll>
          <Accordion.Panel>
            <Accordion.Title>What is a Core Course?</Accordion.Title>
            <Accordion.Content>
              <div className="">
                <h3 className="font-bold">
                  An NCAA-approved core course must meet the following
                  requirements :
                </h3>
                <p className="font-bold mb-6">
                  Is a four-year college preparatory course in one or these
                  subject areas :
                </p>
                <ul className="ps-7 pr-4 pb-4"> 
                  <li>-English</li>
                  <li>-World</li>
                  <li>-Language</li>
                  <li>-Math (Algebra I or higher)</li>
                  <li>-Social Science</li>
                  <li>-Religion or Philosophy</li>
                  <li>Is taught by a qualified instructor.</li>
                  <li>
                    Is taught at or above your high schools regular academic
                    level.
                  </li>
                  <li>
                    You receive credit toward high school graduation and the
                    course appears on an official transcript with course title,
                    grade and credit awarded.
                  </li>
                  <li>Courses that ARE NOT NCAA-approved</li>
                  <li>
                    Is in a noncore area, such as driver education. typing, art,
                    music, physical education or welding Prepares you for work
                    or life, or for a two-year college or technical school, such
                    as personal tinance. consumer education or tech prep.
                  </li>
                  <li>
                    Is tauølt below grade level. at a slower pace or with less
                    rigour or depth. such as basic, essential, fundamental. or
                    foundational courses.
                  </li>
                  <li>Is a credit-by-exam course.</li>
                </ul>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
      <div className="md:px-[87px] md:py-[90px] px-[20px] py-[20px]  box-shadow-class">
      <form onSubmit={handleFormSubmit}>
        <Tabs style="underline">
          <Tabs.Item ring-0 active title="Grade - 9">

              <div className="md:md:flex  justify-between md:gap-8">
                <div className="md:w-1/4 relative  ">
                  <input
                    className="py-3 px-[18px] mb-6 bg-[#FDF0EA] border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c1course1"
                    id="g9c1course1"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG9(e, 1)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <div className="relative">
                    <select
                      className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-full pr-8"
                      name="g9c1subject1"
                      id="g9c1subject1"
                      required={requiredFields.g9c1subject1}
                    >
                      <option value="">Select Subject</option>
                      <option value="English">English</option>
                      <option value="Math">Math (Algebra I or higher)</option>
                      <option value="Science">Science</option>
                      <option value="Language">Language</option>
                      <option value="Social">Social</option>
                      <option value="Comparative">Comparative</option>
                      <option value="Religion or Philosophy">
                        Religion or Philosophy
                      </option>
                    </select>
                    <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                      <FaAngleDown className="text-[#1D2939]" />
                    </div>
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c1grade1"
                    id="g9c1grade1"
                    required={requiredFields.g9c1grade1}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c1cradit1"
                    id="g9c1cradit1"
                    required={requiredFields.g9c1cradit1}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25 </option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c2course2"
                    id="g9c2course2"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG9(e, 2)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c2subject2"
                    id="g9c2subject2"
                    required={requiredFields.g9c2subject2}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c2grade2"
                    id="g9c2grade2"
                    required={requiredFields.g9c2grade2}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c2cradit2"
                    id="g9c2cradit2"
                    required={requiredFields.g9c2cradit2}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c3course3"
                    id="g9c3course3"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG9(e, 3)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c3subject3"
                    id="g9c3subject3"
                    required={requiredFields.g9c3subject3}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c3grade3"
                    id="g9c3grade3"
                    required={requiredFields.g9c3grade3}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c3cradit3"
                    id="g9c3cradit3"
                    required={requiredFields.g9c3cradit3}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c4course4"
                    id="g9c4course4"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG9(e, 4)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c4subject4"
                    id="g9c4subject4"
                    required={requiredFields.g9c4subject4}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c4grade4"
                    id="g9c4grade4"
                    required={requiredFields.g9c4grade4}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c4cradit4"
                    id="g9c4cradit4"
                    required={requiredFields.g9c4cradit4}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:md:flex justify-between gap-8">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c5course5"
                    id="g9c5course5"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG9(e, 5)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c5subject5"
                    id="g9c5subject5"
                    required={requiredFields.g9c5subject5}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c5grade5"
                    id="g9c5grade5"
                    required={requiredFields.g9c5grade5}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c5cradit5"
                    id="g9c5cradit5"
                    required={requiredFields.g9c5cradit5}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c6course6"
                    id="g9c6course6"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG9(e, 6)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c6subject6"
                    id="g9c6subject6"
                    required={requiredFields.g9c6subject6}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c6grade6"
                    id="g9c6grade6"
                    required={requiredFields.g9c6grade6}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c6cradit6"
                    id="g9c6cradit6"
                    required={requiredFields.g9c6cradit6}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c7course7"
                    id="g9c7course7"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG9(e, 7)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c7subject7"
                    id="g9c7subject7"
                    required={requiredFields.g9c7subject7}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c7grade7"
                    id="g9c7grade7"
                    required={requiredFields.g9c7grade7}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6   border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c7cradit7"
                    id="g9c7cradit7"
                    required={requiredFields.g9c7cradit7}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c8course8"
                    id="g9c8course8"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG9(e, 8)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c8subject8"
                    id="g9c8subject8"
                    required={requiredFields.g9c8subject8}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c8grade8"
                    id="g9c8grade8"
                    required={requiredFields.g9c8grade8}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c8cradit8"
                    id="g9c8cradit8"
                    required={requiredFields.g9c8cradit8}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:md:flex justify-between gap-8">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c9course9"
                    id="g9c9course9"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG9(e, 9)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c9subject9"
                    id="g9c9subject9"
                    required={requiredFields.g9c9subject9}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c9grade9"
                    id="g9c9grade9"
                    required={requiredFields.g9c9grade9}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c9cradit9"
                    id="g9c9cradit9"
                    required={requiredFields.g9c9cradit9}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:md:flex justify-between gap-8">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c10course10"
                    id="g9c10course10"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG9(e, 10)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c10subject10"
                    id="g9c10subject10"
                    required={requiredFields.g9c10subject10}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c10grade10"
                    id="g9c10grade10"
                    required={requiredFields.g9c10grade10}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g9c10cradit10"
                    id="g9c10cradit10"
                    required={requiredFields.g9c10cradit10}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
          </Tabs.Item>
          <Tabs.Item title="Grade - 10">
              <div className="md:md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c1course1"
                    id="g10c1course1"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG10(e, 1)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c1subject1"
                    id="g10c1subject1"
                    required={requiredFields.g10c1subject1}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c1grade1"
                    id="g10c1grade1"
                    required={requiredFields.g10c1grade1}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c1cradit1"
                    id="g10c1cradit1"
                    required={requiredFields.g10c1cradit1}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:md:flex justify-between gap-8">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c2course2"
                    id="g10c2course2"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG10(e, 2)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c2subject2"
                    id="g10c2subject2"
                    required={requiredFields.g10c2subject2}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c2grade2"
                    id="g10c2grade2"
                    required={requiredFields.g10c2grade2}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c2cradit2"
                    id="g10c2cradit2"
                    required={requiredFields.g10c2cradit2}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:md:flex justify-between gap-8">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c3course3"
                    id="g10c3course3"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG10(e, 3)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c3subject3"
                    id="g10c3subject3"
                    required={requiredFields.g10c3subject3}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c3grade3"
                    id="g10c3grade3"
                    required={requiredFields.g10c3grade3}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c3cradit3"
                    id="g10c3cradit3"
                    required={requiredFields.g10c3cradit3}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c4course4"
                    id="g10c4course4"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG10(e, 4)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c4subject4"
                    id="g10c4subject4"
                    required={requiredFields.g10c4subject4}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c4grade4"
                    id="g10c4grade4"
                    required={requiredFields.g10c4grade4}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c4cradit4"
                    id="g10c4cradit4"
                    required={requiredFields.g10c4cradit4}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c5course5"
                    id="g10c5course5"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG10(e, 5)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c5subject5"
                    id="g10c5subject5"
                    required={requiredFields.g10c5subject5}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c5grade5"
                    id="g10c5grade5"
                    required={requiredFields.g10c5grade5}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c5cradit5"
                    id="g10c5cradit5"
                    required={requiredFields.g10c5cradit5}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c6course6"
                    id="g10c6course6"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG10(e, 6)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c6subject6"
                    id="g10c6subject6"
                    required={requiredFields.g10c6subject6}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c6grade6"
                    id="g10c6grade6"
                    required={requiredFields.g10c6grade6}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c6cradit6"
                    id="g10c6cradit6"
                    required={requiredFields.g10c6cradit6}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c7course7"
                    id="g10c7course7"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG10(e, 7)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c7subject7"
                    id="g10c7subject7"
                    required={requiredFields.g10c7subject7}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c7grade7"
                    id="g10c7grade7"
                    required={requiredFields.g10c7grade7}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c7cradit7"
                    id="g10c7cradit7"
                    required={requiredFields.g10c7cradit7}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c8course8"
                    id="g10c8course8"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG10(e, 8)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c8subject8"
                    id="g10c8subject8"
                    required={requiredFields.g10c8subject8}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c8grade8"
                    id="g10c8grade8"
                    required={requiredFields.g10c8grade8}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c8cradit8"
                    id="g10c8cradit8"
                    required={requiredFields.g10c8cradit8}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c9course9"
                    id="g10c9course9"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG10(e, 9)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c9subject9"
                    id="g10c9subject9"
                    required={requiredFields.g10c9subject9}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c9grade9"
                    id="g10c9grade9"
                    required={requiredFields.g10c9grade9}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c8cradit8"
                    id="g10c8cradit8"
                    required={requiredFields.g10c9cradit9}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c10course10"
                    id="g10c10course10"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG10(e, 10)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c10subject10"
                    id="g10c10subject10"
                    required={requiredFields.g10c10subject10}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c10grade10"
                    id="g10c10grade10"
                    required={requiredFields.g10c10grade10}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g10c10cradit10"
                    id="g10c10cradit10"
                    required={requiredFields.g10c10cradit10}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
          </Tabs.Item>
          <Tabs.Item title="Grade - 11">
              <div className="md:md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c1course1"
                    id="g11c1course1"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG11(e, 1)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c1subject1"
                    id="g11c1subject1"
                    required={requiredFields.g11c1subject1}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c1grade1"
                    id="g11c1grade1"
                    required={requiredFields.g11c1grade1}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c1cradit1"
                    id="g11c1cradit1"
                    required={requiredFields.g11c1cradit1}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:md:flex justify-between gap-8">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c2course2"
                    id="g11c2course2"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG11(e, 2)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c2subject2"
                    id="g11c2subject2"
                    required={requiredFields.g11c2subject2}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c2grade2"
                    id="g11c2grade2"
                    required={requiredFields.g11c2grade2}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c2cradit2"
                    id="g11c2cradit2"
                    required={requiredFields.g11c2cradit2}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:md:flex justify-between gap-8">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c3course3"
                    id="g11c3course3"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG11(e, 3)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c3subject3"
                    id="g11c3subject3"
                    required={requiredFields.g11c3subject3}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c3grade3"
                    id="g11c3grade3"
                    required={requiredFields.g11c3grade3}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c3cradit3"
                    id="g11c3cradit3"
                    required={requiredFields.g11c3cradit3}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c4course4"
                    id="g11c4course4"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG11(e, 4)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c4subject4"
                    id="g11c4subject4"
                    required={requiredFields.g11c4subject4}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c4grade4"
                    id="g11c4grade4"
                    required={requiredFields.g11c4grade4}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c4cradit4"
                    id="g11c4cradit4"
                    required={requiredFields.g11c4cradit4}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c5course5"
                    id="g11c5course5"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG11(e, 5)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c5subject5"
                    id="g11c5subject5"
                    required={requiredFields.g11c5subject5}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c5grade5"
                    id="g11c5grade5"
                    required={requiredFields.g11c5grade5}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c5cradit5"
                    id="g11c5cradit5"
                    required={requiredFields.g11c5cradit5}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c6course6"
                    id="g11c6course6"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG11(e, 6)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c6subject6"
                    id="g11c6subject6"
                    required={requiredFields.g11c6subject6}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c6grade6"
                    id="g11c6grade6"
                    required={requiredFields.g11c6grade6}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c6cradit6"
                    id="g11c6cradit6"
                    required={requiredFields.g11c6cradit6}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c7course7"
                    id="g11c7course7"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG11(e, 7)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c7subject7"
                    id="g11c7subject7"
                    required={requiredFields.g11c7subject7}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c7grade7"
                    id="g11c7grade7"
                    required={requiredFields.g11c7grade7}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c7cradit7"
                    id="g11c7cradit7"
                    required={requiredFields.g11c7cradit7}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:flex justify-between gap-8">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c8course8"
                    id="g11c8course8"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG11(e, 8)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c8subject8"
                    id="g11c8subject8"
                    required={requiredFields.g11c8subject8}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c8grade8"
                    id="g11c8grade8"
                    required={requiredFields.g11c8grade8}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c8cradit8"
                    id="g11c8cradit8"
                    required={requiredFields.g11c8cradit8}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:flex justify-between gap-8">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c9course9"
                    id="g11c9course9"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG11(e, 9)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c9subject9"
                    id="g11c9subject9"
                    required={requiredFields.g11c9subject9}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c9grade9"
                    id="g11c9grade9"
                    required={requiredFields.g11c9grade9}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c9cradit9"
                    id="g11c9cradit9"
                    required={requiredFields.g11c9cradit9}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:flex justify-between gap-8">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c10course10"
                    id="g11c10course10"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG11(e, 10)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c10subject10"
                    id="g11c10subject10"
                    required={requiredFields.g11c10subject10}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c10grade10"
                    id="g11c10grade10"
                    required={requiredFields.g11c10grade10}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g11c10cradit10"
                    id="g11c10cradit10"
                    required={requiredFields.g11c10cradit10}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
          </Tabs.Item>
          <Tabs.Item title="Grade - 12">
              <div className="md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c1course1"
                    id="g12c1course1"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG12(e, 1)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c1subject1"
                    id="g12c1subject1"
                    required={requiredFields.g12c1subject1}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c1grade1"
                    id="g12c1grade1"
                    required={requiredFields.g12c1grade1}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c1cradit1"
                    id="g12c1cradit1"
                    required={requiredFields.g12c1cradit1}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c2course2"
                    id="g12c2course2"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG12(e, 2)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c2subject2"
                    id="g12c2subject2"
                    required={requiredFields.g12c2subject2}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c2grade2"
                    id="g12c2grade2"
                    required={requiredFields.g12c2grade2}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c2cradit2"
                    id="g12c2cradit2"
                    required={requiredFields.g12c2cradit2}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c3course3"
                    id="g12c3course3"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG12(e, 3)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c3subject3"
                    id="g12c3subject3"
                    required={requiredFields.g12c3subject3}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c3grade3"
                    id="g12c3grade3"
                    required={requiredFields.g12c3grade3}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c3cradit3"
                    id="g12c3cradit3"
                    required={requiredFields.g12c3cradit3}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c4course4"
                    id="g12c4course4"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG12(e, 4)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c4subject4"
                    id="g12c4subject4"
                    required={requiredFields.g12c4subject4}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c4grade4"
                    id="g12c4grade4"
                    required={requiredFields.g12c4grade4}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c4cradit4"
                    id="g12c4cradit4"
                    required={requiredFields.g12c4cradit4}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c5course5"
                    id="g12c5course5"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG12(e, 5)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c5subject5"
                    id="g12c5subject5"
                    required={requiredFields.g12c5subject5}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c5grade5"
                    id="g12c5grade5"
                    required={requiredFields.g12c5grade5}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c5cradit5"
                    id="g12c5cradit5"
                    required={requiredFields.g12c5cradit5}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c6course6"
                    id="g12c6course6"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG12(e, 6)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c6subject6"
                    id="g12c6subject6"
                    required={requiredFields.g12c6subject6}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c6grade6"
                    id="g12c6grade6"
                    required={requiredFields.g12c6grade6}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c6cradit6"
                    id="g12c6cradit6"
                    required={requiredFields.g12c6cradit6}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c7course7"
                    id="g12c7course7"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG12(e, 7)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c7subject7"
                    id="g12c7subject7"
                    required={requiredFields.g12c7subject7}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c7grade7"
                    id="g12c7grade7"
                    required={requiredFields.g12c7grade7}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c7cradit7"
                    id="g12c7cradit7"
                    required={requiredFields.g12c7cradit7}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c8course8"
                    id="g12c8course8"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG12(e, 8)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c8subject8"
                    id="g12c8subject8"
                    required={requiredFields.g12c8subject8}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c8grade8"
                    id="g12c8grade8"
                    required={requiredFields.g12c8grade8}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c8cradit8"
                    id="g12c8cradit8"
                    required={requiredFields.g12c8cradit8}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c9course9"
                    id="g12c9course9"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG12(e, 9)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c9subject9"
                    id="g12c9subject9"
                    required={requiredFields.g12c9subject9}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c9grade9"
                    id="g12c9grade9"
                    required={requiredFields.g12c9grade9}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c9cradit9"
                    id="g12c9cradit9"
                    required={requiredFields.g12c9cradit9}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
              <div className="md:flex justify-between gap-8 ">
                <div className="md:w-1/4 relative">
                  <input
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c10course10"
                    id="g12c10course10"
                    placeholder="Type Your Course Title..."
                    type="text"
                    onKeyUp={(e) => handleCourseNameChangeG12(e, 10)}
                  />
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c10subject10"
                    id="g12c10subject10"
                    required={requiredFields.g12c10subject10}
                  >
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Math">Math (Algebra I or higher)</option>
                    <option value="Science">Science</option>
                    <option value="Language">Language</option>
                    <option value="Social">Social</option>
                    <option value="Comparative ">Comparative</option>
                    <option value="Religion or Philosophy ">
                      Religion or Philosophy
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c10grade10"
                    id="g12c10grade10"
                    required={requiredFields.g12c10grade10}
                  >
                    <option value="">Course Grade</option>
                    <option value="4">A (90-100)%</option>
                    <option value="3">B (80-89)%</option>
                    <option value="3">C (70-79)%</option>
                    <option value="1">D (60-69)%</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
                <div className="md:w-1/4 relative">
                  <select
                    className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                    name="g12c10cradit10"
                    id="g12c10cradit10"
                    required={requiredFields.g12c10cradit10}
                  >
                    <option value="">Unit of Credit</option>
                    <option value="0.25">1 quarter unit = 0.25</option>
                    <option value="0.34">1 trimester unit = 0.34</option>
                    <option value="0.50">1 semesterr unit = 0.50</option>
                    <option value="1">1 year = 1</option>
                  </select>
                  <div className="absolute inset-y-0 right-1 -top-5 flex items-center pr-3 pointer-events-none">
                    <FaAngleDown className="text-[#1D2939]" />
                  </div>
                </div>
              </div>
          </Tabs.Item>
        </Tabs>
        <div className="mt-8 clc-radio-wrap">
                <div className="md:flex items-center gap-3 text-xl">
                  <label className="mr-5">Have you completed the SAT?</label>
                  <div className="mr-5">
                    <input
                      className="mr-1"
                      type="radio"
                      id="yes"
                      name="satCompleted"
                      value="yes"
                      checked={satCompleted === "yes"}
                      onChange={handleRadioChange}
                    />
                    <label htmlFor="yes">Yes</label>
                  </div>
                  <div>
                    <input
                      className="mr-1"
                      type="radio"
                      id="no"
                      name="satCompleted"
                      value="no"
                      checked={satCompleted === "no"}
                      onChange={handleRadioChange}
                    />
                    <label htmlFor="no">No</label>
                  </div>
                </div>

                <div className="mt-4">
                  <input
                    className="py-3 px-[18px] bg-[#FFF] border-[1px] border-[#E9EDF3] rounded-lg"
                    type="text"
                    id="satScore"
                    placeholder="Type your SAT score"
                    disabled={satCompleted !== "yes"} // Disable input if satCompleted is not 'yes'
                  />
                </div>
              </div>

              <div className="text-center mt-16">
                <input
                  type="submit"
                  className="text-center px-6 py-4 rounded-lg cursor-pointer  hover:bg-[#ED692A] duration-500  bg-[#21498B] text-white"
                  value="Start GPA Calculation"
                />
              </div>
        </form>
      </div>
    </div>
  );
};

export default CalculationPage;
