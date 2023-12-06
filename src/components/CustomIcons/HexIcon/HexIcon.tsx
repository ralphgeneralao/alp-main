import './HexIcon.scss';

interface HexIconProps {
  icon:
  | 'student'
  | 'supervisor'
  | 'subscriber'
  | 'user'
  | 'toga'
  | 'home'
  | 'tag'
  | 'key-outline'
  | 'key'
  | 'bell'
  | 'videolib'
  | 'money'
  | 'logout'
  | 'print'
  | 'email'
  | 'more'
  | 'calendar'
  | 'receipt'
  | String;
  colorTheme: ColorTheme;
  size?: 'small' | 'medium' | 'regular';
  colorMode?: 'fill' | 'faded' | 'outlined';
  isTextIcon?: boolean; //this is true if inner icon is text
}

export type ColorTheme = 'dark' | 'green' | 'purple' | 'blue' | 'red' | 'yellow';

function HexIcon({ icon, colorTheme, isTextIcon = false, size = 'small', colorMode = 'faded' }: HexIconProps) {
  return (
    <div className={`hexagon-wrapper hex-icon-${colorTheme} hex-icon-${size} hex-${colorMode}`}>
      <i className="icon icon-hexagon hex-1" />
      {colorMode === 'outlined' && (
        <>
          <i className="icon icon-hexagon hex-2" />
          <i className="icon icon-hexagon hex-3" />
        </>
      )}
      {isTextIcon ? <div className="inner-icon">{icon}</div> : <i className={`icon icon-${icon} inner-icon`} />}
    </div>
  );
}

export default HexIcon;
