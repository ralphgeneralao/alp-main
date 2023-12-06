import { useNavigate, useLocation, useParams } from 'react-router-dom';
export interface SearchParams {
  type: string;
  value: string;
}
function useRouterDom() {
  const navigate = useNavigate();
  const location = useLocation();
  const urlParams = useParams();
  const searchParams = new URLSearchParams(location.search);
  return {
    navigate,
    location,
    urlParams,
    searchParams,
  };
}
export default useRouterDom;
