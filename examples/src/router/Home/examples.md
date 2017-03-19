## Svelte Flat UI Components

### Installation
```bash
yarn add svelte-ui-button svelte-ui-theme
```

### Usage
### All components (Global)
```javascript
import Flat from 'svelte-ui' 
import 'svelte-ui-theme/index.css'
```

### Standalone component
```javascript
import { Button } from 'svelte-ui-button' 
import 'svelte-ui-theme/button.css'
```

### Babel plugin
[`babel-plugin-svelteflat`](https://github.com/jikkai/babel-plugin-svelteflat)

#### Install
```bash
yarn add babel-plugin-svelteflat --dev
```

#### Configure
Edit your `.babelrc`:
```json
{
  "plugins": [
    ["svelteflat", [
      { 
        "libraryName": "svelte-ui",
        "styleLibraryName": "svelte-ui-theme", 
        "typoCss": true
      }
    ]]
  ]
}
```

#### Use
```javascript
import { Button } from 'svelte-ui-button' 
```