export default function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    let fields = new window.FormData(event.target);
    let fullname = fields.get("fullname");
    let email = fields.get("email");
    let message = fields.get("message");
    let body = {
      fullname,
      email,
      message,
    };
    let apikey = process.env.API_KEY;
    let Authorization = process.env.API_TOKEN;
    fetch("https://wsteylxklfdnumevkeun.supabase.co/rest/v1/contact", {
      method: "POST",
      headers: {
        apikey,
        Authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(() => {
      alert("Message sent!!");
      event.target.reset();
    });
  };
  return (
    <section className="contact grid" id="contact">
      <div className="contact__socials">
        <div className="contact__title">Contact me now</div>
        <div className="contact__links grid">
          <div target="_blank" className="contact__link">
            <div className="contact__link-icon">
              <i className="uil uil-envelope"></i>
            </div>
            <div className="contact__link-content">gnzcode@gmail.com</div>
          </div>
          <div target="_blank" className="contact__link">
            <div className="contact__link-icon">
              <i className="uil uil-discord"></i>
            </div>
            <div className="contact__link-content">gnzcode</div>
          </div>
          <div target="_blank" className="contact__link">
            <div className="contact__link-icon">
              <i className="uil uil-linkedin"></i>
            </div>
            <div className="contact__link-content">@gnzcode</div>
          </div>
        </div>
      </div>
      <form className="contact__form grid" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full name"
          name="fullname"
          id="fullname"
          className="contact__input"
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          className="contact__input"
          required
        />
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          className="contact__input contact__input--textarea"
          required
          minLength={8}
        />
        <button className="contact__button button">
          Send <i className="uil uil-message"></i>
        </button>
      </form>
    </section>
  );
}
