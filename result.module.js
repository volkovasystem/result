"use strict";

const Result = (
	function Result( result ){
		if(
				(
						(
										this
							instanceof	Result
						)
					===	true
				)
		){

		}
		else{
			return	(
						new	Result(
								result
							)
					);
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
															option
															.constructor
															.namespace
														)
													==	"string"
												)

											&&	(
														(
															option
															.constructor
															.namespace
															.length
														)
													>	0
												)

											&&	(
														(
															option
															.constructor
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
															Result
															.type
															.every(
																( type ) => (
																	entity
																	.$type
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

		return this;
	}
);

Result.prototype.getResult = (
	function getResult( ){
		return	(
					this
					.getScope( )
					.result
				);
	}
);

Result.prototype.setScope = (
	function setScope( scopeData ){
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
			this
			.$resultData
			.set(
				this,
				scopeData
			);
		}
		else{
			throw	(
						new	Error(
								[
									"cannot set result scope",
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
		return	(
					this
					.$resultData
					.get(
						this
					)
				);
	}
);

Result.prototype.valueOf = (
	function valueOf( ){
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
			@result-definition:
				{
					"result": "[@type: string]"
				}
			@end-result-definition
		*/
		if(
				typeof
				require
			==	"function"
		){
			const util = require( "util" );

			if(
					typeof
					(
						util
						.inspect
					)
				==	"function"
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
