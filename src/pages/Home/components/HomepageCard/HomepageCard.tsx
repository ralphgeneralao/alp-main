import './HomepageCard.scss';
import { Button } from 'reactstrap';
import { HomepageCards } from '../data/data';

function HomepageCard() {
  return (
    <div className="homepage-card-wrapper flex">
      {HomepageCards?.map((card: any, key: number) => (
        <div className="homepage-card-container" key={key}>
          <div className={`homepage-card-header btn-theme-${card.btnColor1}`}>
            <Button onClick={card?.btnLink1 ? () => window.open(card?.btnLink1, '_self') : () => { }}>
              <span dangerouslySetInnerHTML={{ __html: card.btn1 }} />
            </Button>
          </div>
          <div className={`homepage-card-body theme-${card?.color}`}>
            <div className="homepage-card-gif">
              <img src={card?.cardGifLink} alt="A Learning Place" />
            </div>
            <div className="homepage-card-header">
              <span dangerouslySetInnerHTML={{ __html: card?.header }} />
            </div>
            <div className="homepage-card-desc">
              <span dangerouslySetInnerHTML={{ __html: card?.description }} />
            </div>
            <div
              className="homepage-card-btn"
              onClick={card?.lookAroundLink ? () => window.open(card?.lookAroundLink, '_self') : () => { }}
            >
              <Button>
                {/* See more <i className="icon icon-arrow-forward" /> */}
                LOOK AROUND
              </Button>
            </div>
          </div>
          <div className={`homepage-card-footer footer-btn-theme-${card.btnColor2}`}>
            <Button onClick={card?.btnLink2 ? () => window.open(card?.btnLink2, '_self') : () => { }}>
              <span dangerouslySetInnerHTML={{ __html: card.btn2 }} />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomepageCard;
