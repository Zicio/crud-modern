import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ErrorWindow from "../components/ErrorWindow";
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
    const checkId = async () => {
      if (id) {
        await fetchInputs(id);
        setForm(data!);
      }
    };
    checkId();
  }, [fetchInputs, id]);

  // useEffect(() => {
  //   setForm(data!);
  // }, [data]);

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
        form && (
          <form
            className="border border-blue-400 rounded-md shadow-sm shadow-red-600 p-[15px] mt-[40px]"
            onSubmit={handleModify}
          >
            <label className="label mt-[0px]" htmlFor="name">
              Название
            </label>
            <input
              className="input"
              name="name"
              type="text"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <label className="label" htmlFor="price">
              Стоимость
            </label>
            <input
              className="input"
              name="price"
              type="number"
              id="price"
              value={form.price}
              onChange={handleChange}
              required
            />
            <label className="label" htmlFor="content">
              Описание
            </label>
            <input
              className="input"
              name="content"
              type="text"
              id="content"
              value={form.content}
              onChange={handleChange}
              required
            />
            <div className="flex justify-end mt-[20px]">
              <Link to="/">
                <button className="button bg-red-600" type="submit">
                  Отмена
                </button>
              </Link>
              <button className="button bg-blue-600 ml-[10px]" type="submit">
                Изменить
              </button>
            </div>
          </form>
        )
      )}
    </div>
  );
};

export default FormPage;
