import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './LoginRoutes.scss';
import RouteWrapper from '../../components/RouteHelpers/RouteWrapper';
import HasAuthenticatedWrapper from '../../components/RouteHelpers/HasAuthenticatedWrapper';
import ProtectedRouteWrapper from '../../components/RouteHelpers/ProtectedRouteWrapper';
// import SubsiteHexagons from '../../features/SubsiteHexagons/SubsiteHexagons';

//pages
const LoginPage = lazy(() => import('./LoginPage/LoginPage'));
const LicenseSelectionPage = lazy(() => import('./LicenseSelection/LicenseSelectionPage'));
const ForgotPasswordPage = lazy(() => import('./ForgotPassword/ForgotPasswordPage'));

function LoginRoutes() {
  return (
    <div className="loginroute-page-wrapper flex flex-row">
      {/* <section className="hexagon-col">
        <SubsiteHexagons />
      </section> */}
      <section className="routes-col">
        <Routes>
          <Route element={<HasAuthenticatedWrapper />}>
            <Route index element={<LoginPage />} />
            <Route path="/redirect/:subsite" element={<LoginPage />} />
            <Route path="/useraccountlicence" element={<LoginPage />} />
          </Route>
          <Route element={<RouteWrapper />}>
            <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
          </Route>
          <Route element={<ProtectedRouteWrapper />}>
            <Route path="/selectlicense" element={<LicenseSelectionPage />} />
            <Route path="/selectlicense/:preselectedsubsite" element={<LicenseSelectionPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </section>
    </div>
  );
}

export default LoginRoutes;
