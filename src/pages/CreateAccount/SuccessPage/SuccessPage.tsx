import './SuccessPage.scss';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { AlpLogoSpinningSmileGif } from '../../../helpers/imagePreloader';
import SelectionCard from '../../../components/Cards/SelectionCard/SelectionCard';
import config from '../../../config';

const cardList = {
  personal: [
    {
      cardId: 'subscribe',
      cardHeader: 'I want to subscribe',
      color: 'green',
      icon: 'tag',
    },
    {
      cardId: 'activate',
      cardHeader: 'I want to activate a Licence',
      cardDescription: 'Activate a Licence that has been assigned to you',
      color: 'yellow',
      icon: 'key-outline',
    },
    {
      cardId: 'browse',
      cardHeader: 'I want to browse the Site',
      color: 'red',
      icon: 'alp_logo_login_notext',
    },
  ],
  school: [
    {
      cardId: 'browse',
      cardHeader: 'I want to subscribe as a School',
      cardDescription: '',
      color: 'green',
      icon: 'toga_regular',
    },
    {
      cardId: 'subscribe',
      cardHeader: 'I want to browse the Site',
      cardDescription: '',
      color: 'red',
      icon: 'alp_logo_login_notext',
    },
  ],
};

function SuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { accounttype } = useParams();

  const handleCardClick = (cardId: string) => {
    switch (cardId) {
      case 'browse': {
        window.open(`${config.subsiteUrls.tr}/dashboard/tr`, '_self');
        break;
      }
      case 'subscribe': {
        // navigate('/pricing'); // last time
        // navigate('/subscription/create');
        window.open(`${config.subsiteUrls.tr}/subscription/tr`, '_self');
        break;
      }
      case 'activate': {
        window.open(`${config.subsiteUrls.tr}/subscription/tr/activatelicence${location.search}`, '_self');
        break;
      }
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getCards = () => {
    if (accounttype === 'personal') {
      return cardList.personal.map((item: any, key: number) => <SelectionCard key={key} {...item} onClick={handleCardClick} />);
    } else {
      return cardList.school.map((item: any, key: number) => <SelectionCard key={key} {...item} onClick={handleCardClick} />);
    }
  };

  // useEffect(() => {
  //   if (checked) {
  //     window.open(`${config.subsiteUrls.tr}/dashboard/tr`)
  //   }
  // }, [checked]);

  return (
    <div className="success-page-wrapper">
      <div className="success-page-content">
        <div className="success-header">
          <img src={AlpLogoSpinningSmileGif} alt="Success" />
          <h3>Congratulations!</h3>
          <p className="text-center">
            You have successfully created your {accounttype === 'personal' ? 'Personal' : 'School'} Account.
          </p>
          <p className="text-center">
            You can now {accounttype === 'personal' ? 'subscribe, or activate a Licence' : 'Subscribe as a School'},<br /> or
            browse the site.
          </p>
        </div>

        <div className="card-row">
          <>{getCards()}</>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
