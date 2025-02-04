export default function Resume() {
  return (
    <section className="container my-8" id="resume">
      <div className="flex flex-col items-center">
        <p className="my-4 text-black-600 font-display text-3xl max-w-5xl mx-auto text-center">
          Want the details on my journey as a Front-End Developer? Grab my
          resume and explore my skills, experience, and projects in depth.
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          className="bg-teal-500 px-8 py-2 rounded hover:bg-teal-400 flex gap-4 font-mono font-bold text-2xl text-white"
        >
          <i className="bi bi-download"></i>
          Resume
        </a>
      </div>
    </section>
  );
}
