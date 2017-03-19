## Message

Create a floating layer at the top of the page to show notifications or prompts.

<Section class = "example">
   <H3> Basic usage </h3>

   <Div>
     <Div id = "message1"> </div>
   </Div>
</Section>

<Section class = "example">
   <H3> message type </h3>

  <div>
    <div id="message2"></div>
    <div id="message3"></div>
    <div id="message4"></div>
    <div id="message5"></div>
  </div>
</section>

### Example
```javascript
Message({
  content: 'Awesome!',
  status: 'success'
})
```