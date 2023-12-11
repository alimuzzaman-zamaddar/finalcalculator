import { Tabs } from "flowbite-react";
import "./CalculationPage.css";
import Swal from "sweetalert2";
import ShowResult from "../ShowResult/ShowResult";

("use client");

import { Accordion } from "flowbite-react";
import { useState } from "react";

const CalculationPage = () => {
  const handleCourseInput = (event) => {
    event.preventDefault();
    const form = event.target;
    const satScore = form.satScore.value;
    const g9c1course1name = form.g9c1course1.value;
    const g9c1subject1name = form.g9c1subject1.value;
    const g9c1grade1point = form.g9c1grade1.value;
    const g9c1cradit1 = form.g9c1cradit1.value;
    const g9c2course2name = form.g9c2course2.value;
    const g9c2subject2name = form.g9c2subject2.value;
    const g9c2grade2point = form.g9c2grade2.value;
    const g9c2cradit2 = form.g9c2cradit2.value;
    const g9c3course3name = form.g9c3course3.value;
    const g9c3subject3name = form.g9c3subject3.value;
    const g9c3grade3point = form.g9c3grade3.value;
    const g9c3cradit3 = form.g9c3cradit3.value;
    const g9c4course4name = form.g9c4course4.value;
    const g9c4subject4name = form.g9c4subject4.value;
    const g9c4grade4point = form.g9c4grade4.value;
    const g9c4cradit4 = form.g9c4cradit4.value;
    const g9c5course5name = form.g9c5course5.value;
    const g9c5subject5name = form.g9c5subject5.value;
    const g9c5grade5point = form.g9c5grade5.value;
    const g9c5cradit5 = form.g9c5cradit5.value;
    const g9c6course6name = form.g9c6course6.value;
    const g9c6subject6name = form.g9c6subject6.value;
    const g9c6grade6point = form.g9c6grade6.value;
    const g9c6cradit6 = form.g9c6cradit6.value;
    const g9c7course7name = form.g9c7course7.value;
    const g9c7subject7name = form.g9c7subject7.value;
    const g9c7grade7point = form.g9c7grade7.value;
    const g9c7cradit7 = form.g9c7cradit7.value;
    const g9c8course8name = form.g9c8course8.value;
    const g9c8subject8name = form.g9c8subject8.value;
    const g9c8grade8point = form.g9c8grade8.value;
    const g9c8cradit8 = form.g9c8cradit8.value;
    const g9c9course9name = form.g9c9course9.value;
    const g9c9subject9name = form.g9c9subject9.value;
    const g9c9grade9point = form.g9c9grade9.value;
    const g9c9cradit9 = form.g9c9cradit9.value;
    const g9c10course10name = form.g9c10course10.value;
    const g9c10subject10name = form.g9c10subject10.value;
    const g9c10grade10point = form.g9c10grade10.value;
    const g9c10cradit10 = form.g9c10cradit10.value;

    const g10c1course1name = form.g10c1course1.value;
    const g10c1subject1name = form.g10c1subject1.value;
    const g10c1grade1point = form.g10c1grade1.value;
    const g10c1cradit1 = form.g10c1cradit1.value;
    const g10c2course2name = form.g10c2course2.value;
    const g10c2subject2name = form.g10c2subject2.value;
    const g10c2grade2point = form.g10c2grade2.value;
    const g10c2cradit2 = form.g10c2cradit2.value;
    const g10c3course3name = form.g10c3course3.value;
    const g10c3subject3name = form.g10c3subject3.value;
    const g10c3grade3point = form.g10c3grade3.value;
    const g10c3cradit3 = form.g10c3cradit3.value;
    const g10c4course4name = form.g10c4course4.value;
    const g10c4subject4name = form.g10c4subject4.value;
    const g10c4grade4point = form.g10c4grade4.value;
    const g10c4cradit4 = form.g10c3cradit3.value;
    const g10c5course5name = form.g10c5course5.value;
    const g10c5subject5name = form.g10c5subject5.value;
    const g10c5grade5point = form.g10c5grade5.value;
    const g10c5cradit5 = form.g10c5cradit5.value;
    const g10c6course6name = form.g10c6course6.value;
    const g10c6subject6name = form.g10c6subject6.value;
    const g10c6grade6point = form.g10c6grade6.value;
    const g10c6cradit6 = form.g10c6cradit6.value;
    const g10c7course7name = form.g10c7course7.value;
    const g10c7subject7name = form.g10c7subject7.value;
    const g10c7grade7point = form.g10c7grade7.value;
    const g10c7cradit7 = form.g10c7cradit7.value;
    const g10c8course8name = form.g10c8course8.value;
    const g10c8subject8name = form.g10c8subject8.value;
    const g10c8grade8point = form.g10c8grade8.value;
    const g10c8cradit8 = form.g10c8cradit8.value;
    const g10c9course9name = form.g10c9course9.value;
    const g10c9subject9name = form.g10c9subject9.value;
    const g10c9grade9point = form.g10c9grade9.value;
    const g10c9cradit9 = form.g10c9cradit9.value;
    const g10c10course10name = form.g10c10course10.value;
    const g10c10subject10name = form.g10c10subject10.value;
    const g10c10grade10point = form.g10c10grade10.value;
    const g10c10cradit10 = form.g10c10cradit10.value;

    const g11c1course1name = form.g11c1course1.value;
    const g11c1subject1name = form.g11c1subject1.value;
    const g11c1grade1point = form.g11c1grade1.value;
    const g11c1cradit1 = form.g11c1cradit1.value;
    const g11c2course2name = form.g11c2course2.value;
    const g11c2subject2name = form.g11c2subject2.value;
    const g11c2grade2point = form.g11c2grade2.value;
    const g11c2cradit2 = form.g11c2cradit2.value;
    const g11c3course3name = form.g11c3course3.value;
    const g11c3subject3name = form.g11c3subject3.value;
    const g11c3grade3point = form.g11c3grade3.value;
    const g11c3cradit3 = form.g11c3cradit3.value;
    const g11c4course4name = form.g11c4course4.value;
    const g11c4subject4name = form.g11c4subject4.value;
    const g11c4grade4point = form.g11c4grade4.value;
    const g11c4cradit4 = form.g11c4cradit4.value;
    const g11c5course5name = form.g10c5course5.value;
    const g11c5subject5name = form.g10c5subject5.value;
    const g11c5grade5point = form.g10c5grade5.value;
    const g11c5cradit5 = form.g10c5cradit5.value;
    const g11c6course6name = form.g10c6course6.value;
    const g11c6subject6name = form.g10c6subject6.value;
    const g11c6grade6point = form.g10c6grade6.value;
    const g11c6cradit6 = form.g10c6cradit6.value;
    const g11c7course7name = form.g10c7course7.value;
    const g11c7subject7name = form.g10c7subject7.value;
    const g11c7grade7point = form.g10c7grade7.value;
    const g11c7cradit7 = form.g10c7cradit7.value;
    const g11c8course8name = form.g10c8course8.value;
    const g11c8subject8name = form.g10c8subject8.value;
    const g11c8grade8point = form.g10c8grade8.value;
    const g11c8cradit8 = form.g10c8cradit8.value;
    const g11c9course9name = form.g10c9course9.value;
    const g11c9subject9name = form.g10c9subject9.value;
    const g11c9grade9point = form.g10c9grade9.value;
    const g11c9cradit9 = form.g10c9cradit9.value;
    const g11c10course10name = form.g10c10course10.value;
    const g11c10subject10name = form.g10c10subject10.value;
    const g11c10grade10point = form.g10c10grade10.value;
    const g11c10cradit10 = form.g10c10cradit10.value;

    const g12c1course1name = form.g12c1course1.value;
    const g12c1subject1name = form.g12c1subject1.value;
    const g12c1grade1point = form.g12c1grade1.value;
    const g12c1cradit1 = form.g12c1cradit1.value;
    const g12c2course2name = form.g12c2course2.value;
    const g12c2subject2name = form.g12c2subject2.value;
    const g12c2grade2point = form.g12c2grade2.value;
    const g12c2cradit2 = form.g12c2cradit2.value;
    const g12c3course3name = form.g12c3course3.value;
    const g12c3subject3name = form.g12c3subject3.value;
    const g12c3grade3point = form.g12c3grade3.value;
    const g12c3cradit3 = form.g12c3cradit3.value;
    const g12c4course4name = form.g12c4course4.value;
    const g12c4subject4name = form.g12c4subject4.value;
    const g12c4grade4point = form.g12c4grade4.value;
    const g12c4cradit4 = form.g12c4cradit4.value;
    const g12c5course5name = form.g10c5course5.value;
    const g12c5subject5name = form.g10c5subject5.value;
    const g12c5grade5point = form.g10c5grade5.value;
    const g12c5cradit5 = form.g10c5cradit5.value;
    const g12c6course6name = form.g10c6course6.value;
    const g12c6subject6name = form.g10c6subject6.value;
    const g12c6grade6point = form.g10c6grade6.value;
    const g12c6cradit6 = form.g10c6cradit6.value;
    const g12c7course7name = form.g10c7course7.value;
    const g12c7subject7name = form.g10c7subject7.value;
    const g12c7grade7point = form.g10c7grade7.value;
    const g12c7cradit7 = form.g10c7cradit7.value;
    const g12c8course8name = form.g10c8course8.value;
    const g12c8subject8name = form.g10c8subject8.value;
    const g12c8grade8point = form.g10c8grade8.value;
    const g12c8cradit8 = form.g10c8cradit8.value;
    const g12c9course9name = form.g10c9course9.value;
    const g12c9subject9name = form.g10c9subject9.value;
    const g12c9grade9point = form.g10c9grade9.value;
    const g12c9cradit9 = form.g10c9cradit9.value;
    const g12c10course10name = form.g10c10course10.value;
    const g12c10subject10name = form.g10c10subject10.value;
    const g12c10grade10point = form.g10c10grade10.value;
    const g12c10cradit10 = form.g10c10cradit10.value;

    const coursedata = {
      g9c1course1name,
      g9c1subject1name,
      g9c1grade1point,
      g9c1cradit1,
      g9c2course2name,
      g9c2subject2name,
      g9c2grade2point,
      g9c2cradit2,
      g9c3course3name,
      g9c3subject3name,
      g9c3grade3point,
      g9c3cradit3,
      g9c4course4name,
      g9c4subject4name,
      g9c4grade4point,
      g9c4cradit4,
      g9c5course5name,
      g9c5subject5name,
      g9c5grade5point,
      g9c5cradit5,
      g9c6course6name,
      g9c6subject6name,
      g9c6grade6point,
      g9c6cradit6,
      g9c7course7name,
      g9c7subject7name,
      g9c7grade7point,
      g9c7cradit7,
      g9c8course8name,
      g9c8subject8name,
      g9c8grade8point,
      g9c8cradit8,
      g9c9course9name,
      g9c9subject9name,
      g9c9grade9point,
      g9c9cradit9,
      g9c10course10name,
      g9c10subject10name,
      g9c10grade10point,
      g9c10cradit10,
      g10c1course1name,
      g10c1subject1name,
      g10c1grade1point,
      g10c1cradit1,
      g10c2course2name,
      g10c2subject2name,
      g10c2grade2point,
      g10c2cradit2,
      g10c3course3name,
      g10c3subject3name,
      g10c3grade3point,
      g10c3cradit3,
      g10c4course4name,
      g10c4subject4name,
      g10c4grade4point,
      g10c4cradit4,
      g10c5course5name,
      g10c5subject5name,
      g10c5grade5point,
      g10c5cradit5,
      g10c6course6name,
      g10c6subject6name,
      g10c6grade6point,
      g10c6cradit6,
      g10c7course7name,
      g10c7subject7name,
      g10c7grade7point,
      g10c7cradit7,
      g10c8course8name,
      g10c8subject8name,
      g10c8grade8point,
      g10c8cradit8,
      g10c9course9name,
      g10c9subject9name,
      g10c9grade9point,
      g10c9cradit9,
      g10c10course10name,
      g10c10subject10name,
      g10c10grade10point,
      g10c10cradit10,
      g11c1course1name,
      g11c1subject1name,
      g11c1grade1point,
      g11c1cradit1,
      g11c2course2name,
      g11c2subject2name,
      g11c2grade2point,
      g11c2cradit2,
      g11c3course3name,
      g11c3subject3name,
      g11c3grade3point,
      g11c3cradit3,
      g11c4course4name,
      g11c4subject4name,
      g11c4grade4point,
      g11c4cradit4,
      g11c5course5name,
      g11c5subject5name,
      g11c5grade5point,
      g11c5cradit5,
      g11c6course6name,
      g11c6subject6name,
      g11c6grade6point,
      g11c6cradit6,
      g11c7course7name,
      g11c7subject7name,
      g11c7grade7point,
      g11c7cradit7,
      g11c8course8name,
      g11c8subject8name,
      g11c8grade8point,
      g11c8cradit8,
      g11c9course9name,
      g11c9subject9name,
      g11c9grade9point,
      g11c9cradit9,
      g11c10course10name,
      g11c10subject10name,
      g11c10grade10point,
      g11c10cradit10,
      g12c1course1name,
      g12c1subject1name,
      g12c1grade1point,
      g12c1cradit1,
      g12c2course2name,
      g12c2subject2name,
      g12c2grade2point,
      g12c2cradit2,
      g12c3course3name,
      g12c3subject3name,
      g12c3grade3point,
      g12c3cradit3,
      g12c4course4name,
      g12c4subject4name,
      g12c4grade4point,
      g12c4cradit4,
      g12c5course5name,
      g12c5subject5name,
      g12c5grade5point,
      g12c5cradit5,
      g12c6course6name,
      g12c6subject6name,
      g12c6grade6point,
      g12c6cradit6,
      g12c7course7name,
      g12c7subject7name,
      g12c7grade7point,
      g12c7cradit7,
      g12c8course8name,
      g12c8subject8name,
      g12c8grade8point,
      g12c8cradit8,
      g12c9course9name,
      g12c9subject9name,
      g12c9grade9point,
      g12c9cradit9,
      g12c10course10name,
      g12c10subject10name,
      g12c10grade10point,
      g12c10cradit10,
      satScore
    };
    console.log(coursedata);

    // fetch("http://localhost:5000/courses", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(coursedata),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //       Swal.fire("SUCCESS", "Your GPA is Calculating", "successfully");
    //       console.log(data.insertedId)
    //     }
    //   });
  if(g9c1subject1name == ""){
    alert("please select the subject")

  }else{
    fetch("https://gpacalulatorserver.vercel.app/courses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coursedata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("SUCCESS", "Your GPA is Calculating", "success");
          console.log(data.insertedId);

          setTimeout(() => {
            window.location.href = `/ShowResult/${data.insertedId}`;
            <ShowResult id={data.insertedId}></ShowResult>;
            // Redirect to the ShowResult component with the insertedId as a route parameter
          }, 2000); // Redirect after 4 seconds (4000 milliseconds)
        }
      });

  }
   
  };




  const [satCompleted, setSatCompleted] = useState(''); // State to store the radio button value

  const handleRadioChange = (e) => {
    setSatCompleted(e.target.value); // Update the state when radio button changes
  };


  return (
    <div className="md:w-[1140px] p-5 mx-auto pt-16">
      <div className="my-24">
        <Accordion collapseAll>
          <Accordion.Panel>
            <Accordion.Title>What is a Core Course?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                U Sports athletes are not compensated for their athletic
                performance. U Sports follows the principle of amateurism, which
                means that athletes cannot receive any form of payment or
                compensation for their athletic participation. This includes not
                only monetary compensation, but also other forms of compensation
                such as gifts, endorsement.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
      <form
        className="md:px-[87px] md:py-[90px] px-[20px] py-[20px]  box-shadow-class"
        onSubmit={handleCourseInput}
      >
        <Tabs style="underline">
          <Tabs.Item ring-0 active title="Grade 9">
            <div className="md:md:flex  justify-between md:gap-8">
              <div className="md:md:w-1/4  ">
                <input
                  className="py-3 px-[18px] mb-6 bg-[#FDF0EA] border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c1course1"
                  id="g9c1course1"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c1subject1"
                  id="g9c1subject1"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c1grade1"
                  id="g9c1grade1"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c1cradit1"
                  id="g9c1cradit1"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:md:flex justify-between gap-8 ">
              <div className="md:md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c2course2"
                  id="g9c2course2"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c2subject2"
                  id="g9c2subject2"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c2grade2"
                  id="g9c2grade2"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c2cradit2"
                  id="g9c2cradit2"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:md:flex justify-between gap-8 ">
              <div className="md:md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c3course3"
                  id="g9c3course3"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c3subject3"
                  id="g9c3subject3"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c3grade3"
                  id="g9c3grade3"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c3cradit3"
                  id="g9c3cradit3"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:md:flex justify-between gap-8 ">
              <div className="md:md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c4course4"
                  id="g9c4course4"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c4subject4"
                  id="g9c4subject4"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c4grade4"
                  id="g9c4grade4"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c4cradit4"
                  id="g9c4cradit4"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:md:flex justify-between gap-8">
              <div className="md:md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c5course5"
                  id="g9c5course5"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c5subject5"
                  id="g9c5subject5"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c5grade5"
                  id="g9c5grade5"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c5cradit5"
                  id="g9c5cradit5"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:md:flex justify-between gap-8 ">
              <div className="md:md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c6course6"
                  id="g9c6course6"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c6subject6"
                  id="g9c6subject6"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c6grade6"
                  id="g9c6grade6"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c6cradit6"
                  id="g9c6cradit6"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:md:flex justify-between gap-8 ">
              <div className="md:md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c7course7"
                  id="g9c7course7"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c7subject7"
                  id="g9c7subject7"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c7grade7"
                  id="g9c7grade7"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6   border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c7cradit7"
                  id="g9c7cradit7"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:md:flex justify-between gap-8 ">
              <div className="md:md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c8course8"
                  id="g9c8course8"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c8subject8"
                  id="g9c8subject8"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c8grade8"
                  id="g9c8grade8"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c8cradit8"
                  id="g9c8cradit8"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:md:flex justify-between gap-8">
              <div className="md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c9course9"
                  id="g9c9course9"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c9subject9"
                  id="g9c9subject9"
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c9grade9"
                  id="g9c9grade9"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c9cradit9"
                  id="g9c9cradit9"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:md:flex justify-between gap-8">
              <div className="md:md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c10course10"
                  id="g9c10course10"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c10subject10"
                  id="g9c10subject10"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c10grade10"
                  id="g9c10grade10"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g9c10cradit10"
                  id="g9c10cradit10"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Grade 10">
            <div className="md:md:flex justify-between gap-8 ">
              <div className="md:md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c1course1"
                  id="g10c1course1"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c1subject1"
                  id="g10c1subject1"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c1grade1"
                  id="g10c1grade1"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c1cradit1"
                  id="g10c1cradit1"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:md:flex justify-between gap-8">
              <div className="md:md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c2course2"
                  id="g10c2course2"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c2subject2"
                  id="g10c2subject2"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c2grade2"
                  id="g10c2grade2"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c2cradit2"
                  id="g10c2cradit2"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:md:flex justify-between gap-8">
              <div className="md:md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c3course3"
                  id="g10c3course3"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c3subject3"
                  id="g10c3subject3"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c3grade3"
                  id="g10c3grade3"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c3cradit3"
                  id="g10c3cradit3"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:md:flex justify-between gap-8 ">
              <div className="md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c4course4"
                  id="g10c4course4"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c4subject4"
                  id="g10c4subject4"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c4grade4"
                  id="g10c4grade4"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c4cradit4"
                  id="g10c4cradit4"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:md:flex justify-between gap-8 ">
              <div className="md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c5course5"
                  id="g10c5course5"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c5subject5"
                  id="g10c5subject5"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c5grade5"
                  id="g10c5grade5"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c5cradit5"
                  id="g10c5cradit5"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:md:flex justify-between gap-8 ">
              <div className="md:md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c6course6"
                  id="g10c6course6"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c6subject6"
                  id="g10c6subject6"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c6grade6"
                  id="g10c6grade6"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c6cradit6"
                  id="g10c6cradit6"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:md:flex justify-between gap-8 ">
              <div className="md:md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c7course7"
                  id="g10c7course7"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c7subject7"
                  id="g10c7subject7"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c7grade7" 
                  id="g10c7grade7"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c7cradit7"
                  id="g10c7cradit7"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:md:flex justify-between gap-8 ">
              <div className="md:md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c8course8"
                  id="g10c8course8"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c8subject8"
                  id="g10c8subject8"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c8grade8"
                  id="g10c8grade8"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c8cradit8"
                  id="g10c8cradit8"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:md:flex justify-between gap-8 ">
              <div className="md:md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c9course9"
                  id="g10c9course9"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c9subject9"
                  id="g10c9subject9"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c9grade9"
                  id="g10c9grade9"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c9cradit9"
                  id="g10c9cradit9"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:md:flex justify-between gap-8 ">
              <div className="md:md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c10course10"
                  id="g10c10course10"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c10subject10"
                  id="g10c10subject10"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c10grade10"
                  id="g10c10grade10"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g10c10cradit10"
                  id="g10c10cradit10"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Grade 11">
            <div className="md:md:flex justify-between gap-8 ">
              <div className="md:md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c1course1"
                  id="g11c1course1"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c1subject1"
                  id="g11c1subject1"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c1grade1"
                  id="g11c1grade1"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c1cradit1"
                  id="g11c1cradit1"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:md:flex justify-between gap-8">
              <div className="md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c2course2"
                  id="g11c2course2"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c2subject2"
                  id="g11c2subject2"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c2grade2"
                  id="g11c2grade2"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c2cradit2"
                  id="g11c2cradit2"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:md:flex justify-between gap-8">
              <div className="md:md:w-1/4">
                <input 
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c3course3"
                  id="g11c3course3"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c3subject3"
                  id="g11c3subject3"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c3grade3"
                  id="g11c3grade3"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c3cradit3"
                  id="g11c3cradit3"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:flex justify-between gap-8 ">
              <div className="md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c4course4"
                  id="g11c4course4"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c4subject4"
                  id="g11c4subject4"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c4grade4"
                  id="g11c4grade4"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c4cradit4"
                  id="g11c4cradit4"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:flex justify-between gap-8 ">
              <div className="md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c5course5"
                  id="g11c5course5"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c5subject5"
                  id="g11c5subject5"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c5grade5"
                  id="g11c5grade5"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c5cradit5"
                  id="g11c5cradit5"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:flex justify-between gap-8 ">
              <div className="md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c6course6"
                  id="g11c6course6"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c6subject6"
                  id="g11c6subject6"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c6grade6"
                  id="g11c6grade6"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c6cradit6"
                  id="g11c6cradit6"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:flex justify-between gap-8 ">
              <div className="md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c7course7"
                  id="g11c7course7"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c7subject7"
                  id="g11c7subject7"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c7grade7"
                  id="g11c7grade7"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c7cradit7"
                  id="g11c7cradit7"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:flex justify-between gap-8">
              <div className="md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c8course8"
                  id="g11c8course8"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c8subject8"
                  id="g11c8subject8"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c8grade8"
                  id="g11c8grade8"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c8cradit8"
                  id="g11c8cradit8"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:flex justify-between gap-8">
              <div className="md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c9course9"
                  id="g11c9course9"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c9subject9"
                  id="g11c9subject9"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c9grade9"
                  id="g11c9grade9"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c9cradit9"
                  id="g11c9cradit9"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:flex justify-between gap-8">
              <div className="md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c10course10"
                  id="g11c10course10"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c10subject10"
                  id="g11c10subject10"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c10grade10"
                  id="g11c10grade10"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g11c10cradit10"
                  id="g11c10cradit10"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Grade 12">
            <div className="md:flex justify-between gap-8 ">
              <div className="md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c1course1"
                  id="g12c1course1"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required

                />
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c1subject1"
                  id="g12c1subject1"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c1grade1"
                  id="g12c1grade1"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c1cradit1"
                  id="g12c1cradit1"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:flex justify-between gap-8 ">
              <div className="md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c2course2"
                  id="g12c2course2"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c2subject2"
                  id="g12c2subject2"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c2grade2"
                  id="g12c2grade2"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c2cradit2" 
                  id="g12c2cradit2"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:flex justify-between gap-8 ">
              <div className="md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c3course3"
                  id="g12c3course3"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c3subject3"
                  id="g12c3subject3"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c3grade3"
                  id="g12c3grade3"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c3cradit3"
                  id="g12c3cradit3"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:flex justify-between gap-8 ">
              <div className="md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c4course4"
                  id="g12c4course4"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c4subject4"
                  id="g12c4subject4"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c4grade4"
                  id="g12c4grade4"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c4cradit4"
                  id="g12c4cradit4"
                  required
                >
                  <option>Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:flex justify-between gap-8 ">
              <div className="md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c5course5"
                  id="g12c5course5"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c5subject5"
                  id="g12c5subject5"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c5grade5"
                  id="g12c5grade5"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c5cradit5"
                  id="g12c5cradit5"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:flex justify-between gap-8 ">
              <div className="md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c6course6"
                  id="g12c6course6"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c6subject6"
                  id="g12c6subject6"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c6grade6"
                  id="g12c6grade6"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c6cradit6"
                  id="g12c6cradit6"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:flex justify-between gap-8 ">
              <div className="md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c7course7"
                  id="g12c7course7"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c7subject7"
                  id="g12c7subject7"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c7grade7"
                  id="g12c7grade7"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c7cradit7"
                  id="g12c7cradit7"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:flex justify-between gap-8 ">
              <div className="md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c8course8"
                  id="g12c8course8"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c8subject8"
                  id="g12c8subject8"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c8grade8"
                  id="g12c8grade8"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c8cradit8"
                  id="g12c8cradit8"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:flex justify-between gap-8 ">
              <div className="md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c9course9"
                  id="g12c9course9"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c9subject9"
                  id="g12c9subject9"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c9grade9"
                  id="g12c9grade9"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c9cradit9"
                  id="g12c9cradit9"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
              </div>
            </div>
            <div className="md:flex justify-between gap-8 ">
              <div className="md:w-1/4">
                <input
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c10course10"
                  id="g12c10course10"
                  placeholder="Type Your Course Title..."
                  type="text"
                  required
                />
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c10subject10"
                  id="g12c10subject10"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Language">Language</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c10grade10"
                  id="g12c10grade10"
                  required
                >
                  <option value="">Course Grade</option>
                  <option value="4">A (90-100)%</option>
                  <option value="3">B (80-89)%</option>
                  <option value="3">C (70-79)%</option>
                  <option value="1">D (60-69)%</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select
                  className="py-3 px-[18px] bg-[#FDF0EA] mb-6  border-[1px] border-[#E9EDF3] rounded-lg w-[100%]"
                  name="g12c10cradit10"
                  id="g12c10cradit10"
                  required
                >
                  <option value="">Unit of Credit</option>
                  <option value="0.25">1 quarter unit = 0.25 unit</option>
                  <option value="0.34">1 trimester unit = 0.34 unit</option>
                  <option value="0.50">1 semesterr unit = 0.50 unit</option>
                  <option value="1">1 year = 1 unit</option>
                </select>
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
            checked={satCompleted === 'yes'}
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
            checked={satCompleted === 'no'}
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
          disabled={satCompleted !== 'yes'} // Disable input if satCompleted is not 'yes'
        />
      </div>
    </div>

    <div className="text-center mt-16">
       <input type="submit" className="text-center px-6 py-4 rounded-lg cursor-pointer  hover:bg-[#0b111c] duration-500  bg-[#21498B] text-white" value="Start GPA Calculation" />
       </div>
      </form>
    </div>
  );
};

export default CalculationPage;
