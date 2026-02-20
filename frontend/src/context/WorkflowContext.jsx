import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "antim-saathi-workflow";

const INITIAL_STATE = {
  selectedReligion: "",
  workflowStep: 1,
  hearseSelection: null,
  cremationSelection: null,
  priestSelection: null,
  materialsSelection: [],
  inviteData: {
    deceasedName: "",
    dob: "",
    deathDate: "",
    ceremonyDate: "",
    ceremonyTime: "",
    ceremonyLocation: "",
    contactPerson: "",
    contactPhone: "",
    donationQrType: "none",
  },
  isGuidedMode: true,
};

const WorkflowContext = createContext(null);

function readInitialState() {
  if (typeof window === "undefined") {
    return INITIAL_STATE;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return INITIAL_STATE;
    }

    const parsed = JSON.parse(raw);
    return {
      ...INITIAL_STATE,
      ...parsed,
      inviteData: {
        ...INITIAL_STATE.inviteData,
        ...(parsed?.inviteData || {}),
      },
      materialsSelection: Array.isArray(parsed?.materialsSelection)
        ? parsed.materialsSelection
        : INITIAL_STATE.materialsSelection,
    };
  } catch {
    return INITIAL_STATE;
  }
}

export function WorkflowProvider({ children }) {
  const [selectedReligion, setSelectedReligion] = useState(INITIAL_STATE.selectedReligion);
  const [workflowStep, setWorkflowStep] = useState(INITIAL_STATE.workflowStep);
  const [hearseSelection, setHearseSelection] = useState(INITIAL_STATE.hearseSelection);
  const [cremationSelection, setCremationSelection] = useState(INITIAL_STATE.cremationSelection);
  const [priestSelection, setPriestSelection] = useState(INITIAL_STATE.priestSelection);
  const [materialsSelection, setMaterialsSelection] = useState(INITIAL_STATE.materialsSelection);
  const [inviteData, setInviteState] = useState(INITIAL_STATE.inviteData);
  const [isGuidedMode, setIsGuidedMode] = useState(INITIAL_STATE.isGuidedMode);

  useEffect(() => {
    const state = readInitialState();
    setSelectedReligion(state.selectedReligion);
    setWorkflowStep(state.workflowStep);
    setHearseSelection(state.hearseSelection);
    setCremationSelection(state.cremationSelection);
    setPriestSelection(state.priestSelection);
    setMaterialsSelection(state.materialsSelection);
    setInviteState(state.inviteData);
    setIsGuidedMode(state.isGuidedMode);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const snapshot = {
      selectedReligion,
      workflowStep,
      hearseSelection,
      cremationSelection,
      priestSelection,
      materialsSelection,
      inviteData,
      isGuidedMode,
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
  }, [
    selectedReligion,
    workflowStep,
    hearseSelection,
    cremationSelection,
    priestSelection,
    materialsSelection,
    inviteData,
    isGuidedMode,
  ]);

  const setReligion = (religion) => {
    setSelectedReligion(religion);
  };

  const setHearse = (hearse) => {
    setHearseSelection(hearse);
  };

  const setCremation = (cremation) => {
    setCremationSelection(cremation);
  };

  const setPriest = (priest) => {
    setPriestSelection(priest);
  };

  const setMaterials = (materials) => {
    setMaterialsSelection(Array.isArray(materials) ? materials : []);
  };

  const setInviteData = (nextInviteData) => {
    setInviteState((prev) => ({
      ...prev,
      ...nextInviteData,
    }));
  };

  const setGuidedMode = (value) => {
    setIsGuidedMode(Boolean(value));
  };

  const goToNextStep = () => {
    setWorkflowStep((prevStep) => Math.min(prevStep + 1, 10));
  };

  const goToStep = (step) => {
    setWorkflowStep(Math.max(1, step));
  };

  const resetWorkflow = () => {
    setSelectedReligion(INITIAL_STATE.selectedReligion);
    setWorkflowStep(INITIAL_STATE.workflowStep);
    setHearseSelection(INITIAL_STATE.hearseSelection);
    setCremationSelection(INITIAL_STATE.cremationSelection);
    setPriestSelection(INITIAL_STATE.priestSelection);
    setMaterialsSelection(INITIAL_STATE.materialsSelection);
    setInviteState(INITIAL_STATE.inviteData);
  };

  const value = useMemo(
    () => ({
      selectedReligion,
      workflowStep,
      hearseSelection,
      cremationSelection,
      priestSelection,
      materialsSelection,
      inviteData,
      isGuidedMode,
      setReligion,
      setHearse,
      setCremation,
      setPriest,
      setMaterials,
      setInviteData,
      setGuidedMode,
      goToNextStep,
      goToStep,
      resetWorkflow,
    }),
    [
      selectedReligion,
      workflowStep,
      hearseSelection,
      cremationSelection,
      priestSelection,
      materialsSelection,
      inviteData,
      isGuidedMode,
    ]
  );

  return <WorkflowContext.Provider value={value}>{children}</WorkflowContext.Provider>;
}

export function useWorkflow() {
  const context = useContext(WorkflowContext);

  if (!context) {
    throw new Error("useWorkflow must be used within a WorkflowProvider");
  }

  return context;
}

export default WorkflowContext;
