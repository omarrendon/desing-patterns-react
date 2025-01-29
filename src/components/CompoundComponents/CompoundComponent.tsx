import React, { createContext, useContext, useState } from "react";
import { motion } from "framer-motion";

interface IWizardContext {
  activeStep: number;
  goToNextStep: () => void;
  goToPrevStep: () => void;
  formValues: { [key: string]: any };
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

interface IWizardProps {
  children: React.ReactNode;
  initialStep: number;
  formValues: { [key: string]: any };
}

interface IWizardStaticComponents {
  Steps: React.FC<{ children: React.ReactNode }>;
  Step: React.FC<{ stepIndex: number; children: React.ReactNode }>;
  Navigation: React.FC;
}

const WizardContext = createContext<IWizardContext | undefined>(undefined);

const Wizard: React.FC<IWizardProps> & IWizardStaticComponents = ({
  children,
  initialStep,
  formValues,
}) => {
  const [activeStep, setActiveStep] = useState(initialStep);
  const goToNextStep = () => setActiveStep(prev => prev + 1);
  const goToPrevStep = () => setActiveStep(prev => prev - 1);

  const value = {
    activeStep,
    goToNextStep,
    goToPrevStep,
    formValues,
    setActiveStep,
  };

  return (
    <WizardContext.Provider value={value}>
      <div className="wizard">{children}</div>
    </WizardContext.Provider>
  );
};

const WizardSteps: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="wizard-step">{children}</div>;
};

const WizardStep: React.FC<{
  stepIndex: number;
  children: React.ReactNode;
}> = ({ stepIndex, children }) => {
  const context = useContext(WizardContext);

  if (!context) {
    throw new Error("WizardStep must be used within a Wizard");
  }
  const { activeStep } = context;

  return stepIndex === activeStep ? (
    <motion.div
      className="wizard-step"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
    >
      {children}
    </motion.div>
  ) : null;
};

const WizardNavigation: React.FC = () => {
  const [displayData, setDisplayData] = useState(false);
  const context = useContext(WizardContext);

  if (!context) {
    throw new Error("WizardStep must be used within a Wizard");
  }
  const { activeStep, goToNextStep, goToPrevStep, formValues } = context;

  const firstStep = activeStep === 0;
  const lastStep = activeStep === 2;

  const hanldeUpdate = () => {
    setDisplayData(true);
  };

  return (
    <div className="wizard-navigation">
      {!firstStep && <button onClick={goToPrevStep}>Anterio</button>}
      <button onClick={lastStep ? hanldeUpdate : goToNextStep}>
        {lastStep ? "Finalizar" : "Siguiente"}
      </button>
      {displayData && <div>{JSON.stringify(formValues)}</div>}
    </div>
  );
};

export const CompoundComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div>Compound Component</div>
      <Wizard initialStep={0} formValues={formData}>
        <Wizard.Steps>
          <Wizard.Step stepIndex={0}>
            <div>
              <h2>Step 1</h2>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleSubmit}
              />
            </div>
          </Wizard.Step>
          <Wizard.Step stepIndex={1}>
            <div>
              <h2>Step 2</h2>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleSubmit}
              />
            </div>
          </Wizard.Step>
          <Wizard.Step stepIndex={2}>
            <div>
              <h2>Step 3</h2>
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleSubmit}
              />
            </div>
          </Wizard.Step>
        </Wizard.Steps>
        <Wizard.Navigation />
      </Wizard>
    </>
  );
};

Wizard.Steps = WizardSteps;
Wizard.Step = WizardStep;
Wizard.Navigation = WizardNavigation;
