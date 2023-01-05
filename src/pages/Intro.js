import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Intro() {
  return (
    <div id="intro" className="container-fluid my-md-4">
      <AnimationOnScroll animateIn="animate__fadeIn" initiallyVisible="true">
        <div className="text-start">
          Hello World! My Name is{" "}
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            initiallyVisible="true"
          >
            <strong className="introName ms-md-5">Prasath.</strong>
          </AnimationOnScroll>
        </div>
        <p> I love exploring new things!</p>
        <p>
          I'm an India based{" "}
          <strong className="animate__animated animate__flash neon">
            Frontend Developer
          </strong>{" "}
          with a goal-driven creative mindset and passion for learning and
          innovating.
        </p>
        <p>
          Currently working as Frontend Developer(React) at{" "}
          <a href="https://www.quadapp.in/" target="_blank" rel="noreferrer">
            Quadapp Technologies
          </a>{" "}
          at Trichy, Tamil Nadu, India.
        </p>

        <p>
          I completed my Under Graduate in Bachelor of Technology in Information
          Technology at{" "}
          <a
            href="http://www.aubit.edu.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            University College of Engineering - BIT Campus
          </a>
          , Trichy, Tamil Nadu.
        </p>
        <p>Outside work, I occasionally do Picture & Video Editing.</p>
      </AnimationOnScroll>
    </div>
  );
}
