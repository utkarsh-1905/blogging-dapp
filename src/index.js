import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
import { BrowserRouter as Router } from "react-router-dom";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Hardhat;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      desiredChainId={activeChainId}
      chainRpc={{
        [ChainId.Hardhat]: "http://localhost:8545",
      }}
      supportedChains={[ChainId.Hardhat]}
      sdkOptions={{
        readonlySettings: {
          chainId: ChainId.Hardhat,
          rpcUrl: "http://localhost:8545",
        },
      }}
    >
      <Router>
        <App />
      </Router>
    </ThirdwebProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
