(function(){
	var checkBlock  = function(block,values){
		console.log(block.row === values.row);
		console.log(block.col === values.col);
		console.log(block.rowSpan === values.rowSpan);
		console.log(block.colSpan == values.colSpan);
		console.log(block.top == values.top);
		console.log(block.left == values.left);
		console.log(block.height === values.height);
		console.log(block.width === values.width);
		console.log(block.unit === values.unit);
	};

	var testObj = {
		name:'grid.metro',
		
		initialTest:function(){
			var blocks = [chaozhou.grid.block(),chaozhou.grid.block()]; 
			var grid = chaozhou.grid.metro({
				rows:2,
				cols:3,
				width:100,
				height:200,
				rowSp:10,
				colSp:5,
				unit:'%',
				blocks:blocks
			});
			
			console.log(grid.rows === 2);
			console.log(grid.cols === 3);
			console.log(grid.width === 100);
			console.log(grid.height === 200);
			console.log(grid.rowSp === 10);
			console.log(grid.colSp === 5);
			console.log(grid.unit === '%');
			console.log(grid.blocks === blocks);
			
		},
		
		layoutPixelTest:function(){
			var grid = chaozhou.grid.metro({
				rows:2,
				cols:3,
				width:350,
				height:250,
				rowSp:50,
				colSp:25,
				unit:'px',
			});
			
			grid.blocks.push(chaozhou.grid.block({row:1,col:1}));
			grid.blocks.push(chaozhou.grid.block({row:2,col:1,colSpan:2}));
			grid.blocks.push(chaozhou.grid.block({row:1,col:3,rowSpan:2}));
			grid.layout();
			
			console.log('>>Block 1');
			checkBlock(grid.blocks[0],{
				row : 1,
				col : 1,
				rowSpan:1,
				colSpan:1,
				top:0,
				left:0,
				width:100,
				height:100,
				unit : 'px'
			});
			
			console.log('>>Block 2');
			checkBlock(grid.blocks[1],{
				row : 2,
				col : 1,
				rowSpan:1,
				colSpan:2,
				top:150,
				left:0,
				width:225,
				height:100,
				unit : 'px'
			});
			
			console.log('>>Block 3');
			checkBlock(grid.blocks[2],{
				row : 1,
				col : 3,
				rowSpan:2,
				colSpan:1,
				top:0,
				left:250,
				width:100,
				height:250,
				unit : 'px'
			});
			
			window.test.grid = grid;
		},
		
		layoutPercentageTest:function(){
			var grid = chaozhou.grid.metro({
				rows:2,
				cols:4,
				rowSp:10,
				colSp:5,
				unit:'%',
			});
			
			grid.blocks.push(chaozhou.grid.block({row:1,col:1}));
			grid.blocks.push(chaozhou.grid.block({row:2,col:1,colSpan:2}));
			grid.blocks.push(chaozhou.grid.block({row:1,col:3,rowSpan:2}));
			grid.layout();
		}
	
	};
	test(testObj);
	
})();