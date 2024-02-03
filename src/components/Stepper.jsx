import { useState } from "react";
import "./stepper.css";
const Stepper = () => {
  const steps = ["Product Info", "Shipping Info", "Payment Info"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  return (
    <>
      <div className="flex justify-between">
        {steps?.map((step, index) => (
          <div
            key={index}
            className={`step-item ${currentStep === index + 1 && "active"} ${
              (index + 1 < currentStep || complete) && "complete"
            }`}
          >
            <div className={`step`}>
              {currentStep > index + 1 || complete ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  id="check"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path
                    stroke="rgb(255,255,255)"
                    fill="rgb(255,255,255)"
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                  ></path>
                </svg>
              ) : (
                index + 1
              )}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-5">
        <button
          className="btn"
          disabled={currentStep <= 1 || complete}
          onClick={() => {
            currentStep > 1 && setCurrentStep((prev) => prev - 1);
          }}
        >
          Back
        </button>
        <button
          className="btn"
          disabled={currentStep > steps.length || complete}
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep === steps.length ? "Complete" : " Next"}
        </button>
      </div>
    </>
  );
};

export default Stepper;
