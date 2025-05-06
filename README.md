# typescriptbar
*fork of tsc-progress. ts-patch build progressbar, inspired by [webpackbar](https://github.com/unjs/webpackbar)*

[![npm](https://img.shields.io/npm/v/typescriptbar)](https://github.com/JiangWeixian/tsc-progress/tree/master) [![GitHub](https://img.shields.io/npm/l/typescriptbar)](https://github.com/JiangWeixian/tsc-progress/tree/master)

![image](https://user-images.githubusercontent.com/6839576/147484015-79fb0df1-eee4-438a-b14e-d4cf82b2f3fc.png)

## install

```console
npm i tsc-progress
```
## usage

in `tsconfig.json`

```json
{
  // ...
  "plugins": [
    {
      "transform": "typescriptbar",
      "title": "TSC"
    }
  ]
}
```

`options`

- `title` - define progressbar title, default `TSC`
- `color` - define progressbar color, default `green`

# 
<div align='right'>

*built with ❤️ by 😼*

</div>
