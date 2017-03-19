## Radio

Provide a radio button for individual selection.

<Section class = "example">
   <H3> Basic radio button </h3>

  <div>
    <div id="radio1"></div>
    <div id="radio2"></div>
  </div>
</section>

<section class="example">
  <h3>禁用状态</h3>

  <div>
    <div id="radio3"></div>
    <div id="radio4"></div>
  </div>
</section>

### Example
```javascript
const radio = Radio({
  target: document.querySelector('#radio'),
  data: {
    checked: true,
    label: 'Checked Radio'
  }
})

```