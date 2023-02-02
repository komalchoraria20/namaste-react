import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h4 className="p-10 m-10">
        {user && (
          <>
            This site is developed by {user?.name} - {user?.email}
          </>
        )}
      </h4>
    </div>
  );
};
export default Footer;
