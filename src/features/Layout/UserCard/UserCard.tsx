import React, { useState, useEffect } from 'react';
import './UserCard.scss';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import AnimatedPulse from '../../../components/Loading/AnimatedPulse/AnimatedPulse';
// import { licenseDetails } from '../../../helpers/constants';
// import LicenseBadge from '../../../components/Badges/LicenseBadge/LicenseBadge';
import { useLogoutMutation } from '../../../store/services/authApi';
import cookie from '../../../helpers/cookieHelper';

interface UserCardProps {
  name: string;
  role?: string;
  isInstitution?: Boolean; //we need to identify whether to display one or two initials
}

function UserCard({ name, isInstitution = false }: UserCardProps) {
  const [logout, formStatus] = useLogoutMutation();
  const [initials, setInitials] = useState('');
  // const [license, setLicense] = useState<any>({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState: boolean) => !prevState);
  const location = useLocation();

  //these lines of code are added an added email for a licence has no prior UserAccount
  const parts = location?.search.split('?');

  let assigneeEmail = '';
  let userAccountLicenceId = '';

  for (const part of parts) {
    if (part.startsWith('email=')) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      assigneeEmail = part.substring('email='.length);
      break;
    }
  }

  for (const part of parts) {
    if (part.startsWith('useraccountlicence=')) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      userAccountLicenceId = part.substring('useraccountlicence='.length);
      break;
    }
  }
  //end

  useEffect(() => {
    if (name) {
      const nameArray = name.split(' ');
      if (!isInstitution) setInitials(`${nameArray[0][0]}${nameArray.length > 1 ? nameArray[1][0] : ''}`.toLocaleUpperCase());
      else setInitials(`${nameArray[0][0]}`.toLocaleUpperCase());
    }

    // if (role) setLicense(licenseDetails.get(role));
  }, [name]);

  useEffect(() => {
    if (formStatus.isError) {
      alert('Something went wrong. Please try again.');
    } else if (formStatus.isSuccess) {
      window.location.reload();
    }
  }, [formStatus]);

  useEffect(() => {
    if (assigneeEmail && userAccountLicenceId) {
      if (cookie.isLoggedIn()) logout('');
    }
  }, []);

  useEffect(() => {
    if (userAccountLicenceId && cookie.isLoggedIn()) {
      logout('');
    }
  }, []);

  return (
    <div className="user-card-wrapper">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={'down'}>
        <DropdownToggle caret>
          {name ? (
            <div className="user-info-avatar-wrap flex flex-row">
              <div className="user-avatar">{initials}</div>
              <div className="flex flex-col flex-h-start">
                {/* <LicenseBadge displayText={license?.badge} color="green" /> */}
                <div className="user-name-wrap text-capitalize">{name}</div>
              </div>
            </div>
          ) : (
            <AnimatedPulse color="green" />
          )}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => logout('')}>
            <i className="icon icon-logout" /> Log out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default UserCard;
