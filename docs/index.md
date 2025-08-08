---
layout: home

hero:
  name: "文炎同学的AI知识库"
  text: "探索前沿 • 知识共享"
  tagline: "Make every learning experience meaningful."
  image:
    src: /hero-image.webp
    alt: AI Knowledge Base
  actions:
    - theme: brand
      text: 阅读文章
      link: /posts/
    - theme: alt
      text: 参与贡献
      link: /guide/README.md

features:
  - icon: 🧠
    title: 深度学习
    details: 神经网络原理、反向传播算法、深度学习框架实践
  - icon: 🤖
    title: 大模型技术
    details: Transformer架构、注意力机制、预训练语言模型
  - icon: 🛠️
    title: AI工具实战
    details: PyTorch、TensorFlow、Hugging Face等框架使用
  - icon: 📚
    title: 学习笔记
    details: AI技术学习过程中的心得体会和知识总结
  - icon: 📊
    title: 数据科学
    details: 数据处理、特征工程、模型评估等数据科学全流程
  - icon: 💡
    title: 算法原理
    details: 机器学习经典算法的数学原理、代码实现和应用场景
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 图片加载优化
  const heroImage = document.querySelector('.VPHero .VPImage')
  if (heroImage) {
    // 添加加载状态
    heroImage.style.opacity = '0'
    
    // 图片加载完成后显示
    heroImage.onload = () => {
      heroImage.style.opacity = '1'
    }
    
    // 如果图片已经加载完成
    if (heroImage.complete) {
      heroImage.style.opacity = '1'
    }
  }
  
  // 添加更多装饰元素
  const imageContainer = document.querySelector('.VPHero .image-container')
  if (imageContainer) {
    const decorations = [
      { emoji: '💫', top: '10%', right: '10%', size: '14px', color: '#bd34fe' },
      { emoji: '🌟', bottom: '10%', right: '10%', size: '12px', color: '#41d1ff' },
      { emoji: '🔮', top: '60%', left: '5%', size: '16px', color: '#bd34fe' },
      { emoji: '💎', bottom: '60%', right: '5%', size: '10px', color: '#41d1ff' }
    ]
    
    decorations.forEach(item => {
      const element = document.createElement('div')
      element.textContent = item.emoji
      element.style.cssText = `
        position: absolute;
        ${item.top ? `top: ${item.top};` : ''}
        ${item.bottom ? `bottom: ${item.bottom};` : ''}
        ${item.left ? `left: ${item.left};` : ''}
        ${item.right ? `right: ${item.right};` : ''}
        font-size: ${item.size};
        color: ${item.color};
        z-index: 10;
        pointer-events: none;
      `
      imageContainer.appendChild(element)
    })
  }
})
</script>
