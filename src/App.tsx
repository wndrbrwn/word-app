import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DailyWord from "./pages/DailyWord";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daily-word/:day" element={<DailyWord />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;