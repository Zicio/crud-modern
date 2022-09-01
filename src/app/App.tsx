import { Route, Routes } from "react-router-dom";
import FormPage from "../pages/FormPage";
import ListPage from "../pages/ListPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/:id" element={<FormPage />} />
      <Route path="/newService" element={<FormPage />} />
    </Routes>
  );
};

export default App;
