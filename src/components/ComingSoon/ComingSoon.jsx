import React from "react";
// import kzLogo from "./assets/kza-logo-t9-h150.svg";
import LOGO_3D_SAFARI from "../../assets/logo-transparent-hevc-safari.mp4";
import LOGO_3D_CHROME from "../../assets/logo-transparent-vp9-chrome.webm";
// import AIRCRAFT_3D_SAFARI from "../../assets/aircraft-hevc-safari.mp4";
// import AIRCRAFT_3D_CHROME from "../../assets/aircraft-vp9-chrome.webm";
import ENGINE_3D_SAFARI from "../../assets/engine-hevc-safari.mp4";
import ENGINE_3D_CHROME from "../../assets/engine-vp9-chrome.webm";
import "./ComingSoon.css";

function ComingSoon() {
    return (
        <div className="container">
            {/* <div>
                <video className="image-3d" autoPlay loop muted playsInline>
                    <source
                        src={AIRCRAFT_3D_SAFARI}
                        type='video/mp4; codecs="hvc1"'
                    />
                    <source src={AIRCRAFT_3D_CHROME} type="video/webm" />
                </video>
            </div> */}
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
            {/* <div>
                <video className="image-3d" autoPlay loop muted playsInline>
                    <source
                        src={ENGINE_3D_SAFARI}
                        type='video/mp4; codecs="hvc1"'
                    />
                    <source src={ENGINE_3D_CHROME} type="video/webm" />
                </video>
            </div> */}
        </div>
    );
}

export default ComingSoon;
