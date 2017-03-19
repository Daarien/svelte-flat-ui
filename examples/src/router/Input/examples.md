## Input

Ordinary character input box.

<Section class = "example">
   <H3> Basic input box </h3>

   <Div>
     <Div id = "input1"> </div>
     <Div id = "input2"> </div>
   </Div>
</Section>

<Section class = "example">
   <H3> Input box with status </h3>

   <Div>
     <Div id = "input3"> </div>
     <Div id = "input4"> </div>
   </Div>
</Section>

<Section class = "example">
   <H3> disable input box </h3>

   <Div>
     <Div id = "input5"> </div>
   </Div>
</Section>

### Example
```javascript
const input = Input({
  target: document.querySelector('#input'),
  data: {
    type: 'text'
  }
})

input.onfocus = () => {
  console.log(button.get('value'))
}
```