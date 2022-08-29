import { Route, Routes } from "react-router-dom";
import FormPage from "../pages/FormPages/FormPage";
import ListPage from "../pages/ListPage";

const App = () => {
  return (
    <div className="flex justify-center items-start mx-auto h-screen text-lg">
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/:id" element={<FormPage />} />
      </Routes>
    </div>
  );
};

export default App;
