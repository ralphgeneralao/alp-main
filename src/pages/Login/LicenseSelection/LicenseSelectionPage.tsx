import { useEffect } from 'react';
import './LicenseSelectionPage.scss';
import { useParams } from 'react-router-dom';
import { SuccessImg } from '../../../helpers/imagePreloader';
import { useAppSelector, useAppDispatch } from '../../../store/hooks/storeHooks';
import { setSelectionMode, setSelectedSubsite } from '../../../features/SubsiteHexagons/store/subsiteHexagonSlice';
import { userContextApi } from '../../../store/services/userContextApi';
import LicenseSelectionDisplay from '../../../features/LicenseSelectionDisplay/LicenseSelectionDisplay';

function LicenseSelectionPage() {
  const { preselectedsubsite } = useParams();
  // @ts-ignore
  const { data: userData } = userContextApi.endpoints.getUserContext.useQueryState('', {
    selectFromResult: (result: any) => result,
  });
  const dispatch = useAppDispatch();
  const { selectedSubsiteCode } = useAppSelector((state) => state.subsiteHexagon);

  useEffect(() => {
    if (userData?.is_verified) dispatch(setSelectionMode(true));
  }, [userData]);

  useEffect(() => {
    //if the login is thru redirect from the other subsite, preselect the subsite
    if (preselectedsubsite) dispatch(setSelectedSubsite(preselectedsubsite));
  }, [preselectedsubsite]);

  return (
    <div className="license-selection-page-wrapper">
      {selectedSubsiteCode === '' ? (
        <div className="success-login-content">
          <div className="logo-row">
            <img src={SuccessImg} alt="Success image" />
          </div>
          <div className="success-text-row">
            <h3 className="text-center">Successfully Logged in!</h3>
            <p className="text-center">
              Go to a Subsite by selecting <br />a hexagon on the left.
            </p>
          </div>
        </div>
      ) : (
        <LicenseSelectionDisplay />
      )}
    </div>
  );
}

export default LicenseSelectionPage;
