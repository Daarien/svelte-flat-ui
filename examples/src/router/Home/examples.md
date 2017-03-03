## Svelte Flat UI Components

### Installation
```bash
yarn add svelte-flat
```

### Usage
### All components (Global)
```javascript
import Flat from 'svelte-flat' 
import 'svelte-flat/lib/theme-default/index.css'
```

### Standalone component
```javascript
import { Button } from 'svelte-flat' 
import 'svelte-flat/lib/theme-default/button.css'
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
        "libraryName": "svelte-flat",
        "styleLibraryName": "theme-default", 
        "typoCss": true
      }
    ]]
  ]
}
```

#### Use
```javascript
import { Button } from 'svelte-flat' 
```