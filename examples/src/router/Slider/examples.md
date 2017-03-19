## Slider

Change the value by sliding the slider.

<Section class = "example">
   <H3> base slider </h3>

   <Div>
     <Div id = "slider1"> </div>
   </Div>
</Section>

### Example
```javascript
Slider({
  target: document.querySelector('#slider'),
  data: {
    value: 33
  }
})
```