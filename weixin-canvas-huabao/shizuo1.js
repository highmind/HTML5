(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 750,
	height: 1206,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/_1.jpg", id:"_1"},
		{src:"images/_2.jpg", id:"_2"},
		{src:"images/_3.jpg", id:"_3"},
		{src:"images/_4.jpg", id:"_4"},
		{src:"images/_5.jpg", id:"_5"},
		{src:"images/_6.jpg", id:"_6"},
		{src:"images/_7.jpg", id:"_7"},
		{src:"images/last_layer.jpg", id: "last_layer"}
	]
};



// symbols:



(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1875,3015);


(lib._3 = function() {
	this.initialize(img._3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1875,3015);


(lib._4 = function() {
	this.initialize(img._4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1875,3015);


(lib._5 = function() {
	this.initialize(img._5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1875,3015);


(lib._6 = function() {
	this.initialize(img._6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1875,3015);


(lib._7 = function() {
	this.initialize(img._7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1875,3015);


(lib.box_7 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._7();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1875,3015);


(lib.box_6 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1875,3015);


(lib.box_5 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1875,3015);


(lib.box_4 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1875,3015);


(lib.box_3 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1875,3015);


(lib.box_2 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1875,3015);


(lib.box_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


// stage content:
(lib.ShiZuo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 在此帧处停止
		时间轴将在插入此代码的帧处停止/暂停。
		也可用于停止/暂停影片剪辑的时间轴。
		*/

		this.stop();

		var play = document.getElementById('play');
		play.addEventListener("touchstart", fl_mousedownHandler_2.bind(this), false);

		function fl_mousedownHandler_2() {
			console.log('按下')
			this.play();
		}

		play.addEventListener("touchend", fl_mouseupHandler_2.bind(this), false);

		function fl_mouseupHandler_2() {
      console.log('抬起')
			this.stop();
		}

		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。

		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
	}

	this.frame_452 = function() {
		this.stop(); //最后一帧，停止

		var lastLayer = document.getElementById('layer2');
		var goBack = document.getElementById('goBack');
		lastLayer.style.display = 'block'; //最后一帧 显示浮层

		goBack.addEventListener("click", goBackFn.bind(this), false);//再看一遍按钮

		function goBackFn(){
			  this.gotoAndStop(0); // 跳转并停到 第一帧
				setTimeout(function(){ //300ms 以后 覆盖层消失，防止闪屏
					lastLayer.style.display = 'none';
				},300)
		}


	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(452).call(this.frame_452).wait(3));

	// 图层 1
	this.instance = new lib.box_1();
	this.instance.setTransform(375.2,603.1,1,1,0,0,0,375.2,603.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:602.9,scaleX:0.2,scaleY:0.2,x:626.8,y:162.6},74).to({_off:true},1).wait(380));

	// 图层 2
	this.instance_1 = new lib.box_2();
	this.instance_1.setTransform(375.2,603.3,1.986,1.986,0,0,0,1567.1,405.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:1564.7,regY:405.8,scaleX:0.4,scaleY:0.4,x:626.3,y:162.4},74).wait(1).to({regX:937.4,regY:1507.1,x:375.2,y:603.2},0).to({regX:939.8,regY:1505.1,scaleX:0.03,scaleY:0.03,x:345.9,y:525.6},75).to({_off:true},1).wait(304));

	// 图层 3
	this.instance_2 = new lib.box_3();
	this.instance_2.setTransform(375.2,603.4,4.915,4.915,0,0,0,865.3,1315.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75).to({_off:false},0).to({regX:865.6,regY:1315.1,scaleX:0.4,scaleY:0.4,x:345.9,y:525.6},75).wait(1).to({regX:938.8,regY:1509.3,x:375.2,y:603.2},0).to({regX:939.2,regY:1508.7,scaleX:0.06,scaleY:0.06,x:399.2,y:257},73).to({_off:true},1).wait(230));

	// 图层 4
	this.instance_3 = new lib.box_4();
	this.instance_3.setTransform(375.2,603,2.659,2.659,0,0,0,998.1,641.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(151).to({_off:false},0).to({regX:997.6,regY:641.6,scaleX:0.4,scaleY:0.4,x:399.3,y:256.8},73).wait(1).to({regX:937.4,regY:1507.1,x:375.2,y:603.2},0).to({regX:933.4,regY:1504.4,scaleX:0.05,scaleY:0.05,x:202.2,y:414.4},74).to({_off:true},1).wait(155));

	// 图层 5
	this.instance_4 = new lib.box_5();
	this.instance_4.setTransform(375.1,603.2,3.24,3.24,0,0,0,503.4,1029.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(225).to({_off:false},0).to({regX:504.3,regY:1033.3,scaleX:0.4,scaleY:0.4,x:202.2,y:414.3},74).wait(1).to({regX:935.7,regY:1504.6,x:375.2,y:603.2},0).to({regX:945.4,regY:1497.6,scaleX:0.04,scaleY:0.04,x:181.3,y:551.2},74).to({_off:true},1).wait(80));

	// 图层 6
	this.instance_5 = new lib.box_6();
	this.instance_5.setTransform(375,603.3,4.034,4.034,0,0,0,451.8,1376.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(300).to({_off:false},0).to({regX:452.9,regY:1377.3,scaleX:0.4,scaleY:0.4,x:181.3,y:551.2},74).wait(1).to({regX:937.4,regY:1507.1,x:375.2,y:603.2},0).to({regX:936.9,regY:1508.3,scaleX:0.17,scaleY:0.17,x:209.7,y:592.6},74).to({_off:true},1).wait(5));

	// 图层 7
	this.instance_6 = new lib.box_7();
	this.instance_6.setTransform(375,603,0.961,0.961,0,0,0,522.4,1480.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(375).to({_off:false},0).to({regX:522.9,regY:1480.3,scaleX:0.4,scaleY:0.4,x:209.3,y:592.5},74).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2362.1,401.4,3723.8,5987.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
