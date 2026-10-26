import "./Skeleton.css";

const Skeleton = ({ width = "100%", height = "20px" }) => {
  return (
    <div
      className="skeleton"
      style={{
        width: width,
      }}
    ></div>
  );
};

export default Skeleton;