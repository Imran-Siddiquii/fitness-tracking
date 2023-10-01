import { LineWave } from "react-loader-spinner";
import "./styles.css";
const Loader = () => {
  return (
    <>
      <section className="loader">
        <LineWave
          height="100"
          width="100"
          color="#ca661d"
          ariaLabel="line-wave"
          visible={true}
        />
        <p
          style={{
            fontSize: "2rem",
            marginTop: "34px",
            color: "#ca661d",
            fontFamily: '"Noto Sans JP", sans-serif'
          }}
        >
          Loading...
        </p>
      </section>
    </>
  );
};
export default Loader;
