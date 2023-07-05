const jsdom = require( 'jsdom' );
const path = require( 'path' );
var chai = require( 'chai' );
chai.use( require( 'chai-fs' ) );

// i want to test this
describe( 'This assignment', () => {
  it( 'has been correctly cloned to your local environment', () => {
    chai.assert.isDirectory( './.git', 'no ".git" folder was found within "welcome-completing-assignment". Use "git init" to create one' );
  } )
} )
