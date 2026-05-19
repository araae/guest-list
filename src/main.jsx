import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { GuestProvider } from "./Context.jsx";

//render the GuestProvider grouping the App inside to share global states

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GuestProvider>
      <App />
    </GuestProvider>
  </StrictMode>,
);
