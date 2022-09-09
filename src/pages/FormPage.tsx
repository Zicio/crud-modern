import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import ErrorWindow from "../components/ErrorWindow";
import Loader from "../components/Loader";
import { IService } from "../models/models";
import {
  useLazyFormServiceQuery,
  useModifyServiceMutation,
  useNewServiceMutation,
} from "../store/crud/crud.api";

const FormPage: React.FC<{ clear: boolean }> = (props) => {
  const { clear } = props;
  const { id } = useParams();
  const [fetchInputs, { data, isError, isLoading }] = useLazyFormServiceQuery();
  const [modifyService, { isError: modifyError, isLoading: modifyLoading }] =
    useModifyServiceMutation();
  const [fetchForm, { isError: newError, isLoading: newLoading }] =
    useNewServiceMutation();

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
    const value = e.target.value.trim();
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (clear) {
      await fetchForm(form);
    } else {
      await modifyService(form);
    }
    navigate("/crud-modern");
  };

  return (
    <div className="flex justify-center items-start mx-auto h-screen text-md">
      {isError || newError || modifyError ? (
        <ErrorWindow />
      ) : (
        <form
          className="border border-blue-400 rounded-md shadow-sm shadow-red-600 p-[15px] mt-[40px]"
          onSubmit={handleFetch}
        >
          <label className="label mt-[0px]" htmlFor="name">
            Название
          </label>
          <input
            className={`input ${
              isLoading || newLoading || modifyLoading
                ? "input-unactive"
                : "input-active"
            }`}
            name="name"
            type="text"
            id="name"
            value={form.name}
            onChange={handleChange}
            disabled={isLoading || newLoading || modifyLoading}
            required
          />
          <label className="label" htmlFor="price">
            Стоимость
          </label>
          <input
            className={`input ${
              isLoading || newLoading || modifyLoading
                ? "input-unactive"
                : "input-active"
            }`}
            name="price"
            type="number"
            id="price"
            value={form.price}
            onChange={handleChange}
            disabled={isLoading || newLoading || modifyLoading}
            required
          />
          <label className="label" htmlFor="content">
            Описание
          </label>
          <input
            className={`input ${
              isLoading || newLoading || modifyLoading
                ? "input-unactive"
                : "input-active"
            }`}
            name="content"
            type="text"
            id="content"
            value={form.content}
            onChange={handleChange}
            disabled={isLoading || newLoading || modifyLoading}
            required
          />
          <div className="flex justify-end mt-[20px]">
            {isLoading || newLoading || modifyLoading ? (
              <button
                type="submit"
                className="button bg-red-600 hover:shadow-none"
                disabled
              >
                <Loader size={"small"} />
              </button>
            ) : (
              <>
                <Link to="/">
                  <button
                    className="button bg-red-600"
                    type="submit"
                    disabled={isLoading || newLoading || modifyLoading}
                  >
                    Отмена
                  </button>
                </Link>
                <button
                  className="button bg-blue-600 ml-[10px]"
                  type="submit"
                  disabled={isLoading || newLoading || modifyLoading}
                >
                  {clear ? "Создать" : "Изменить"}
                </button>
              </>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default FormPage;
