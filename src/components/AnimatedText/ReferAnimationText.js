import { TypeAnimation } from 'react-type-animation';
import { REFER } from '../../constants/IntroConst';

const ReferAnimationText = () => {
  return (
    <TypeAnimation
      sequence={[
        REFER,
        1000
      ]}
      wrapper="p"
      speed={10}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
  );
};

export default ReferAnimationText;