import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Task from "./Components/Task";
import ViewTask from "./Components/ViewTask";

function App() {
  return (
    <div>
      <Header />
      <Task/>
      <ViewTask/>
    </div>
  );
}

export default App;
