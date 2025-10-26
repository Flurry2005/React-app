import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Oh Noooo</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Hello World <span>Sigma</span>
      </Button>
    </div>
  );
}

export default App;
