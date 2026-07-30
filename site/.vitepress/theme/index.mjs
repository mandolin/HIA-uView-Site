import DefaultTheme from 'vitepress/theme';
import './style.css';

/**
 * @module hia-uview-site-theme
 * @lang zh-CN 在不替换 VitePress 默认可访问结构的前提下，引入 HIA-uView 的本地主题 token；不加载远程字体、图像或第三方资产。
 * @lang en Introduces local HIA-uView theme tokens without replacing VitePress default accessible structure; it loads no remote font, image, or third-party asset.
 */

export default {
  extends: DefaultTheme
};
