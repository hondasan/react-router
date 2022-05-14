import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>UrlParameter.jsxページです</h1>
      <p>パラメータはパラメータは{id}です</p>
      <p>クエリパラメータは{query.get("name")}です</p>
    </div>
  );
};
