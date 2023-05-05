import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./shared/Router";
import './App.css';


const queryClient = new QueryClient();


function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </div>
  );
}


export default App;
