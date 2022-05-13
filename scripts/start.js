const rewire = require('rewire');
const webpack = require('webpack');
const defaults = rewire('react-scripts/scripts/start.js');
const config = defaults.__get__('config');

// override Buffer and Polyfill removals in webpack 5.
config.plugins.push(new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }))

config.resolve.fallback = {
	"path": false,
	"crypto": false,
	"stream": require.resolve("stream-browserify"),
	"buffer": require.resolve("buffer"),
};
