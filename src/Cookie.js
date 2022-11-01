import cookiePic from "./cookiePic.png";

const Cookie = ({ count, setCount }) => {
  return (
    <img
      src={cookiePic}
      alt="cookie"
      onClick={() => {
        setCount(count + 1);
      }}
    />
  );
};

export default Cookie;
