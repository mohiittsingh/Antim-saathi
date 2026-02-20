import AppRouter from "./routes/AppRouter";
import { WorkflowProvider } from "@/context/WorkflowContext";

function App() {
  return (
    <WorkflowProvider>
      <AppRouter />
    </WorkflowProvider>
  );
}

export default App;
