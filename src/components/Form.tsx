import { Link } from "react-router-dom";
import { IFormProps } from "../models/models";

const Form: React.FC<IFormProps> = (props) => {
  const { form, handleModify, handleChange } = props;
  return (
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
  );
};

export default Form;
