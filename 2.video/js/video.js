var vObj,tObj,cmdObj,telopData = [];

window.addEventListener('load',function(){
	
	
	vObj   = document.getElementById('myVideo');
	tObj   = document.getElementById('telop');
	cmdObj = document.getElementById('telopCommand');

	
	var telopData = [
	{
		'start':0.1,
		'end':1,
		'text':'妹子,你看哥帅不?(^o^)'
	},
	{
		
		'start':1.5,
		'end':3,
		'text':'‘(*>﹏<*)′又在吹牛X！'	
	},
	{
		
		'start':3.5,
		'end':4.8,
		'text':'哪有我帅'
	},
	{
		
		'start':5,
		'end':5.6,
		'text':'回去改稿'	
	},

	{
		
		'start':6.1,
		'end':13,
		'text':'....>o<....又得加班了'
	}
];

console.log(telopData[0].start);
	
cmdObj.value = JSON.stringify(telopData);
	//视频的timeupdate事件
	//
	vObj.addEventListener('timeupdate', function(){
		var nowTime = vObj.currentTime;

			for(var i = 0;i < telopData.length;i++){

				// if(telopData[i].start <= nowTime && telopData[i].end >= nowTime){
				if(nowTime >= telopData[i].start && nowTime <= telopData[i].end){
					 tObj.innerHTML = telopData[i].text;
					console.log(telopData[i].text)
					return;
				}
				
			}

			tObj.innerHTML = "";	

		},false);

	//cmdObj中的数据变化时触发，赋值给telopData数组	
	cmdObj.addEventListener('change',function(){

		telopData = eval(cmdObj.value);

	},false);
	
			
},false);