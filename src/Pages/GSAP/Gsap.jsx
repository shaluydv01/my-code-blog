import React from "react";
import "./Gsap.css";

const Gsap = () => {
  return (
    <>
      <div id="gsap-main">
        <div id="top-gsap-heading">GSAP(GreenSock Animation Platform)</div>

        <div id="gsap-install-container">
          <h1>
            "GSAP" is a "framework <i>agnostic</i>", this means it can be used
            in React, Webflow, Wordpress, or any other JS/Web framework.
          </h1>
          <h2>
            <u>GSAP Installation:</u>
          </h2>
          <ol>
            <li>The zip download</li>
            <li>Script tags</li>
            <li>using a cdn</li>
            <li>npm/yarn</li>
            <li>npm/yarn club</li>
            <li>React</li>
            <li></li>
            <li></li>
          </ol>
        </div>
        <div id="gsap-content-container">
          <div>
            <h2>Script tags</h2>
            <p>
              <li>Easiest way to get GSAP in your code.</li>
              <li>
                Go to the downloaded zip folder, copy the file named gsap.min.js
                paste it in your project folder and put it in script tag just
                above your own script tag.
              </li>
              <li></li>
            </p>
          </div>
          <div>
            <h2>Using a cdn</h2>
            <p>
              <li>Go and google search GSAP cdn,</li>
              <li>Copy the script tag and put it in your code,</li>
              <li>
                If you pick the cdn from GSAP official website, you will get all
                the other extra links at one place such as scrollTrigger,
                scrollTo, motionPath, etc.
              </li>
              <span class="note">
                ***Keep these links just below the gsap.js script tag.
              </span>
            </p>
          </div>

          <div>
            <h2>npm/yarn</h2>
            <p>
              <li>Install first using terminal, and then</li>
              <li>use while importing it in your code</li>
              <li>
                While importing multiple plugins individually, can import all
                plugins simultaneously using "gsap/all".
              </li>
              <code>-----&gt; import _, _, _, _ from "gsap/all"</code>
            </p>
          </div>

          <div>
            <h2>npm/yarn club</h2>
            <p>
              <li>First insure that you have logged in on official website.</li>
              <li>There are two methods for installation:</li>
              <h4>---------&gt; private registry(best practice, upto date)</h4>
              <h4>---------&gt; zip file</h4>
            </p>
          </div>

          <div>
            <h2>React</h2>
            <p>
              <h4>prefer document for it...</h4>
              <code>------&gt; npm install gsap</code>
              <br />
              <code>------&gt; import at the head</code>
              <br />
              <code>------&gt; gsap.registerPlugin(useGSAP)</code>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gsap;
