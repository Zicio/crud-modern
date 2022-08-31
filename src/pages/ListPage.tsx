import CardComponent from "../components/CardComponent";
import ErrorWindow from "../components/ErrorWindow";
import Loader from "../components/Loader";
import { useServicesQuery } from "../store/crud/crud.api";

const ListPage = () => {
  const { isLoading, isError, data } = useServicesQuery();
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
        data && (
          <ul className="list-none w-fit mt-[40px]">
            {data.map((service, index) => (
              <CardComponent
                card={service}
                key={service.id}
                isFirst={index === 0}
              />
            ))}
          </ul>
        )
      )}
    </>
  );
};

export default ListPage;
