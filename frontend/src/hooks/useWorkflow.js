import { useWorkflow as useWorkflowContext } from "@/context/WorkflowContext";

export default function useWorkflow() {
  return useWorkflowContext();
}
