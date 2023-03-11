import React from "react"
import Enel from "../media/enel.png"
import Ten from "../media/ten.png"
import Vt from "../media/vt.png"
import Vy from "../media/vy.png"
import Co from "../media/co.png"
import Plc from "../media/plc.png"

export const Projects = () => {
  return (
    <div id="Projects" className="bg-secondary py-32 px-7">
      <h1 className="font-bold text-center text-4xl mb-12">Projects</h1>
      <div className="md:flex justify-around">
        <div className="card glass mb-7 mx-6">
          <figure>
            <img src={Enel} alt="Enel's website" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Enel</h2>
            <p>Utility Company</p>
            <div className="card-actions justify-end">
              <a href="https://www.enelx.com" rel="noreferrer" target="_blank">
                <button className="btn btn-warning">Show Live</button>
              </a>
            </div>
          </div>
        </div>

        <div className="card glass mb-7 mx-6">
          <figure>
            <img src={Vt} alt="Vite Trasformate Website" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Vite Trasformate</h2>
            <p>Christian Organisation</p>
            <div className="card-actions justify-end">
              <a
                href="https://vitetrasformate.netlify.app"
                rel="noreferrer"
                target="_blank"
              >
                <button className="btn btn-warning">Show Live</button>
              </a>
            </div>
          </div>
        </div>

        <div className="card glass mb-7 mx-6">
          <figure>
            <img src={Plc} alt="Puppy Lyfe Co Website" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Puppy Lyfe Co</h2>
            <p>E-commerce Business</p>
            <div className="card-actions justify-end">
              <a
                href="https://www.puppylyfeco.com"
                rel="noreferrer"
                target="_blank"
              >
                <button className="btn btn-warning">Show Live</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex justify-around">
        <div className="card glass mb-7 mx-6">
          <figure>
            <img src={Ten} alt="Traslochi Easy Nello Website" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Traslochi Easy Nello</h2>
            <p>Moving & Storage Company</p>
            <div className="card-actions justify-end">
              <a
                href="https://traslochieasynello.netlify.app"
                rel="noreferrer"
                target="_blank"
              >
                <button className="btn btn-warning">Show Live</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card glass mb-7 mx-6">
          <figure>
            <img src={Co} alt="Crypto Oracles Website" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Crypto Oracles</h2>
            <p>Web3 Start-up</p>
            <div className="card-actions justify-end">
              <a
                href="https://www.cryptoracles.xyz"
                rel="noreferrer"
                target="_blank"
              >
                <button className="btn btn-warning">Show Live</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card glass mb-7 mx-6">
          <figure>
            <img src={Vy} alt="Vysiogen Website" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Vysiogen</h2>
            <p>Consultancy Agency </p>
            <div className="card-actions justify-end">
              <a
                href="https://vysiogen.netlify.app"
                rel="noreferrer"
                target="_blank"
              >
                <button className="btn btn-warning">Show Live</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
