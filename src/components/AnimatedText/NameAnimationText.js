import { TypeAnimation } from 'react-type-animation';
import { NAME } from '../../constants/IntroConst';

const NameAnimationText = () => {
  return (
    <TypeAnimation
      sequence={[
        NAME,
        1000
      ]}
      wrapper="h1"
      speed={10}
      style={{ fontSize: '4.2vw', display: 'inline-block', margin: '2vw',}}
    />
  );
};

export default NameAnimationText;