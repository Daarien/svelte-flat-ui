## Audio

Provides a simple HTML5 audio player for playing audio.

<Section class = "example">
   <H3> Basic player </h3>

   <Div>
     <Div id = "audio1"> </div>
   </Div>
</Section>

### Example
```javascript
Audio({
  target: document.querySelector('#audio'),
  data: {
    src: '...',
    width: 620,
    height: 350
  }
})
```