import React from "react"
import LI from "../media/li.svg"
import GIT from "../media/github.svg"

export const Footer = () => {
  return (
    <div id="Contacts">
      <footer className="footer p-10 bg-base-100 text-black">
        <div>
          <p className="font-bold text-2xl">Laura Cimpoesu</p>
          <p>
            Front-end Software Developer
            <br />
          </p>
          <p className="text-lg italic">Programming since '21.</p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.linkedin.com/in/lauracimpoesu/">
              <img
                src={LI}
                className="w-14 h-14 cursor-pointer"
                alt="Laura's LI Profile"
              />
            </a>
            <a href="https://github.com/lauracimpoesu">
              <img
                src={GIT}
                className="w-14 h-14 cursor-pointer"
                alt="Laura's IG Profile"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
