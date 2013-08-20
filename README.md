chaozhou.js
===========
A grid javascript liberay.

Usage
-----------
chaozhou.js is personal javascript liberay to build grid on html page. chaozhou.js has no dependecy with other framework, but it has a jQuery plugin, so you can use it in jQuery. If you use other framework than jQuery. You should style you dom manually. chaozhou.js will only caculate style of each block in grid.

How to use(with jQuery)
-----------
Include chaozhou.js and jQuery in your html page.

	<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.js"></script>
	<script type="text/javascript" src="chaozhou-min.js"></script>

Add "row","col","rowspan","colspan" on grid block

 	<div id="grid">
 		<div row="1" col="1" style="background-color:#AAA;"></div>
 		<div row="2" col="1" colSpan="2" style="background-color:#AAA;"></div>
 		<div row="1" col="3" rowSpan="2" style="background-color:#AAA;"></div>
 	</div>

Call grid(option,filter) method on Grid Element

	$('#grid').grid({
			rows:2,
			cols:3,
			rowSp:3,
			colSp:3,
			unit:'%'
				})

How to use(without jQuery)
-----------
Include chaozhou.js and jQuery in your html page.

	<script type="text/javascript" src="chaozhou-min.js"></script>

Declare a grid variable

	var grid = chaozhou.grid.metro({
					rows:2,
					cols:3,
					rowSp:3,
					colSp:3,
					height: 200,
					width:400,
					unit:'%'
				})
			
Add block into grid

	grid.blocks.push(chaozhou.grid.block({
		row:1,
		col:1,
		rowspan:1,
		colspan:1,
	}));

Call layout function on grid and all blocks in grid will attach new members(top, left, width, height,unit)
	
	grid.layout();

Use block's new member to style you elment

	var style = "position:absolute;"
		+"top:"+b.top+b.unit+";"
		+"left:"+b.left+b.unit+";"
		+"width:"+b.width+b.unit+";"
		+"height:"+b.height+b.unit+";";

Main Objects
-----------
grid

	{
			rows:1, //row count
			cols:1, // colunm count
			width:0, // grid width, use to caculate
			height:0, // grid height, use to caculate
			rowSp:0, // row space
			colSp:0, // colunm space
			unit:'px', // unit support 'px' and '%', default is 'px'
			blocks:[] // store blocks in this grid.			
	}

block
	
	{
			row:1, //row position
			col:1, // colunm position
			rowSpan:0, // row span, defualt 1
			colSpan:0, // colunm span, defualt 1
			//After call grid.layout()
			top:0,
			left:0,
			width:0,
			height:0,
			unit:'px' or '%'
	}
						
Function and Option
-----------
chaozhou.grid.metro(option)
	
	option{
			rows:1, //row count
			cols:1, // colunm count
			width:0, // grid width, use to caculate
			height:0, // grid height, use to caculate
			rowSp:0, // row space
			colSp:0, // colunm space
			unit:'px', // unit support 'px' and '%', default is 'px'
		}

chaozhou.grid.block(option)

	option{
			row:1, //row position
			col:1, // colunm position
			rowSpan:0, // row span, defualt 1
			colSpan:0, // colunm span, defualt 1
		}
jQuery.fn.grid(option,filter)
	
	option{
			rows:1, //row count
			cols:1, // colunm count
			width:0, // grid width, can be igore
			height:0, // grid height, can be igore
			rowSp:0, // row space
			colSp:0, // colunm space
			unit:'px', // unit support 'px' and '%', default is 'px'
			
	}
	
	filter: childern to make as blocks. default is 'div'
