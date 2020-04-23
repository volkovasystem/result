"use strict";

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
*/

const Result = (
	function Result( result ){
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

		if(
				(
						(
										this
							instanceof	Result
						)
					===	true
				)
		){
			if(
					(
							typeof
							result
						!=	"undefined"
					)
			){
				Object
				.defineProperty(
					this,

					"$resultData",

					{
						"value": (
							(
								new WeakMap( )
							)
							.set(
								this,

								(
									Object
									.freeze(
										{
											"result": result
										}
									)
								)
							)
						),

						"configurable": false,
						"enumerable": false,
						"writable": false
					}
				);
			}
			else{
				Object
				.defineProperty(
					this,

					"$resultData",

					{
						"value": (
							(
								new WeakMap( )
							)
							.set(
								this,

								{ }
							)
						),

						"configurable": false,
						"enumerable": false,
						"writable": false
					}
				);
			}
		}
		else{
			if(
					(
							(
											result
								instanceof	Result
							)
						===	true
					)
			){
				return	result;
			}
			else{
				return	(
							new	Result(
									result
								)
						);
			}
		}
	}
);

Object
.defineProperty(
	Result,

	"namespace",

	{
		"value": "Result",

		"configurable": false,
		"enumerable": true,
		"writable": false
	}
);

Object
.defineProperty(
	Result,

	"type",

	{
		"value": (
			Object
			.freeze(
				[
					"class",
					"object",
					"result"
				]
			)
		),

		"configurable": false,
		"enumerable": true,
		"writable": false
	}
);

Object
.defineProperty(
	Result,

	"checkResult",

	{
		"value": (
			function checkResult( entity ){
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

				return	(
								(
										typeof
										entity
									==	"object"
								)

							&&	(
										(
												(
																entity
													instanceof	Result
												)
											===	true
										)

									||	(
												(
														typeof
														(
															(
																entity
																.constructor
															)
															.namespace
														)
													==	"string"
												)

											&&	(
														(
															(
																entity
																.constructor
																.namespace
															)
															.length
														)
													>	0
												)

											&&	(
														(
															(
																entity
																.constructor
															)
															.namespace
														)
													===	(
															Result
															.namespace
														)
												)
										)

									||	(
												(
														typeof
														(
															entity
															.$type
														)
													==	"object"
												)

											&&	(
														entity
														.$type
													!==	null
												)

											&&	(
														Array
														.isArray(
															entity
															.$type
														)
													===	true
												)

											&&	(
														(
															(
																Result
																.type
															)
															.every(
																( type ) => (
																	(
																		entity
																		.$type
																	)
																	.includes(
																		type
																	)
																)
															)
														)
													===	true
												)
										)
								)
						);
			}
		),

		"configurable": false,
		"enumerable": false,
		"writable": false
	}
);

Result.prototype.setResult = (
	function setResult( result ){
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

		if(
				(
						typeof
						(
							this
							.getScope( )
						)
						.result
					!=	"undefined"
				)
		){
			throw	(
						new	Error(
								[
									"#set-result-done;",

									"cannot set result",
									"set result done",

									`@result: ${ this.getScope( ).result }`
								]
							)
					);
		}

		if(
				(
						typeof
						result
					==	"undefined"
				)
		){
			throw	(
						new	Error(
								[
									"#invalid-set-result",

									"cannot set result",
									"invalid result",

									`@result: ${ result }`
								]
							)
					);
		}

		this
		.setScope(
			Object
			.freeze(
				{
					"result": (
						result
					)
				}
			)
		);

		return	this;
	}
);

Result.prototype.getResult = (
	function getResult( ){
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

		return	(
					this
					.getScope( )
					.result
				);
	}
);

Result.prototype.checkResult = (
	function checkResult( resultQuery ){
		/*;
			@procedure-definition:
			@end-procedure-definition

			@parameter-definition:
				{
					"resultQuery": "
						[
							@type:
							@end-type

							<@optional;>
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

		const result = (
			this
			.getResult( )
		);

	}
);

Result.prototype.setScope = (
	function setScope( scopeData ){
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

		if(
				(
						typeof
						scopeData
					==	"object"
				)

			&&	(
						scopeData
					!==	null
				)
		){
			(
				this
				.$resultData
			)
			.set(
				this,
				scopeData
			);
		}
		else{
			throw	(
						new	Error(
								[
									"#invalid-set-result-scope-data;",

									"cannot set result scope data",
									"invalid scope data",

									`@scope-data: ${ scopeData }`
								]
							)
					);
		}

		return	this;
	}
);

Result.prototype.getScope = (
	function getScope( ){
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

		return	(
					(
						this
						.$resultData
					)
					.get(
						this
					)
				);
	}
);

Result.prototype.valueOf = (
	function valueOf( ){
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

		return	(
					Object
					.freeze(
						Object
						.assign(
							{ },

							(
								this
								.getScope( )
							)
						)
					)
				);
	}
);

Result.prototype.toString = (
	function toString( ){
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

		if(
				(
						typeof
						require
					==	"function"
				)
		){
			const util = require( "util" );

			if(
					(
							typeof
							(
								util
								.inspect
							)
						==	"function"
					)
			){
				return	(
							util
							.inspect(
								this
								.getScope( )
							)
						);
			}
		}

		return	(
					JSON
					.stringify(
						this
						.getScope( )
					)
				);
	}
);

module.exports = Result;
