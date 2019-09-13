# vuepress-plugin-gitalk-maker

`vuepress-plugin-gitalk-maker` 是基于 [vuepress](https://v1.vuepress.vuejs.org/zh/) 的评论功能，数据源来自 github 的 issues。底层基于 [gitalk](https://github.com/gitalk/gitalk)。

效果可以点击[传送门](./#演示)

## 用法

### 安装

```js
yarn add vuepress-plugin-gitalk-maker
```

### 添加到`config.js`

```js
module.exports = {
  plugins: [
    [
      'gitalk',
      {
        gitalkConfig: {
          clientID: 'clientID',
          clientSecret: 'clientSecret',
          repo: 'vuepress-plugin-gitalk-maker',
          owner: 'xxholly32',
          admin: ['xxholly32'],
          // id: location.pathname, // 无法配置默认用 location.pathname
          distractionFreeMode: false, // Facebook-like distraction free mode
        },
      },
    ],
  ],
};
```

如果没有 github 应用可以去注册一个， [传送门](https://github.com/settings/applications/new)

### gitalkConfig

[数据来源于 gitalk](https://github.com/gitalk/gitalk#options)

- **clientID** `String`

  **Required**. GitHub Application Client ID.

- **clientSecret** `String`

  **Required**. GitHub Application Client Secret.

- **repo** `String`

  **Required**. GitHub repository.

- **owner** `String`

  **Required**. GitHub repository owner. Can be personal user or organization.

- **admin** `Array`

  **Required**. GitHub repository owner and collaborators. (Users who having write access to this repository)

- **id** `String`

  Default: `location.href`.

  The unique id of the page. Length must less than 50.

- **number** `Number`

  Default: `-1`.

  The issue ID of the page, if the `number` attribute is not defined, issue will be located using `id`.

- **labels** `Array`

  Default: `['Gitalk']`.

  GitHub issue labels.

- **title** `String`

  Default: `document.title`.

  GitHub issue title.

- **body** `String`

  Default: `location.href + header.meta[description]`.

  GitHub issue body.

- **language** `String`

  Default: `navigator.language || navigator.userLanguage`.

  Localization language key, `en`, `zh-CN` and `zh-TW` are currently available.

- **perPage** `Number`

  Default: `10`.

  Pagination size, with maximum 100.

- **distractionFreeMode** `Boolean`

  Default: false.

  Facebook-like distraction free mode.

- **pagerDirection** `String`

  Default: 'last'

  Comment sorting direction, available values are `last` and `first`.

- **createIssueManually** `Boolean`

  Default: `false`.

  By default, Gitalk will create a corresponding github issue for your every single page automatically when the logined user is belong to the `admin` users. You can create it manually by setting this option to `true`.

- **proxy** `String`

  Default: `https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token`.

  GitHub oauth request reverse proxy for CORS. [Why need this?](https://github.com/isaacs/github/issues/330)

- **flipMoveOptions** `Object`

  Default:

  ```js
    {
      staggerDelayBy: 150,
      appearAnimation: 'accordionVertical',
      enterAnimation: 'accordionVertical',
      leaveAnimation: 'accordionVertical',
    }
  ```

  Comment list animation. [Reference](https://github.com/joshwcomeau/react-flip-move/blob/master/documentation/enter_leave_animations.md)

- **enableHotKey** `Boolean`

  Default: `true`.

  Enable hot key (cmd|ctrl + enter) submit comment.

## 演示
