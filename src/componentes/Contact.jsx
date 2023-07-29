import React from "react";
import "..//scss/Contact.scss";

function Contact() {
  return (
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Contact</h2>
        </div>

        <div class="row mt-1">
          <div class="col-12">
            <div class="info d-flex justify-content-center align-items-center flex-column">
              <div class="address">
                <p>
                  <i class="bi bi-geo-alt"></i>A108 Adam Street, <br /> New
                  York, NY 535022
                </p>
              </div>

              <div class="email">
                <p>
                  <i class="bi bi-envelope"></i>info@example.com
                </p>
              </div>

              <div class="phone">
                <p>
                  <i class="bi bi-phone"></i>+1 5589 55488 55s
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-8 mt-5 mt-lg-0"></div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
