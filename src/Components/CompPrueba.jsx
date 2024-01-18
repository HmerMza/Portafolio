import { useContext, useState } from "react";
import { Pagination } from "@nextui-org/react";
import CompCard from "./CompCard";
import { RouteContext } from "../Hooks/MyContext";

export default function App() {
  const [value, setValue] = useState(1);
  const { certificados } = useContext(RouteContext);

  return (
    <div className="flex flex-col text-center items-center">
      <div className="text-white flex flex-col flex-wrap sm:flex-row gap- justify-between">
        {value === 1
          ? certificados
              .filter((ele, index) => index < 6)
              .map((ele, index) => (
                <span key={index}>
                  <CompCard datos={ele} />
                </span>
              ))
          : value === 2
          ? certificados
              .filter((ele, index) => index >= 6 && index < 12)
              .map((ele, index) => (
                <span key={index}>
                  {" "}
                  <span key={index}>
                    <CompCard datos={ele} />
                  </span>
                </span>
              ))
          : certificados
              .filter((ele, index) => index >= 8)
              .map((ele, index) => (
                <span key={index}>
                  {" "}
                  <span key={index}>
                    <CompCard datos={ele} />
                  </span>
                </span>
              ))}
      </div>
      <Pagination
        total={2}
        initialPage={value}
        color="secondary"
        onChange={setValue}
      />
    </div>
  );
}
