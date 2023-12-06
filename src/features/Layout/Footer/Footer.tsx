/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';
import { AlpLogo } from '../../../helpers/imagePreloader';
import cookie from '../../../helpers/cookieHelper';
import { footerPages, sitepages, footerSubsites, socmed } from '../Utils/constants';
import { subsiteThemes } from '../../../helpers/constants';

function Footer() {
  const getMenu = (): JSX.Element[] => {
    return footerPages.map((item: any, key: number) => {
      if (!item.is_protected || (item.is_protected && cookie.isLoggedIn())) {
        return (
          <li key={key} onClick={item?.urlPath ? () => window.open(item?.urlPath, '_self') : () => { }}>
            <NavLink to={item.urlPath}>{item.displayName}</NavLink>
          </li>
        );
      } else {
        return <React.Fragment key={key}></React.Fragment>;
      }
    });
  };

  const getSubsitesMenu = (): JSX.Element[] => {
    return footerSubsites.map((item: any, key: number) => {
      const { color } = subsiteThemes.get(item.short_code) ?? [];

      return (
        <li key={key}>
          <a href={item.url} className={color}>
            {item.name}
          </a>
        </li>
      );
    });
  };

  const getSubsitePages = (): JSX.Element[] => {
    return sitepages.map((item: any, key: number) => {
      return (
        <li key={key}>
          <NavLink to={item?.url}>{item?.name}</NavLink>
        </li>
      );
    });
  };

  const getSocMed = (): JSX.Element[] => {
    return socmed.map((item: any, key: number) => {
      return (
        <li key={key} className="clickable" onClick={() => window.open(item?.url, '_self')}>
          <i className={`icon icon-${item?.icon}`} />
        </li>
      );
    });
  };

  return (
    <footer className="main-footer flex flex-col">
      <div className="foot-links-row flex flex-row">
        <div className="brand-col">
          <img src={AlpLogo} alt="A Learning Place logo" />
          <p>
            Research and Curriculum & Syllabus-based Mathematical
            <br />
            Teaching and Learning Resources
          </p>
        </div>

        <div className="site-pages-col">
          {/* <h6>Site Pages</h6> */}
          <ul>{getSubsitePages()}</ul>
        </div>

        <div className="subsites-col">
          {/* <h6>Subsites</h6> */}
          <div>
            <ul>{getSubsitesMenu()}</ul>
          </div>
        </div>

        <div className="menu-col">
          {/* <h6>Main Menu</h6> */}
          <ul>{getMenu()}</ul>
        </div>

        <div className="soc-med-col">
          <h6 className="text-center">Socials</h6>
          <ul>{getSocMed()}</ul>
        </div>

        {/* <div className="newsletter-col">
          <h6>Newsletter</h6>
          <div className="flex flex-row alp-form">
            <input type="email" placeholder="Enter email here" />
            <Button>Subscribe</Button>
          </div>
        </div> */}
      </div>
      <div className="foot-copyright-row">© 2023 ALPATP. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
