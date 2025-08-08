import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: '文炎同学的AI知识库',          // 浏览器标签页标题
  description: '人工智能学习笔记与技术分享',
  lang: 'zh-CN',
  // 设置正确的base路径，对于自定义域名应该使用根路径
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'description', content: '文炎同学的AI知识库 - 人工智能学习笔记与技术分享' }],
    ['style', {}, `
      /* ===== CSS变量定义 ===== */
      :root { 
        /* 标题渐变色设置 - 透明文字配合渐变背景 */
        --vp-home-hero-name-color: transparent; 
        /* 标题渐变背景 - 紫色到蓝色的120度渐变 */
        --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
        /* 图像背景渐变 - 45度对角线渐变，紫色和蓝色各占50% */
        --vp-home-hero-image-background-image: linear-gradient(-45deg,rgb(129, 52, 254)  50%, #47caff 50%);
        /* 图像背景模糊效果 - 默认35px模糊 */
        --vp-home-hero-image-filter: blur(35px);
      }
      
      /* ===== 响应式模糊效果 ===== */
      @media (min-width: 640px) {
        :root {
          /* 平板端模糊效果 - 42px模糊 */
          --vp-home-hero-image-filter: blur(42px);
        }
      }
      
      @media (min-width: 960px) {
        :root {
          /* 桌面端模糊效果 - 50px模糊 */
          --vp-home-hero-image-filter: blur(50px);
        }
      }
      
      /* ===== 图像样式 ===== */
      .VPHero .VPImage {
        /* 图像阴影效果 - 左下角阴影，带透明度 */
        filter: drop-shadow(-2px 4px 6px rgba(0, 0, 0, 0.2));
        /* 图像内边距 - 18px让图像更突出 */
        padding: 18px;
      }
      
      /* ===== 装饰元素容器 ===== */
      .VPHero .image-container {
        /* 相对定位 - 为装饰元素提供定位基准 */
        position: relative;
      }
      
      /* ===== CSS装饰星星1 ===== */
      .VPHero .image-container::before {
        /* 星星内容 - 右上角装饰 */
        content: '⭐';
        /* 绝对定位 - 相对于image-container定位 */
        position: absolute;
        /* 位置设置 - 右上角20%位置 */
        top: 20%;
        right: 20%;
        /* 字体大小 - 18px */
        font-size: 18px;
        /* 颜色设置 - 紫色，与主题一致 */
        color: #bd34fe;
        /* 层级设置 - 确保在图像之上 */
        z-index: 10;
        /* 鼠标穿透 - 不影响交互 */
        pointer-events: none;
      }
      
      /* ===== CSS装饰星星2 ===== */
      .VPHero .image-container::after {
        /* 星星内容 - 左下角装饰 */
        content: '✨';
        /* 绝对定位 - 相对于image-container定位 */
        position: absolute;
        /* 位置设置 - 左下角20%位置 */
        bottom: 20%;
        left: 20%;
        /* 字体大小 - 16px */
        font-size: 16px;
        /* 颜色设置 - 蓝色，与主题一致 */
        color: #41d1ff;
        /* 层级设置 - 确保在图像之上 */
        z-index: 10;
        /* 鼠标穿透 - 不影响交互 */
        pointer-events: none;
      }
      
      /* ===== JavaScript装饰元素样式 ===== */
      /* 装饰元素1 - 彗星效果 */
      .VPHero .image-container .decoration-1 {
        content: '💫';
        position: absolute;
        /* 位置设置 - 右上角10%位置（很近） */
        top: 10%;
        right: 10%;
        /* 字体大小 - 14px */
        font-size: 14px;
        /* 颜色设置 - 紫色 */
        color: #bd34fe;
        z-index: 10;
        pointer-events: none;
      }
      
      /* 装饰元素2 - 星星效果 */
      .VPHero .image-container .decoration-2 {
        content: '🌟';
        position: absolute;
        /* 位置设置 - 右下角10%位置（很近） */
        bottom: 10%;
        right: 10%;
        /* 字体大小 - 12px */
        font-size: 12px;
        /* 颜色设置 - 蓝色 */
        color: #41d1ff;
        z-index: 10;
        pointer-events: none;
      }
      
      /* 装饰元素3 - 水晶球效果 */
      .VPHero .image-container .decoration-3 {
        content: '🔮';
        position: absolute;
        /* 位置设置 - 左侧60%位置（较远） */
        top: 60%;
        left: 5%;
        /* 字体大小 - 16px */
        font-size: 16px;
        /* 颜色设置 - 紫色 */
        color: #bd34fe;
        z-index: 10;
        pointer-events: none;
      }
      
      /* 装饰元素4 - 钻石效果 */
      .VPHero .image-container .decoration-4 {
        content: '💎';
        position: absolute;
        /* 位置设置 - 右侧60%位置（较远） */
        bottom: 60%;
        right: 5%;
        /* 字体大小 - 10px */
        font-size: 10px;
        /* 颜色设置 - 蓝色 */
        color: #41d1ff;
        z-index: 10;
        pointer-events: none;
      }
      
      /* ===== 副标题字号调整 ===== */
      .VPHero .text {
        /* 字号调小 - 直接覆盖VitePress默认字号 */
        font-size: 24px !important; 
      }
      
      @media (min-width: 640px) {
        .VPHero .text {
          /* 平板端字号 - 32px */
          font-size: 32px !important;
        }
      }
      
      @media (min-width: 960px) {
        .VPHero .text {
          /* 桌面端字号 - 35px */
          font-size: 35px !important;
        }
      }
      

      
      /* ===== 页面布局 ===== */
      .VPHero {
        /* 全屏高度 - 占满视窗高度 */
        height: 100vh;
        /* 弹性布局 - 垂直居中 */
        display: flex;
        align-items: center;
      }
      
      .VPHero .container {
        /* 容器宽度 - 占满宽度 */
        width: 100%;
        /* 容器居中 - 水平居中 */
        margin: 0 auto;
      }
    `]
  ],
  
  themeConfig: {
    siteTitle: '文炎同学的AI知识库',           // 左上角显示的标题
    
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/transformer-自注意力机制.md' },
      { text: '工具分享', link: '/tech/' },
      { text: '关于', link: '/about' }
    ],
    
    sidebar: {
      '/posts/': [
        {
          text: '文章列表',
          items: [
            { text: 'Transformer自注意力机制', link: '/posts/transformer-自注意力机制' }
          ]
        }
      ]
    },
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wenyantongxue' }
    ]
  }
})