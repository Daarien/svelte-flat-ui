## Checkbox

提供多选框供用户进行多项选择。

<section class="example">
  <h3>基础多选框</h3>

  <div>
    <div id="checkbox1"></div>
    <div id="checkbox2"></div>
  </div>
</section>

<section class="example">
  <h3>禁用状态</h3>

  <div>
    <div id="checkbox3"></div>
    <div id="checkbox4"></div>
  </div>
</section>

### Example
```javascript
const checkbox = Checkbox({
  target: document.querySelector('#checkbox'),
  data: {
    checked: true,
    label: 'Checked Checkbox'
  }
})

```