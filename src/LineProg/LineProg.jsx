import ProgressBar from "@ramonak/react-progress-bar"
import "./LineProg.css";

const LineProg = (grandFinalResult) => {
    const result = grandFinalResult.grandFinalResult

  return (
    <div className="pt-8  md:pt-24">
      <ProgressBar
        height="30px"
        transitionDuration="2s"
        animateOnRender= {true}
        borderRadius="5px"
        labelColor="#ED692A"
        bgColor="#ED692A"
        baseBgColor="#EAECF0"
        completed={result}
        maxCompleted={4}
      />
    </div>
  );
};

export default LineProg;

