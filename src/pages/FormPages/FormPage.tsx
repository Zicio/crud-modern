import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ErrorWindow from "../../components/ErrorWindow";
import Loader from "../../components/Loader";
import { IService } from "../../models/models";
import {
  useEditServiceQuery,
  useModifyServiceMutation,
} from "../../store/crud/crud.api";
import "./FormPages.css";

const FormPage: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useEditServiceQuery(id!);
  const [modifyService, { data: dataModify }] = useModifyServiceMutation();
  const [form, setForm] = useState<IService>(data!);

  const navigate = useNavigate();
  useEffect(() => {
    setForm(data!); //! Разобраться с "!" и попробовать задать начальный стейт пустой
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleModify = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    modifyService(form);
    navigate("/");
  };

  return (
    <>
      {isLoading && (
        <div className="m-auto">
          <Loader />
        </div>
      )}
      {isError ? (
        <ErrorWindow />
      ) : (
        form && (
          <form className="border border-blue-400 rounded-md shadow-sm shadow-red-600 p-[15px] mt-[40px]">
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
            />
            <label className="label" htmlFor="price">
              Стоимость
            </label>
            <input
              className="input"
              name="price"
              type="text"
              id="price"
              value={form.price}
              onChange={handleChange}
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
            />
            <div className="flex justify-end mt-[20px]">
              <Link to="/">
                <button className="button bg-red-600" type="submit">
                  Отмена
                </button>
              </Link>
              <button
                className="button bg-blue-600 ml-[10px]"
                type="submit"
                onClick={handleModify}
              >
                Изменить
              </button>
            </div>
          </form>
        )
      )}
    </>
  );
};

export default FormPage;
