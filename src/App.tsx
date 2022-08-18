import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/details" element={<Form />} />
      </Routes>
    </>
  );
};

export default App;
