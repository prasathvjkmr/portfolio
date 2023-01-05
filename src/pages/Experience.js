import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Experience() {
  return (
    <>
      <AnimationOnScroll animateIn="animate__headShake animate__delay-1s">
        <h3 id="experience" className="heading">
          Where I've worked
        </h3>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
      >
        <div className="experience container-fluid">
          <h4>
            Frontend Developer @{" "}
            <a href="https://www.quadapp.in/" target="_blank" rel="noreferrer">
              Quadapp Technologies
            </a>{" "}
          </h4>
          <h6>July 2022 - Present</h6>
          <p>Responsible for code development and responsive Web Development</p>
        </div>
      </AnimationOnScroll>
    </>
  );
}
