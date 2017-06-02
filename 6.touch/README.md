### 移动的javascript touch事件
  1. touchstart    用户 将手指置于屏幕上
    * ``` JavaScript
       document.addEventListener('touchstart',function(e){
         TXT.innerHTML = e.touches.length + '个在屏幕上';
       },false);
      ```
    * e事件对象上的属性和方法
      1. touch对象
        * clientX：触摸目标在视口中的x坐标。
      	* clientY：触摸目标在视口中的y坐标。
      	* identifier：标识触摸的唯一ID。
      	* pageX：触摸目标在页面中的x坐标。
      	* pageY：触摸目标在页面中的y坐标。
      	* screenX：触摸目标在屏幕中的x坐标。
      	* screenY：触摸目标在屏幕中的y坐标。
      	* target：触目的DOM节点目标。
  2. touchmove     用户在屏幕上移动手指
  3. touchend      用户手指离开触摸屏幕
  4. touchacancel  触摸动作被打断，或者触摸数目超过处理的范围

### 常用touch库
  1. 百度touch.js
    * https://github.com/Clouda-team/touch.code.baidu.com
    * touch.on( delegateElement, types, selector, callback );
  2. zepto.js自带的touch封装
