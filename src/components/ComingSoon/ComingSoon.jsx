import React from "react";
// import kzLogo from "./assets/kza-logo-t9-h150.svg";
import LOGO_3D_SAFARI from "../../assets/logo-transparent-hevc-safari.mp4";
import LOGO_3D_CHROME from "../../assets/logo-transparent-vp9-chrome.webm";
import "./ComingSoon.css";

function ComingSoon() {
    return (
        <div className="container">
            <div className="horisontal-box">
                <video className="logo-3d" autoPlay loop muted playsInline>
                    <source
                        src={LOGO_3D_SAFARI}
                        type='video/mp4; codecs="hvc1"'
                    />
                    <source src={LOGO_3D_CHROME} type="video/webm" />
                </video>
                {/* <img className="logo" src={kzLogo} alt="Logo" /> */}
                <h2>
                    Coming <br />
                    Soon
                </h2>
            </div>
            <h3 className="text-gradient">Stay Tuned</h3>
        </div>
    );
}

export default ComingSoon;
