import { AnimationOnScroll } from "react-animation-on-scroll";

export default function About() {
  return (
    <>
      <AnimationOnScroll animateIn="animate__headShake animate__delay-1s">
        <h3 id="about" className="heading">
          About me
        </h3>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
      >
        <div className="about container-fluid">
          <p>
            Hello! Interestingly, I got introduced to programming in my freshman
            year at{" "}
            <a
              href="http://www.aubit.edu.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              University College of Engineering - BIT Campus
            </a>{" "}
            , Trichy where I completed my Bachelors of Technology in Information
            Technology(2018-2022) with 75% aggregate.
          </p>
          <p>
            I'm currently working as a Frontend Developer for{" "}
            <a href="https://www.quadapp.in/" target="_blank" rel="noreferrer">
              Quadapp Technologies
            </a>{" "}
            . My responsibilities includes React based website development &
            responsive design.
          </p>
        </div>
      </AnimationOnScroll>
    </>
  );
}
