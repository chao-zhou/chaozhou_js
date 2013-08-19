(function(){
	var test = function(obj){
		for(var p in obj){
			if(typeof obj[p] == "function"){
				console.log('>>Test '+obj.name+'.'+p);
				try{
					obj[p].apply(obj);
				}
				catch(e){
					console.log(e.message);
				}
			}
		}
	};
	
	window.test = test;
})();