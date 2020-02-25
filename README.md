<div align='center'>
  <img src='https://i.ibb.co/SXs7hyk/stillness.png' />
  <h1>Stillness</h1>
  <a href="http://opensource.org/licenses/MIT" target="_blank">
    <img src="https://img.shields.io/github/license/waspeer/stillness?style=flat-square" />
  </a>
  <a href="https://www.codacy.com/manual/waspeer/stillness?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=waspeer/stillness&amp;utm_campaign=Badge_Grade" target="_blank">
    <img src="https://img.shields.io/codacy/grade/f6e57bc9145f49d69c45422cfbf8384a?style=flat-square" />
  </a>
  <p>Opinionated Gatsby Starter</p>
</div>

This is my [Gatsby](https://gatsbyjs.org/) starter using **Typescript**, **ESLint** and **Prettier** (with the help of [**Poetic**](https://github.com/arianacosta/poetic)) and **stylelint**.

Styling with **styled-components**.

Tests with **Jest**, **react-testing-library** and **Cypress**.

## Usage

```bash
$ gatsby new <project-name> https://github.com/waspeer/stillness
```

### Test driven development

My motivation for making this starter was to try out test driven development. To fire up the end-to-end and unit tests run the following commands:

```bash
$ yarn test:e2e
$ yarn test:unit
```

When running tests as part of a continuous integration pipeline replace `yarn test:e2e` with `yarn test:e2e:ci`.

## License

MIT © Wannes Salomé
