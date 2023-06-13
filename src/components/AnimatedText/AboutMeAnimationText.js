import { TypeAnimation } from 'react-type-animation';
import { ABOUT_ME } from '../../constants/IntroConst';

const AboutMeAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        ABOUT_ME,
        2000,
      ]}
      wrapper="p"
      speed={100}
      repeat={0}
      style={{ fontSize: '1.7vw', display: 'inline-block', 'text-shadow': '0.1vw 0.1vw 0.9vw blue', textAlign: "justify"
    }}
    />
  );
};

export default AboutMeAnimation;