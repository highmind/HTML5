//获取设备信息
var browser={
   versions:function(){
       var u = navigator.userAgent, app = navigator.appVersion;
       return {
           webKit: u.indexOf('AppleWebKit') > -1,
           ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
           android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
           weixin: u.indexOf('MicroMessenger') > -1,
           txnews: u.indexOf('qqnews') > -1,
           sinawb: u.indexOf('weibo') > -1,
           mqq   : u.indexOf('QQ') > -1
       };
   }(),

  //  设备浏览器对video的播放能力
  //  tbs = {
  //   "isTBS" : false,  //客户端是否安装有 tbs
  //  "tbsVersion" : TBS[1], //客户端tbs版本
  //   "isRightEvent" : false, // 客户端tbs版本 是不是最新版本
  //   "useH5Play" : false    // 客户端是否 可以使用 x5内核 H5 方式播放
  // };
   playability:function(){
     var ua = window.navigator.userAgent;
     var TBS = ua.match(/TBS\/([\d.]+)/);
     var TBS_V0 = '036849'; // TBS >=036849 支持 x5-video-player-type
     var TBS_V1 = '036900'; // TBS >=036900 正确支持 x5videoenterfullscreen，
     // 036849 <= TBS < 036900 支持的 x5videoxxxx 事件是反的

     var QQB = ua.match(/MQQBrowser\/([\d.]+)/);
     var QQB_V0 = '7.1'; // MQQBrowser >=7.1 支持 x5-video-player-type
     var QQB_V1 = '7.2'; // MQQBrowser >=7.2 正确支持 x5videoenterfullscreen
     // ，7.1 <= TBS < 7.2 支持的 x5videoxxxx 事件是反的
     var tbs = {
       "isTBS" : false,  //客户端是否安装有 tbs
       "tbsVersion" : 0, //客户端tbs版本
       "QQBrowserVersion" : 0, //QQ浏览器版本
       "isRightEvent" : false, // 客户端tbs版本 是不是最新版本
       "useH5Play" : false    // 客户端是否 可以使用 x5内核 H5 方式播放
     };
     if (TBS) {
       tbs.isTBS = true;
       tbs.tbsVersion = TBS[1];
       if(TBS[1] >= TBS_V1){
         tbs.isRightEvent = true;
       }
       if (TBS[1] >= TBS_V0) {
         tbs.useH5Play = true;
       }
     } else if (QQB) {
       tbs.isTBS = true;
       tbs.QQVersion = QQB[1];
       if(QQB[1] >= QQB_V1){
         tbs.isRightEvent = true;
       }
       if(QQB[1] >= QQB_V1){
         tbs.useH5Play = true;
       }
     }
     return tbs;
   }(),

   language:(navigator.browserLanguage || navigator.language).toLowerCase()
};
