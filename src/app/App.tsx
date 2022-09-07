import { Route, Routes } from "react-router-dom";
import FormPage from "../pages/FormPage";
import ListPage from "../pages/ListPage";

const App = () => {
  return (
    <Routes>
      <Route path="form/:id" element={<FormPage clear={false} />} />
      <Route path="form" element={<FormPage clear={true} />}></Route>
      <Route path="/" element={<ListPage />} />
    </Routes>
  );
};

export default App;
