import { homeUrl } from "../../helper";
const Logo = () => {
  return (
    <img
      src={homeUrl("images/Logo.png")}
      style={{ width: "100%" }}
      alt="QuickVilla Logo"
    />
  );
};
export default Logo;
