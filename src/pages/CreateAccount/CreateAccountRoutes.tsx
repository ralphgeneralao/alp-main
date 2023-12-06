import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './CreateAccountRoutes.scss';
import HasAuthenticatedWrapper from '../../components/RouteHelpers/HasAuthenticatedWrapper';
import ProtectedRouteWrapper from '../../components/RouteHelpers/ProtectedRouteWrapper';
// import SubsiteHexagons from '../../features/SubsiteHexagons/SubsiteHexagons';

//pages
const AccountSelectionPage = lazy(() => import('./AccountSelection/AccountSelectionPage'));
const EmailVerificationPage = lazy(() => import('./EmailVerification/EmailVerificationPage'));
const PersonalAccountPage = lazy(() => import('./PersonalAccount/PersonalAccountPage'));
const SchoolAccountPage = lazy(() => import('./SchoolAccount/SchoolAccountPage'));
const SuccessPage = lazy(() => import('./SuccessPage/SuccessPage'));

function CreateAccountRoutes() {
  return (
    <div className="create-account-page-wrapper flex flex-row">
      {/* <section className="hexagon-col">
        <SubsiteHexagons />
      </section> */}
      <section className="routes-col">
        <Routes>
          <Route path="/personal/:email" element={<PersonalAccountPage />} />
          <Route path="/school/:email" element={<SchoolAccountPage />} />

          <Route element={<HasAuthenticatedWrapper />}>
            <Route index element={<AccountSelectionPage />} />
          </Route>

          <Route element={<ProtectedRouteWrapper />}>
            <Route path="/:accounttype/emailverification/:email/:fromlogin" element={<EmailVerificationPage />} />
            <Route path="/success/:accounttype" element={<SuccessPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </section>
    </div>
  );
}

export default CreateAccountRoutes;
