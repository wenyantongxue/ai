# 图片优化指南

## 推荐的图片格式

### 1. WebP 格式（推荐）
- **优点**：文件小，质量高，现代浏览器支持
- **文件大小**：通常比 PNG 小 25-35%
- **浏览器支持**：Chrome、Firefox、Safari、Edge

### 2. AVIF 格式（最新）
- **优点**：压缩率最高，质量最好
- **文件大小**：比 WebP 小 20-30%
- **浏览器支持**：Chrome、Firefox、Safari 14+

### 3. PNG 格式（后备）
- **优点**：广泛支持，无损压缩
- **缺点**：文件较大
- **用途**：作为后备格式

## 转换工具推荐

### 在线工具
1. **Squoosh**：https://squoosh.app/
   - Google 开发的在线图片压缩工具
   - 支持多种格式转换
   - 可以预览压缩效果

2. **Convertio**：https://convertio.co/png-webp/
   - 简单易用的在线转换工具
   - 支持批量转换

3. **TinyPNG**：https://tinypng.com/
   - 专门压缩 PNG 和 JPEG
   - 保持图片质量

### 命令行工具
```bash
# 安装 WebP 工具
# Windows: 下载 https://developers.google.com/speed/webp/download
# macOS: brew install webp
# Linux: sudo apt-get install webp

# 转换 PNG 到 WebP
cwebp hero-image.png -o hero-image.webp -q 80

# 转换 PNG 到 AVIF（需要 avifenc）
avifenc hero-image.png hero-image.avif --min 0 --max 63
```

## 推荐的图片尺寸

### 主页 Hero 图片
- **桌面端**：800x600px 或 1200x800px
- **移动端**：400x300px
- **格式**：WebP（主要）+ PNG（后备）

### 优化建议
1. **压缩质量**：WebP 使用 80-85% 质量
2. **文件大小**：目标 < 200KB
3. **响应式**：提供多个尺寸版本

## 当前项目需要的操作

1. **转换现有图片**：
   ```bash
   # 将 hero-image.png 转换为 WebP
   cwebp hero-image.png -o hero-image.webp -q 80
   ```

2. **创建多个尺寸**：
   - hero-image-large.webp (1200x800)
   - hero-image-medium.webp (800x600)
   - hero-image-small.webp (400x300)

3. **更新配置**：
   - 使用 `<picture>` 标签支持多种格式
   - 添加响应式图片支持

## 性能优化技巧

1. **预加载关键图片**
2. **使用适当的图片尺寸**
3. **启用浏览器缓存**
4. **使用 CDN 加速**
5. **压缩图片文件**

## 检查工具

- **PageSpeed Insights**：https://pagespeed.web.dev/
- **WebPageTest**：https://www.webpagetest.org/
- **GTmetrix**：https://gtmetrix.com/
