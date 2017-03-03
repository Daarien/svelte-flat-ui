## Button

提供一系列按钮用于用户点击操作。

<section class="example">
  <h3>Status styles</h3>
  <div>
    <div id="button1"></div>
    <div id="button2"></div>
    <div id="button3"></div>
    <div id="button4"></div>
    <div id="button5"></div>
    <div id="button6"></div>
    <div id="button7"></div>
  </div>
</section>

<section class="example">
  <h3>Disabled</h3>
  <div>
    <div id="button8"></div>
  </div>
</section>

<section class="example">
  <h3>Enabled</h3>
  <div>
    <div id="button9"></div>
  </div>
</section>

### Example
```javascript
const button = Button({
  target: document.querySelector('#button'),
  data: {
    content: 'Click me!',
    status: 'primary'
  }
})

button.onclick = () => {
  alert('hello world!')
}
```