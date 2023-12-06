/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import './TestimonialPage.scss';
import { AlpLogoNoText } from '../../../../helpers/imagePreloader';
import { Testimonials } from '../data/data';

function TestimonialPage() {
  const [currTestimonialIndex, setCurrTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrTestimonialIndex((prevIndex: any) => (prevIndex + 1) % Testimonials.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="testimonial-wrapper flex w-100">
      <div className="testimonial-logo-col">
        <img src={AlpLogoNoText} className="testimonial-logo2 absolute" alt="A Learning Place" />
        <img src={AlpLogoNoText} alt="A Learning Place" />
      </div>
      <div className="testimonial-desc-col">
        <div className="purple-box"></div>
        <div className="testimonial-desc-header">Testimonials</div>
        <div className="testimonial-desc-item">
          {Testimonials?.map((item: any, key: number) => (
            <div className={`testimonial-scroll`} key={key} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </div>
        <div className="blue-box"></div>
      </div>
    </div>
  );
}

export default TestimonialPage;
