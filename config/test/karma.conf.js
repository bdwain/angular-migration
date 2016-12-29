module.exports = config => {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',

    // files available to the browser via karma's HTTP server
    files: [
      '../../node_modules/babel-polyfill/dist/polyfill.min.js',
      '../../node_modules/whatwg-fetch/fetch.js',
      'test-index.js'
    ],

    plugins: [
      'karma-coverage',
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-jasmine-expect-jsx',
      'karma-webpack',
      'karma-phantomjs-launcher',
      'karma-sourcemap-loader',
    ],

    preprocessors: {
      'test-index.js': ['sourcemap', 'webpack']
    },

    coverageReporter: {
      dir: '../../coverage',
      reporters: [
        { type: 'html', subdir: '.' },
      ],
      check: {
        global: {
          statements: 100,
          branches: 100,
          functions: 100,
          lines: 100,
          includes: ['../../src/**/*.js'],
          excludes: ['../../src/*.js']
        }
      },
      watermarks: {
        statements: [100, 100],
        branches: [100, 100],
        functions: [100, 100],
        lines: [100, 100]
      }
    },

    frameworks: ['jasmine', 'jasmine-expect-jsx'],
    reporters: ['jasmine-expect-jsx', 'progress', 'coverage'],
    autoWatch: false,
    singleRun: true,
    browsers: ['PhantomJS'],
    browserNoActivityTimeout: 200000,

    webpack: require('./tests.webpack.js'),

    webpackMiddleware: {
      stats: 'error-only'
    },

    webpackServer: {
      noInfo: true
    }
  });
};
