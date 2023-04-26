/**
* https://github.com/lucacattan3o/p5.js-responsive-sketch
* A simple library to make your p5.js sketch responsive
* It works also in p5.js editor
* @author Luca Cattaneo <luca.cattaneo@mekit.it>
* @version 1.0.1
* @license MIT
*/

"use strict";

let rSketch = {
  domEl: null,
  domParent: null,
  margin: 0,
  maxWidth: null,
  maxHeight: null,
  scaleFactor: 1,
};

/**
 * Make your sketch resposive
 * @summary Use this function inside p5.js setup() function 
 * @param {Object} options - custom options
 * @param {Bolean} options.centerOnPage - whether the sketch should be centered on the page
 * @param {HTMLElement} options.el - dom element to scale
 * @param {Number} options.margin - margin around the sketch
 * @param {Number} options.pixelDensity - set a custom pixel density
 */
function responsiveSketch(options){

  // Default settings
  let defaultSettings = {
    el: document.getElementsByTagName('canvas')[0],
    margin: 80,
    centerOnPage: true,
    pixelDensity: 1,
  };

  if (!options) options = {};

  // Extend options
  var settings = {};
  for(var key in defaultSettings){
    if(options.hasOwnProperty(key)){
      settings[key] = options[key];
    } else {
      settings[key] = defaultSettings[key];
    }
  }

  rSketch.centerOnPage = settings.centerOnPage;
  rSketch.domEl = settings.el;
  rSketch.domParent = settings.el.parentNode;
  rSketch.margin = settings.margin;
  rSketch.maxWidth = width;
  rSketch.maxHeight = height;

  if (settings.pixelDensity !== null){
    pixelDensity(settings.pixelDensity);
  }

  if (rSketch.centerOnPage){
    let domBody = document.getElementsByTagName('body')[0];
    let domHtml = document.getElementsByTagName('html')[0];
    
    let pageStyle = `
      display: flex;
      justify-content: center;
      align-items: center;  
      width: 100%;
      height: 100%;
    `;

    domBody.style = pageStyle;
    domHtml.style = pageStyle;
  }
  
  responsiveCanvas(); 
}

/**
 * Get the correct position of the mouse on the the sketch
 * - define a global variable at the beginning of your sketch: let mPos;
 * - use this function inside p5.js draw() function
 * - mPos = responsiveMousePos();
 * - instead of mouseX you can now use mPos.x
 * - instead of mouseY you can now use mPos.y
 * @return {Object} an object representing the position of the mouse
 */
function responsiveMousePos(){
  return {
    x: mouseX * (1 / rSketch.scaleFactor),
    y: mouseY * (1 / rSketch.scaleFactor)
  };
}

/**
 * Update the scale when the window is resized
 */
function windowResized() {
  responsiveCanvas();
}

/**
 * Scale the sketch
 */
function responsiveCanvas(){
  let availableWidth = window.innerWidth - rSketch.margin;
  let availableHeight = window.innerHeight - rSketch.margin;
  
  let scaleFactorW = availableWidth / rSketch.maxWidth;
  let scaleFactorH = availableHeight / rSketch.maxHeight;
  
  let minScaleFactor = Math.min(scaleFactorW, scaleFactorH);
  if (minScaleFactor < 1){
    rSketch.scaleFactor = minScaleFactor;
  }

  let w = width * rSketch.scaleFactor;
  let h = height * rSketch.scaleFactor;

  rSketch.domEl.style = `transform: scale(${rSketch.scaleFactor});`;

  rSketch.domParent.style = `
    display: flex;
    justify-content: center;
    align-items: center;  
    width: ${w}px;
    height: ${h}px;
  `;
}

if (typeof exports !== "undefined"){
  exports.responsiveSketch = responsiveSketch;
  exports.responsiveMousePos = responsiveMousePos;
}