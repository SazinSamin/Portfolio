import { TypeAnimation } from 'react-type-animation';
import { ABOUT_ME } from '../../constants/IntroConst';

const AboutMeAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        ABOUT_ME,
      ]}
      wrapper="p"
      speed={100}
      style={{ fontSize: '1.7vw', display: 'inline-block' }}
    />
  );
};

export default AboutMeAnimation;