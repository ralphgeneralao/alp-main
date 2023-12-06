import './HomepageBanner.scss';
import { Button } from 'reactstrap';
import { subsites } from '../../../../features/Layout/Utils/constants';
import config from '../../../../config';
import Hexagon from '../Hexagon/Hexagon';

function HomepageBanner() {
  return (
    <div className="homepage-banner-wrapper flex w-100">
      <div className="homepage-header w-100">
        <h1>
          QUESTION EVERYTHING<span className="green">.</span> <br />
          <p className="mb-4"></p> OWN YOUR LEARNING<span className="yellow">.</span> <br />
          <p className="mb-4"></p> NOT TEMPORARILY RENT IT<span className="purple">.</span>
        </h1>
        <div className="banner-btn zindex-1 relative">
          <Button
            className="green-btn reversed-color-btn flex"
            onClick={() => window.open(`${config.pageBuilderUrls.main}/look-around`, '_self')}
          >
            <span className="button-txt">
              {/* ENTER HERE <i className="icon icon-arrow-forward" /> */}
              LOOK AROUND
            </span>
          </Button>
        </div>
      </div>
      <div className="homepage-hexagons relative w-100">
        {subsites.map((subsite: any, key: number) => (
          <>
            <div
              key={key}
              className={`header-hex-${key} box-center clickable`}
              onClick={subsite?.url ? () => window.open(subsite?.url, '_self') : () => { }}
            >
              <i className="icon icon-hexagon hex-1" />
              {key === 2 ? (
                // <>
                //   <div className="line1" />
                //   <div className="line2" />
                //   <div className="line3" />
                //   <div className="line4" />
                //   <div className="line5" />
                //   <div className="line6" />
                // </>
                <Hexagon />
              ) : (
                <i className="icon icon-hexagon hex-2" />
              )}
              <div className="hex-name absolute text-center" dangerouslySetInnerHTML={{ __html: subsite.name.toUpperCase() }} />
            </div>
            <div className={`hex-bg-${key} box-center`}>
              <i className="icon icon-hexagon hex-3" />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default HomepageBanner;
