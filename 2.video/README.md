### HTML video
  1. 线上案例
    * http://ony.ru/
    * http://pvp.qq.com/
    * http://lol.qq.com/act/a20150401fool/index.htm
  2. 基本使用
      ``` HTML
      <video src="a.mp4"></video>
      ```
      ``` HTML
      <video controls>
              <source src="a.mp4">
              <source src="a.ogg">
              <p>浏览器不支持video视频功能</p>
      </video>
      ```
    3. video标签属性
        * src     -----  视频数据的url
        * poster  -----  视频缩略图
        * preload  ----   自动缓冲 ，旧版firefox中为 autobuffer
        * autoplay ---   自动播放
        * loop     ----   循环播放
        * controls ----  控制条
        * width    ------   宽
        * height   ------ 高
     4. video的方法
        * play() --- 播放处理
        * pause()  ---  暂停处理
        * load() ---  导入视频
        * canPlayType()  ---  判断媒体，返回空字符串不可播放，返回maybe则可播放
     5. video 主要属性
        * currentTime ---  当前播放时间
        * duration   ----   视频时长
        * paused     ----是否暂停，暂停为true
        * ended      ---- 是否播放到最后，是为true
        * playbackRate ---  播放速度，2则为2倍,负数时，逆向播放

      6. video 事件
        * timeupdate
      7. 全屏视频效果
        * 居中：
            1. 定宽,margin:0 auto;
            2. width:100%; text-align:center;
            3. position:absolute; left:50%;width:300px;margin-left:-150px;
