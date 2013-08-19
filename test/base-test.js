(function(){
	var test = {
		name:'chaozhou.base',
		
		isNullorUndefinedTest:function(){
			console.log(chaozhou.isNullorUndefined(undefined));
			console.log(chaozhou.isNullorUndefined(null));
			console.log(!chaozhou.isNullorUndefined(1));
			console.log(!chaozhou.isNullorUndefined(''));
			console.log(!chaozhou.isNullorUndefined(function(){}));
			console.log(!chaozhou.isNullorUndefined({}));
		},
		
		copyTest:function(){
			var objA = {
				a:1,
				c:3,
				f:function(){}
			};
			
			var objB={
				a:-1,
				b:2,
				f:5
			};
			
			chaozhou.copy(objA,objB);
			
			console.log(objB.a == 1);
			console.log(objB.b == 2);
			console.log(objB.c == undefined);
			console.log(objB.f == objA.f);
			
		},
		
		copyUndefinedTest:function(){
			var objB={
				b:2,
				f:5
			};
			
			chaozhou.copy(undefined,objB);
			
			console.log(objB.b == 2);
			console.log(objB.f == 5);
			
		},
		
		copyAllTest:function(){
			var objA = {
				a:1,
				c:3,
				f:function(){}
			};
			
			var objB={
				a:-1,
				b:2,
				f:5
			};
			
			chaozhou.copy(objA,objB,true);
			
			console.log(objB.a == 1);
			console.log(objB.b == 2);
			console.log(objB.c == 3);
			console.log(objB.f == objA.f);
			
		},
		
		defineTest:function(){
			var name = 'name';
			var name2 = 'name2';
			var func = function(){return 1};
		
			chaozhou.define('/test/objA',{
				name:name,
				func:func
			},{
				Name:name,
				Func:func
			});
			
			chaozhou.define('/test/objA',{
				name2:name2
			},{
				Name2:name2
			});
			
			console.log(chaozhou.test != undefined);
			
			console.log(chaozhou.test.objA != undefined);
			console.log(chaozhou.test.objA.name == name);
			console.log(chaozhou.test.objA.name2 == name2);
			console.log(chaozhou.test.objA.func == func);
			
			console.log(chaozhou.test.objA.prototype.Name == name);
			console.log(chaozhou.test.objA.prototype.Name2 == name2);
			console.log(chaozhou.test.objA.prototype.Func == func);
			
			
			console.log('>>>> Overrride');
			chaozhou.define('/test/objA',{
				name2:name
			});
			
			console.log(chaozhou.test.objA != undefined);
			console.log(chaozhou.test.objA.name == name);
			console.log(chaozhou.test.objA.name2 == name);
			console.log(chaozhou.test.objA.func == func);
			
			console.log(chaozhou.test.objA.prototype.Name == name);
			console.log(chaozhou.test.objA.prototype.Name2 == name2);
			console.log(chaozhou.test.objA.prototype.Func == func);
			
		}
	};

	test(testObj);
})();