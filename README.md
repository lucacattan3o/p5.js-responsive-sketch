# p5.js Responsive Sketch

This simple library can help you make your [p5.js](https://p5js.org/) sketch responsive according to the screen size, check out [this demo](https://lucacattan3o.github.io/p5.js-responsive-sketch/demo/index.html).

It also works in **p5.js editor**, here is a [working demo](https://editor.p5js.org/lucacattan3o/sketches/GSYqzj995).

## Why use it?

Often in creative coding you want to create an HQ sketch (eg. 1080px x 1080px). In a standard environment your sketch will eventually overflow your viewport; and if you change the dimensions of the sketch with `resizeCanvas()`, all the elements in sketch have to scale proportianally (not an easy task).

This library takes a different approach: it scales the canvas element using css to fit the viewport without affecting the sketch: this way you can easily adjust the viewport or browse your sketch on a mobile device, all elements of the sketch will not be modified.

## How to use it  

Load the library with CDN.

```html
<script src="https://unpkg.com/p5-responsive-sketch"></script>
<script src="sketch.js"></script>
```

Or download [sketch-responsive.js](https://raw.githubusercontent.com/lucacattan3o/p5.js-responsive-sketch/main/sketch-responsive.js) and load it in your project.

```html
<script src="sketch-responsive.js"></script>
<script src="sketch.js"></script>
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

Take a look a the [demo](https://lucacattan3o.github.io/p5.js-responsive-sketch/demo/index.html) to see it in action.

## Options

You can optionally pass some options as an object.

### Margin 

This will set the margin around the canvas. Default to `80`, `0` to disable.

```js
responsiveSketch({
  margin: 10
});
```
### Center on page

By default the canvas will be centered in the page using css flex. You can turn off this behavior with the `centerOnPage` option.

```js
responsiveSketch({
  margin: 0,
  centerOnPage: false
});
```

### Pixel density

By default the [pixel density](https://p5js.org/reference/#/p5/pixelDensity) is set to `1`.
You can pass any number or set the option to `null` to manage that on your own.

```js
responsiveSketch({
  margin: 0,
  pixelDensity: null
});
```

## ES6 Compatibility

This library is not yet ready for use with ES6.