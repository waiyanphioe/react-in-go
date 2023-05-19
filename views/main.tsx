import { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";

const domNode: HTMLElement | any = document.getElementById("app");
const root = createRoot(domNode);
root.render(<App />);
