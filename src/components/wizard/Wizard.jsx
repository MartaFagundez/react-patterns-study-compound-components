import { createContext, useContext, useState, Children} from "react";

const WizardContext = createContext();

const Wizard = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = Children.toArray(children).filter((child) => child.type !== WizardNavigation);

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  return (
    <WizardContext.Provider value={{ currentStep, steps, nextStep, prevStep }}>
      <div className="w-80 mx-auto bg-white p-6 shadow-lg rounded-lg">
        {steps[currentStep]}
        {/* 📌 Renderizamos la navegación SIEMPRE debajo del paso actual */}
        {Children.toArray(children).find((child) => child.type === WizardNavigation)}
      </div>
    </WizardContext.Provider>
  );
};

const WizardStep = ({ children }) => {
  return <div className="text-center">{children}</div>;
};

const WizardNavigation = () => {
  const { currentStep, steps, nextStep, prevStep } = useContext(WizardContext);

  return (
    <div className="mt-6 flex justify-between">
      <button
        onClick={prevStep}
        disabled={currentStep === 0}
        className={`px-4 py-2 rounded-lg ${currentStep === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-700 text-white hover:bg-gray-900"}`}
      >
        Anterior
      </button>
      <button
        onClick={nextStep}
        disabled={currentStep === steps.length - 1}
        className={`px-4 py-2 rounded-lg ${currentStep === steps.length - 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-800"}`}
      >
        Siguiente
      </button>
    </div>
  );
};

// 📌 Asignamos los subcomponentes al Wizard principal
Wizard.Step = WizardStep;
Wizard.Navigation = WizardNavigation;

export default Wizard;
