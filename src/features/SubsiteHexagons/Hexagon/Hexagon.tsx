import React, { CSSProperties } from 'react';
import './Hexagon.scss';
import { useAppSelector } from '../../../store/hooks/storeHooks';
// import { setSelectedSubsite } from '../store/subsiteHexagonSlice';

interface HexagonProps {
  iconName: string;
  subsiteCode: string;
  color: string;
  fadedColor: string;
  text?: string;
  subsiteUrl: string;
  positionStyle?: CSSProperties;
}

function Hexagon({ iconName, subsiteCode, color, fadedColor, text, subsiteUrl, positionStyle }: HexagonProps) {
  // const dispatch = useAppDispatch();
  const { selectedSubsiteCode, isSelectionMode } = useAppSelector((state) => state.subsiteHexagon);

  const onHexagonClick = async () => {
    // if (isSelectionMode) {
    //   //scroll to top
    //   window.scroll(0, 0);
    //   dispatch(setSelectedSubsite(subsiteCode));
    // } else {
    //   window.open(subsiteUrl);
    // }
    window.open(subsiteUrl, '_self');
  };

  const isReverseColor = () => isSelectionMode && selectedSubsiteCode !== subsiteCode && selectedSubsiteCode !== '';

  const colorStyle: CSSProperties = {
    color: isReverseColor() ? fadedColor : color,
  };

  const innerIconColor: CSSProperties = {
    color: isReverseColor() ? color : '#FFF',
    opacity: isReverseColor() ? 0.6 : 1,
  };

  return (
    <div className="absolute" style={positionStyle}>
      <div className="hexagon-wrapper clickable" title={text} onClick={onHexagonClick}>
        <i className="icon icon-hexagon hex-1" style={colorStyle} />
        {selectedSubsiteCode === subsiteCode && (
          <>
            <i className="icon icon-hexagon hex-2" />
            <i className="icon icon-hexagon hex-3" style={colorStyle} />
          </>
        )}
        <i className={`icon icon-${iconName} subsite-icon`} style={innerIconColor} />
        <span className="d-none">{text}</span>
      </div>
    </div>
  );
}

export default Hexagon;
