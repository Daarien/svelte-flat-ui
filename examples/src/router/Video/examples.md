## Video

Provides a simple HTML5 video player for playing video.

<Section class = "example">
   <H3> Basic player </h3>

   <Div>
     <Div id = "video1"> </div>
   </Div>
</Section>

### Example
```javascript
Video({
  target: document.querySelector('#video'),
  data: {
    src: '...',
    width: 620,
    height: 350
  }
})
```