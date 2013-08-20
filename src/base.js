(function () {
	var chaozhou = {
		isNullorUndefined:function(value){
			return value == undefined || value == null;
		},
	
		//Copy objA all members' value to objB
		copy:function(objA,objB,copyAll){
			if (this.isNullorUndefined(objA))
				return objB;
		
			for(var prop in objA){
				if(objA[prop] == undefined)
					continue;
				
				if(!copyAll && objB[prop] == undefined)
					continue;
					
				objB[prop] = objA[prop];
			}
			return objB;
		},
		
		namespace:function(root,path){
			var nps = path.split('/');
		
			var obj = root;
			var name = '';
			for(var i = 0;i< nps.length;i++){
				name = nps[i]
				if(name == '')
					continue;
				
				obj[name] = obj[name]||{};
				obj = obj[name];
			}
			return obj;
		},
		
		define:function(path,instanceMembers,staticMembers){		
			var obj = this.namespace(this,path);	
			
			this.copy(instanceMembers,obj,true);
			
			if(staticMembers && this.isNullorUndefined(obj.prototype)){
				obj.prototype={};
			}
			this.copy(staticMembers,obj.prototype,true);
		},
		
		isArray:function(val) {
            return val &&
                typeof(val) === 'object' &&
                typeof(val.length) === 'number' &&
                typeof(val.splice) === 'function' &&
                !(val.propertyIsEnumerable('length'));
		}
	};
	
	window.chaozhou = chaozhou;	
})();