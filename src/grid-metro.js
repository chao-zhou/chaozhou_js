(function(){
	chaozhou.define('grid',{
		metro:function(opt){
			var _rowSize,_colSize;
		
			var grid = {
					rows:1,
					cols:1,
					width:0,
					height:0,
					rowSp:0,
					colSp:0,
					unit:'px',
					blocks:[]
				};
			
			grid.rowCount = function(){
				if(chaozhou.isArray(this.rows))
					return this.rows.length;
				return this.rows;
			};
			
			grid.colCount = function(){
				if(chaozhou.isArray(this.cols))
					return this.cols.length;
				return this.cols;
			};
			
			grid.getAllSpace = function(type){
					if(type === 'row')
						return this.rowSp * (this.rowCount()-1);
					
					return this.colSp * (this.colCount() -1);
				};
			
			grid.rowSize = function(){
				if(_rowSize)
					return _rowSize;
			
				var total = this.unit=='%' ? 100: this.height;
				_rowSize = (total - this.getAllSpace('row'))/this.rowCount();
				
				return _rowSize;
			}
			
			grid.colSize = function(){
				if(_colSize)
					return _colSize;
			
				var total = this.unit=='%' ? 100: this.width;
				_colSize = (total - this.getAllSpace('col'))/this.colCount();
				
				return _colSize;
			}
			
			grid.getGridArray = function(val,type){
					var ret = [];					
					var space = type == 'row'? this.rowSp: this.colSp;
					var size = type == 'row'? this.rowSize():this.colSize();
					
					for(var i = 0; i< val; i++){
						ret.push(size*i + space*i);
					}
					return ret;
				};
				
			grid.setBlocks = function(){
					for(var i=0;i<this.blocks.length;i++){
						var block = this.blocks[i];
						block.top = this.tops[block.row-1];
						block.left = this.lefts[block.col-1];
						block.height = this.rowSize()* block.rowSpan;
						block.width = this.colSize()*block.colSpan;
						block.unit = this.unit;
					}	
				};
			
			grid.layout = function(){
				//Reset Temp Variables
				_rowSize = _colSize = undefined;
				
				this.tops = this.getGridArray(this.rows,'row'); //store top point
				this.lefts = this.getGridArray(this.cols,'col'); //store left point
					
				this.setBlocks();	
			};
			
			return chaozhou.copy(opt,grid);
		}		
	});

})();