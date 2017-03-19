## Checkbox

Provide multiple checkboxes for multiple selections.

<Section class = "example">
   <H3> Basic checkbox </h3>

   <Div>
     <Div id = "checkbox1"> </div>
     <Div id = "checkbox2"> </div>
   </Div>
</Section>

<Section class = "example">
   <H3> disabled state </h3>

   <Div>
     <Div id = "checkbox3"> </div>
     <Div id = "checkbox4"> </div>
   </Div>
</Section>

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