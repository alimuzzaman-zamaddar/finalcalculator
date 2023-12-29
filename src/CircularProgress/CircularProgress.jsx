import  { useEffect, useRef } from "react";
import "./CircularProgress.css";

const CircularProgress = (grandFinalResult) => {
  const progressBarRef = useRef(null);
  const valueContainerRef = useRef(null);

  useEffect(() => {


    const resultRound = parseFloat(grandFinalResult.grandFinalResult);
    const progressBar = progressBarRef.current;
    const valueContainer = valueContainerRef.current;

    if (!progressBar || !valueContainer) {
      console.error("One or more elements not found");
      return;
    }

    let progressValue = 0;
    let getvalue  = resultRound // You can change this to any decimal value
    let have = 25;
    let progressEndValue = parseInt(getvalue * have);
    let speed = 20;

    let progress = setInterval(() => {
      progressValue++;
      valueContainer.textContent = `${getvalue.toFixed(2)}`;
      progressBar.style.background = `conic-gradient(
        #ED692A ${progressValue * 2.7}deg,
        #EAECF0 ${progressValue * 2.7}deg
      )`;

      if (progressValue === progressEndValue) {
        clearInterval(progress);
      }
    }, speed);

    return () => clearInterval(progress);
  }, [grandFinalResult]); 

  return (
    <div className="relative">
      <div className="progress-area flex items-center justify-center  ml-5 ">
        <div className="circular-progress" ref={progressBarRef}>
          <div className="value-container" ref={valueContainerRef}>
            0
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;


