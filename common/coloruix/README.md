# ColorUIX · 使用手册

**ColorUIX 使用说明**：每个类、每个组件怎么用、怎么组合搭页面。代码可直接复制到 uni-app 项目（小程序/H5/App 通用）。

> **来源**：本设计系统 fork 自 2019 [ColorUI](https://github.com/weilanwl/coloruicss)（MIT License）：保留原版类名体系，样式按项目需要修改并新增 X 能力；整体采用 MIT License（见项目根 LICENSE）。

---

## 目录

1. [开始使用](#1-开始使用)
2. [第一个页面](#2-第一个页面)
3. [布局](#3-布局)
4. [卡片](#4-卡片)
5. [按钮](#5-按钮)
6. [标签与状态](#6-标签与状态)
7. [文字排版](#7-文字排版)
8. [列表](#8-列表)
9. [表单](#9-表单)
10. [图标](#10-图标)
11. [颜色系统](#11-颜色系统)
12. [动效](#12-动效)
13. [模态框与浮层](#13-模态框与浮层)
14. [主题与换肤](#14-主题与换肤)
15. [定制设计系统](#15-定制设计系统)
16. [平台注意事项](#16-平台注意事项)
17. [常见问题](#17-常见问题)

---

## 1. 开始使用

### 1.1 引入

把 `coloruix/` 整个目录放进项目（SCSS 组织，原版 ColorUI 为纯 CSS），然后在 `App.vue` 引入：

```scss
/* App.vue <style lang="scss"> */
@import "./common/coloruix/index.scss";
```

### 1.2 配置 vite（必做）

```js
// vite.config.js
import { fileURLToPath, URL } from 'node:url'
css: {
  preprocessorOptions: {
    scss: {
      includePaths: [fileURLToPath(new URL('.', import.meta.url))],
    },
  },
},
```

> 不配会报 `Can't find stylesheet to import`（原因见 §16.1）。

### 1.3 用到的第一个类

```html
<view class="card">我是卡片</view>
<button class="cu-btn bg-blue">我是按钮</button>
<text class="text-brand">我是品牌色文字</text>
<text class="cuIcon cuIcon-search"></text>
```

---

## 2. 第一个页面

一个典型页面的完整骨架（表单页示例）：

```html
<template>
  <view>
    <!-- 页面内容区：上下留白 -->
    <view class="padding">
      <!-- ① 卡片容器 -->
      <view class="card padding-lr padding-tb">
        <!-- ② 布局：flex 横排 + 两端对齐 + 子项间距 -->
        <view class="flex justify-between align-center gap-sm">
          <text class="text-bold text-lg">本月账单</text>
          <!-- ③ 状态标签 -->
          <text class="badge badge-income">已结账</text>
        </view>
        <!-- ④ 金额（等宽数字对齐） -->
        <view class="margin-top-sm">
          <text class="num text-xl">¥1,234.00</text>
        </view>
      </view>

      <!-- ⑤ 按钮 -->
      <view class="margin-top">
        <button class="cu-btn bg-blue block">保存</button>
      </view>
    </view>
  </view>
</template>
```

**记住三个套路**：
- 容器用 `card`（白卡+圆角+阴影）
- 排列用 `flex` + `justify-*`/`align-*` + `gap-*`
- 文字颜色/大小用 `text-*`，状态用 `badge-*`/`status-dot-*`

---

## 3. 布局

### 3.1 Flex 排列

| 类 | 作用 |
|---|---|
| `flex` | 开启 flex（横向） |
| `flex-col` | 纵向 flex |
| `flex-1` | 子项占满剩余空间；附带 `min-width:0` 跨端收缩保护 |
| `flex-sub` / `flex-twice` / `flex-treble` | 按比例分配（1:2:3） |
| `flex-wrap` | 允许换行 |
| `justify-center/end/between/around` | 主轴对齐（居中/末尾/两端/环绕） |
| `align-center/end/stretch` | 交叉轴对齐 |
| `gap-xs/sm/md/lg` | 子项间距（8/16/24/32rpx） |

```html
<view class="flex justify-between align-center">
  <text>左</text>
  <text>右</text>
</view>

<!-- 三列均分，中间留间距 -->
<view class="flex gap-sm">
  <view class="flex-1">A</view>
  <view class="flex-1">B</view>
  <view class="flex-1">C</view>
</view>

<!-- 纵向排列 -->
<view class="flex-col gap-sm">
  <text>第一行</text>
  <text>第二行</text>
</view>
```

### 3.2 间距（margin / padding）

方向：`top` `bottom` `left` `right` `lr`（左右）`tb`（上下），或省略（四周）。
档位：`xs` `sm` `lg` `xl` 或省略（基础值）。

```html
<view class="margin-top-sm">上间距</view>
<view class="margin-lr padding-tb">左右 margin + 上下 padding</view>
<view class="margin">四周基础间距</view>
<view class="padding-xl">大内边距</view>
```

### 3.3 圆角与阴影

| 类 | 效果 |
|---|---|
| `round` | 全圆角（胶囊/圆形） |
| `radius` | 小圆角 |
| `shadow` | 卡片阴影 |
| `shadow-lg` | 浮层阴影（更重） |
| `shadow-sm` | 无阴影（配合扁平化主题） |

```html
<view class="card round">胶囊卡片</view>
<view class="card shadow-lg">悬浮感卡片</view>
```

### 3.4 其他

```html
<view class="w-full">宽度 100%</view>
<view class="min-w-0">允许收缩（flex 内防溢出）</view>
<view class="safe-area-bottom">底部安全区（iPhone Home 条留白）</view>
<view class="grid grid-square">正方形栅格</view>
<view class="col-2">栅格占 2 列（col-1~col-5）</view>
```

---

## 4. 卡片

**`.cu-card` 是唯一卡片容器类**："白底 + 圆角 + 阴影"。

```html
<!-- 基础卡片 -->
<view class="cu-card padding">
  <text>内容</text>
</view>

<!-- 带标题的卡片 -->
<view class="cu-card">
  <view class="padding-lr padding-tb border-bottom">
    <text class="text-bold">标题区</text>
  </view>
  <view class="padding-lr padding-tb">
    <text>内容区</text>
  </view>
</view>

<!-- 表单卡片（常见组合） -->
<view class="cu-card form-card">
  <view class="flex justify-between align-center padding-tb border-bottom">
    <text class="text-sub">字段名</text>
    <input class="text-right" placeholder="请输入" />
  </view>
</view>
```

> `form-card`、`list-card` 这类**后缀类**只是布局约定（内边距），视觉全由 `.cu-card` 提供。你可以自由定义自己的 `xxx-card`。

---

## 5. 按钮

### 5.1 基础

```html
<button class="cu-btn">默认按钮（灰底）</button>
<button class="cu-btn bg-blue">品牌色按钮</button>
<button class="cu-btn bg-red">危险操作</button>
<button class="cu-btn bg-green">成功操作</button>
```

### 5.2 样式变体

```html
<!-- 通栏 -->
<button class="cu-btn bg-blue block">通栏按钮</button>

<!-- 渐变（品牌色渐变） -->
<button class="cu-btn bg-gradual-blue">渐变按钮</button>

<!-- 浅色 -->
<button class="cu-btn bg-blue light">浅蓝按钮</button>

<!-- 带图标 -->
<button class="cu-btn bg-blue">
  <text class="cuIcon cuIcon-add margin-right-xs"></text>新增
</button>

<!-- 禁用 -->
<button class="cu-btn bg-blue" disabled>禁用</button>
```

所有按钮自带圆角和按压微缩放反馈（X 增强）。

---

## 6. 标签与状态

### 6.1 cu-tag（彩色标签）

```html
<text class="cu-tag bg-red">月租</text>
<text class="cu-tag bg-blue">日租</text>
<text class="cu-tag bg-grey">已退</text>
```

### 6.2 badge（语义胶囊标签）⭐

表达业务状态，颜色语义化：

```html
<text class="badge badge-income">已结账</text>   <!-- 绿：成功/收入 -->
<text class="badge badge-expense">未结清</text> <!-- 红：危险/支出 -->
<text class="badge badge-warning">待处理</text> <!-- 橙：警告 -->
<text class="badge badge-brand">进行中</text>   <!-- 蓝：信息 -->
<text class="badge badge-mute">已关闭</text>    <!-- 灰：中性 -->
```

### 6.3 status-dot（状态色点）

```html
<text class="status-dot status-dot-ok"></text>   <!-- 绿点 -->
<text class="status-dot status-dot-warn"></text> <!-- 橙点 -->
<text class="status-dot status-dot-danger"></text><!-- 红点 -->
<text class="status-dot status-dot-mute"></text> <!-- 灰点 -->
```

---

## 7. 文字排版

### 7.1 字号

```html
<text class="text-xs">超小</text>
<text class="text-sm">小</text>
<text class="text-df">默认</text>
<text class="text-lg">大</text>
<text class="text-xl">特大</text>
<text class="text-xxl">超大</text>
```

### 7.2 对齐与修饰

```html
<text class="text-center">居中（配 block 使用）</text>
<text class="text-right">右对齐</text>
<text class="text-justify">两端对齐（长文本段落）</text>
<text class="text-bold">加粗</text>
<text class="text-cut">超长文本自动省略号超长文本自动省略号…</text>
<text class="text-price">¥99.00（价格样式）</text>
<text class="text-shadow">带阴影文字</text>
```

### 7.3 文字颜色

**语义色（表达业务含义，推荐）**：

```html
<text class="text-main">主文字</text>
<text class="text-brand">品牌蓝</text>
<text class="text-income">收入/成功绿</text>
<text class="text-expense">支出/危险红</text>
<text class="text-warning">待办橙</text>
<text class="text-sub">次级灰</text>
<text class="text-hint">弱提示灰</text>
```

**色板色（ColorUI 兼容）**：`text-red/green/blue/orange/yellow/purple/pink/grey/white/black` 等。

### 7.4 等宽数字 ⭐

金额/数量/日期对齐刚需：

```html
<text class="num text-xl">1,234.00</text>
<text class="num">2,345.00</text>  <!-- 数字等宽，纵向对齐 -->
```

---

## 8. 列表

```html
<view class="card">
  <view class="cu-list">
    <view class="cu-item flex justify-between align-center">
      <view class="flex align-center gap-sm">
        <text class="cuIcon cuIcon-home text-brand"></text>
        <text>房间 101</text>
      </view>
      <text class="text-sub">月租</text>
    </view>
    <view class="cu-item flex justify-between align-center">
      <view class="flex align-center gap-sm">
        <text class="cuIcon cuIcon-people text-income"></text>
        <text>张三</text>
      </view>
      <text class="cuIcon cuIcon-right text-hint"></text>
    </view>
  </view>
</view>
```

---

## 9. 表单

```html
<view class="card">
  <view class="cu-form-group">
    <view class="title">姓名</view>
    <input placeholder="请输入姓名" />
  </view>
  <view class="cu-form-group">
    <view class="title">性别</view>
    <radio-group>
      <radio color="#4A9BD9" checked>男</radio>
    </radio-group>
  </view>
  <view class="cu-form-group">
    <view class="title">开关</view>
    <switch color="#4A9BD9" checked />
  </view>
</view>
```

> 原生控件（switch/radio/checkbox/slider）的选中色走 `color` 属性，**写品牌色 hex**（换肤不覆盖，见 §16.2）。

---

## 10. 图标

500+ 图标，前缀 `cuIcon-`：

```html
<!-- 标准写法：必须双类 -->
<text class="cuIcon cuIcon-search"></text>
<text class="cuIcon cuIcon-add"></text>
<text class="cuIcon cuIcon-home"></text>
<text class="cuIcon cuIcon-people"></text>
<text class="cuIcon cuIcon-recharge"></text>
<text class="cuIcon cuIcon-check"></text>
<text class="cuIcon cuIcon-right"></text>
<text class="cuIcon cuIcon-question"></text>
```

**图标大小跟随父级字号**，颜色跟随 `color`/`text-*`：

```html
<text class="cuIcon cuIcon-search text-brand text-xxl"></text>
```

常用图标：`search` `add` `edit` `delete` `home` `people` `bill` `recharge` `calendar` `check` `right` `left` `close` `info` `question` `location` `phone` `message` `setting` `font`（完整清单见 `core/_icons.scss`）。

---

## 11. 颜色系统

### 11.1 背景色

```html
<view class="bg-white">白底</view>
<view class="bg-blue">品牌蓝底</view>
<view class="bg-red">红底</view>
<view class="bg-grey">灰底</view>
<view class="bg-blue light">浅蓝底</view>
<view class="bg-gradual-blue">品牌渐变底</view>
<view class="bg-gradual-green">绿色渐变</view>
```

色板：`white/black/grey/red/orange/yellow/olive/green/cyan/blue(品牌色)/purple/mauve/pink/brown`，都可加 `.light` 浅色变体或 `bg-gradual-*` 渐变。

### 11.2 边框色

```html
<view class="border solid-bottom line-red">红底线</view>
<view class="solid line-blue">蓝边框</view>
```

色板同背景（`line-*`/`lines-*` 全套）。

### 11.3 语义色规范

| 语义 | 类 | 何时用 |
|---|---|---|
| 主文字 | `text-main` | 正文、标题（跟随主题文字色） |
| 品牌 | `bg-blue`/`text-brand` | 主操作、选中、链接 |
| 收入/成功 | `badge-income`/`text-income`/`bg-green` | 收入、已结账 |
| 支出/危险 | `badge-expense`/`text-expense`/`bg-red` | 支出、删除、未结 |
| 待办/警告 | `badge-warning`/`text-warning`/`bg-orange` | 待办、逾期 |
| 中性 | `badge-mute`/`text-sub`/`text-hint`/`bg-grey` | 次级信息、禁用 |

---

## 12. 动效

```html
<view class="animation-fade">淡入</view>
<view class="animation-scale-up">放大进入</view>
<view class="animation-slide-top">从上滑入</view>
<view class="animation-slide-left">从左滑入</view>
<view class="animation-shake">抖动（错误提示）</view>
<view class="animation-reverse">反向</view>
```

组合按压反馈：可点击元素加 `hover-shrink`（按下微缩放，Apple 风）：

```html
<view class="card hover-shrink" @tap="onTap">可点击卡片</view>
```

---

## 13. 模态框与浮层

```html
<view class="cu-modal" :class="{'show': showModal}">
  <view class="cu-dialog">
    <view class="padding">这是对话框内容</view>
    <view class="flex justify-between border-top">
      <button class="cu-btn flex-sub" @tap="showModal=false">取消</button>
      <button class="cu-btn bg-blue flex-sub" @tap="confirm">确定</button>
    </view>
  </view>
</view>
```

其他可用组件：`cu-timeline`（时间轴）、`cu-steps`（步骤条）、`cu-progress`（进度条）、`cu-avatar`（头像）、`cu-bar`（操作条）。

---

## 14. 主题与换肤

### 14.1 内置主题

| 主题 | 特征 | 默认 |
|---|---|---|
| Apple 现代风 | 白卡 + 柔和阴影 + 圆润卡片 | ✅ 默认 |
| 扁平化 | 无阴影 + 小圆角 | 可选 |
| 赛博科幻（X 新增） | 霓虹品牌色 + 发光阴影 + 锐利圆角 | 可选 |
| 暗色（X 新增） | 深色背景 + 全量语义变量跟随（A 层） | 可选 |

### 14.2 切换主题

**方式 A：整页静态切换**

```html
<view class="theme-flat">
  <!-- 页面内容，全部扁平化 -->
</view>
```

**方式 B：运行时动态切换（换肤）**

```js
// pages 根组件或 app-page 组件里
import { themes, defaultTheme } from '@/common/coloruix/js/themes.js'

// 根 view 绑定
<view :style="themeVars">
// 切换
themeVars = themes['flat']
uni.setStorageSync('cu-theme', 'flat')   // 持久化，下次启动恢复
```

### 14.3 新增主题（机制与模板）

**一句话机制**：主题 = 一个 CSS 变量覆盖类。所有视觉值默认由 `variables/_index.scss` 输出为 `--cu-*` CSS 变量（**Apple 主题就是默认值**，无需主题文件）；主题文件只是在类作用域内**重新声明**部分 `--cu-*`，CSS 变量沿继承覆盖，**类挂到哪、哪里生效**。

| 层 | 文件 | 作用 |
|---|---|---|
| token 默认值 | `variables/_index.scss`（`:root, page`） | 全部 `--cu-*` 默认值 = Apple 主题 |
| 主题定义 | `js/themes.js`（主推）/ `themes/_xx.scss`（可选） | 按需覆盖 `--cu-*`，没覆盖的继承默认 |
| 激活 | 根 view 绑 `:style` / 挂类 | 动态整页 / 静态局部 |

**模板 A：最小主题（JS 对象，改几个变量就成一套）**

```js
// js/themes.js 的 themes 对象里加：
mytheme: {
  '--cu-brand': '#FF6600',      // 品牌主色
  '--cu-shadow-card': 'none',   // 去阴影
  '--cu-radius-md': '8rpx',     // 小圆角
},
```

**模板 B：全新主题（覆盖全套变量）**

变量分 9 组，想改哪组写哪组。下面是暗色系示例——注意**换了背景必须连文字、线条一起换**，否则对比度崩：

```js
// js/themes.js 的 themes 对象里加 'dark'（暗色主题示例）
'dark': {
  // 品牌三件套（主色/深/浅底，必须配套）
  '--cu-brand': '#5B8CFF',
  '--cu-brand-deep': '#3A6AE8',
  '--cu-brand-soft': '#1E2A4A',
  // 语义色（收入/支出/警告）
  '--cu-income': '#34C77B',
  '--cu-expense': '#FF5D5D',
  '--cu-warning': '#FFB020',
  // 中性色（文字/背景/线条）
  '--cu-text-main': '#E6EBF5',
  '--cu-text-sub': '#9AA7C0',
  '--cu-text-hint': '#66748F',
  '--cu-bg-page': '#0F1626',
  '--cu-bg-card': '#1A2336',
  '--cu-bg-sunken': '#131B2C',
  '--cu-line': '#24304A',
  '--cu-line-strong': '#33415F',
  // 语义浅底
  '--cu-ok-bg': 'rgba(52, 199, 123, .12)',
  '--cu-danger-bg': 'rgba(255, 93, 93, .12)',
  '--cu-warn-bg': 'rgba(255, 176, 32, .12)',
  // 圆角 / 阴影
  '--cu-radius-sm': '8rpx',
  '--cu-radius-md': '16rpx',
  '--cu-radius-lg': '24rpx',
  '--cu-shadow-card': '0 2rpx 8rpx rgba(0,0,0,.4), 0 8rpx 24rpx rgba(0,0,0,.5)',
  '--cu-shadow-float': '0 4rpx 16rpx rgba(0,0,0,.5), 0 12rpx 40rpx rgba(0,0,0,.6)',
  // 字号/间距一般不动（要调见下方全清单）
},
```

**三种场景，按需选择（都不需要写两遍）**：

**用法一：纯 JS 动态换肤（主推，动态切换只需这一份）**

动态切换的本质是运行时覆盖 `--cu-*`，JS 对象 + 根 view 绑 `:style` 就够，**无需 scss 文件**（demo 主题页即此用法）：

```js
// js/themes.js —— 新增主题只改这一个文件
'dark': {
  '--cu-brand': '#5B8CFF',
  '--cu-brand-deep': '#3A6AE8',
  '--cu-brand-soft': '#1E2A4A',
  '--cu-income': '#34C77B',
  '--cu-expense': '#FF5D5D',
  '--cu-warning': '#FFB020',
  // ... 与 .theme-dark 完全一致
},
```
```html
<!-- 页面根 view 绑定主题对象（见 §14.2 方式 B） -->
<view :style="themeVars">
```

**用法二：静态类（可选，仅无 JS 的静态项目 / 局部区块换风格需要）**

```scss
// themes/_dark.scss
.theme-dark {
  --cu-brand: #5B8CFF;
  /* ... */
}
```
```html
<view class="theme-dark"><!-- 该子树变暗色主题 --></view>
```
（`themes/_index.scss` 加 `@use 'dark';`）

> 内置的 `flat`/`sci-fi` 有 scss 类，是因为它们同时演示"静态挂类"（如局部扁平化）；`dark` 为纯 JS 动态示例（A 层变量化后可直接演示完整暗色）。**你自己新增主题只做动态切换的话，scss 那份可以不写。**

**用法三：单主题固定（不切换主题，最简单）**

只要一套主题、确定不做运行时切换时，两条路都不用走完整套，scss 主题文件也不需要：

- **改默认值（编译期，零 JS）**：直接改 `variables/_colors.scss` 的 `$cu-brand/-deep/-soft`（或 `variables/` 其他 token），重新编译即全局生效——连 themeVars 都不用绑。适合"确定永不换肤"；只换品牌色时只需改这 3 行。
- **themeVars 固定绑定（保留换肤可能）**：

```js
// 页面根组件
import { customTheme } from '@/common/coloruix/js/themes.js'
const themeVars = customTheme('#FF6600')   // 固定主题对象，不切换
```
```html
<view :style="themeVars">
```

每个页面根 view 绑一次；多页面项目建议封装 `app-page` 组件统一绑定，避免每页重复。

**步骤清单**

1. 动态换肤（主推）：`js/themes.js` 加一个主题对象 → 根 view 绑 `:style="themeVars"` → 完成
2. 静态类（可选）：`themes/` 建 `_xx.scss` 写 `.theme-xx` → `themes/_index.scss` 加 `@use 'xx';` → 挂类激活
3. 单主题固定（不切换）：见用法三——改 `variables/` 默认值（零 JS）或固定绑一个 themeVars
4. 两者都写的唯一情况：同一主题既要在运行时切换、又要在别的项目静态挂类——正常不会同时需要

**可覆盖变量全清单**（`variables/_index.scss` 输出的即默认值）：

- 品牌：`--cu-brand / --cu-brand-deep / --cu-brand-soft`
- 语义：`--cu-income / --cu-expense / --cu-warning`
- 中性：`--cu-text-main / --cu-text-sub / --cu-text-hint`、`--cu-bg-page / --cu-bg-card / --cu-bg-sunken`、`--cu-line / --cu-line-strong`
- 浅底：`--cu-ok-bg / --cu-danger-bg / --cu-warn-bg`
- 色板：`--cu-color-*`（red/green/blue 等 15 色，`bg-*`/`text-*` 引用）
- 圆角：`--cu-radius-none / -sm / -md / -lg / -round`
- 阴影：`--cu-shadow-none / -card / -float`
- 间距：`--cu-space-xs / -sm / -md / -lg / -xl`
- 字号：`--cu-font-xs / -sm / -df / -lg / -xl / -num`

**边界**（覆盖了也不变的）：

- 类库容器背景/分割线已变量化（A 层）：`bg-white`→`--cu-bg-card`、`.cu-dialog`→`--cu-bg-sunken`、solid/solids/dashed→`--cu-line` 等，暗色主题可完整跟随
- input/textarea 文字与 placeholder（X 新增）：文字走 `--cu-text-main`，placeholder 走 `--cu-text-hint`；H5/App 用 `input::placeholder` 全局生效，小程序端不支持 `::placeholder`，需显式加 `placeholder-class="cu-ph"`（`.cu-ph` 类已提供）
- 仍不跟随：**功能性白**（选中态图标 `color:#fff`、白色勾边——暗色下也应保持白）、组件特效 rgba（渐变/蒙层）
- 原生组件 `color` 属性（switch/radio/checkbox/slider）：平台限制，只能写死 hex（§16.2）
- `pages.json` 导航栏/tabBar 色：编译期固定（§16.3）

### 14.4 品牌色定制（X 新增）

不改主题文件，运行时直接覆盖品牌三件套（主色自动推导深/浅底），风格继承当前主题：

```js
import { themes, customTheme } from '@/common/coloruix/js/themes.js'
themeVars = customTheme('#FF6600', themes['sci-fi'])
```

- `customTheme(brand, base)`：`brand` 为 6 位 hex 主色（支持 `#abc` 3 位缩写，自动展开）；`deep` 向黑混 25%（按压/渐变用）、`soft` 向白混 85%（浅底用），风格变量（阴影/圆角）继承 `base`；**非法色值回退 base**，不产生垃圾色
- demo：扩展 → 主题换肤页「品牌色定制」区块（预设色块 + hex 输入，持久化到 `cu-brand-custom`）

---

## 15. 定制设计系统

所有视觉决策集中在 `variables/`，改这里全局生效：

| 想改什么 | 改哪 |
|---|---|
| 品牌色 | `variables/_colors.scss` 的 `$cu-brand/-deep/-soft`（+ `js/themes.js`） |
| 圆角风格 | `variables/_radius.scss` |
| 阴影风格 | `variables/_shadows.scss` |
| 间距密度 | `variables/_spacing.scss` |
| 字号体系 | `variables/_typography.scss` |
| 新增颜色 | `variables/_colors.scss` 加变量 + `_index.scss` 输出 CSS 变量 |

页面里直接使用 CSS 变量（不必依赖类）：

```scss
.my-box {
  background: var(--cu-bg-card);
  border: 1rpx solid var(--cu-line);
  border-radius: var(--cu-radius-md);
  color: var(--cu-text-main);
}
```

**验证修改**：改完 token 或类库后，用 sass 编译入口确认无误：

```bash
npx sass --no-source-map --load-path=. common/coloruix/index.scss /tmp/coloruix.css
```

`--load-path=.`（项目根）用于解析 `@use` 相对引用；本 demo 仓库无 package.json，npx 会自动拉取 sass，其他项目可用本地 sass。

---

## 16. 平台注意事项

### 16.1 uni.scss 里用 @use 必须配 includePaths

如果你的项目在 `uni.scss` 里 `@use 'common/coloruix/variables/...'`（桥接 token），必须在 `vite.config.js` 配 `includePaths: [项目根]`（§1.2），否则 uni-app 注入 uni.scss 到页面后路径解析失败。

### 16.2 原生控件颜色不换肤

`<switch color="#4A9BD9">`、`<radio>`、`<checkbox>`、`<slider>` 的颜色走原生属性，**不支持 CSS 变量**，换肤时不变。写死品牌色即可。

### 16.3 导航栏/tabBar 颜色不换肤

`pages.json` 里配置的原生导航栏/tabBar 是编译期固定色。需要动态变色得用自定义导航栏组件。

### 16.4 图标必须双类

`class="cuIcon cuIcon-xxx"`（两个类），只写单类在部分场景会黑图标。

### 16.5 小程序 WXSS 限制

- 不支持 `:last-child`、`+`、`>` 选择器（静默失效，改用类名）
- 自定义组件内 scoped 样式在小程序端不可靠（关键布局放页面级样式）

---

## 17. 常见问题

| 问题 | 解决 |
|---|---|
| 编译报 `Can't find stylesheet to import` | 配 vite includePaths（§16.1） |
| 换肤后某处颜色不变 | 该处硬编码了 hex，改走 `var(--cu-*)` |
| 图标是黑色的 | 补双类：`cuIcon cuIcon-xxx` |
| switch 滑块色不随主题 | 原生属性限制，接受（§16.2） |
| 改了 token 不生效 | 删 `unpackage/dist` 重新编译 |
| 想用卡片但没样式 | 检查 App.vue 是否 `@import` 了 X 的 `index.scss` |
