import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import initLocalStorage from "./lib/init.js";
import { PostHogProvider } from 'posthog-js/react';

initLocalStorage();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostHogProvider
      apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
      options={{
        api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
        capture_exceptions: true,
        debug: import.meta.env.MODE === "development",
      }}
    >
      <RecoilRoot>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RecoilRoot>
    </PostHogProvider>
  </StrictMode>
);
