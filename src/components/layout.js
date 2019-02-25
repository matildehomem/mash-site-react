import React, { Fragment } from "react"
import PropTypes from "prop-types"

import './layout.css'
import '../sass/main.scss'

import Navbar from './globals/Navbar'
import Footer from "./globals/Footer";
import Prefooter from "./globals/Prefooter";

const Layout = ({ children }) => (
  <Fragment>
    <Navbar />
    {children}
    <Prefooter />
    <Footer />
  </Fragment>

)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
