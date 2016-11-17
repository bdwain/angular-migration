//pull in every js file under src/*/*.js (no direct children of src those are entry points)
const testsContext = require.context('../../src/', true, /.*\/.*\/.*\.js$/);
testsContext.keys().forEach(testsContext);