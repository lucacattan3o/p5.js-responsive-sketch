/**
* @file A simple plugin library to make your p5.js sketch responsive
* - It works also in p5.js editor
* @author Luca Cattaneo <luca.cattaneo@mekit.it>
* {@link https://lucacattan3o.github.io/}
* @version 1.0.0
* @copyright Luca Cattaneo 2023
* @license MIT License
*/

let rSketch = {
  maxWidth: null,
  maxHeight: null,
  domEl: null,
  scaleFactor: 1,
  margin: 0,
};

/**
 * Make your sketch resposive
 * @summary Use this function inside p5.js setup() function 
 * @param {Object} options - custom options
 * @param {HTMLElement} options.el - dom element to scale
 * @param {Number} options.margin - margin left aroud the sketch
 */
function responsiveSketch(options){

  // Default settings
  let defaultSettings = {
    el: document.getElementsByTagName('main')[0],
    margin: 80,
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

  rSketch.margin = settings.margin;
  rSketch.domEl = settings.el;
  rSketch.maxWidth = width;
  rSketch.maxHeight = height;

  if (settings.pixelDensity !== null){
    pixelDensity(settings.pixelDensity);
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
  
  rSketch.domEl.style = "transform: scale(" + rSketch.scaleFactor + ")";
}

