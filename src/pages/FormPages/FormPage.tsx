import { useParams } from "react-router-dom";
import { useEditServiceQuery } from "../../store/crud/crud.api";
import "./FormPages.css";

const FormPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useEditServiceQuery(id!);

  return (
    <>
      {data && (
        <form className="border border-blue-400 rounded-md shadow-sm shadow-red-600 p-[15px] mt-[40px]">
          <label className="label mt-[0px]" htmlFor="name">
            Название
          </label>
          <input className="input" type="name" id="name" value={data.name} />
          <label className="label" htmlFor="price">
            Стоимость
          </label>
          <input className="input" type="price" id="price" value={data.price} />
          <label className="label" htmlFor="content">
            Описание
          </label>
          <input
            className="input"
            type="content"
            id="content"
            value={data.content}
          />
        </form>
      )}
    </>
  );
};

export default FormPage;
