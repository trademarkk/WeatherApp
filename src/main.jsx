import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ScaleProvider } from "./components/ScaleContext.jsx";

const queryClient = new QueryClient();

const preloader = document.querySelector(".wrapper");

if (preloader) {
  preloader.remove(); // удаляем заглушку
}

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ScaleProvider>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </ScaleProvider>
  // </StrictMode>
);
