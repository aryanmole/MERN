import Skeleton from "../components/Skeleton/Skeleton";

const Home = () => {
  const loading = true;

  return (
    <div>
      <h1>Products</h1>

      {loading ? (
        <div>
          <Skeleton width="200px" height="25px" />
          <br />

          <Skeleton width="100%" height="150px" />
          <br />

          <Skeleton width="70%" height="20px" />
          <br />

          <Skeleton width="50%" height="20px" />
        </div>
      ) : (
        <div>
          Product content
        </div>
      )}
    </div>
  );
};

export default Home;