## Button

Provide a series of buttons for user clicks.

<Section class = "example">
   <H3> Status styles </h3>
   <Div>
     <Div id = "button1"> </div>
     <Div id = "button2"> </div>
     <Div id = "button3"> </div>
     <Div id = "button4"> </div>
     <Div id = "button5"> </div>
     <Div id = "button6"> </div>
     <Div id = "button7"> </div>
   </Div>
</Section>

<Section class = "example">
   <H3> Disabled </h3>
   <Div>
     <Div id = "button8"> </div>
   </Div>
</Section>

<Section class = "example">
   <H3> Enabled </h3>
   <Div>
     <Div id = "button9"> </div>
   </Div>
</Section>

### Example
```Javascript
Const button = Button ({
   Target: document.querySelector ('# button'),
   Data: {
     Content: 'Click me!',
     Status: 'primary'
   }
})

Button.onclick = () => {
   Alert ('hello world!')
}
````