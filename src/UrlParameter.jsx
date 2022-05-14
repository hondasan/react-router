import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>UrlParameter.jsxページです</h1>
      <p>パラメータはパラメータは{id}です</p>
    </div>
  );
};
