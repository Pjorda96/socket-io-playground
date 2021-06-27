import React, { useState } from "react";
import ClientComponent from "./components/ClientComponent";

function App() {
  const [loadClient, setLoadClient] = useState(true);
  return (
    <>
      {/* LOAD OR UNLOAD THE CLIENT */}
      <button onClick={() => setLoadClient(prevState => !prevState)}>
        { loadClient ? 'STOP CLIENT' : 'RESTART CLIENT' }
      </button>
      {/* SOCKET IO CLIENT*/}
      {loadClient ? <ClientComponent /> : null}
    </>
  );
}

export default App;
