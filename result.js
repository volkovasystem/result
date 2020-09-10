parcelRequire=function(modules,cache,entry,globalName){var error,previousRequire="function"==typeof parcelRequire&&parcelRequire,nodeRequire="function"==typeof require&&require;function newRequire(name,jumped){if(!cache[name]){if(!modules[name]){var currentRequire="function"==typeof parcelRequire&&parcelRequire;if(!jumped&&currentRequire)return currentRequire(name,!0);if(previousRequire)return previousRequire(name,!0);if(nodeRequire&&"string"==typeof name)return nodeRequire(name);var err=new Error("Cannot find module '"+name+"'");throw err.code="MODULE_NOT_FOUND",err}localRequire.resolve=function(x){return modules[name][1][x]||x},localRequire.cache={};var module=cache[name]=new newRequire.Module(name);modules[name][0].call(module.exports,localRequire,module,module.exports,this)}return cache[name].exports;function localRequire(x){return newRequire(localRequire.resolve(x))}}newRequire.isParcelRequire=!0,newRequire.Module=function(moduleName){this.id=moduleName,this.bundle=newRequire,this.exports={}},newRequire.modules=modules,newRequire.cache=cache,newRequire.parent=previousRequire,newRequire.register=function(id,exports){modules[id]=[function(require,module){module.exports=exports},{}]};for(var i=0;i<entry.length;i++)try{newRequire(entry[i])}catch(e){error||(error=e)}if(entry.length){var mainExports=newRequire(entry[entry.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=mainExports:"function"==typeof define&&define.amd?define((function(){return mainExports})):this.Result=mainExports}if(parcelRequire=newRequire,error)throw error;return newRequire}({xPIk:[function(require,module,exports){"use strict";
/*;
	@license:module:
		MIT License

		Copyright (c) 2020-present Richeve S. Bebedor <richeve.bebedor@gmail.com>

		@license:copyright:
			Richeve S. Bebedor

			<@license:year-range:2020-present;>

			<@license:contact-detail:richeve.bebedor@gmail.com;>
		@license:copyright;

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@license:module;
*/var Result=function Result(providerList){var _this=this,resolveProviderList=function(){return Array.from(arguments).reduce((function(providerList,parameter){return"function"==typeof parameter?providerList.push(parameter):!0===Array.isArray(parameter)&&parameter.forEach((function(provider){"function"==typeof provider&&providerList.push(provider)})),providerList}),[])};if(this instanceof Result==!0)return(providerList=resolveProviderList.apply(null,Array.from(arguments))).forEach((function(provider){_this.solveResult(provider)})),this;var result=new Result(providerList=resolveProviderList.apply(null,Array.from(arguments)));return{result:result,solveResult:result.solveResult.bind(result)}},ResultPrototype=Result.prototype=Object.create(Array.prototype);ResultPrototype.solveResult=function(provider){if("function"==typeof provider)return"solve"===provider.name||"data"===provider.name?this.push(provider):this.push((function(property,value,source,target){return provider(property,value,source,target)})),this;if(arguments.length<=0){var source=this.reduce((function(source,provider){return"function"==typeof provider||"data"===provider.name?provider(void 0,void 0,source,void 0):source}),[]);return this.concat([!0!==this.some((function(provider){return"function"==typeof provider&&"solve"===provider.name}))?function(property,value,source,target){return!0===Array.isArray(source)?source.pop():source}:void 0]).reduce((function(target,provider){return"function"==typeof provider&&"solve"===provider.name?provider(void 0,void 0,target,void 0):target}),source)}return this.push((function(property,value,source,target){return source.push(provider),source})),this},ResultPrototype.cleanResult=function(){for(;this.length>0;)this.pop();return this},ResultPrototype.valueOf=function(){return this.solve()},ResultPrototype.toJSON=function(){return this.valueOf()},ResultPrototype.toString=function(){return JSON.stringify(this.toJSON())},module.exports=Result},{}]},{},["xPIk"]);