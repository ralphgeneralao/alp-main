import { useEffect, useState } from 'react';
import './SuccessPage.scss';
import config from '../../../config';
import { AlpLogoSpinningSmileGif } from '../../../helpers/imagePreloader';
import { useAppSelector } from '../../../store/hooks/storeHooks';
// import { setSelectionMode, setSelectedSubsite } from 'features/SubsiteHexagons/store/subsiteHexagonSlice';
import { userContextApi } from '../../../store/services/userContextApi';
import LicenseSelectionDisplay from '../../../features/LicenseSelectionDisplay/LicenseSelectionDisplay';

function SuccessPage() {
  // const { preselectedsubsite } = useParams();
  // @ts-ignore
  const { data: userData } = userContextApi.endpoints.getUserContext.useQueryState('', {
    selectFromResult: (result: any) => result,
  });
  // const dispatch = useAppDispatch();
  const { selectedSubsiteCode } = useAppSelector((state) => state.subsiteHexagon);
  const [countdown, setCountdown] = useState(5);

  // useEffect(() => {
  //   if (userData?.is_verified) dispatch(setSelectionMode(true));
  // }, [userData]);

  // useEffect(() => {
  //   //if the login is thru redirect from the other subsite, preselect the subsite
  //   if (preselectedsubsite) dispatch(setSelectedSubsite(preselectedsubsite));
  // }, [preselectedsubsite]);

  useEffect(() => {
    //@ts-ignore
    let interval = null;

    if (countdown > 0) {
      interval = setTimeout(() => {
        setCountdown((prev: any) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      window.open(config.subsiteUrls.tr, '_self');
    }

    return () => {
      //@ts-ignore
      clearInterval(interval);
    };
  }, [countdown]);

  return (
    <div className="license-selection-page-wrapper">
      {/* <Background /> */}
      {selectedSubsiteCode === '' ? (
        <div className="success-login-content relative">
          <div className="logo-row">
            <img src={AlpLogoSpinningSmileGif} alt="Success image" />
          </div>
          <div className="success-text-row text-center">
            <h3>Congratulations!</h3>
            <p>
              You have successfully reset your password! <br />
              You are now logged in.
            </p>
            {/* <p className="success-desc">
              Go to a Subsite by selecting <br />a hexagon on the left.
            </p> */}
            <p>
              Redirecting to Teaching Resources in <span className="green">{countdown}</span>
            </p>
          </div>
        </div>
      ) : (
        <LicenseSelectionDisplay />
      )}
      {/* <div className="success-login-content">
        <div className="logo-row">
          <img src={AlpLogoSpinningSmileGif} alt="Success Image" />
        </div>
        <div className="success-text-row text-center">
          <h3>Congratulations!</h3>
          <p>
            You have successfully reset your password! <br />
            You are now logged in.
          </p>
          <p className="success-desc">
            Go to a Subsite by selecting <br /> a hexagon on the left.
          </p>
          <p className="goto-tr">
            <NavLink to={`${config.subsiteUrls.tr}`}>Go to Teaching Resources</NavLink>
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default SuccessPage;
