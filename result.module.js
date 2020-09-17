"use strict";

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
*/

const RESULT_CONTEXT = (
	Symbol( "result-context" )
);

const Result = (
	function Result( contextData, providerList ){
		/*;
			@definition:
				@class:#Result
					@description:
						Result class interface for procedure return.
					@description;
				@class;

				@parameter:#contextData
					@type:
							object
					@type;

					@description:
					@description;

					@optional;
				@parameter;

				@parameter:#providerList
					@type:
							object:as:Array:of:function
					@type;

					@description:
					@description;

					@optional;
				@parameter;

				@result:#result
					@type:
							object:as:Result
					@type;

					@description:
					@description;
				@result;

				@trigger:#trigger
					@type:
							object:as:Error
					@type;

					@description:
					@description;
				@trigger;
			@definition;
		*/

		const resolveParameterList = (
			function resolveParameterList( ){
				const parameterList = (
					Array
					.from(
						(
							arguments
						)
					)
				);

				const contextCache = (
					Object
					.assign(
						...	(
								parameterList
								.filter(
									(
										( parameter ) => (
												(
														typeof
														parameter
													==	"object"
												)

											&&	(
														parameter
													!==	null
												)

											&&	(
														Array
														.isArray(
															(
																parameter
															)
														)
													!==	true
												)
										)
									)
								)
								.concat(
									(
										[
											{ }
										]
									)
								)
							)
					)
				);

				const providerCache = (
					parameterList
					.reduce(
						(
							( list, parameter ) => {
								if(
										(
												typeof
												parameter
											==	"function"
										)
								){
									list
									.push(
										(
											parameter
										)
									);
								}
								else if(
										(
												Array
												.isArray(
													(
														parameter
													)
												)
											===	true
										)
								){
									parameter
									.forEach(
										(
											( provider ) => {
												if(
														(
																typeof
																provider
															==	"function"
														)
												){
													list
													.push(
														(
															provider
														)
													);
												}
											}
										)
									);
								}

								return	(
											list
										);
							}
						),

						(
							[ ]
						)
					)
				);

				return	(
							[
								contextCache,
								providerCache
							]
						);
			}
		);

		if(
				(
						(
										this
							instanceof	Result
						)
					===	true
				)
		){
			(
					[
						contextData,
						providerList
					]
				=	(
						resolveParameterList
						.apply(
							(
								this
							),

							(
								Array
								.from(
									(
										arguments
									)
								)
							)
						)
					)
			);

			if(
					(
							typeof
							contextData
						==	"object"
					)

				&&	(
							contextData
						!==	null
					)
			){
				(
						this[ RESULT_CONTEXT ]
					=	(
							contextData
						)
				);
			}
			else{
				(
						this[ RESULT_CONTEXT ]
					=	(
							{ }
						)
				);
			}

			providerList
			.forEach(
				(
					( provider ) => {
						this
						.solveResult(
							(
								provider
							)
						);
					}
				)
			);

			return	(
						this
					);
		}
		else{
			(
					[
						contextData,
						providerList
					]
				=	(
						resolveParameterList
						.apply(
							(
								null
							),

							(
								Array
								.from(
									(
										arguments
									)
								)
							)
						)
					)
			);

			const result = (
				new	Result(
						(
							contextData
						),

						(
							providerList
						)
					)
			);

			return	(
						{
							"result": (
								result
							),

							"solveResult": (
								result
								.solveResult
								.bind(
									(
										result
									)
								)
							)
						}
					);
		}
	}
);

const ResultPrototype = (
		Result
		.prototype
	=	(
			Object
			.create(
				(
					Array
					.prototype
				)
			)
		)
);

ResultPrototype.getContext = (
	function getContext( ){
		return	(
					this[ RESULT_CONTEXT ]
				);
	}
);

ResultPrototype.solveResult = (
	function solveResult( provider ){
		if(
				(
						typeof
						provider
					==	"function"
				)
		){
			if(
					(
							provider
							.name
						===	"solve"
					)
			){
				this
				.push(
					(
						provider
					)
				);
			}
			else if(
					(
							provider
							.name
						===	"data"
					)
			){
				this
				.push(
					(
						provider
					)
				);
			}
			else{
				this
				.push(
					function solve( { property, value, source, target } ){
						return	(
									provider(
										(
											{
												"property": (
													property
												),

												"value": (
													value
												),

												"source": (
													source
												),

												"target": (
													target
												)
											}
										)
									)
								);
					}
				);
			}

			return	(
						this
					);
		}
		else if(
				(
						arguments
						.length
					<=	0
				)
		){
			const source = (
				this
				.reduce(
					(
						( source, provider ) => (
								(
										(
												typeof
												provider
											==	"function"
										)

									||	(
												provider
												.name
											===	"data"
										)
								)
							?	(
									provider(
										(
											{
												"source": (
													source
												)
											}
										)
									)
								)
							:	(
									source
								)
						)
					),

					(
						[ ]
					)
				)
			);

			return	(
						this
						.concat(
							(
								[
										(
												(
														this
														.some(
															(
																( provider ) => (
																		(
																				typeof
																				provider
																			==	"function"
																		)

																	&&	(
																				provider
																				.name
																			===	"solve"
																		)
																)
															)
														)
													!==	true
												)
										)
									?	(
											function solve( { property, value, source, target } ){
												if(
														(
																Array
																.isArray(
																	(
																		source
																	)
																)
															===	true
														)
												){
													return	(
																source
																.pop( )
															)
												}
												else{
													return	(
																source
															);
												}
											}
										)
									:	(
											undefined
										)
								]
							)
						)
						.reduce(
							(
								( target, provider ) => (
										(
												(
														typeof
														provider
													==	"function"
												)

											&&	(
														provider
														.name
													===	"solve"
												)
										)
									?	(
											provider(
												(
													{
														"source": (
															target
														),

														"target": (
															this
															.getContext( )
														)
													}
												)
											)
										)
									:	(
											target
										)
								)
							),

							(
								source
							)
						)
					);
		}
		else{
			this
			.push(
				function data( { property, value, source, target } ){
					source
					.push(
						(
							provider
						)
					);

					return	(
								source
							);
				}
			);

			return	(
						this
					);
		}
	}
);

ResultPrototype.cleanResult = (
	function cleanResult( ){
		while(
				(
						this
						.length
					>	0
				)
		){
			this
			.pop( )
		}

		return	(
					this
				);
	}
);

ResultPrototype.valueOf = (
	function valueOf( ){
		return	(
					this
					.solveResult( )
				);
	}
);

ResultPrototype.toJSON = (
	function toJSON( ){
		return	(
					this
					.valueOf( )
				);
	}
);

ResultPrototype.toString = (
	function toString( ){
		return	(
					JSON
					.stringify(
						(
							this
							.toJSON( )
						)
					)
				);
	}
);

module.exports = Result;
