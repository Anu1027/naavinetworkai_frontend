import React from "react";
import { useNavigate } from "react-router-dom";
import { useCoinContextData } from "../../context/CoinContext";
import "./socialDimension.scss";

import logo from "../../static/images/logo.svg";
import hamIcon from "../../static/images/icons/hamIcon.svg";
import SD from "../../static/images/SD1.png";

const SocialDimension = () => {
  const navigate = useNavigate();
  const { preLoginMenu, setPreLoginMenu } = useCoinContextData();

  return (
    <div className="SocialDimensionPage">
      <div className="navbar">
        <div className="hamMenu-home">
          <img src={hamIcon} alt="" />
        </div>
        <div
          className="logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} alt="logo" />
        </div>
        <div className="menu-items">
          <div
            onClick={() => {
              navigate("/");
              setPreLoginMenu("About Us");
            }}
          >
            <p style={{ fontWeight: preLoginMenu === "About Us" ? "600" : "" }}>
              About Naavi
            </p>
          </div>
          <div
            onClick={() => {
              navigate("/");
              setPreLoginMenu("Partner");
            }}
          >
            <p style={{ fontWeight: preLoginMenu === "Partner" ? "600" : "" }}>
              Partners
            </p>
          </div>
          <div
            onClick={() => {
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
      <div className="socialDimension container py-5">
        <div className="row">
          <div className="col-12">
            {/* <div className="">
              <h5 className="py-3 w-100">
                <span>Problem:</span> Following the Bologna process, German
                higher education has seen increased social starification,
                disproportionately affecting students from disadvantaged and
                migrant backgrounds
              </h5>
              <h5>
                <span>Bias:</span> Concerns about biases in school student
                counseling, reflecting social and migration backgrounds,
                perpetuating cycles of disadvantage and privilege{" "}
              </h5>
              <h5 className="py-3">
                <span>Dropout Risk:</span> Immigrant students face lower grades
                and a higher dropout risk, leading to increased chances of
                academic failure
              </h5>
            </div> */}
          </div>
        </div>
        <div className="row my-5">
          <h2>Decision Delusion Problem</h2>
          <div className="col-md-6 my-4">
            <div className="custom-card">
              <p>
                Due to the lack of Personalised education pathways students
                often choose generic study option
              </p>.
            </div>
            <div className="custom-card">
              <p>
                Many students, who do not fit standard educational prospects,
                fall through the cracks
              </p>
            </div>
            <div className="custom-card">
              <p>
                This situation leads to disengagement, low motivation and
                mismatched careers
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img className="SD-image" src={SD} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialDimension;
