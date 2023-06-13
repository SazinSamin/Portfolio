import { TypeAnimation } from 'react-type-animation';
import { NAME } from '../../constants/IntroConst';

const NameAnimationText = () => {
  return (
    <TypeAnimation
      sequence={[
        NAME,
        1000,
        "Thank you for visiting my portfolio",
        2000,
        NAME
      ]}
      wrapper="h1"
      speed={10}
      style={{ fontSize: '4.2vw', display: 'inline-block', margin: '2vw', 'text-shadow': '0.1vw 0.1vw 0.9vw blue'}}
    />
  );
};

export default NameAnimationText;