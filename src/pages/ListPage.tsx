import { Link } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import ErrorWindow from "../components/ErrorWindow";
import Loader from "../components/Loader";
import { useServicesQuery } from "../store/crud/crud.api";

const ListPage: React.FC = () => {
  const { isLoading, isError, data } = useServicesQuery();

  return (
    <div className="flex justify-start flex-col items-center mx-auto h-screen text-md mt-[40px]">
      {isLoading && (
        <div className="m-auto">
          <Loader />
        </div>
      )}
      {isError ? (
        <ErrorWindow />
      ) : (
        data && (
          <>
            <Link to="form">
              <button className="mb-[20px] button bg-blue-600" type="submit">
                Создать
              </button>
            </Link>
            <>
              <ul className="list-none w-fit">
                {data.map((service, index) => (
                  <CardComponent
                    card={service}
                    key={service.id}
                    isFirst={index === 0}
                  />
                ))}
              </ul>
            </>
          </>
        )
      )}
    </div>
  );
};

export default ListPage;
