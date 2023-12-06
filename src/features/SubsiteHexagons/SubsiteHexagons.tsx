import React, { useMemo, CSSProperties } from 'react';
import './SubsiteHexagons.scss';
import { subsites } from '../../config/subsites';
import { useAppSelector } from '../../store/hooks/storeHooks';

import Hexagon from './Hexagon/Hexagon';
import Background from './Background/Background';

function SubsiteHexagons() {
  const { isSelectionMode, selectedSubsiteCode } = useAppSelector((state) => state.subsiteHexagon);

  const getSubsites = useMemo(() => {
    let positionStyle: CSSProperties = {};
    return subsites.map((item: any, key: number) => {
      switch (key) {
        case 0:
          positionStyle = {
            top: 0,
            left: 0,
          };
          break;
        case 1:
          positionStyle = {
            top: 0,
            right: 0,
          };
          break;
        case 2:
          positionStyle = {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          };
          break;
        case 3:
          positionStyle = {
            bottom: 0,
            left: 0,
          };
          break;
        case 4:
          positionStyle = {
            bottom: 0,
            right: 0,
          };
          break;
      }

      return (
        <Hexagon
          key={key}
          iconName={item.icon_name}
          subsiteCode={item.short_code}
          color={item.color}
          fadedColor={item.faded_color}
          text={item.name}
          subsiteUrl={item.url}
          positionStyle={positionStyle}
        />
      );
    });
  }, [subsites]) as JSX.Element[];

  return (
    <div className="subsites-hex-wrapper flex relative">
      <Background />
      <div className="flex flex-col flex-h-center zindex-100">
        <h1 className="marginb-3">
          {isSelectionMode && selectedSubsiteCode === '' ? 'Select a Subsite to go to' : 'Our Subsites'}
        </h1>
        <div className="hex-cluster">{getSubsites}</div>
      </div>
    </div>
  );
}

export default SubsiteHexagons;
