import React from 'react';
import './LicenseCard.scss';
import { getFormattedDate } from '../../../helpers/utilityFuncions';
import { licenseDetails, subsiteThemes } from '../../../helpers/constants';
import LicenseBadge from '../../../components/Badges/LicenseBadge/LicenseBadge';
import HexIcon from '../../../components/CustomIcons/HexIcon/HexIcon';

interface LicenseCardProps {
  licenseKey?: string;
  subsiteCode: string;
  subsiteName: string;
  roleShortcode: string;
  isSchoolAccount: boolean;
  assignedBy: string;
  activationDate?: string;
  expiryDate?: string;
  onClick(roleShortcode: string, licenseKey?: string): void;
}

function LicenseCard({
  licenseKey,
  subsiteCode,
  subsiteName,
  roleShortcode,
  isSchoolAccount,
  assignedBy,
  activationDate,
  expiryDate,
  onClick,
}: LicenseCardProps) {
  const clickHandler = () => {
    onClick(roleShortcode, licenseKey);
  };

  const { badge, icon } = licenseDetails.get(roleShortcode ?? '');
  const { color } = subsiteThemes.get(subsiteCode ?? '');

  return (
    <div className={`license-card-wrapper ${color}-card`} onClick={clickHandler}>
      <div className="license-card-info">
        <div className="card-text">
          <LicenseBadge displayText={badge} color={color} />
          <h6>{subsiteName}</h6>
          <div className="account-type">
            {' '}
            {roleShortcode === 'MA' ? 'Admin ' : isSchoolAccount ? 'School ' : 'Personal '}Account
          </div>
          <p>Assigned by: {assignedBy}</p>
        </div>
        <div className="card-hex-icon">
          <HexIcon icon={icon} colorTheme={color} size="regular" />
        </div>
      </div>
      {activationDate && expiryDate && (
        <div className="license-card-footer">
          <div>
            Activation Date: <span>{getFormattedDate(activationDate)}</span>
          </div>
          <div>
            Expiration Date: <span>{getFormattedDate(expiryDate)}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default LicenseCard;
