---
layout: Post
title: 代码规范
subtitle: 不以规矩，不成方圆
author: 零向量
date: 2022-12-03
useHeaderImage: true
headerImage: /img/in-post/2022-12-03/header.jpg
headerMask: rgb(67, 65, 47, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - 代码规范
---

不以规矩，不能成方圆，我们不得不在项目使用一些工具来约束代码规范

## <!-- more -->

---

随着前端应用逐渐变得大型化和复杂化，在同一个项目中有多个人员参与时，每个人的前端能力程度不等，他们往往会用不同的编码风格和习惯在项目中写代码，长此下去，势必会让项目的健壮性越来越差。解决这些问题，理论上讲，口头约定和代码审查都可以，但是这种方式无法实时反馈，而且沟通成本过高，不够灵活，更关键的是无法把控。不以规矩，不能成方圆，我们不得不在项目使用一些工具来约束代码规范。

本文讲解如何使用 `EditorConfig` + `Prettier` + `ESLint` 组合来实现代码规范化。

代码规范的好处：

- 解决团队之间代码不规范导致的可读性差和可维护性差的问题。
- 解决团队成员不同编辑器导致的编码规范不统一问题。
- 提前发现代码风格问题，给出对应规范提示，及时修复。
- 减少代码审查过程中反反复复的修改过程，节约时间。
- 自动格式化，统一编码风格，从此和脏乱差的代码说再见。

## 集成 EditorConfig 配置

EditorConfig([官网](http://editorconfig.org)) 有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格。

在项目根目录下增加 `.editorconfig` 文件：

```js
# Editor configuration, see http://editorconfig.org

# 表示是最顶层的 EditorConfig 配置文件
root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

:::warning 注意
VSCode 使用 EditorConfig 需要去插件市场下载插件 `EditorConfig for VS Code`。
![heme-gungnir](/img/in-post/2022-12-03/651.png)
:::

## 集成 Prettier 配置

Prettier([官网](https://prettier.io/)) 是一款强大的代码格式化工具，支持 `JavaScript`、`TypeScript`、`CSS`、`SCSS`、`Less`、`JSX`、`Angular`、`Vue`、`GraphQL`、`JSON`、`Markdown` 等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具。

### 1、安装 Prettier

```bash
npm i prettier -D
```

### 2、创建 Prettier 配置文件

Prettier 支持多种格式的配置文件，比如 `.json`、`.yml`、`.yaml`、`.js` 等。
在本项目根目录下创建 `.prettierrc` 文件。

### 3、配置 .prettierrc

```js
// 关于更多配置项信息，请前往官网查看
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "none",
  "bracketSpacing": true,
  "semi": false
}
```

### 4、Prettier 安装且配置好之后，就能使用命令来格式化代码

```bash
# 格式化所有文件（. 表示所有文件）
npx prettier --write .
```

:::warning 注意
VSCode 编辑器使用 Prettier 配置需要下载插件 Prettier - Code formatter
![heme-gungnir](/img/in-post/2022-12-03/650.png)
:::

Prettier 配置好以后，在使用 VSCode 编辑器的格式化功能时，编辑器就会按照 Prettier 配置文件的规则来进行格式化，避免了因为大家编辑器配置不一样而导致格式化后的代码风格不统一的问题。

## 集成 ESLint 配置

`ESlint` 是一款用于查找并报告代码中问题的工具，并且支持部分问题自动修复。其核心是通过对代码解析得到的 AST（Abstract Syntax Tree 抽象语法树）进行模式匹配，来分析代码达到检查代码质量和风格问题的能力。

正如前面我们提到的因团队成员之间编程能力和编码习惯不同所造成的代码质量问题，我们使用 ESLint 来解决，一边写代码一边查找问题，如果发现错误，就给出规则提示，并且自动修复，长期下去，可以促使团队成员往同一种编码风格靠拢。

### 1、安装 ESLint

```bash
# 可以全局或者本地安装，推荐本地安装（只在当前项目中安装）。
npm i eslint -D
```

### 2、配置 ESLint

ESLint 安装成功后，执行 `npx eslint --init`，然后按照终端操作提示完成一系列设置来创建配置文件。

- `How would you like to use ESLint?` （你想如何使用 `ESLint`?）

![theme-gungnir](/img/in-post/2022-12-03/640.png)

我们这里选择 `To check syntax, find problems, and enforce code style`（检查语法、发现问题并强制执行代码风格）

- `What type of modules does your project use?`（你的项目使用哪种类型的模块?）

![heme-gungnir](/img/in-post/2022-12-03/641.png)

我们这里选择 `JavaScript modules (import/export)`

- `Which framework does your project use? `（你的项目使用哪种框架?）

![heme-gungnir](/img/in-post/2022-12-03/642.png)

按项目来定，我们这里选择 Vue.js

- `Does your project use TypeScript?`（你的项目是否使用 `TypeScript`？）

![heme-gungnir](/img/in-post/2022-12-03/643.png)

按项目来定，我们这里选择 Yes

- `Where does your code run`?（你的代码在哪里运行?）
  ![heme-gungnir](/img/in-post/2022-12-03/644.png)

我们这里选择 `Browser` 和 `Node`（按空格键进行选择，选完按回车键确定）

- `How would you like to define a style for your project`?（你想怎样为你的项目定义风格？）
  ![heme-gungnir](/img/in-post/2022-12-03/645.png)

我们这里选择 `Use a popular style guide`（使用一种流行的风格指南）

- `Which style guide do you want to follow?`（你想遵循哪一种风格指南?）
  ![heme-gungnir](/img/in-post/2022-12-03/646.png)

我们这里选择 `Airbnb: https://github.com/airbnb/javascript`

`ESLint` 为我们列出了三种社区流行的 `JavaScript` 风格指南，分别是 `Airbnb`、`Standard`、`Google`.
这三份风格指南都是由众多大佬根据多年开发经验编写，足够优秀，全球很多大小公司都在使用。我们选用 `GitHub` 上 star 最多的 `Airbnb`，免去繁琐的配置 `ESLint` 规则时间，然后让团队成员去学习 `Airbnb JavaScript` 风格指南即可。
此时，我们在 ESLint 配置了 Airbnb JavaScript 规则，在编码时，所有不符合 Airbnb 风格的代码，编辑器都会给出提示，并且可以自动修复。

##### 这里不建议大家去自由配置 ESLint 规则，相信我，这三份 JavaScript 代码风格指南值得我们反复学习，掌握后，编程能力能上一大台阶。

- `What format do you want your config file to be in?`（你希望你的配置文件是什么格式?）
  ![heme-gungnir](/img/in-post/2022-12-03/647.png)
  我们这里选择 `JavaScript`

- `Would you like to install them now with npm?`（你想现在就用 NPM 安装它们吗?）
  ![heme-gungnir](/img/in-post/2022-12-03/648.png)
  根据上面的选择，ESLint 会自动去查找缺失的依赖，我们这里选择 Yes，使用 NPM 下载安装这些依赖包。
  :::warning 注意
  如果自动安装依赖失败，那么需要手动安装

  ```bash
  npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-base eslint-plugin-import eslint-plugin-vue -D
  ```

  :::

### 3、ESLint 配置文件 `.eslintrc.js`

在上一步操作完成后，会在项目根目录下自动生成 `.eslintrc.js` 配置文件：

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {}
}
// 据项目实际情况，如果我们有额外的 ESLint 规则，也在此文件中追加。
```

:::warning 注意
VSCode 使用 ESLint 配置文件需要去插件市场下载插件 ESLint 。
![heme-gungnir](/img/in-post/2022-12-03/649.png)
:::
配置好以后，我们在 `VSCode` 编辑器中开启 `ESLin`，写代码时，`ESLint` 就会按照我们配置的规则来进行实时代码检查，发现问题会给出对应错误提示和修复方案。
比如：
![heme-gungnir](/img/in-post/2022-12-03/652.png)
虽然，现在编辑器已经给出错误提示和修复方案，但需要我们一个一个去点击修复，还是挺麻烦的。很简单，我们只需设置编辑器保存文件时自动执行 `eslint --fix `命令进行代码风格修复。

VSCode 在 `settings.json` 设置文件中，增加以下代码：

```json
 "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
 }
```

## 解决 Prettier 和 ESLint 的冲突

通常大家会在项目中根据实际情况添加一些额外的 ESLint 和 Prettier 配置规则，难免会存在规则冲突情况。

此案例中的 `ESLint` 配置中使用了 `Airbnb JavaScript` 风格指南校验，其规则之一是代码结束后面要加分号，而我们在 `Prettier` 配置文件中加了代码结束后面不加分号的配置项，这样就有冲突了，会出现用 `Prettier` 格式化后的代码，`ESLint` 检测到格式有问题的，从而抛出错误提示。
解决两者冲突问题，需要用到 `eslint-plugin-prettier` 和 `eslint-config-prettier`。

- `eslint-plugin-prettier` 将 `Prettier` 的规则设置到 ESLint 的规则中。
- `eslint-config-prettier` 关闭 `ESLint` 中与 `Prettier` 中会发生冲突的规则。

最后形成优先级：`Prettier` 配置规则 > `ESLint` 配置规则。

- 安装插件

```bash
 npm i eslint-plugin-prettier eslint-config-prettier -D
```

- 在 `.eslintrc.js` 添加 `prettier` 插件

```js
module.exports = {
  ...
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  ...
}
```

这样，我们在执行 `eslint --fix` 命令时，`ESLint` 就会按照 `Prettier` 的配置规则来格式化代码，轻松解决二者冲突问题。

## 集成 husky 和 lint-staged

我们在项目中已集成 `ESLint` 和 `Prettier`，在编码时，这些工具可以对我们写的代码进行实时校验，在一定程度上能有效规范我们写的代码，但团队可能会有些人觉得这些条条框框的限制很麻烦，选择视“提示”而不见，依旧按自己的一套风格来写代码，或者干脆禁用掉这些工具，开发完成就直接把代码提交到了仓库，日积月累，`ESLint` 也就形同虚设。

所以，我们还需要做一些限制，让没通过 `ESLint` 检测和修复的代码禁止提交，从而保证仓库代码都是符合规范的。

为了解决这个问题，我们需要用到 `Git Hook`，在本地执行 `git commit` 的时候，就对所提交的代码进行 ESLint 检测和修复（即执行 `eslint --fix`），如果这些代码没通过 `ESLint` 规则校验，则禁止提交。

实现这一功能，我们借助 `husky` + `lint-staged` 。
:::tip 提示
`husky` —— Git Hook 工具，可以设置在 git 各个阶段（pre-commit、commit-msg、pre-push 等）触发我们的命令。

`lint-staged` —— 在 git 暂存的文件上运行 linters。
:::

### 1、配置 husky

使用 `husky-init` 命令快速在项目初始化一个 `husky` 配置。

```bash
npx husky-init && npm install
```

这行命令做了四件事：

- 1、安装 husky 到开发依赖
- 2、在项目根目录下创建 `.husky` 目录
  ![heme-gungnir](/img/in-post/2022-12-03/653.png)
- 3、在 `.husky` 目录创建 `pre-commit hook`，并初始化 `pre-commit` 命令为 `npm test`
  ![heme-gungnir](/img/in-post/2022-12-03/654.png)
- 4、修改 `package.json` 的 `scripts`，增加 `"prepare": "husky install"`
  ![heme-gungnir](/img/in-post/2022-12-03/655.png)

到这里，`husky` 配置完毕，现在我们来使用它：

`husky` 包含很多 `hook`（钩子），常用有：`pre-commit、commit-msg、pre-push`。这里，我们使用 `pre-commit` 来触发 `ESLint` 命令。

修改 `.husky/pre-commit hook` 文件的触发命令：

```bash
eslint --fix ./src --ext .vue,.js,.ts
```

![heme-gungnir](/img/in-post/2022-12-03/656.png)

上面这个 `pre-commit hook` 文件的作用是：当我们执行 `git commit -m "xxx"` 时，会先对 src 目录下所有的 `.vue`、`.js`、`.ts` 文件执行 `eslint --fix `命令，如果 `ESLint` 通过，成功 commit，否则终止 commit。

但是又存在一个问题：有时候我们明明只改动了一两个文件，却要对所有的文件执行 `eslint --fix`。假如这是一个历史项目，我们在中途配置了 `ESLint` 规则，那么在提交代码时，也会对其他未修改的“历史”文件都进行检查，可能会造成大量文件出现 `ESLint` 错误，显然不是我们想要的结果。

我们要做到只用 `ESLint` 修复自己此次写的代码，而不去影响其他的代码。所以我们还需借助一个神奇的工具 `lint-staged` 。

### 2、配置 lint-staged

`int-staged` 这个工具一般结合 `husky` 来使用，它可以让 `husky` 的 `hook` 触发的命令只作用于 `git add`那些文件（即 git 暂存区的文件），而不会影响到其他文件。

接下来，我们使用 `lint-staged` 继续优化项目。

- 1、安装 lint-staged
  ```bash
  npm i lint-staged -D
  ```
- 2、在 `package.json` 里增加 `lint-staged` 配置项
  ![heme-gungnir](/img/in-post/2022-12-03/657.png)

  ```js
  "lint-staged": {
  "*.{vue,js,ts}": "eslint --fix"
  },
  ```

- 3、修改 `.husky/pre-commit hook` 的触发命令为：`npx lint-staged`
  ![heme-gungnir](/img/in-post/2022-12-03/658.png)
  这行命令表示：只对 `git` 暂存区的 `.vue、.js、.ts` 文件执行 `eslint --fix`。
  至此，husky 和 lint-staged 组合配置完成。

现在我们提交代码时就会变成这样：

假如我们修改了 `scr` 目录下的 `test-1.js`、`test-2.ts` 和 `test-3.md` 文件，然后 `git add ./src/`，最后 `git commit -m "test..."`，这时候就会只对 `test-1.js`、`test-2.ts` 这两个文件执行 `eslint --fix`。如果 `ESLint` 通过，成功提交，否则终止提交。从而保证了我们提交到 `Git` 仓库的代码都是规范的。
![heme-gungnir](/img/in-post/2022-12-03/659.png)

这些工具并不是必须的，没有它们你同样可以可以完成功能开发，但是利用好这些工具，我们可以写出更高质量的代码。

<!-- ## 集成 Commitizen 实现规范提交

前面我们已经统一代码规范，并且在提交代码时进行强约束来保证仓库代码质量。多人协作的项目中，在提交代码这个环节，也存在一种情况：不能保证每个人对提交信息的准确描述，因此会出现提交信息紊乱、风格不一致的情况。

如果 git commit 的描述信息精准，在后期维护和 Bug 处理时会变得有据可查，项目开发周期内还可以根据规范的提交信息快速生成开发日志，从而方便我们追踪项目和把控进度。

这里，我们使用社区最流行、最知名、最受认可的 `Angular` 团队提交规范。

##### 先看看 Angular 项目的提交记录：

![heme-gungnir](/img/in-post/2022-12-03/660.png)
如上图，可以看出这些提交信息都是有固定格式的，下面我们来学习 Angular 规范的 commit message 格式。

##### commit message 格式规范

commit message 由 Header、Body、Footer 组成。

```js
<Header>

<Body>

<Footer>
```

###### Header

Header 部分包括三个字段 type（必需）、scope（可选）和 subject（必需）。

`<type>(<scope>): <subject>`

###### type

type 用于说明 commit 的提交类型（必须是以下几种之一）。

| 值       | 描述                                                                                   |
| -------- | -------------------------------------------------------------------------------------- |
| feat     | 新增一个功能                                                                           |
| fix      | 修复一个 Bug                                                                           |
| docs     | 文档变更                                                                               |
| style    | 代码格式（不影响功能，例如空格、分号等格式修正）                                       |
| refactor | 代码重构                                                                               |
| perf     | 改善性能                                                                               |
| test     | 测试                                                                                   |
| build    | 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）                           |
| ci       | 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等 |
| chore    | 变更构建流程或辅助工具                                                                 |
| revert   | 代码回退                                                                               |

##### scope

`scope` 用于指定本次 `commit` 影响的范围。`scope` 依据项目而定，例如在业务项目中可以依据菜单或者功能模块划分，如果是组件库开发，则可以依据组件划分。（`scope` 可省略）

##### subject

subject 是本次 commit 的简洁描述，长度约定在 50 个字符以内，通常遵循以下几个规范：

- 用动词开头，第一人称现在时表述，例如：change 代替 changed 或 changes
- 第一个字母小写
- 结尾不加句号（.）

##### Body

body 是对本次 commit 的详细描述，可以分成多行。（body 可省略）跟 subject 类似，用动词开头，body 应该说明修改的原因和更改前后的行为对比。

##### Footer

如果本次提交的代码是突破性的变更或关闭缺陷，则 Footer 必需，否则可以省略。

- 突破性的变更
  当前代码与上一个版本有突破性改变，则 Footer 以 BREAKING CHANGE 开头，后面是对变动的描述、以及变动的理由。
- 关闭缺陷
  如果当前提交是针对特定的 issue，那么可以在 Footer 部分填写需要关闭的单个 issue 或一系列 issues。

##### 规范 commit message 的好处

- 首行就是简洁实用的关键信息，方便在 git history 中快速浏览。
- 具有更加详细的 body 和 footer，可以清晰的看出某次提交的目的和影响。
- 可以通过 type 过滤出想要查找的信息，也可以通过关键字快速查找相关提交。
- 可以直接从 commit 生成 change log。 -->
