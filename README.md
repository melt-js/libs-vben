# @melt-js/libs-vben

由 [vue-vben-admin](https://github.com/vbenjs/vue-vben-admin) 5.8 的 `packages/` 合并而来的基础库包：把原来 16 个 `@vben/*` / `@vben-core/*` 基础包收进一个包，用子路径导出保持原模块边界。

组件层（`@core/ui-kit/*`、`common-ui`、`layouts`、`plugins`）拆到 [`comps-vben`](../comps-vben)，模板层来自 `apps/web-ele`，见 [`tpl-vue3-admin-ele-vben`](../tpl-vue3-admin-ele-vben)。

## 合并范围

| 子路径 | 上游包 | 内容 |
| --- | --- | --- |
| `design` | `@vben-core/design` | 设计变量、Tailwind 主题、BEM、全局样式 |
| `shared/*` | `@vben-core/shared` | `utils` / `constants` / `color` / `cache` / `store` / `global-state` |
| `typings` | `@vben-core/typings` | 全局类型、`RouteMeta` 增强 |
| `core-icons` | `@vben-core/icons` | Iconify / Lucide 基础图标 |
| `composables` | `@vben-core/composables` | 组合式函数 |
| `core-preferences` | `@vben-core/preferences` | 偏好设置内核 |
| `constants` | `@vben/constants` | 登录路径、默认首页等常量 |
| `access` | `@vben/access` | 权限指令、动态路由 |
| `hooks` | `@vben/hooks` | 业务 hooks（水印、设计变量等） |
| `locales` | `@vben/locales` | i18n 初始化与语言包加载 |
| `preferences` | `@vben/preferences` | 偏好设置门面 |
| `request` | `@vben/request` | axios / fetch 请求客户端与拦截器 |
| `stores` | `@vben/stores` | pinia store（access / user / tab） |
| `styles` | `@vben/styles` | 全局样式与 Element Plus 适配 |
| `types` | `@vben/types` | 业务类型 |
| `utils` | `@vben/utils` | 工具函数 |
| `icons` | `@vben/icons` | 项目图标集合 |

## 使用

```ts
import { preferences } from '@melt-js/libs-vben/preferences';
import { useAccessStore } from '@melt-js/libs-vben/stores';
import { resetStaticRoutes } from '@melt-js/libs-vben/utils';
import '@melt-js/libs-vben/styles';
import '@melt-js/libs-vben/styles/ele';
```

样式子路径直接指向 CSS/SCSS 源码，由使用方的 Vite / Sass 编译：

- `@melt-js/libs-vben/styles`
- `@melt-js/libs-vben/styles/ele`
- `@melt-js/libs-vben/styles/global`
- `@melt-js/libs-vben/design/bem`

## 边界

- 本包只放非组件层：不包含 `shadcn-ui`、`form-ui`、`common-ui` 等 UI 组件。
- `comps-vben` 依赖本包，本包不反向依赖 `comps-vben`，避免循环。
- 源码按子目录保存，`package.json` 的 `exports` 与上游包名一一对应；内部相互引用已改为 `@melt-js/libs-vben/*`。
- 依赖版本以 `vue-vben-admin` 5.8 的 `pnpm-lock.yaml` catalog 为准；`vue` / `vue-router` / `pinia` / `vue-i18n` 以 peerDependency 形式声明。

## 目录

```text
src/
  access/            # @vben/access
  composables/       # @vben-core/composables
  constants/         # @vben/constants
  core-icons/        # @vben-core/icons
  core-preferences/  # @vben-core/preferences
  design/            # @vben-core/design
  hooks/             # @vben/hooks
  icons/             # @vben/icons
  locales/           # @vben/locales
  preferences/       # @vben/preferences
  request/           # @vben/request
  shared/            # @vben-core/shared
  stores/            # @vben/stores
  styles/            # @vben/styles
  theme.css          # 上游 internal/tailwind-config 的主题
  types/             # @vben/types
  typings/           # @vben-core/typings
  utils/             # @vben/utils
```


## 发布

本包是源码包（与 `libs-fan` / `comps-fan` 一样），`files` 发布 `src`。

```bash
pnpm publish:stage
```

脚本会先用 `pnpm pack` 把 `workspace:*` 重写成当前版本，再提交 npm stage；
批准后可由 unpkg 提供源码文件（需要消费方自行用 Vite / bundler 编译）。
