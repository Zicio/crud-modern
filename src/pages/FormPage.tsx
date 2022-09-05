import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ErrorWindow from "../components/ErrorWindow";
import Form from "../components/Form";
import Loader from "../components/Loader";
import { IService } from "../models/models";
import {
  useLazyFormServiceQuery,
  useModifyServiceMutation,
} from "../store/crud/crud.api";

const FormPage: React.FC = () => {
  const { id } = useParams();
  const [fetchInputs, { data, isError, isLoading }] = useLazyFormServiceQuery();
  const [modifyService] = useModifyServiceMutation();
  const [form, setForm] = useState<IService>({
    name: "",
    price: "",
    content: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setForm(data);
    }
  }, [data]);

  useEffect(() => {
    if (id) {
      fetchInputs(id);
    }
  }, [fetchInputs, id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleModify = (e: React.FormEvent) => {
    e.preventDefault();
    modifyService(form);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-start mx-auto h-screen text-lg">
      {isLoading && (
        <div className="m-auto">
          <Loader />
        </div>
      )}
      {isError ? (
        <ErrorWindow />
      ) : (
        <Form
          form={form}
          handleChange={handleChange}
          handleModify={handleModify}
        />
      )}
    </div>
  );
};

export default FormPage;
