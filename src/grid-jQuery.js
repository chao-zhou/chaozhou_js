(function(){
		jQuery.fn.grid = function(opt,filter){
			var _filter = filter || 'div';
			var _opt = chaozhou.copy(opt,{
				width:this.width(),
				height:this.height(),
			},true);
						
			var root = this;
			var grid = chaozhou.grid.metro(_opt);
			
			var divs = root.children('div')
			divs.each(function(){
				var self = $(this);
				grid.blocks.push({
					row:self.attr('row')||1,
					col:self.attr('col')||1,
					rowSpan:self.attr('rowspan')||1,
					colSpan:self.attr('colspan')||1
				})
			});
			grid.layout();
			
			var rootCssPosition = root.css('position');
			if( rootCssPosition != 'absolute' && rootCssPosition != 'relative')
				root.attr('style','position:relative');
				
			for(var i= 0; i< grid.blocks.length;i++){
				var b = grid.blocks[i];
				var subDiv = $(divs[i]);
				var style = "position:absolute;"
						+"top:"+b.top+b.unit+";"
						+"left:"+b.left+b.unit+";"
						+"width:"+b.width+b.unit+";"
						+"height:"+b.height+b.unit+";"
						+subDiv.attr('style');
				subDiv.attr('style',style);
			}
			
			return this;
		};
})();