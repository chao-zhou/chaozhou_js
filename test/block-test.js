(function(){
	var testObj = {
		name:'chaozhou.grid.block',
		
		blockTest:function(){
			var opt = {
				row : 2,
				col : 3,
				rowSpan : 2,
				colSpan : 3,
				unit : '%'
			};
			var opt2 = {row:2};
		
			var block = chaozhou.grid.block(opt);
			
			console.log(block.row == 2);
			console.log(block.col == 3);
			console.log(block.rowSpan == 2);
			console.log(block.colSpan == 3);
			console.log(block.unit == '%');
			
			block = chaozhou.grid.block(opt2);
			
			console.log(block.row == 2);
			console.log(block.col == 1);
			console.log(block.rowSpan == 1);
			console.log(block.colSpan == 1);
			console.log(block.unit == 'px');
			
		}
	}
	
	test(testObj);
})();