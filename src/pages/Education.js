import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Education() {
  return (
    <>
      <AnimationOnScroll animateIn="animate__headShake animate__delay-1s">
        <h3 id="education" className="heading">
          Education
        </h3>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
      >
        <div className="education container-fluid">
          <h5>B.TECH INFORMATION TECHNOLOGY</h5>
          <div>
            <strong>University College of Engineering - BIT Campus</strong>
            <p>Trichy</p>
          </div>
          <h5>HSC</h5>
          <div>
            <strong>SRM Muthamizhl Hr Sec School</strong>
            <p>Salem</p>
          </div>
          <h5>SSLC</h5>
          <div>
            <strong>ST.Paul's Mat Hr Sec School</strong>
            <p>Neyveli</p>
          </div>
        </div>
      </AnimationOnScroll>
    </>
  );
}
