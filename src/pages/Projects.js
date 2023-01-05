import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Projects() {
  return (
    <>
      <AnimationOnScroll animateIn="animate__headShake animate__delay-1s">
        <h3 id="projects" className="heading">
          Projects I've Built
        </h3>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
      >
        <div className="projects container-fluid">
          <div>
            <h5>FARMARKET</h5>
            <p>A Web Application using apriori algorithm.</p>
            <ul className="usedLang">
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
            </ul>
          </div>
        </div>
      </AnimationOnScroll>
    </>
  );
}
