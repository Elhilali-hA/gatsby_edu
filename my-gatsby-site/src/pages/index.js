import * as React from "react";
import './app.css'
import First from '../components/First_section';
import Second from '../components/Second_section';

const pageStyles = {
  margin: 0,
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <div className="App" style={pageStyles}>
    <First />
    <Second />

    </div>
  )
}

export default IndexPage
