# p5.js Responsive Sketch

This is simple library can help you make your [p5.js](https://p5js.org/) sketch responsive according to the screen size.

It also works in [p5.js editor](https://editor.p5js.org/), here is a [working demo](https://editor.p5js.org/lucacattan3o/sketches/GSYqzj995).

## How to use it  

Add few lines of code in your `style.css`

```css
html, body{
  margin: 0;
  padding: 0;
  /* add the following lines */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
```

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

## Mouse position

This library will modify the canvas using css `scale()` transformation: therefore the `mouseX` and `mouseY` variables will no longer be correct.

To solve this you can retrieve the right position of the mouse like this.

Define a global variable at the beginning of your sketch and use the `responsiveMousePos()` function to get the right position inside `draw()`.

```js
let mPos;

function setup() {
  createCanvas(1080, 1080);
  responsiveSketch();
}

function draw() {
  background(255);
  
  mPos = responsiveMousePos();
  
  // Wrong position
  strokeWeight(1);
  circle(mouseX, mouseY, 150);

  // Right position
  strokeWeight(10);
  circle(mPos.x, mPos.y, 150);
}
```


## Options

TDB

## Todo

- [ ] Set pixel dimension to the parent element and add some flex properties
```js
let w = width * rSketch.scaleFactor;
let h = height * rSketch.scaleFactor;
rSketch.domEl.parentNode.style = "width: " + w + "px; height: " + h + "px;";
```
```css
main{
  display: flex;
  justify-content: center;
  align-items: center;
}
```

- [ ] Css as option



