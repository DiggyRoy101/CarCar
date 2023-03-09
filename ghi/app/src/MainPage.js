import "./index.css";
function MainPage() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">CarCar</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          The premiere solution for automobile dealership management!
        </p>
      </div>
      <img
        className="bg-image"
        src="https://www.audiusa.com/content/dam/nemo/us/Homepage/1920x1080_rsegt_2021_2350_v3.jpg"
        alt="No Picture :("
      />
    </div>
  );
}

export default MainPage;
