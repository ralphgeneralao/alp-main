import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import HasAuthenticatedWrapper from '../../components/RouteHelpers/HasAuthenticatedWrapper';

const TermsAndConditionsPage = lazy(() => import('./TermsAndConditions/TermsAndConditionsPage'));
const PrivacyPolicyPage = lazy(() => import('./PrivacyPolicy/PrivacyPolicyPage'));

function AgreementRoutes() {
  return (
    <div className="account-retrieval-page-wrapper flex flex-row">
      <Routes>
        <Route element={<HasAuthenticatedWrapper />}>
          <Route path="/termsandconditions" element={<TermsAndConditionsPage />} />
          <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default AgreementRoutes;
