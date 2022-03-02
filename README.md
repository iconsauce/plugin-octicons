# @iconsauce/octions

This plugin scrapes [Primer Octicons](https://primer.style/octicons/) of [octicons](https://github.com/primer/octicons) from which contains SVG versions.

For more infos go to [iconsauce docs][iconsauce-docs].

```js
module.exports = {
  content: [
    './src/**/*.{tsx,ts}',
  ],
  fontSize: '24px',
  plugin: [
    require('@iconsauce/octions'),
  ],
}
```

You will be able to use these icons in your project.

```jsx
const MyComponent = () => {

  const icon = 'oct/24/grass'

  return <section className={ icon }>
    <div className="grid desktop:grid-cols-4 oct/24/emoticon-happy tablet:grid-cols-2 grid-cols-1 desktop:gap-6 gap-12 desktop:auto-rows-fr desktop:items-end">
      <i className="oct/24/access-point"/>
      <span className='bg-adjust-tone-01/24 oct/24/terminal'/>
      <div>
        <footer title="oct/24/gondola"></footer>
      </div>
    </div>
  </section>
}
export default MyComponent
```

This plug-in will generate only icons used:

```css
@font-face {
  font-family: "iconsauce";
  src: url("data:font/truetype;charset=utf-8;base64,A...Z") format("truetype");
}

[class^="oct/"], [class*=" oct/"] {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: "iconsauce" !important;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
}

.oct\/access-point::before { content: "\ea01" }
.oct\/emoticon-happy::before { content: "\ea02" }
.oct\/gondola::before { content: "\ea03" }
.oct\/grass::before { content: "\ea04" }
.oct\/harddisk::before { content: "\ea05" }
```

[iconsauce-docs]: https://iconsauce.github.io/docs/
