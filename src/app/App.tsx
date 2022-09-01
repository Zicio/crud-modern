import { Route, Routes } from "react-router-dom";
import FormPage from "../pages/FormPage";
import ListPage from "../pages/ListPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="form" element={<FormPage />}>
        <Route path=":id" element={<FormPage />} />
      </Route>
    </Routes>
  );
};

export default App;
