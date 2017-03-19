svelte-flat-ui
--------------
![img](http://img.shields.io/npm/v/svelte-ui.svg)
![img](http://img.shields.io/badge/license-MIT-blue.svg)

> Flat UI **Independent JS Components**.
> Each one can be build separately (using **Svelte framework**).

<p align="center">
  <a href="https://svelteui.js.org/">
    <img alt="svelte-flat" src="https://github.com/jikkai/svelte-flat/raw/master/examples/src/assets/logo.png">
  </a>
</p>

---

## Installation
```bash
yarn add svelte-ui-button svelte-ui-theme
```

## Usage
```javascript
import 'svelte-ui-button'
import 'svelte-ui-theme/button.css'

const button = Button({
  target: document.querySelector('#button'),
  data: {
    content: 'Default Button'
  }
})
button.onclick = function (e) {
  console.log('hello world')
}
```

## [Documentation](https://transpiling.github.io/svelte-flat-ui/)

## Development
```bash
# Build all components
yarn 
yarn run init
yarn run build
```

## License
[MIT](https://transpiling.github.io/svelte-flat-ui/blob/master/LICENSE)