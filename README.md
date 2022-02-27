# React Doodle Icons

Based on icons created by Khushmeen Sindhu @ [Doodle Icons](https://khushmeen.com/icons.html)


SVGR for generating react components of SVGs
```shell
npx @svgr/cli --typescript --no-dimensions --out-dir src/icon-components -- src/icons
```

### Installation

```shell
npm install doodle-icons
```

### Import icons

You can import the icons based on the Subgroup into your react application

```typescript jsx
import {Arrow, Currency, ECommerce, Emojis, Files, Finance, Food, GenderSymbols, HandGestures, Health, Interfaces, Logos, Misc, Objects, Weather} from 'doodle-icons';
```

### Usage

You can use any icon after importing in the following way:

```typescript jsx
<>
    <Arrow.ArrowDown width={30} height={30} fill={'blue'}/>
    <Currency.Rupee width={20} height={20} fill={'brown'}/>
</>
```

### Props

All the properties of [SVGSVGElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGSVGElement) interface can be passed to the Icon.