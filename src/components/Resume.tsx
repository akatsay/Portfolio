import colors from "../constants/colors";
import IFrame from "./IFrame";
export const Resume = () => {
  return (
    <div
      data-testid="Resume"
      id="resume"
      className="flex flex-col justify-center align-middle min-h-screen p-10"
      style={{backgroundColor: colors.black}}
    >
      <h2 className='text-white bold text-4xl text-center mb-12'>My Resume:</h2>
      <IFrame src={"/assets/CV-Alexandr-Katsay.pdf"} height={"100vh"}/>
    </div>
  );
};