# 📚 VitePress 博客完全指南

> 面向技术小白的详细教程，教你如何搭建和管理自己的技术博客

## 🎯 目录

1. [项目结构说明](#项目结构说明)
2. [如何写文章](#如何写文章)
3. [配置文件详解](#配置文件详解)
4. [常见问题解答](#常见问题解答)
5. [最佳实践](#最佳实践)

---

## 📁 项目结构说明

### 🏗️ 整体结构

```
wytx-aiknowledge/
├── docs/                    # 📝 所有内容都在这里
│   ├── .vitepress/         # ⚙️ 配置文件夹
│   │   ├── config.ts       # 🔧 核心配置文件（重要！）
│   │   ├── cache/          # 📦 缓存文件（自动生成，不用管）
│   │   └── dist/           # 🚀 构建输出（自动生成，不用管）
│   ├── posts/              # 📰 博客文章存放处
│   │   ├── index.md        # 📋 文章列表页面
│   │   └── *.md           # 📄 具体的文章文件
│   ├── tech/               # 💻 技术分享文章
│   ├── guide/              # 📖 使用指南（就是这个文档）
│   ├── public/             # 🖼️ 静态资源（图片、图标等）
│   ├── about.md            # 👤 关于我页面
│   └── index.md            # 🏠 网站首页
├── package.json            # 📦 项目依赖配置
├── package-lock.json       # 🔒 依赖版本锁定
└── node_modules/           # 📚 依赖包（自动生成，不用管）
```

### 🔍 各文件夹作用详解

| 文件夹/文件 | 作用 | 是否需要编辑 |
|------------|------|-------------|
| `docs/.vitepress/config.ts` | 🔧 网站配置（导航、标题等） | ⭐ 经常编辑 |
| `docs/posts/` | 📝 存放博客文章 | ⭐ 经常使用 |
| `docs/public/` | 🖼️ 存放图片、图标 | 偶尔使用 |
| `docs/index.md` | 🏠 网站首页 | 偶尔编辑 |
| `package.json` | 📦 项目配置 | 很少编辑 |
| `node_modules/` | 📚 依赖包 | ❌ 不要动 |

---

## 📝 如何写文章

### 🚀 快速开始

#### 步骤1：启动开发服务器
```bash
# 在项目根目录（wytx-aiknowledge/）执行
npm run dev
```
看到类似这样的提示就成功了：
```
  vitepress v1.0.0-alpha.28

  ➜  Local:   http://localhost:4173/
  ➜  press h to show help
```

#### 步骤2：创建新文章
在 `docs/posts/` 文件夹下创建新的 `.md` 文件：

**推荐命名格式：**
```
2024-01-30-我的第一篇博客.md
2024-01-31-Vue学习笔记.md
2024-02-01-好用的工具推荐.md
```

#### 步骤3：编写文章内容

**基本模板：**
```markdown
---
title: 文章标题
date: 2024-01-30
tags: [Vue, JavaScript, 前端]
description: 这是一篇关于Vue的学习笔记
---

# 文章标题

## 简介

这里写文章的简介...

## 主要内容

### 小节标题

具体内容...

## 总结

总结内容...
```

### 📋 Markdown 语法速查

#### 🔤 文本格式
```markdown
# 一级标题        →  右侧自动生成目录
## 二级标题       →  右侧自动生成目录
### 三级标题      →  右侧自动生成目录

**粗体文字**      →  **粗体文字**
*斜体文字*        →  *斜体文字*
`代码片段`        →  `代码片段`
```

#### 🔗 链接和图片
```markdown
[链接文字](https://example.com)
[内部链接](/posts/other-article)
![图片描述](/images/photo.jpg)
```

#### 📝 列表
```markdown
## 无序列表
- 项目1
- 项目2
  - 子项目

## 有序列表
1. 第一项
2. 第二项
```

#### 💻 代码块
````markdown
```javascript
// JavaScript 代码
function hello() {
  console.log('Hello World!')
}
```

```python
# Python 代码
def hello():
    print("Hello World!")
```
````

#### 📊 表格
```markdown
| 列1 | 列2 | 列3 |
|-----|-----|-----|
| 内容1 | 内容2 | 内容3 |
| 内容4 | 内容5 | 内容6 |
```

#### 💡 提示框
```markdown
::: tip 提示
这是一个提示框
:::

::: warning 注意
这是一个警告框
:::

::: danger 危险
这是一个危险提示框
:::
```

### 🖼️ 图片管理

#### 图片存放位置
```
docs/
├── public/
│   ├── images/
│   │   ├── 2024/           # 按年份分类
│   │   │   ├── photo1.jpg
│   │   │   └── photo2.png
│   │   └── avatar.jpg      # 头像
│   └── icons/              # 图标文件
└── posts/
    └── your-article.md
```

#### 在文章中引用图片
```markdown
![图片描述](/images/2024/photo1.jpg)
```

---

## ⚙️ 配置文件详解

### 📁 config.ts 文件结构

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  // 🌐 网站基本信息
  title: 'WYTX AI Knowledge',          // 浏览器标签页标题
  description: '个人技术博客与知识分享',  // 网站描述
  lang: 'zh-CN',                       // 语言设置
  
  // 🎨 主题配置
  themeConfig: {
    // 网站标题（左上角显示）
    siteTitle: 'WYTX 博客',
    
    // 🧭 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '技术', link: '/tech/' },
      { text: '关于', link: '/about' }
    ],
    
    // 📋 侧边栏配置
    sidebar: {
      '/posts/': [
        {
          text: '文章列表',
          items: [
            { text: '文章标题', link: '/posts/article-file-name' }
          ]
        }
      ]
    },
    
    // 🔗 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wenyantongxue' }
    ]
  }
})
```

### 🔧 常用配置选项

#### 1. 修改网站标题
```typescript
// 浏览器标签页标题
title: '你的博客名称',

// 左上角显示的标题
themeConfig: {
  siteTitle: '你的博客'
}
```

#### 2. 添加导航菜单
```typescript
nav: [
  { text: '首页', link: '/' },
  { text: '博客', link: '/posts/' },
  
  // 下拉菜单
  {
    text: '分类',
    items: [
      { text: '前端技术', link: '/frontend/' },
      { text: '后端技术', link: '/backend/' },
      { text: '工具推荐', link: '/tools/' }
    ]
  },
  
  // 外部链接
  { text: 'GitHub', link: 'https://github.com/your-username' }
]
```

#### 3. 设置侧边栏
```typescript
sidebar: {
  // 文章页面的侧边栏
  '/posts/': [
    {
      text: '最新文章',
      collapsed: false,  // 是否默认折叠
      items: [
        { text: '文章1', link: '/posts/article1' },
        { text: '文章2', link: '/posts/article2' }
      ]
    }
  ],
  
  // 技术页面的侧边栏
  '/tech/': [
    {
      text: '技术分享',
      items: [
        { text: 'Vue 教程', link: '/tech/vue' },
        { text: 'React 教程', link: '/tech/react' }
      ]
    }
  ]
}
```

#### 4. 添加社交链接
```typescript
socialLinks: [
  { icon: 'github', link: 'https://github.com/your-username' },
  { icon: 'twitter', link: 'https://twitter.com/your-username' },
  { icon: 'linkedin', link: 'https://linkedin.com/in/your-username' },
  
  // 自定义图标
  {
    icon: {
      svg: '<svg>...</svg>'  // 你的 SVG 图标代码
    },
    link: 'https://your-custom-link.com'
  }
]
```

### 🎨 高级配置

#### 1. 添加网站图标
```typescript
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: 'WYTX' }],
    ['meta', { property: 'og:title', content: 'WYTX 博客' }]
  ]
})
```

#### 2. 自定义首页布局
```typescript
export default defineConfig({
  themeConfig: {
    // 首页英雄区域
    hero: {
      name: 'WYTX',
      text: 'AI Knowledge Blog',
      tagline: '分享技术，记录生活',
      image: '/avatar.jpg',
      actions: [
        { theme: 'brand', text: '开始阅读', link: '/posts/' },
        { theme: 'alt', text: '关于我', link: '/about' }
      ]
    }
  }
})
```

### ⚠️ TypeScript 注意事项

#### 1. 类型安全
```typescript
// ✅ 正确：使用正确的类型
nav: [
  { text: '首页', link: '/' }  // text 和 link 都是必需的
]

// ❌ 错误：缺少必需属性
nav: [
  { text: '首页' }  // 缺少 link 属性
]
```

#### 2. 数组和对象语法
```typescript
// ✅ 正确：数组语法
nav: [
  { text: '首页', link: '/' },
  { text: '博客', link: '/posts/' }
]

// ✅ 正确：对象语法
sidebar: {
  '/posts/': [...]
}
```

#### 3. 字符串引号
```typescript
// ✅ 推荐：使用单引号
siteTitle: 'WYTX 博客'

// ✅ 也可以：使用双引号
siteTitle: "WYTX 博客"

// 保持一致性很重要！
```

---

## ❓ 常见问题解答

### 🔧 开发相关

#### Q: 启动开发服务器后看不到效果？
```bash
# 检查是否在正确的目录
cd wytx-aiknowledge

# 确保依赖已安装
npm install

# 重新启动
npm run dev
```

#### Q: 修改配置文件后没有效果？
1. **保存文件**：确保 `config.ts` 文件已保存
2. **重启服务器**：按 `Ctrl+C` 停止，然后重新 `npm run dev`
3. **清除缓存**：删除 `.vitepress/cache` 文件夹

#### Q: 文章链接显示 404？
检查文件路径和链接是否匹配：
```typescript
// 文件路径：docs/posts/my-article.md
// 链接应该是：/posts/my-article

{ text: '我的文章', link: '/posts/my-article' }
```

### 📝 写作相关

#### Q: 右侧目录不显示？
确保使用正确的标题层级：
```markdown
# 一级标题
## 二级标题    ← 这些会显示在右侧目录
### 三级标题   ← 这些会显示在右侧目录
```

#### Q: 图片不显示？
1. **检查路径**：图片要放在 `docs/public/` 目录下
2. **检查引用**：使用 `/images/photo.jpg` 而不是 `./images/photo.jpg`
3. **检查格式**：支持 `.jpg`, `.png`, `.gif`, `.svg` 等格式

#### Q: 代码高亮不工作？
使用正确的语言标识：
````markdown
```javascript  ← 正确
```js         ← 也可以
```JavaScript ← 错误（大小写敏感）
````

### 🚀 部署相关

#### Q: 构建时出错？
```bash
# 检查语法错误
npm run build

# 常见错误：
# 1. config.ts 语法错误
# 2. 链接引用了不存在的文件
# 3. 图片路径错误
```

#### Q: 部署后样式丢失？
检查 `base` 配置：
```typescript
export default defineConfig({
  base: '/',          // 如果部署在根目录
  base: '/blog/',     // 如果部署在子目录
})
```

---

## 🌟 最佳实践

### 📁 文件组织

#### 1. 文章命名规范
```
✅ 推荐：
2024-01-30-我的第一篇博客.md
2024-01-31-Vue学习笔记.md
2024-02-01-React-vs-Vue对比.md

❌ 不推荐：
我的文章.md               (没有日期)
vue 学习.md               (空格和中文混用)
ARTICLE-1.MD              (全大写)
```

#### 2. 目录结构规范
```
docs/
├── posts/                 # 📰 博客文章
│   ├── 2024/              # 📅 按年份分类
│   │   ├── 01/            # 📅 按月份分类
│   │   └── 02/
│   └── index.md           # 📋 文章列表
├── tech/                  # 💻 技术深度文章
├── tools/                 # 🔧 工具推荐
└── projects/              # 🚀 项目展示
```

### ✍️ 写作技巧

#### 1. 文章结构模板
```markdown
---
title: 文章标题
date: 2024-01-30
tags: [主要技术, 次要技术]
category: 技术分享
description: 简短描述（1-2句话）
---

# 文章标题

## 📋 目录
- [背景介绍](#背景介绍)
- [主要内容](#主要内容)
- [实践操作](#实践操作)
- [总结](#总结)

## 🎯 背景介绍
为什么要写这篇文章...

## 💡 主要内容
详细的技术内容...

## 🛠️ 实践操作
具体的代码示例...

## 📝 总结
- 要点1
- 要点2
- 要点3
```

#### 2. 使用 Emoji 增强可读性
```markdown
🎯 目标    📝 笔记    💡 提示    ⚠️ 注意
🔧 工具    📚 资源    🚀 部署    ❓ 问题
```

#### 3. 代码示例规范
````markdown
```javascript
// ✅ 好的代码示例：有注释，格式清晰
function calculateTotal(items) {
  // 计算商品总价
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity)
  }, 0)
}
```

```javascript
// ❌ 不好的代码示例：没有注释，格式混乱
function calc(x){return x.reduce((a,b)=>a+b.price*b.quantity,0)}
```
````

### 🔧 配置优化

#### 1. 性能优化
```typescript
export default defineConfig({
  // 启用构建缓存
  cacheDir: '.vitepress/cache',
  
  // 压缩输出
  build: {
    minify: true
  },
  
  // 图片优化
  markdown: {
    image: {
      lazyLoading: true
    }
  }
})
```

#### 2. SEO 优化
```typescript
export default defineConfig({
  head: [
    ['meta', { name: 'keywords', content: '技术博客,Vue,JavaScript,前端' }],
    ['meta', { name: 'author', content: 'WYTX' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }]
  ]
})
```

### 📋 日常工作流程

#### 1. 开始写作
```bash
# 1. 启动开发服务器
npm run dev

# 2. 创建新文章
# 在 docs/posts/ 下创建新的 .md 文件

# 3. 实时预览
# 在浏览器中查看 http://localhost:4173
```

#### 2. 发布文章
```bash
# 1. 检查文章内容
# 确保链接、图片、格式都正确

# 2. 更新导航（如需要）
# 编辑 .vitepress/config.ts

# 3. 构建网站
npm run build

# 4. 部署到服务器
# 上传 .vitepress/dist 文件夹内容
```

#### 3. 维护网站
```bash
# 定期更新依赖
npm update

# 清理缓存
rm -rf .vitepress/cache

# 检查死链接
# 使用工具或手动检查内部链接
```

---

## 📚 进阶学习

### 🔗 相关资源
- [VitePress 官方文档](https://vitepress.dev/)
- [Markdown 语法指南](https://markdown.com.cn/)
- [Vue.js 官方文档](https://vuejs.org/)

### 🚀 下一步计划
1. **基础掌握**：熟练使用 Markdown 和基本配置
2. **内容创作**：专注于写出高质量的技术文章
3. **功能扩展**：添加评论、搜索、统计等功能
4. **自动化**：设置自动部署和备份

---

🎉 **恭喜你！现在你已经掌握了 VitePress 博客的所有基础知识。开始你的写作之旅吧！**

如果遇到问题，欢迎查看这个指南或者搜索相关文档。记住：**多写多练，熟能生巧！**
