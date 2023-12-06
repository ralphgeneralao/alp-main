import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './AccountRetrievalRoutes.scss';
// import SubsiteHexagons from '../../features/SubsiteHexagons/SubsiteHexagons';
import HasAuthenticatedWrapper from '../../components/RouteHelpers/HasAuthenticatedWrapper';
import ProtectedRouteWrapper from '../../components/RouteHelpers/ProtectedRouteWrapper';

// Pages
const RequestAccountCredentialsPage = lazy(() => import('./RequestAccountCredentials/RequestAccountCredentialsPage'));
const RequestResetPasswordPage = lazy(() => import('./RequestResetPassword/RequestResetPasswordPage'));
const ConfirmationDetails = lazy(() => import('./ConfirmationDetails/ConfirmationDetailsPage'));
const PasswordConfirmationDetailsPage = lazy(() => import('./PasswordConfirmationDetails/PasswordConfirmationDetailsPage'));
const ResetPasswordPage = lazy(() => import('./ResetPassword/ResetPasswordPage'));
const SuccessPage = lazy(() => import('./SuccessPage/SuccessPage'));
const MobileVerificationPage = lazy(() => import('./MobileVerification/MobileVerificationPage'));

function AccountRetrievalRoutes() {
  return (
    <div className="account-retrieval-page-wrapper flex flex-row">
      {/* <section className="hexagon-col">
        <SubsiteHexagons />
      </section> */}
      <section className="routes-col">
        <Routes>
          <Route element={<HasAuthenticatedWrapper />}>
            <Route path="/requestaccountcredentials" element={<RequestAccountCredentialsPage />} />
            <Route path="/requestresetpassword" element={<RequestResetPasswordPage />} />
            <Route path="/confirmationdetails/:email" element={<ConfirmationDetails />} />
            <Route path="/passwordconfirmationdetails/:email" element={<PasswordConfirmationDetailsPage />} />
            <Route path="/resetpassword/:token" element={<ResetPasswordPage />} />
            <Route path="/mobileverification/:email" element={<MobileVerificationPage />} />
          </Route>

          <Route element={<ProtectedRouteWrapper />}>
            <Route path="/resetpassword" element={<SuccessPage />} />
            <Route path="/resetpassword/:preselectedsubsite" element={<SuccessPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </section>
    </div>
  );
}

export default AccountRetrievalRoutes;
