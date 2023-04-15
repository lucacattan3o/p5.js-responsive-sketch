# p5.js Responsive Sketch

This is simple library can help you make your [p5.js](https://p5js.org/) sketch responsive according to the screen size.

It also works in [p5.js editor](https://editor.p5js.org/).

## How to use it  

Download [sketch-responsive.js](https://raw.githubusercontent.com/lucacattan3o/p5.js-responsive-sketch/main/sketch-responsive.js) and load it in your project after `sketch.js`.

```html
<script src="sketch.js"></script>
<script src="sketch-responsive.js"></script>
```

Inside `sketch.js`, use the `responsiveSketch()` function after `createCanvas()`.

```js
function setup() {
  createCanvas(1080, 1080);
  responsiveSketch();
}
```

Your sketch will be resized according to the available window.

If you want to center your sketch in the window, add these few lines of css in your project.

```css
body{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
```  

## Mouse position

TDB

## Options

TDB

## Running demo

TDB