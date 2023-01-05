import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Skills() {
  return (
    <>
      <AnimationOnScroll animateIn="animate__headShake animate__delay-1s">
        <h3 id="skills" className="heading">
          Here is a list of the technologies that I'm familiar with!
        </h3>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
      >
        <div className="skills container-fluid">
          <ul className="skillList">
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>BOOTSTRAP</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
          </ul>
        </div>
      </AnimationOnScroll>
    </>
  );
}
