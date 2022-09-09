import { Route, Routes } from "react-router-dom";
import FormPage from "../pages/FormPage";
import ListPage from "../pages/ListPage";

const App = () => {
  return (
    <Routes>
      <Route
        path="/crud-modern/form/:id"
        element={<FormPage clear={false} />}
      />
      <Route
        path="/crud-modern/form"
        element={<FormPage clear={true} />}
      ></Route>
      <Route path="/crud-modern/" element={<ListPage />} />
    </Routes>
  );
};

export default App;
