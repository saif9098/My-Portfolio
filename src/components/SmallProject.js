import React from 'react'
import { Link } from 'react-router-dom'
import Tilt from "react-parallax-tilt";
const SmallProject = () => {
  return (
    <div id="minilink">
    <Tilt>
    <div className="miniproject">
        <Link to="https://saif9098.github.io/lazarev/" style={{textDecoration:"none",color: "white"}}><h3>LAZAREV CLONE</h3></Link>
    </div>
    </Tilt>
    <Tilt>
    <div  className="miniproject" >
        <Link to="https://saif9098.github.io/music-player/" style={{textDecoration:"none",color: "white"}}><h3>MUSIC PLAYER</h3></Link>
    </div>
    </Tilt>
    <Tilt>
    <div className="miniproject">
        <Link to="https://saif9098.github.io/QRscanner-generator/" style={{textDecoration:"none",color: "white"}}><h3>QR-GENERATOR & SCANNER</h3></Link>
    </div>
    </Tilt>
    <Tilt>
    <div className="miniproject">
        <Link to="https://saif9098.github.io/sidcup-family-golf-clone/" style={{textDecoration:"none",color: "white"}}><h3>ANIMATED WEBSITE</h3></Link>
    </div>
    </Tilt>
    <Tilt>
    <div className="miniproject">
        <Link to="https://saif9098.github.io/connect-4-game/" style={{textDecoration:"none",color: "white"}}><h3>CONNECT 4 GAME</h3></Link>
    </div>
    </Tilt>
    <Tilt>
    <div className="miniproject">
        <Link to="https://user-crud-drab.vercel.app/" style={{textDecoration:"none",color: "white"}}><h3>USER CRUD (REACT+REDUX)</h3></Link>
    </div>
    </Tilt>
    </div>
  )
}

export default SmallProject
