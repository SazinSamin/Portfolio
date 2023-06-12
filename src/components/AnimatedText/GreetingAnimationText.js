import { TypeAnimation } from 'react-type-animation';
import { GRETTING } from '../../constants/IntroConst';

const GrettingAnimationText = () => {
  return (
    <TypeAnimation
      sequence={[
        GRETTING,
      ]}
      wrapper="p"
      speed={10}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
  );
};

export default GrettingAnimationText;