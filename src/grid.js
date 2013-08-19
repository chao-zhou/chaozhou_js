(function(){

	var block = chaozhou.block.create();
	
	function MetroGrid(){
		this.width = 0;
		this.height = 0;
		this.rows = 0;
		this.cols = 0;
		this.offset = 0;
		this.padding = 0;
		this.blocks = new Array();
	};
	
	MetroGrid.prototype.addBlock=function(obj){
		var bk = window.chaozhou.grid.block
	};
	
	
	var grid = function(obj){
		var grid = new MetroGrid();
		chaozhou.copy(obj,grid);
	}
	
		
	MetroGrid.prototype.style = function(){
		var rowOffsets = this._rows -1;
		var colOffsets = this._cols -1;
		var innerHeight = this._height-this._margin*2;
		var innerWidth= this._width-this._margin*2;
		
		var blockHeight = (innerHeight-(rowOffsets * this._offset))/this._rows;
		var blockWidth = (innerWidth-(colOffsets * this._offset))/this._cols;
		
		for(var index in this._blocks){
			var block = this._blocks[index];
				block.rowspan = block.rowspan||1;
				block.colspan = block.colspan||1;
				
			block.height = blockHeight*block.rowspan+(this._offset)*(block.rowspan-1);
			block.width = blockWidth*block.colspan+(this._offset)*(block.colspan-1);
			block.top = (blockHeight + this._offset)*(block.row - 1)+ this._margin;
			block.left = (blockWidth + this._offset)*(block.col - 1)+ this._margin;
			
			block.style = "position:absolute;"
						+"top:"+block.top+"px;"
						+"left:"+block.left+"px;"
						+"width:"+block.width+"px;"
						+"height:"+block.height+"px;";
		}				
	};
	
	window.Grid = grid;
}());