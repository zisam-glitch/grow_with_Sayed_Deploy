import { useEffect, useState } from "react";
import {
  camera,
  cameraDark,
  msg,
  pen,
  penDark,
  user,
  userDark,
  web,
  webDark,
} from "../svgImage";
import ModalBox from "./ModalBox";

const Service = ({ dark }) => {
  const [modal, setModal] = useState(0);
  const hidden = (value) => (value === modal ? "" : "service_hidden_details");
  useEffect(() => {
    let VanillaTilt = require("vanilla-tilt");
    VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
      maxTilt: 6,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 500,
      transition: true,
    });
  }, []);
  return (
    <div className="aali_tm_section" id="service">
      <div className="aali_tm_service">
        <div className="container">
          <div className="service_list">
            <ul>
              <li className="simple wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner">
                  <div
                    className="aali_tm_main_title"
                    data-text-align="left"
                    data-color="dark"
                  >
                    <span>What I Do</span>
                    <h3>My Services</h3>
                    <p>
                      We provide superior products at affordable prices. Our primary
                      objective is to ensure customer contentment, achieved by prioritizing
                      market orientation and continuous service and assistance.
                    </p>
                  </div>
                </div>
              </li>
              <li
                className="wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? cameraDark : camera}
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="Service"
                    />
                  </span>
                  <div className="title">
                    <h3>Instagram account growth</h3>
                    <span className="price">
                      Starts from <span>$20</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                      Aali is a leading web design agency with an award-winning
                      design team that creates innovative, effective websites{" "}
                    </p>
                  </div>
                  <a
                    className="aali_tm_full_link"
                    href="#"
                    onClick={() => setModal(1)}
                  />
                  <img
                    className="popup_service_image"
                    src="img/service/1.jpg"
                    alt="aali image"
                  />
                </div>
                <div className={hidden(1)}>
                  <ModalBox close={setModal}>
                    <div className="service_popup_informations">
                      <div className="image">
                        <img src="img/thumbs/4-2.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/service/1.jpg"
                        />
                      </div>
                      <div className="main_title">
                        <h3>Instagram account growth</h3>
                        <span className="price">
                          Starts from <span>$20</span>
                        </span>
                      </div>
                      <div className="descriptions">
                        <p>
                          Grow with Sayed is a premier web design and digital marketing
                          agency equipped with an exceptional team of skilled professionals
                          who specialize in crafting cutting-edge websites and driving
                          successful Instagram marketing campaigns. We understand that
                          in today's digital landscape, your website serves as the initial
                          point of contact for potential customers, with nearly 95 percent
                          of their first impressions influenced by web design.
                        </p>
                        <p>
                          As a result, the web design services we offer hold tremendous potential
                          to significantly impact your company's bottom line. That's why an
                          increasing number of businesses are reevaluating their website's design
                          and choosing to collaborate with Grow with Sayed, a renowned agency
                          that has generated over $20k in revenue for our valued clients.
                        </p>
                        <p>
                          With a remarkable track record of over three web design awards, we are
                          confident in our ability to create a custom website that not only showcases
                          your brand but also enhances conversion rates and maximizes revenue generation.
                          Additionally, our expertise in Instagram marketing ensures that we can
                          effectively leverage this powerful platform to propel your business towards
                          its goals.
                        </p>
                        <p>
                          Choose Grow with Sayed as your trusted partner, and together, we will
                          revolutionize your online presence, drive sales, and help your business
                          thrive in the digital realm.
                        </p>
                      </div>
                    </div>
                  </ModalBox>
                </div>
              </li>
              <li className="wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? webDark : web}
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="service"
                    />
                  </span>
                  <div className="title">
                    <h3>Web Development</h3>
                    <span className="price">
                      Starts from <span>$100</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                      Aali is a leading web design agency with an award-winning
                      design team that creates innovative, effective websites{" "}
                    </p>
                  </div>
                  <a
                    className="aali_tm_full_link"
                    href="#"
                    onClick={() => setModal(2)}
                  />
                  <img
                    className="popup_service_image"
                    src="img/service/3.jpg"
                    alt="aali image"
                  />
                </div>
                <div className={hidden(2)}>
                  <ModalBox close={setModal}>
                    <div className="service_popup_informations">
                      <div className="image">
                        <img src="img/thumbs/4-2.jpg" alt="aali image" />
                        <div
                          className="main"
                          data-img-url="img/service/3.jpg"
                        />
                      </div>
                      <div className="main_title">
                        <h3>Web Development</h3>
                        <span className="price">
                          Starts from <span>$100</span>
                        </span>
                      </div>
                      <div className="descriptions">
                        <p>
                          Grow with Sayed is a premier web design and digital marketing
                          agency equipped with an exceptional team of skilled professionals
                          who specialize in crafting cutting-edge websites and driving
                          successful Instagram marketing campaigns. We understand that
                          in today's digital landscape, your website serves as the initial
                          point of contact for potential customers, with nearly 95 percent
                          of their first impressions influenced by web design.
                        </p>
                        <p>
                          As a result, the web design services we offer hold tremendous potential
                          to significantly impact your company's bottom line. That's why an
                          increasing number of businesses are reevaluating their website's design
                          and choosing to collaborate with Grow with Sayed, a renowned agency
                          that has generated over $20k in revenue for our valued clients.
                        </p>
                        <p>
                          With a remarkable track record of over three web design awards, we are
                          confident in our ability to create a custom website that not only showcases
                          your brand but also enhances conversion rates and maximizes revenue generation.
                          Additionally, our expertise in Instagram marketing ensures that we can
                          effectively leverage this powerful platform to propel your business towards
                          its goals.
                        </p>
                        <p>
                          Choose Grow with Sayed as your trusted partner, and together, we will
                          revolutionize your online presence, drive sales, and help your business
                          thrive in the digital realm.
                        </p>
                      </div>
                    </div>
                  </ModalBox>
                </div>
              </li>
              <li
                className="simple text wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="list_inner">
                  <div className="wrapper">
                    <div className="inner_text">
                      <h3>Do You Want Something Different?</h3>
                    </div>
                    <div className="aali_tm_button border">
                      <a className="anchor" href="#contact">
                        <span>Knock Me {msg}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <span
          className="square_left moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
        <span
          className="square_right moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
      </div>
    </div>
  );
};

export default Service;
