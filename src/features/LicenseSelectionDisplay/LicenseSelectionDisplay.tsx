import React, { useState, useEffect } from 'react';
import './LicenseSelectionDisplay.scss';
import { useNavigate } from 'react-router-dom';
import SelectionCard from '../../components/Cards/SelectionCard/SelectionCard';
import LicenseCard from './LicenseCard/LicenseCard';
import { useAppSelector } from '../../store/hooks/storeHooks';
import { subsiteUrls } from '../../helpers/constants';
import { userContextApi } from '../../store/services/userContextApi';

function LicenseSelectionDisplay() {
  const navigate = useNavigate();
  // @ts-ignore
  const { data: userData } = userContextApi.endpoints.getUserContext.useQueryState('', {
    selectFromResult: (result: any) => result,
  });
  const [roles, setRoles] = useState<any>([]);
  const [licenses, setLicenses] = useState<any>([]);
  const { selectedSubsiteCode } = useAppSelector((state) => state.subsiteHexagon);

  useEffect(() => {
    setRoles(
      userData?.roles?.filter(
        (x: any) =>
          x.role.allowed_subsites.find((subsite: any) => subsite?.short_code === selectedSubsiteCode) &&
          x.role?.short_code !== 'SL' &&
          x.role?.short_code !== 'LNS' &&
          x.role?.short_code !== 'AH'
      )
    );
    setLicenses(userData?.licenses?.filter((license: any) => license.subsite?.short_code === selectedSubsiteCode));
  }, [selectedSubsiteCode]);

  const onClickHandler = (roleShortcode: string, licenseKey?: string) => {
    console.log({ roleShortcode }, { licenseKey });
    const { url } = subsiteUrls.get(selectedSubsiteCode);

    if (url) {
      window.location.replace(url);
    } else {
      alert('Feature beyond this is not yet available..');
    }
  };

  const getAssignedBy = (user: any) => {
    return user
      ? user?.is_institution
        ? user?.institution_profile?.institution_name
        : `${user?.user_profile?.first_name} ${user?.user_profile?.last_name}`
      : 'N/A';
  };

  return (
    <div className="license-display-content">
      <div className="license-activation-row">
        <div className="section-header">License Activation</div>
        <div className="card-list">
          <SelectionCard
            cardId="activate"
            cardHeader="I want to activate a License"
            cardDescription="Activate a Licence that has been assigned to you"
            color="purple"
            icon="key-outline"
            onClick={() => navigate('/subscription/tr/activatelicence')}
          />
        </div>
      </div>
      <div className="horizontal-divider" />
      {roles?.length > 0 || licenses?.length > 0 ? (
        <div className="license-list-row">
          <div className="section-header">Select a Licence to login</div>
          <div className="card-list">
            {/* Roles */}
            <>
              {roles?.map((item: any, key: number) => (
                <LicenseCard
                  key={key}
                  roleShortcode={item.role.short_code}
                  subsiteCode={selectedSubsiteCode}
                  subsiteName={item.role?.allowed_subsites?.find((x: any) => x.short_code === selectedSubsiteCode)?.name}
                  isSchoolAccount={userData.is_institution}
                  assignedBy={getAssignedBy(item.assigned_by)}
                  onClick={onClickHandler}
                />
              ))}
            </>
            {/* Licenses */}
            <>
              {licenses?.map((item: any, key: number) => (
                <LicenseCard
                  key={key}
                  roleShortcode={item.role_short_code}
                  subsiteCode={selectedSubsiteCode}
                  subsiteName={item.subsite?.name}
                  isSchoolAccount={userData.is_institution}
                  assignedBy={getAssignedBy(item.assigned_by)}
                  activationDate={item.activation_date}
                  expiryDate={item.expiration_date}
                  onClick={onClickHandler}
                />
              ))}
            </>
          </div>
        </div>
      ) : (
        <div className="license-list-row">
          <div className="section-header">Select an Action</div>
          <div className="card-list">
            <SelectionCard
              cardId="browse"
              cardHeader="I want to browse the Site"
              cardDescription="Browse the free research and resources"
              color="green"
              icon="home"
              onClick={onClickHandler}
            />
            <SelectionCard
              cardId="subscribe"
              cardHeader="I want to subscribe as a School to a subsite"
              cardDescription="Select a Subsite on the left to Subscribe to"
              color="red"
              icon="tag"
              onClick={() => navigate('/subscription/tr')}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default LicenseSelectionDisplay;
