### React Hexagonal Progressbar

It is a simple Hexagobal progress component created for react based only on SVG graphics and has various of options to customize it.

![Alt text](./hexagone.png)

## Install

```sh
npm install react-hexagonal-progressbar
```
or
```sh
yarn add react-hexagonal-progressbar
```
## Sample

```js
<HexagonalProgressbar
    value={80}
    lineCap="line|round"
    color="#00FF00"
    level={5}
    location="rightTop|rightBottom|leftBottom|leftTop"
/>
```
### props

| Props | Type | Default | Description |
| ------ | ------ | ------ | ------ |
value | number | 0 | Number of percent you want to show
badgeImg | any | null | icon inside your badge, png, svg, ...
disabled | bool | false | to disable you badge
color | string | red | color `hexa`, `string` or `rgb` 
level | number | null | optional props to display the current level
lineCap | stirng | round | options: `line`, `round`
location | string | rightTop | options:`rightTop`, `rightBottom`, `leftBottom`, `leftTop`
