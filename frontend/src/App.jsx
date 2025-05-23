import LeadForm from "./components/LeadForm";
import LeadList from "./components/LeadList";
import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <LeadForm onLeadAdded={triggerRefresh} />
      <LeadList key={refresh} />
    </div>
  );
}

export default App;