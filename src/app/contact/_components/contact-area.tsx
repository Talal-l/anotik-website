"use client";
import { useActionState, useEffect, useRef } from "react";
import { submitContactForm } from "../_actions/contact-action";

export default function ContactArea() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(submitContactForm, {
    success: false,
    message: "",
  });

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);
  return (
    <section className="contact-area-contact-page">
      <div className="container large">
        <div className="contact-area-contact-page-inner section-spacing-top">
          <div className="section-header fade-anim">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">Contact</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title font-sequelsans-romanbody">
                  Let’s get your project started.
                </h2>
              </div>
            </div>
          </div>
          <div className="section-content-wrapper fade-anim">
            <div className="section-content">
              <div className="contact-mail">
                <p className="title">Get in touch</p>
                <p className="text">
                  We’re excited to hear from you and let’s start something
                  special together <br />
                  <a href="mailTo:info@anotik.com">info@anotik.com</a>
                </p>
              </div>
            </div>
            <div className="contact-wrap">
              <form ref={formRef} action={formAction} id="contact__form">
                <div className="contact-formwrap">
                  <div className="contact-formfield">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name*"
                      required
                      disabled={isPending}
                    />
                  </div>
                  <div className="contact-formfield">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email*"
                      required
                      disabled={isPending}
                    />
                  </div>
                  <div className="contact-formfield">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Phone*"
                      required
                      disabled={isPending}
                    />
                  </div>
                  <div className="contact-formfield">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      placeholder="Company"
                      disabled={isPending}
                    />
                  </div>
                  <div className="contact-formfield">
                    <input
                      type="text"
                      name="solution"
                      id="solution"
                      placeholder="Solution"
                      disabled={isPending}
                    />
                  </div>
                  <div className="contact-formfield message">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message*"
                      required
                      disabled={isPending}
                      rows={4}
                      style={{
                        width: "100%",
                        minHeight: "40px",
                        border: "none",
                        borderBottom: "1px solid var(--primary)",
                        outline: "none",
                        backgroundColor: "transparent",
                        transition: "all 0.5s",
                        color: "var(--primary)",
                        resize: "vertical",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>
                </div>
                <div className="submit-btn">
                  <button
                    type="submit"
                    className="rr-btn"
                    disabled={isPending}
                  >
                    <span className="btn-wrap">
                      <span className="text-one">
                        {isPending ? "Sending..." : "Send Message"}
                      </span>
                      <span className="text-two">
                        {isPending ? "Sending..." : "Send Message"}
                      </span>
                    </span>
                  </button>
                </div>
                {state.message && (
                  <div
                    id="response-message"
                    style={{
                      marginTop: "20px",
                      padding: "12px",
                      borderRadius: "4px",
                      backgroundColor: state.success
                        ? "rgba(76, 175, 80, 0.1)"
                        : "rgba(244, 67, 54, 0.1)",
                      color: state.success ? "#4caf50" : "#f44336",
                      border: `1px solid ${
                        state.success ? "#4caf50" : "#f44336"
                      }`,
                    }}
                  >
                    {state.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
