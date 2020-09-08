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

const Result = (
	function Result( providerList ){
		/*;
			@definition:
				@class:#Result
					@description:
						Result class interface for procedure result.
					@description;
				@class;

				@parameter:#providerList
					@type:
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

		const resolveProviderList = (
			function resolveProviderList( ){
				return	(
							Array
							.from(
								(
									arguments
								)
							)
							.reduce(
								(
									( providerList, parameter ) => {
										if(
												(
														typeof
														parameter
													==	"function"
												)
										){
											providerList
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
															providerList
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
													providerList
												);
									}
								),

								(
									[ ]
								)
							)
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
			providerList = (
				resolveProviderList
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
			);

			providerList
			.forEach(
				(
					( provider ) => {
						this
						.push(
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
			providerList = (
				resolveProviderList
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
			);

			const result = (
				new	Result(
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

							"solve": (
								result
								.solve
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

ResultPrototype.solve = (
	function solve( provider ){
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
					function solve( property, value, source, target ){
						return	(
									provider(
										(
											property
										),

										(
											value
										),

										(
											source
										),

										(
											target
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
											undefined
										),

										(
											undefined
										),

										(
											source
										),

										(
											undefined
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
											function solve( property, value, source, target ){
												if(
														(
																Array
																.isArray(
																	(
																		target
																	)
																)
															===	true
														)
												){
													return	(
																target
																.pop( )
															)
												}
												else{
													return	(
																target
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
											solve(
												(
													undefined
												),

												(
													undefined
												),

												(
													undefined
												),

												(
													target
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
				function data( property, value, source, target ){
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

ResultPrototype.valueOf = (
	function valueOf( ){
		return	(
					this
					.solve( )
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
