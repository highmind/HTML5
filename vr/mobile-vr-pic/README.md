### 移动端全景效果
  * ![image](https://github.com/highmind/Study/raw/master/preview-img/vr-mobile-pic.png)
  * JS依赖

    1. zepto.js
    2. three.min.js
    3. photo-sphere-viewer.min.js

  * 基本配置
    1. html
      ``` html
      <div id="vr-wrap" class="vr-wrap">
        <div class="vr-box"></div>
        <div id="vr-fullscreen-close1" class="vr-fullscreen-close"></div>
        <div class="vr-tip">
          <div class="vr-tip-ico holeOut"></div>
          <div class="vr-tip-text">
            <p>滑动图片 查看全景图</p>
            <p>点击图片&nbsp;&nbsp;进入全屏</p>
          </div>
        </div>
      </div>
      ```
    
    2. javascript
      ``` html
        <script src="libs/js/zepto.1.0.js"></script>
        <script src="libs/js/three.min.js"></script>
        <script src="libs/js/photo-sphere-viewer.min.js"></script>
        <script src="js/vr.js"></script>
      ```
    3. css
      ``` html
      <link rel="stylesheet" href="libs/css/vr.css">
      ```
    4. images
      vr-hand.png
      vr-fullscreen-close.png

  * 使用
    1. 引入相应资源文件，css,js,html和图片文件
    2. html中 主容器 id必须有，可用来定义大小
    3. $(document).ready中实例化
    ``` javascript
    $(document).ready(function(){
       var psv = createPhotoViewer('vr-wrap', 
          'images/ykt-xmbj-vr.jpg', 
          '100%',
          '282px'
      );
    }); 
    ```
  * 参数说明：createPhotoViewer(sContainer, sImgUrl, sWidth, sHeight)
    1. sContainer 主容器id
    2. sImgUrl    全景图片路径
    3. sWidth     最终宽度
    4. sHeight    最终高度
    
  * 示例
    1. demo.html
