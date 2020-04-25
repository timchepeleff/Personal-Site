import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import Info from "../components/info"
import { Helmet } from "react-helmet"

function index() {
  return (
    <div>
      <Appbar />
      <Info />
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Home | Tim Chepeleff - Web Developer, DevOps Engineer, Software
          Engineer
        </title>
      </Helmet>
    </div>
  )
}

export default index
