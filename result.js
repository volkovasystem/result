!function(global,factory){if("function"==typeof define&&define.amd)define([],factory);else if("undefined"!=typeof exports)factory();else{factory(),global.result={}}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:this,(function(){"use strict";
/*;
  	@module-license:
  		MIT License
  
  		Copyright (c) 2020 Richeve S. Bebedor <richeve.bebedor@gmail.com>
  
  		@copyright:
  			Richeve S. Bebedor
  			<
  				@year:
  					2020
  				@end-year
  			>
  			<
  				@contact:
  					richeve.bebedor@gmail.com
  				@end-contact
  			>
  		@end-copyright
  
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
  	@end-module-license
  */const Result=function Result(result){
/*;
    			@class-procedure-definition:
    			@end-class-procedure-definition
    
    			@parameter-definition:
    				{
    					"result": "
    						[
    							@type:
    									boolean
    								|	function
    								|	object
    								|	number
    								|	string
    								|	symbol
    							@end-type
    						]
    					"
    				}
    			@end-parameter-definition
    
    			@result-definition:
    				{
    					"result": "
    						[
    							@type:
    									object as Result
    							@end-type
    						]
    					"
    				}
    			@end-result-definition
    
    			@static-property-definition:
    				{
    					"namespace": "
    						[
    							@type:
    									string
    
    								<
    									@default-value:
    										Result
    									@end-default-value
    								>
    							@end-type
    
    							<
    								@property-definition:
    								@end-property-definition
    							>
    						]
    					",
    
    					"type": "
    						[
    							@type:
    									object as Array of string
    
    								<
    									@default-value:
    										class
    										object
    										result
    									@end-default-value
    								>
    							@end-type
    
    							<
    								@property-definition:
    								@end-property-definition
    							>
    						]
    					",
    				}
    			@end-static-property-definition
    
    			@static-procedure-definition:
    				{
    					"checkResult": "
    						[
    							@type:
    									function as checkResult
    							@end-type
    
    							<
    								@procedure-definition:
    									Check if object instance of Result class.
    								@end-procedure-definition
    							>
    						]
    					"
    				}
    			@end-static-procedure-definition
    		*/
if(this instanceof Result!=1)return result instanceof Result==1?result:new Result(result);void 0!==result?Object.defineProperty(this,"$resultData",{value:(new WeakMap).set(this,Object.freeze(Object.defineProperty({},"result",{value:result,enumerable:!1}))),configurable:!1,enumerable:!1,writable:!1}):Object.defineProperty(this,"$resultData",{value:(new WeakMap).set(this,{}),configurable:!1,enumerable:!1,writable:!1})};Object.defineProperty(Result,"namespace",{value:"Result",configurable:!1,enumerable:!0,writable:!1}),Object.defineProperty(Result,"type",{value:Object.freeze(["class","object","result"]),configurable:!1,enumerable:!0,writable:!1}),Object.defineProperty(Result,"checkResult",{value:function(entity){
/*;
      					@procedure-definition:
      					@end-procedure-definition
      
      					@parameter-definition:
      						{
      							"entity": "
      								[
      									@type:
      											boolean
      										|	function
      										|	object
      										|	number
      										|	string
      										|	symbol
      										|	undefined
      									@end-type
      
      									<@required;>
      								]
      							"
      						}
      					@end-parameter-definition
      
      					@result-definition:
      						{
      							"result": "
      								[
      									@type:
      											boolean
      									@end-type
      								]
      							"
      						}
      					@end-result-definition
      				*/
return"object"==typeof entity&&(entity instanceof Result==1||"string"==typeof entity.constructor.namespace&&entity.constructor.namespace.length>0&&entity.constructor.namespace===Result.namespace||"object"==typeof entity.$type&&null!==entity.$type&&!0===Array.isArray(entity.$type)&&!0===Result.type.every(type=>entity.$type.includes(type)))},configurable:!1,enumerable:!1,writable:!1}),Result.prototype.setResult=function(result){
/*;
    			@procedure-definition:
    			@end-procedure-definition
    
    			@parameter-definition:
    				{
    					"result":"
    						[
    							@type:
    									boolean
    								|	function
    								|	object
    								|	number
    								|	string
    								|	symbol
    							@end-type
    
    							<@required;>
    						]
    					"
    				}
    			@end-parameter-definition
    
    			@trigger-definition:
    				{
    					"trigger": "
    						[
    							@type:
    									object as Error
    							@end-type
    
    							<@tag: set-result-done;>
    							<@tag: invalid-set-result;>
    						]
    					"
    				}
    			@end-trigger-definition
    
    			@result-definition:
    				{
    					"result": "
    						[
    							@type:
    									object as Result
    							@end-type
    						]
    					"
    				}
    			@end-result-definition
    		*/
if(void 0!==this.getScope().result)throw new Error(["#set-result-done;","cannot set result","set result done","@result: "+this.getScope().result]);if(void 0===result)throw new Error(["#invalid-set-result","cannot set result","invalid result","@result: "+result]);return this.setScope(Object.freeze(Object.defineProperty({},"result",{value:result,enumerable:!1}))),this},Result.prototype.getResult=function(){
/*;
    			@procedure-definition:
    			@end-procedure-definition
    
    			@result-definition:
    				{
    					"result": "
    						[
    							@type:
    									boolean
    								|	function
    								|	object
    								|	number
    								|	string
    								|	symbol
    							@end-type
    						]
    					"
    				}
    			@end-result-definition
    		*/
return this.getScope().result},Result.prototype.checkResult=function(){return void 0!==this.getResult()},Result.prototype.setScope=function(scopeData){
/*;
    			@procedure-definition:
    				Set result data container scope.
    			@end-procedure-definition
    
    			@parameter-definition:
    				{
    					"scopeData": "
    						[
    							@type:
    									object
    							@end-type
    
    							<@required;>
    						]
    					"
    				}
    			@end-parameter-definition
    
    			@trigger-definition:
    				{
    					"trigger": "
    						[
    							@type:
    									object as Error
    							@end-type
    
    							<@tag: invalid-set-result-scope-data;>
    						]
    					"
    				}
    			@end-trigger-definition
    
    			@result-definition:
    				{
    					"result": "
    						[
    							@type:
    									object as Result
    							@end-type
    						]
    					"
    				}
    			@end-result-definition
    		*/
if("object"!=typeof scopeData||null===scopeData)throw new Error(["#invalid-set-result-scope-data;","cannot set result scope data","invalid scope data","@scope-data: "+scopeData]);return this.$resultData.set(this,scopeData),this},Result.prototype.getScope=function(){
/*;
    			@procedure-definition:
    				Get result data container scope.
    			@end-procedure-definition
    
    			@result-definition:
    				{
    					"result": "
    						[
    							@type:
    									object
    							@end-type
    						]
    					"
    				}
    			@end-result-definition
    		*/
return this.$resultData.get(this)},Result.prototype.valueOf=function(){
/*;
    			@procedure-definition:
    			@end-procedure-definition
    
    			@result-definition:
    				{
    					"result": "
    						[
    							@type:
    									object
    							@end-type
    						]
    					"
    				}
    			@end-result-definition
    		*/
return Object.freeze(Object.assign({},this.getScope()))},Result.prototype.toString=function(){
/*;
    			@procedure-definition:
    			@end-procedure-definition
    
    			@result-definition:
    				{
    					"result": "
    						[
    							@type:
    									string
    							@end-type
    						]
    					"
    				}
    			@end-result-definition
    		*/
if("function"==typeof require){const util=require("util");if("function"==typeof util.inspect)return util.inspect(this.getScope())}return JSON.stringify(this.getScope())},module.exports=Result}));