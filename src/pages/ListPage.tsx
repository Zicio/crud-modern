import { Alert, Spinner } from "react-bootstrap";
import { useServicesQuery } from "../store/crud/crud.api";

const ListPage = () => {
  const { isLoading, isError, data } = useServicesQuery();
  return (
    <>
      {isLoading && (
        <Spinner animation="border" role="status" variant="danger">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {isError && <Alert variant="danger">Произошла ошибка</Alert>}
      {data && (
        <div className="service-list">
          {data.map((service) => (
            <ServiceCard card={service} key={service.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default ListPage;
