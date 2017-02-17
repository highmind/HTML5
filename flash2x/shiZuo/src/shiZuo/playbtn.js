var shiZuo=shiZuo||{};
shiZuo.playbtn=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();

	//按钮按下事件
	s.addEventListener(annie.MouseEvent.MOUSE_DOWN, function(e){
		console.log('按下...');
		s.parent.play()
	});

	s.addEventListener(annie.MouseEvent.MOUSE_UP, function(e){
		console.log('抬起...');
		s.parent.stop();
	});

};
F2xExtend(shiZuo.playbtn,F2xMovieClip);
shiZuo.playbtn.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.s({type:0,data:"AsRMSQlGlFAAnNQAAnMFGlGQFGlFHLAAQHNAAFFFFQFGFGAAHMQAAHNlGFFQlFFGnNAAQnLAAlGlGgArFrEQklEmABGeQgBGgElEkQEmEnGfAAQGfAAEmknQElkkAAmgQAAmeklkmQkmkmmfAAQmfAAkmEmg"},{type:1,gradient:[["#FFFFFF","#CCCCCC"],[0,1]],points:[0.85,-0.05,0,0.85,-0.05,113.13708498984761]},null);
	var _d1=Flash2x.s({type:0,data:"ArELEQklkkAAmgQAAmeElkmQEmkmGeAAQGfAAEmEmQElEmAAGeQAAGgklEkQkmEnmfAAQmeAAkmkngApvpwQkDEDAAFtQAAFuEDECQEDEDFsAAQFuAAECkDQEDkCAAluQAAltkDkDQkCkCluAAQlsAAkDECg"},{type:1,gradient:[["#FFFFFF","#CCCCCC"],[0,1]],points:[-0.85,0.05,0,-0.85,0.05,102.0355085252188]},null);
	var _d2=Flash2x.s({type:0,data:"ApvJwQkDkCAAluQAAltEDkDQEDkCFsAAQFuAAECECQEDEDAAFtQAAFukDECQkCEDluAAQlsAAkDkDg"},{type:1,gradient:[["#FFA39A","#990000"],[0,1]],points:[0.6,-0.05,0,0.6,-0.05,89.69650216145554]},null);
	var _d3=Flash2x.s({type:0,data:"ARYAAQAAHMlGFGQlFFGnNAAQnMAAlGlGQlFlGAAnMQAAnMFFlGQFGlFHMAAQHNAAFFFFQFGFGAAHMg"},null,{type:1,gradient:[["#FFFFFF","#000000"],[0,1]],points:[0,0,0,0,0,113.6],lineWidth:1});
	var _d4=Flash2x.s({type:0,data:"ANzAAQAAFukDECQkCEDluAAQltAAkDkDQkCkCAAluQAAlsECkDQEDkDFtAAQFuAAECEDQEDEDAAFsg"},null,{type:1,gradient:[["#FFFFFF","#000000"],[0,1]],points:[0,0,0,0,0,90.3],lineWidth:1});
	var _d5=Flash2x.s({type:0,data:"Ao/I/QjujvABlQQgBlQDujuQDwjvFPAAQFRAADuDvQDuDuAAFQQAAFQjuDvQjuDvlRAAQlPAAjwjvg"},{type:1,gradient:[["#FFA39A","#990000"],[0,1]],points:[0.6,0,0,0.6,0,82.62543494590513]},null);
	var _d6=Flash2x.s({type:0,data:"ANJAAQAAFcj2D3Qj3D2lcAAQlbAAj3j2Qj2j3AAlcQAAlbD2j2QD3j3FbAAQFcAAD3D3QD2D2AAFbg"},null,{type:1,gradient:[["#FFFFFF","#000000"],[0,1]],points:[0,0,0,0,0,85.95],lineWidth:8.1});
	s.a().b(1).c(_d0,{y:-0.05}).c(_d1,{x:-0.025,y:-0.05}).c(_d2,{y:-0.05}).c(_d3,{y:-0.05}).c(_d4,{y:-0.05}).b(1).c(_d1,{x:-0.025,y:-0.05}).c(_d2,{y:-0.05}).c(_d0,{y:-0.05}).c(_d4,{y:-0.05}).c(_d3,{y:-0.05}).b(1).c(_d1,{x:-0.025,y:-0.05}).c(_d0,{y:-0.05}).c(_d5,{y:-0.05}).c(_d3,{y:-0.05}).c(_d6,{y:-0.05});
	//f2x_auto_created_init_end

};
