import { FC } from "react";
import { Link } from "react-router-dom";

type AppProps = {
  to: string;
  children: string;
};
const MyLink: FC<AppProps> = ({ to, children }) => {
  return (
    <Link className="text-2xl" to={to}>
      {children}
    </Link>
  );
};

export default MyLink;
