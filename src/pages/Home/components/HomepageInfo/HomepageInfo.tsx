import './HomepageInfo.scss';
import config from '../../../../config';

function HomepageInfo() {
  return (
    <div className="homepage-info-wrapper flex w-100">
      <div className="homepage-info-col1 w-100">
        <div className="homepage-info-you box-center">
          <div className="info-you-div clickable">
            <i className="icon icon-hexagon you-hex-1" />
            <i className="icon icon-hexagon you-hex-2" />
            <i className="icon icon-hexagon you-hex-3" />
            <div className="homepage-you-text" onClick={() => window.open(`${config.pageBuilderUrls.main}/you`, '_self')}>
              <p className="text-header mb-0">YOU</p>
              <p className="text-body">
                are the most
                <br />
                important
              </p>
            </div>
            <i className="icon icon-hexagon you-hex-4" />
            <i className="icon icon-hexagon you-hex-5" />
          </div>
        </div>

        <div className="homepage-info-why box-center">
          <div className="info-why-div clickable">
            <i className="icon icon-hexagon why-hex-1" />
            <i className="icon icon-hexagon why-hex-2" />
            <i className="icon icon-hexagon why-hex-3" />
            <div className="homepage-why-text" onClick={() => window.open(`${config.pageBuilderUrls.main}/why`, '_self')}>
              <p className="text-header mb-2">WHY</p>
              <p className="text-body">
                is the evidence
                <br />
                of learning
              </p>
            </div>
            <i className="icon icon-hexagon why-hex-4" />
            <i className="icon icon-hexagon why-hex-5" />
          </div>
        </div>

        <div className="homepage-info-we box-center">
          <div className="info-we-div clickable">
            <i className="icon icon-hexagon we-hex-1" />
            <i className="icon icon-hexagon we-hex-2" />
            <i className="icon icon-hexagon we-hex-3" />
            <div className="homepage-we-text" onClick={() => window.open(`${config.pageBuilderUrls.main}/we`, '_self')}>
              <p className="text-header mb-0">WE</p>
              <p className="text-body">
                place you front
                <br />
                and centre
              </p>
            </div>
            <i className="icon icon-hexagon we-hex-4" />
            <i className="icon icon-hexagon we-hex-5" />
          </div>
        </div>
      </div>
      <div className="homepage-info-col2 w-100">
        <div className="you-homepage-header">
          <span onClick={() => window.open(`${config.pageBuilderUrls.main}/you`, '_self')}>you</span>
          <div className="you-underline"></div>
        </div>
        <div className="homepage-info-description">
          the teacher make the biggest difference in the classroom.
          <br />
          the parent make the biggest difference in your child&apos;s life.
          <br />
          the learner make the biggest difference in your learning
        </div>
        <div className="we-homepage-header relative zindex-1">
          <span onClick={() => window.open(`${config.pageBuilderUrls.main}/we`, '_self')}>we</span>
        </div>
        <div className="we-underline"></div>
        <div className="homepage-info-description">
          are teachers, school leaders, and past members of curriculum writing
          <br />
          teams, not academics
          <br />
          are in YOUR classrooms every week using our resources and observing
          <br />
          students and teachers
          <br />
          deepening relational understanding.
          <br />
          recognize and celebrate YOUR expertise and knowledge of your learners.
          <br />
          have the time, expertise and experience to create research-, evidence-
          <br />
          and Australian Curriculum- and NSW Syllabus-based resources centred
          <br />
          around YOU (not the program!).
        </div>
        <div className="why-homepage-header">
          <span onClick={() => window.open(`${config.pageBuilderUrls.main}/why`, '_self')}>why</span>
        </div>
        <div className="why-underline"></div>
        <div className="homepage-info-description">
          is the visible growth in learners&apos; and (teachers&apos;) understanding and capacity
          <br />
          to explain through progression along the sequence of learning.
          <br />
          is the results and growth in student external assessment data on sites like My School.
        </div>
      </div>
    </div>
  );
}

export default HomepageInfo;
