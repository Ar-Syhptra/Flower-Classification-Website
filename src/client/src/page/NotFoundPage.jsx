function NotFoundPage({ badRequest, notFound, serverError }) {
  return (
    <>
      <div>
        <h1>Welcome To Not Found Page</h1>
        <p>{badRequest}</p>
        <p>{notFound}</p>
        <p>{serverError}</p>
      </div>
    </>
  );
}

export default NotFoundPage;
