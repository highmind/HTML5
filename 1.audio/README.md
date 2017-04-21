#### audio音频

  1. 创建一个音频
    * 浏览器兼容(ie低端版本不支持)
    * html方式
      1. <audio src="视频地址" />
      2. <audio controls>
          <source src="horse.ogg" type="audio/ogg">
          <source src="horse.mp3" type="audio/mpeg">
        您的浏览器不支持 audio 元素。
        </audio>
    * js方式：
      1. var music = new Audio();music.src = '视频地址';
      2. 或者 var music = new Audio('视频地址');
  2. 常用属性
     1. html标签属性
        * loop 循环播放
        * preload 预加载
        * autoplay 自动播放
        * controls 控制条
     2. DOM对象属性
        * .volume 音量控制
        * .currentTime 音乐时间
        * .duration   音乐时长
        * .paused  是否暂停
        * .playbackRate 回放速率  
  3. 常用方法(使用前需要先获取audio的DOM对象)
     1. play() 播放
     2. pasuse() 暂停
  4. 案例
    1. audio钢琴
    2. audio音乐按钮
    1. QQ音乐播放功能
      * ![image](https://github.com/highmind/Study/raw/master/preview-img/qq-music.png)
    2. 虾米音乐简化版
      * 列表 <br>
       ![image](https://github.com/highmind/Study/raw/master/preview-img/xiami-list.png)
      * 播放 <br>
       ![image](https://github.com/highmind/Study/raw/master/preview-img/xiami-play.png)
