import React from 'react'
import LI from '../media/li.svg'
import GIT from '../media/github.svg'

export const Footer = () => {
  return (
    <div>
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
            <a>
              <img src={LI} className="w-14 h-14 cursor-pointer" />
            </a>
            <a>
              <img src={GIT} className="w-14 h-14 cursor-pointer" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
