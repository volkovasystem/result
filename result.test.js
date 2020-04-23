"use strict";

const assert = require( "assert" );

const strictAssert = assert.strict;

const Result = require( "./result.js" );

strictAssert
.equal(
	(
					Result( )
		instanceof	Result
	),

	true,

	"Result function call must return an instance of Result"
);
