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
      className={`border border-solid border-gray p-[15px] ${
        isFirst ? "my-0" : "mt-[10px]"
      }`}
    >
      <h3 className="font-bold">{card.name}</h3>
      <p className="mt-[5px]">{card.price}</p>
    </li>
  );
};
export default CardComponent;
