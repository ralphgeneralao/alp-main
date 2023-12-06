import './FooterHexagon.scss';
import config from '../../../../config';

function FooterHexagon() {
  return (
    <div className="footer-hexagon-wrapper flex w-100">
      <div className="footer-hex-container relative">
        <div className="footer-hexagon-container0" onClick={() => window.open(`${config.pageBuilderUrls.main}/culture`, '_self')}>
          <i className="icon icon-hexagon hex-3" />
          <i className="icon icon-hexagon hex-1" />
          <i className="icon icon-hexagon hex-2" />
          <div className="footer-hex-text text-center">
            <div className="footer-hex-header">
              Our culture -<br />
              together
              <br />
              we can do more
            </div>
            <div className="footer-hex-desc">
              utilising
              <br /> everyone&apos;s brain
            </div>
          </div>
        </div>
        <div className="footer-hexagon-container1" onClick={() => window.open(`${config.pageBuilderUrls.main}/culture`, '_self')}>
          <i className="icon icon-hexagon hex-3" />
          <i className="icon icon-hexagon hex-1" />
          <i className="icon icon-hexagon hex-2" />
          <div className="footer-hex-text text-center">
            <div className="footer-hex-header">
              Our belief
              <br />
              every child
              <br />
              can learn
            </div>
            <div className="footer-hex-desc">
              Every child is ready
              <br />
              to learn something
              <br />
              but not every child
              <br />
              is ready to learn
              <br />
              the same thing
            </div>
          </div>
        </div>
        <div className="footer-hexagon-container2" onClick={() => window.open(`${config.pageBuilderUrls.main}/culture`, '_self')}>
          <i className="icon icon-hexagon hex-3" />
          <i className="icon icon-hexagon hex-1" />
          <i className="icon icon-hexagon hex-2" />
          <div className="footer-hex-text text-center">
            <div className="footer-hex-header">
              Our mission -
              <br />
              to meet every
              <br />
              learner at their
              <br />
              leading edge
            </div>
            <div className="footer-hex-desc">
              The only person who
              <br /> knows what a child is
              <br />
              ready to learn is the
              <br />
              child.
              <br />
              Let&apos;s ask them!
            </div>
          </div>
        </div>
        <div className="footer-hexagon-container3" onClick={() => window.open(`${config.pageBuilderUrls.main}/culture`, '_self')}>
          <i className="icon icon-hexagon hex-3" />
          <i className="icon icon-hexagon hex-1" />
          <i className="icon icon-hexagon hex-2" />
          <div className="footer-hex-text text-center">
            <div className="footer-hex-header">
              Our vision -<br />
              to break the cycle
              <br />
              of instrumental
              <br />
              learning
            </div>
            <div className="footer-hex-desc">
              We teach the way
              <br />
              we were taught,
              <br />
              which is not always
              <br />a good thing!
            </div>
          </div>
        </div>
        <div className="footer-hexagon-container4" onClick={() => window.open(`${config.pageBuilderUrls.main}/culture`, '_self')}>
          <i className="icon icon-hexagon hex-3" />
          <i className="icon icon-hexagon hex-1" />
          <i className="icon icon-hexagon hex-2" />
          <div className="footer-hex-text text-center">
            <div className="footer-hex-header">
              Our philosophy -<br />
              life is
              <br />
              accumulative
            </div>
            <div className="footer-hex-desc">
              learning
              <br />
              accumulates
              <br />
              into what we want
            </div>
          </div>
        </div>
        <div className="footer-hexagon-container5" onClick={() => window.open(`${config.pageBuilderUrls.main}/culture`, '_self')}>
          <i className="icon icon-hexagon hex-3" />
          <i className="icon icon-hexagon hex-1" />
          <i className="icon icon-hexagon hex-2" />
          <div className="footer-hex-text text-center">
            <div className="footer-hex-header">
              Our values -<br />
              what weighs
              <br />
              heavy on our mind?
            </div>
            <div className="footer-hex-desc">
              in teachers,
              <br />
              students
              <br />
              and parents
            </div>
          </div>
        </div>
        <div className="footer-hexagon-container6" onClick={() => window.open(`${config.pageBuilderUrls.main}/culture`, '_self')}>
          <i className="icon icon-hexagon hex-3" />
          <i className="icon icon-hexagon hex-1" />
          <i className="icon icon-hexagon hex-2" />
          <div className="footer-hex-text text-center">
            <div className="footer-hex-header">
              Our passion -<br />
              to develop
              <br />a love of learning
            </div>
            <div className="footer-hex-desc">
              Math is reasoning -<br />
              what the world
              <br /> needs most now!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterHexagon;
