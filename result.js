parcelRequire=function(modules,cache,entry,globalName){var error,previousRequire="function"==typeof parcelRequire&&parcelRequire,nodeRequire="function"==typeof require&&require;function newRequire(name,jumped){if(!cache[name]){if(!modules[name]){var currentRequire="function"==typeof parcelRequire&&parcelRequire;if(!jumped&&currentRequire)return currentRequire(name,!0);if(previousRequire)return previousRequire(name,!0);if(nodeRequire&&"string"==typeof name)return nodeRequire(name);var err=new Error("Cannot find module '"+name+"'");throw err.code="MODULE_NOT_FOUND",err}localRequire.resolve=function resolve(x){return modules[name][1][x]||x},localRequire.cache={};var module=cache[name]=new newRequire.Module(name);modules[name][0].call(module.exports,localRequire,module,module.exports,this)}return cache[name].exports;function localRequire(x){return newRequire(localRequire.resolve(x))}}newRequire.isParcelRequire=!0,newRequire.Module=function Module(moduleName){this.id=moduleName,this.bundle=newRequire,this.exports={}},newRequire.modules=modules,newRequire.cache=cache,newRequire.parent=previousRequire,newRequire.register=function(id,exports){modules[id]=[function(require,module){module.exports=exports},{}]};for(var i=0;i<entry.length;i++)try{newRequire(entry[i])}catch(e){error||(error=e)}if(entry.length){var mainExports=newRequire(entry[entry.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=mainExports:"function"==typeof define&&define.amd?define((function(){return mainExports})):this.Result=mainExports}if(parcelRequire=newRequire,error)throw error;return newRequire}({xPIk:[function(require,module,exports){"use strict";
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
*/function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var RESULT_CONTEXT=Symbol("result-context"),Result=function Result(contextData,providerList){var _this=this,resolveParameterList=function resolveParameterList(parameterList){return parameterList=Array.from(arguments),[Object.assign.apply(Object,_toConsumableArray(parameterList.filter((function(parameter){return"object"==_typeof(parameter)&&null!==parameter&&!0!==Array.isArray(parameter)})).concat([{}]))),parameterList.reduce((function(list,parameter){return"function"==typeof parameter?list.push(parameter):!0===Array.isArray(parameter)&&parameter.forEach((function(provider){"function"==typeof provider&&list.push(provider)})),list}),[])]};if(this instanceof Result==!0){var _resolveParameterList=resolveParameterList.apply(this,Array.from(arguments)),_resolveParameterList2=_slicedToArray(_resolveParameterList,2);return contextData=_resolveParameterList2[0],providerList=_resolveParameterList2[1],"object"==_typeof(contextData)&&null!==contextData?this[RESULT_CONTEXT]=contextData:this[RESULT_CONTEXT]={},providerList.forEach((function(provider){_this.solveResult(provider)})),this}var _resolveParameterList3=resolveParameterList.apply(null,Array.from(arguments)),_resolveParameterList4=_slicedToArray(_resolveParameterList3,2);contextData=_resolveParameterList4[0],providerList=_resolveParameterList4[1];var result=new Result(contextData,providerList),_Proxy$revocable=Proxy.revocable(result.solveResult,{apply:function apply(solveResult,scope,parameterList){return solveResult.apply(result,parameterList)},get:function get(solveResult,property,target){return"revokeSolveResult"===property?revokeSolveResult:result[property]},getPrototypeOf:function getPrototypeOf(target){return Result.prototype}}),solveResult=_Proxy$revocable.proxy,revokeSolveResult=_Proxy$revocable.revoke;return result.revokeSolveResult=revokeSolveResult,{result:result,solveResult:solveResult,revokeSolveResult:revokeSolveResult}},ResultPrototype=Result.prototype=Object.create(Array.prototype);ResultPrototype.getContext=function getContext(){return this[RESULT_CONTEXT]},ResultPrototype.solveResult=function solveResult(provider){var _this2=this;if("function"==typeof provider)return"solve"===provider.name||"data"===provider.name?this.push(provider):this.push((function solve(_ref){var property=_ref.property,value=_ref.value,source=_ref.source,target=_ref.target;return provider({property:property,value:value,source:source,target:target})})),this;if(arguments.length<=0){var source=this.reduce((function(source,provider){return"function"==typeof provider||"data"===provider.name?provider({source:source}):source}),[]);return this.concat([!0!==this.some((function(provider){return"function"==typeof provider&&"solve"===provider.name}))?function solve(_ref2){_ref2.property,_ref2.value;var source=_ref2.source;_ref2.target;return!0===Array.isArray(source)?source.pop():source}:void 0]).reduce((function(target,provider){return"function"==typeof provider&&"solve"===provider.name?provider({source:target,target:_this2.getContext()}):target}),source)}return this.push((function data(_ref3){_ref3.property,_ref3.value;var source=_ref3.source;_ref3.target;return source.push(provider),source})),this},ResultPrototype.cleanResult=function cleanResult(){for(;this.length>0;)this.pop();return this},ResultPrototype.valueOf=function valueOf(){return this.solveResult()},ResultPrototype.toJSON=function toJSON(){return Object.entries(this.valueOf()).reduce((function(source,_ref4){var _ref5=_slicedToArray(_ref4,2),property=_ref5[0],value=_ref5[1];return source[property]=value.toString(),source}),{})},ResultPrototype.toString=function toString(){return JSON.stringify(this.toJSON())},module.exports=Result},{}]},{},["xPIk"]);