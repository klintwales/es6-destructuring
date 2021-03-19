//CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import Cars from "./practice"

const [tesla, honda] = Cars;

const {coloursByPopularity: teslaColoursByPopularity, speedStats:teslaSpeedStats} = tesla
const {coloursByPopularity: hondaColoursByPopularity, speedStats:hondaSpeedStats} = honda

const [teslaTopColour] = teslaColoursByPopularity
const [hondaTopColour] = hondaColoursByPopularity

const {topSpeed:teslaTopSpeed} = teslaSpeedStats
const {topSpeed:hondaTopSpeed} = hondaSpeedStats


ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
