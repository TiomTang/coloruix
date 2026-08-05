# ColorUiX

**ColorUIX 效果展示 demo**（uni-app Vue3 + HBuilderX）

**ColorUIX** 是 [ColorUI](https://github.com/weilanwl/coloruicss) 的 fork 改造项目：保留原版类名体系与设计语言，样式层由原版纯 CSS 重构为 SCSS（token 变量 + `@use` 分层），并新增能力。设计系统本体位于 `common/coloruix/`，可整体移植到任意 uni-app 项目；本仓库是它的**效果展示 demo**——每个类、每个组件、每个主题能力都有一个可运行页面。

demo 页面全部使用 **X 类 + 组合式 API（`<script setup>`）** 编写，无外链图片、自包含。

## 来源与许可

本项目 fork 自 [ColorUI v2.1.6](https://github.com/weilanwl/coloruicss)（Copyright (c) 2018 weilanwl，**MIT License**）：在原版类名体系与设计语言基础上重写样式与展示 demo，并新增 X 能力（见下文）。原项目采用 MIT License，本项目同样采用 **MIT License** 开源，详见 [LICENSE](LICENSE)。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 快速开始

1. 用 HBuilderX 打开本目录
2. 运行到微信开发者工具 / H5 / App
3. 底部 tabbar 切换：**元素**（layout/background/text/icon/button/tag/avatar/progress/shadow/loading）→ **组件**（card/list/form/bar/timeline/steps/modal/chat/swiper/nav）→ **扩展**（theme 主题换肤/animation/drawer/indexes）

## 目录结构

```
ColorUiX/
├── common/coloruix/          # ColorUIX 设计系统（可整体移植）
│   ├── index.scss           # 入口（App.vue 已 @import）
│   ├── variables/           # token 层（SCSS 变量 + --cu-* CSS 变量）
│   ├── core/                # 类库（reset/layout/typography/components/icons/animation）
│   ├── themes/              # 视觉层（静态类主题：theme-flat 扁平化/theme-sci-fi 科幻）
│   └── js/themes.js         # 运行时主题对象（换肤）
├── pages/
│   ├── index/index.vue      # 首页（cu-bar tabbar 三分类切换）
│   ├── basics/              # 元素：layout/background/text/icon/button/tag/avatar/progress/shadow/loading
│   ├── component/           # 组件：card/list/form/bar/timeline/steps/modal/chat/swiper/nav
│   └── plugin/              # 扩展：theme（换肤）/animation/drawer/indexes
└── pages.json               # 已注册全部 demo 页面
```

## 使用 X 设计系统

开发文档见 **[common/coloruix/README.md](common/coloruix/README.md)**（完整教程：开始使用 → 第一个页面 → 布局 → 卡片 → 按钮 → 标签 → 文字 → 列表 → 表单 → 图标 → 颜色 → 动效 → 模态 → 主题换肤 → 定制 → 平台坑 → FAQ）。本项目的每个 demo 页面即教程中每个类的**可运行示例**。

## X 新增能力（相对原版 ColorUI v2.1.6）

以下类/能力是 ColorUIX 相对原版 ColorUI 的**新增**，demo 页面标题带「X 新增」标记（样式层为 SCSS token 分层，以下能力都建立在 `--cu-*` CSS 变量之上）：

- **卡片体系**：`cu-card`（白卡+圆角+阴影）、`shadow`/`shadow-lg`/`shadow-sm` 阴影三档、`round`/`radius` 圆角补权
- **按钮/标签按压**：`cu-btn` 按压微缩放、`hover-shrink` + `hover-class="x-press"`（跨端按压态）
- **语义体系**：`badge` 语义胶囊（income/expense/warning/brand/mute）、`status-dot` 状态点、`text-main/brand/income/expense/warning/sub/hint` 语义文字色、`num` 等宽数字、`numFw` 全角数字工具（`js/format.js`，中文短标签与纯汉字对齐）、`text-justify` 两端对齐
- **布局增强**：`gap-xs/sm/md/lg` 间距、`dashed-*` 虚线边框、`solid-top/bottom` 实线边、`w-xs/sm/md/lg/xl` 定宽容器（flex 列对齐，配 `text-cut` 防溢出）
- **主题换肤**：`js/themes.js` 运行时主题对象（apple/flat/赛博科幻 sci-fi/暗色 dark）+ `theme-flat` 类
- **A 层语义变量化**：类库容器背景/分割线全部走 `--cu-bg-*`/`--cu-line`（bg-white→bg-card、cu-dialog→bg-sunken 等），暗色主题可完整跟随
- **品牌色定制**：`customTheme(brand, base)` 工厂——主色自动推导深/浅底三件套，与任意主题风格叠加
- **动态字号**：`.text-*` 全走 `--cu-font-*` 变量，`cu-fontsize-1/2/3/4` 五档放大（标准/大/特大/超大/极大），档位由 SCSS 变量编译期推导（改默认字号重新编译自动联动），页面根挂类即可全局联动
- **模态增强**：`bottom-modal` 独立弹窗（左右下留边距）、`drawer-modal` 侧边抽屉
- **品牌色**：`bg-blue`/`bg-gradual-blue` 品牌色为冰川蓝（#4A9BD9）

## Demo 页面索引

| 分类 | 页面 | 展示能力 |
|---|---|---|
| 元素 | layout | flex/justify/align/gap/basis/栅格 |
| 元素 | background | bg-\* 色板/light/渐变/bg-img/mask |
| 元素 | text | 字号阶梯/语义色/num 等宽数字/对齐/截断/特殊文字 |
| 元素 | icon | cuIcon 图标（双类写法） |
| 元素 | button | cu-btn 全套（纯色/light/渐变/block/禁用/按压） |
| 元素 | tag | cu-tag + badge 语义标签 + status-dot 状态点 |
| 元素 | avatar | cu-avatar 尺寸/圆角/文字头像 |
| 元素 | progress | cu-progress 进度条 |
| 元素 | shadow | shadow 三档/blur/warp + 边框线 |
| 元素 | loading | cu-load 加载 |
| 组件 | card | cu-card 白卡+圆角+阴影/表单卡/按压反馈 |
| 组件 | list | cu-list 列表全形态 |
| 组件 | form | cu-form-group 表单 |
| 组件 | bar | cu-bar 操作条 |
| 组件 | timeline | cu-timeline 时间轴 |
| 组件 | steps | cu-steps 步骤条 |
| 组件 | modal | cu-modal 弹窗 |
| 组件 | chat | cu-chat 聊天气泡 |
| 组件 | swiper | card/screen/tower 轮播 |
| 组件 | nav | cu-bar 导航 + tabbar + cu-capsule |
| 扩展 | theme | **运行时换肤 apple/flat/sci-fi/dark + 品牌色定制（X 新增）** |
| 扩展 | fontsize | **动态字号五档（标准/大/特大/超大/极大）** |
| 扩展 | animation | animation-* 动效 + hover-shrink |
| 扩展 | drawer | 抽屉 |
| 扩展 | indexes | 索引列表 |

## 主题换肤

- Apple 现代风（默认：白卡 + 柔和阴影 + 圆润卡片）
- 扁平化（无阴影 + 小圆角）
- 赛博科幻（X 新增：霓虹品牌色 + 发光阴影 + 锐利圆角）
- 暗色（X 新增：深色背景，A 层语义变量全量跟随）
- 品牌色定制（X 新增）：`customTheme(brand, base)` 工厂——主色自动推导深/浅底，与任意主题风格叠加
- 换肤原理：CSS 变量 `--cu-*` 运行时覆盖，`js/themes.js` 提供主题对象，`theme-flat` 类可整棵子树切换
- 平台限制：导航栏/原生组件 color 属性不跟随换肤

## 注意

- 本项目为 HBuilderX 项目：无 package.json / node_modules，下载后直接用 HBuilderX 导入运行（微信开发者工具 / H5 / App）。
