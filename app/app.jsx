var React = require('react');
var ReactDom = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');

ReactDom.render(
<Router history={hashHistory}>
<Route path="/" component={Main}>
</Route>
>/Router>,
document.getElementById('app')
);
