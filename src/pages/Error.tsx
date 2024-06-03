import { Container } from "react-bootstrap";
import { useRouteError,isRouteErrorResponse, Link } from "react-router-dom";
const Error= () => {
  const error=useRouteError();
  let errorStatus:number;
  let errorMessage:string;
  if(isRouteErrorResponse(error)) {
   errorStatus=error.status;
   errorMessage=error.statusText;
  }else{
    errorStatus=404;
    errorMessage="page not found";
  }
  return (
    <Container className="notFound">
      <h1>{errorStatus}</h1>
      <p>{errorMessage}</p>
      <Link to="/" replace={true}>
        How about going back to safety?
      </Link>
    </Container>
  );
};

export default Error;
