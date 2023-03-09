import React from 'react'
import Laura from "../media/laura.png"

export const Presentation = () => {
  return (
    <>
      <div id="Intro" className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lcimg-container">
            <img
              src={Laura}
              className="max-w-sm rounded-lg shadow-2xl lcimg"
              alt="Laura's face"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold">Who is Laura?</h1>
            <p className="py-6">
              Hello, my name is Laura Cimpoesu and I am a Frontend Enthusiast. I
              started my career in programming in 2021 and since then I strive
              to become the best that I can be in this industry. My mission is
              to{" "}
              <span class="font-bold">
                improve the quality of people's lives through web development,
                building things that will greatly benefit society
              </span>
              , while I also aim to{" "}
              <span class="font-bold">
                inspire more women to join the tech industry
              </span>{" "}
              because <span class="font-bold">Women CAN, </span>{" "}
              <span class="font-bold italic">too</span>. And the coding
              community is just awesome! 🎉😍💻 I am extremely passionate about
              this profession and I hope that with this portfolio you will get a
              sense it too.
            </p>
            <button className="btn btn-success hover:btn-accent">
              Get to know more
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
