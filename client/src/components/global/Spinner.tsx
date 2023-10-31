import "./global.scss";

function Spinner() {
  return (
    <div className="pt-5 pb-5 mt-5 mb-5 text-center">
      <div className="spinner-grow text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
