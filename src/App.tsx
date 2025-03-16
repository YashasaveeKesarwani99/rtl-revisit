import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppProviders } from "./providers/app-providers";
import { MuiMode } from "./components/mui/mui-mode";

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application /> */}
        {/* <Skills skills={['HTML', 'CSS']} /> */}
        {/* <Counter /> */}
        {/* <CounterTwo count={1} /> */}
        {/* <Users /> */}
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
