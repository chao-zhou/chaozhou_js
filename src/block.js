(function(){	
	chaozhou.define('grid',{
		block:function(opt){
			var block = {
				row : 1,
				col : 1,
				rowSpan:1,
				colSpan:1,
				unit : 'px',
			};
			
			return chaozhou.copy(opt,block);
		}
	});
	
})();