const testsContext = require.context('./src/components', true, /\.js$/);
testsContext.keys().forEach(testsContext);