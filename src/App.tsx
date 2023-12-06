import { lazy, useEffect } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { preloadImages } from './helpers/imagePreloader';
import RouteWrapper from './components/RouteHelpers/RouteWrapper';
import Layout from './features/Layout/Layout';

const HomePage = lazy(() => import('./pages/Home/HomePage'));
const AboutUsPage = lazy(() => import('./pages/AboutUs/AboutUsPage'));
const PricingPage = lazy(() => import('./pages/Pricing/PricingPage'));
const ContactUsPage = lazy(() => import('./pages/ContactUs/ContactUsPage'));
const ActivateKeyPage = lazy(() => import('./pages/ActivateKey/ActivateKeyPage'));
const LoginRoutes = lazy(() => import('./pages/Login/LoginRoutes'));
const CreateAccountRoutes = lazy(() => import('./pages/CreateAccount/CreateAccountRoutes'));
const AccountRetrievalRoutes = lazy(() => import('./pages/AccountRetrieval/AccountRetrievalRoutes'));
const ServerErrorPage = lazy(() => import('./pages/ServerError/ServerErrorPage'));
const AgreementRoutes = lazy(() => import('./pages/Agreement/AgreementRoutes'));

function App() {
  //this will preload all the images that needs to be preloaded
  useEffect(() => preloadImages(), []);

  return (
    <div className="App" data-testid="app">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route element={<RouteWrapper />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/contact" element={<ContactUsPage />} />
              <Route path="/activate" element={<ActivateKeyPage />} />
              <Route path="/login/*" element={<LoginRoutes />} />
              <Route path="/createaccount/*" element={<CreateAccountRoutes />} />
              <Route path="/accountretrieval/*" element={<AccountRetrievalRoutes />} />
              <Route path="/agreement/*" element={<AgreementRoutes />} />
              <Route path="/500" element={<ServerErrorPage />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
