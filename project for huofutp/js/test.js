window.onload=function(){
	var Pdiv=document.getElementById("ppt");
	//  获取导航信息
	var Pol=Pdiv.getElementsByTagName("ol")[0];
	var Pli=Pol.getElementsByTagName("li");
	//  获取大图信息
	var Uul=Pdiv.getElementsByTagName("ul")[0];
	var Uli=Uul.getElementsByTagName("li");
	//  获取按钮
	var Onext=document.getElementById("next");
	var Oprev=document.getElementById("prev");
	//  当前停留的地方
	var now_tab=0;
	var now_index=1;
	for(var i=0; i<Pli.length; i++){
		Pli[i].index=i;
		Pli[i].onclick=function(){
			//  当点击的页面不是当前页面
			now_tab=this.index;
			tab();
		}
	}
	function tab(){
		for(var j=0; j<Pli.length; j++){
			Pli[j].className="";
		}
		Pli[now_tab].className="fen";
		Uli[now_tab].style.zIndex=now_index++;
	}
	//  下一个
	Onext.onclick=function(){
		next();
	}
	//  上一个
	Oprev.onclick=function(){
		prev();
	}
	function next(){
		now_tab++;
		if(now_tab==Pli.length){
			now_tab=0;
		}
		tab();
	}
	//  上一个
	function prev(){
		now_tab--;
		if (now_tab==-1){
			now_tab=Pli.length-1;
		};
		tab();
	}
	//  定时器，轮流播放
	var timer=setInterval(next, 2000);
	//  鼠标移入停止播放
	Pdiv.onmouseover=function(){
		clearInterval(timer);
	}
	//  鼠标移除继续播放
	Pdiv.onmouseout=function(){
		timer=setInterval(next, 2000);
	}
	
}