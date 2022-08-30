import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IService } from "../../models/models";
import { useEditServiceQuery } from "../../store/crud/crud.api";
import "./FormPages.css";

const FormPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useEditServiceQuery(id!);
  console.log(data);
  const [form, setForm] = useState<IService>(data!);

  useEffect(() => {
    setForm(data!); //! Разобраться с "!" и попробовать задать начальный стейт пустой
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <>
      {form && (
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
            <button className="button bg-blue-600 ml-[10px]" type="submit">
              Изменить
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default FormPage;
