import { memo } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function(WrapperComponent) {
  return memo(props => {
    const navigate = useNavigate();
    const params = useParams();
    const [searchParams] = useSearchParams();
    console.log("searchParams", searchParams.get("username"));
    const query = Object.fromEntries(searchParams);
    return <WrapperComponent {...props} router={{ navigate, params, query }} />;
  });
}
