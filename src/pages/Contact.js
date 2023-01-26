import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <>
      <div>
        <h3 id="contact" className="heading">
          What's Next?
        </h3>
      </div>
      <div>
        <div className="contact container-fluid">
          <h4>Get In Touch</h4>
          <p>
            My Indox is always open. Whether you have a question or just want to
            say hello!, I'll try my best to get back to you! Feel free to{" "}
            <a
              href="mailto:prasathvjkmr@gmail.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Mail me
            </a>{" "}
            about any relevant job updates.
          </p>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="mx-auto my-md-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your Name here"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="form-label" htmlFor="emial">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email here"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea
                className="form-control"
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Enter your message here :)"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="text-center my-2">
              <button className="btn btn-primary w-100" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
