import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.scss";
import { useCoinContextData } from "../../context/CoinContext";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";

//images
import logo from "../../static/images/logo.svg";
import homepageImg from "../../static/images/homepageImg.jpg";
import home1 from "../../static/images/home1.jpg";
import discoverIcon from "../../static/images/homepage/discoverIcon.svg";
import refineIcon from "../../static/images/homepage/refineIcon.svg";
import mentorIcon from "../../static/images/homepage/mentorIcon.svg";
import analyzeIcon from "../../static/images/homepage/analyzeIcon.svg";
import adjustIcon from "../../static/images/homepage/adjustIcon.svg";
import accomplishIcon from "../../static/images/homepage/accomplishIcon.svg";
import heroImg from "../../static/images/homepage/heroImg.png";
import hamIcon from "../../static/images/icons/hamIcon.svg";
import aboutNaavi from "../../static/images/aboutNaavi.jpg";
import nextArrowicon from "../../static/images/nextArrow.svg";
import worksNaavi from "../../static/images/works_naavi1.jpg";
import tickPath from "../../static/images/tick.png";
import nvidia from "../../static/images/nvidia.jpeg";
import thub from "../../static/images/t-hub.png";
import thubF from "../../static/images/t-hub-logo-1.png";
import govt from "../../static/images/gov.png";
import math from "../../static/images/math.png";

const HomePage = () => {
  const navigate = useNavigate();
  const { preLoginMenu, setPreLoginMenu } = useCoinContextData();

  const hiwData = [
    {
      id: 1,
      name: "Discover",
      icon: discoverIcon,
    },
    {
      id: 2,
      name: "Refine",
      icon: refineIcon,
    },
    {
      id: 3,
      name: "Get Mentored",
      icon: mentorIcon,
    },
    {
      id: 4,
      name: "Analyze",
      icon: analyzeIcon,
    },
    {
      id: 5,
      name: "Adjust",
      icon: adjustIcon,
    },
    {
      id: 6,
      name: "Accomoplish",
      icon: accomplishIcon,
    },
  ];

  // const pathEngine = [
  //   {
  //     id: 1,
  //     point: "A digital, data-driven approach to study guidance, which is personalized, and unbiased",
  //   },
  //   {
  //     id: 2,
  //     point: "Students would provide information about their goals, interests, motivations along with aspirations",
  //   },
  //   {
  //     id: 3,
  //     point: "They are offered multiple interactive pathways comprising of macro and micro steps",
  //   },
  //   {
  //     id: 4,
  //     point: "Each decision unlocks a new level, progressively clarifying and dynamically defining their pathway",
  //   },
  // ]

  const aboutNaaviContent = [
    {
      id: nextArrowicon,
      backgroundColor: "lightblue",
      content: [
        {
          point:
            "Naavi is a personalized path engine for education, and subsequently careers",
          backgroundColor: "lightblue",
        },
      ],
    },
    {
      id: nextArrowicon,
      backgroundColor: "#a4f5dd",
      content: [
        {
          point:
            " It aims to guide individuals based on their passion, creating innovative and prosperous economies.",
          backgroundColor: "#a4f5dd",
        },
      ],
    },
    {
      id: nextArrowicon,
      backgroundColor: "lightgreen",
      content: [
        {
          point:
            "Naavi serves as a navigation tool, comparable to Google Maps, utilizing vast data on education related trajectories and future transformations.",
          backgroundColor: "lightgreen",
        },
      ],
    },
    {
      id: nextArrowicon,
      backgroundColor: "#b5bcf5",
      content: [
        {
          point:
            " The platform aligns individuals with their passion, guiding them to relevant educational institutions, industries, and careers.",
          backgroundColor: "#b5bcf5",
        },
      ],
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const goToChatBot = () => {
    window.open("https://generate.naavinetwork.ai/");
  };

  return (
    <div className="homepage">
      <div className="navbar">
        <div className="hamMenu-home">
          <img src={hamIcon} alt="" />
        </div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menu-items">
          <a
            href="#aboutID"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("aboutID");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                // Your custom logic
                setPreLoginMenu("About Us");
              }
            }}
          >
            <div>
              <p
                style={{ fontWeight: preLoginMenu === "About Us" ? "600" : "" }}
              >
                A Naavi
              </p>
            </div>
          </a>
          <a
            href="#partners"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("partners");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                // Your custom logic
                setPreLoginMenu("Partners");
              }
            }}
          >
            <div>
              <p
                style={{ fontWeight: preLoginMenu === "Partners" ? "600" : "" }}
              >
                Partners
              </p>
            </div>
          </a>
          {/* <div
            onClick={() => {
              navigate("/maps");
              setPreLoginMenu("Paths");
            }}
          >
            <p style={{ fontWeight: preLoginMenu === "Paths" ? "600" : "" }}>
              Paths
            </p>
          </div> */}
          {/* <div
            onClick={() => {
              navigate("/directory/nodes");
              setPreLoginMenu("Partners");
            }}
          >
            <p style={{ fontWeight: preLoginMenu === "Partners" ? "600" : "" }}>
              Partners
            </p>
          </div> */}
          <div
            onClick={() => {
              navigate("/social");
              setPreLoginMenu("SocialDimension");
            }}
          >
            <p
              style={{
                fontWeight: preLoginMenu === "SocialDimension" ? "600" : "",
              }}
            >
              Problem
            </p>
          </div>
          <div
            onClick={() => {
              navigate("/technology");
              setPreLoginMenu("Technology");
            }}
          >
            <p
              style={{ fontWeight: preLoginMenu === "Technology" ? "600" : "" }}
            >
              Solution
            </p>
          </div>
          <div
            onClick={() => {
              navigate("/contact");
              setPreLoginMenu("ContactUs");
            }}
          >
            <p
              style={{ fontWeight: preLoginMenu === "ContactUs" ? "600" : "" }}
            >
              Contact us
            </p>
          </div>
        </div>
        <div className="btns-div">
          <div
            className="gs-Btn"
            onClick={() => {
              // navigate("/login");
            }}
          >
            Login
          </div>
        </div>
      </div>
      <div className="color-box"></div>
      <div className="homepage-content">
        <div className="cover-Img">
          <img src={home1} alt="" />
          <div className="background-tint"></div>
          <div className="mid-text">Find Your Education Pathway</div>
          <div className="background-tint1"></div>
          <div className="input-box-container">
            {/* <div className="input-box1">
              <input
                type="text"
                placeholder="What Do You Want To Accomplish?"
              />
            </div> */}
            {/* <div className="input-box2">
              <input type="text" placeholder="By When?" />
            </div> */}
            <div
              className="createPath-btn"
              onClick={() => {
                navigate("/generate");
                setPreLoginMenu("Technology");
              }}
            >
              Generate
            </div>
          </div>
        </div>
        <div className="cover-Img-mobile">
          <img src={heroImg} alt="" />
          <div className="background-tint-mobile"></div>
          <div className="mid-text-mobile">Find Your Education Pathway</div>
          <div className="background-tint1-mobile"></div>
          <div className="input-box-container-mobile">
            <div className="input-box1-mobile">
              {/* <input type="text" placeholder="What Do You Want?" /> */}
              <div
                className="createPath-btn-mobile"
                onClick={() => {
                  navigate("/maps");
                }}
              >
                Generate Path
              </div>
            </div>
          </div>
        </div>
        <div className="aboutNaavi container my-3" id="aboutID">
          <h2 className="pt-5">About Naavi</h2>
          <div className="row">
            {/* <div className="col-lg-6 mt-lg-5 py-3">
              {aboutNaaviContent.map((e, i) => {
                return (
                  <div className="box d-flex justify-content-center py-3">
                    <div className="number fw-bold" style={{ backgroundColor: e.backgroundColor }}> 0{e.id} </div>
                    <div class="cards mb-3 h-auto p-1" style={{ border: '2px solid ${e.backgroundColor}' }}>
                      {e.content.map((item, index) => (
                        <div>
                          <p className="card-text ps-3" style={{ backgroundColor: e.backgroundColor, borderRadius: '40px 10px 10px 40px' }}>{item.point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })

              }
            </div> */}
            <div ref={ref} className="col-lg-6 mt-lg-5 py-3">
              {aboutNaaviContent.map((e, i) => (
                <motion.div
                  className="box d-flex justify-content-center py-3"
                  key={i}
                  animate={controls}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 1, delay: i * 1 }}
                >
                  <div
                    className="number fw-bold"
                    style={{ backgroundColor: e.backgroundColor }}
                  >
                    {" "}
                    <img src={e.id} />{" "}
                  </div>
                  <div
                    className="cards mb-3 h-auto p-1"
                    style={{ border: `2px solid ${e.backgroundColor}` }}
                  >
                    {e.content.map((item, index) => (
                      <motion.div
                        key={index}
                        animate={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -20 }}
                        transition={{
                          duration: 0.5,
                          delay: i * 0.1 + index * 0.1,
                        }}
                      >
                        <p
                          className="card-text ps-3"
                          style={{
                            backgroundColor: e.backgroundColor,
                            borderRadius: "40px 10px 10px 40px",
                          }}
                        >
                          {item.point}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="col-lg-6">
              <img className="w-100 h-100" src={aboutNaavi} alt="" />
            </div>
          </div>
        </div>

        <div className="howItWorks container mt-5">
          <h2>Naavi : Personalised Education Pathway</h2>
          <div className="row pt-3">
            <div className="col-6">
              <img
                className="w-100 h-100 rounded-5 hide-height mt-lg-3"
                src={worksNaavi}
                alt=""
              />
            </div>
            <div className="col-6 pt-lg-5">
              <div className="d-flex pt-4">
                <img className="tickImage" src={tickPath} alt="" />
                <p className="shadow p-2 rounded bg-white">
                  A digital, data-driven approach to study guidance, which is
                  personalized, and unbiased
                </p>
              </div>
              <div className="d-flex pt-4">
                <img className="tickImage" src={tickPath} alt="" />
                <p className="shadow p-2 rounded bg-white">
                  Students would provide information about there goals,
                  interest, motivations along with aspiration
                </p>
              </div>
              <div className="d-flex pt-4">
                <img className="tickImage" src={tickPath} alt="" />
                <p className="shadow p-2 rounded bg-white">
                  They are offered multiple interactive pathways comparising of
                  macro and micro steps
                </p>
              </div>
              <div className="d-flex pt-4">
                <img className="tickImage" src={tickPath} alt="" />
                <p className="shadow p-2 rounded bg-white">
                  Each decision unlocks a new level, progressively clarifying
                  and dynamically defining their pathway
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="partner container" id="partners">
          <h2 className="fw-bold">Partners</h2>
          <div className="row">
            <div className="col-lg-4">
              <img className="pImg" src={nvidia} alt="" />
              <p className=" para fw-bold ml">Deep-Tech Initiative</p>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="row">
                <div className="row bg-dark">
                  <div className="col-3">
                    <img className="pImge1" src={thubF} alt="" />
                  </div>
                  <div className="col-4 mt-3">
                    <img className="pImge" src={govt} alt="" />
                  </div>
                  <div className="col-4 ms-5">
                    <img className="pImge" src={math} alt="" />
                  </div>
                </div>
              </div>
              <p className="text-center fw-bold para mt-3">
                AI ScaleUp Program
              </p>
            </div>
          </div>
        </div>
        {/* <div className="pathEngine container py-5">
          <div className="row">
            <div className="col-md-6">
              <img className="pathImage mt-lg-4" src={pathEnginee} alt="" />
            </div>
            <div className="col-md-6">
              <h5>Introducing</h5>
              <h2>Naavi - Path Engine Using Generative AI</h2>
              <p className="py-3">Personalized Career Maps outlining each step to reach the end goal with continuous monitoring</p>
              <div className="">
                {pathEngine.map((e, i) => {
                  return (
                    <ul key={e.id} className="d-flex">
                      <img className="tickImage" src={tickPath} alt="" />
                      <li className="points shadow bg-white p-2 rounded">{e.point}</li>
                    </ul>
                  )
                })}
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="hiw-container container py-5">
          <div className="hiw-text">How Does It Generate Pathways</div>
          <div className="hiw-options">
            {hiwData.map((e, i) => {
              return (
                <div className="each-hiw-option" key={e.id}>
                  <div className="img-border">
                    <img src={e.icon} alt="" />
                  </div>
                  <div className="each-hiw-option-name">{e.name}</div>
                </div>
              );
            })}
            <div className="centre-line"></div>
          </div>
        </div> */}
        <div className="footer">
          <p className="text-white py-4 text-center fs-medium">
            Copyrights © 2024 naavinetwork.ai
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
