import { IService } from "../models/models";

const CardComponent = ({
  card,
  isFirst,
}: {
  card: IService;
  isFirst: boolean;
}) => {
  return (
    <li
      className={`border border-solid border-blue-200 rounded-md shadow-sm shadow-red-600 p-[15px] ${
        isFirst ? "my-0" : "mt-[10px]"
      }`}
    >
      <h3 className="font-bold">{card.name}</h3>
      <p className="mt-[5px]">{card.price}</p>
      <div className="flex mt-[5px] justify-end">
        <button
          className="bg-blue-700 rounded-md px-[5px] py-[2px] text-white hover:shadow-md hover:shadow-black"
          type="submit"
        >
          🖉
        </button>
        <button
          className="bg-red-600 rounded-md px-[5px] py-[2px] text-white ml-[5px] hover:shadow-md hover:shadow-black"
          type="submit"
        >
          ╳
        </button>
      </div>
    </li>
  );
};
export default CardComponent;
