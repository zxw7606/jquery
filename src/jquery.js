define( [
	"./core",
	"./selector",
	"./traversing",
	"./callbacks",
	"./deferred",
	"./core/ready",
	"./support",
	"./data",
	"./queue",
	"./queue/delay",
	"./attributes",
	"./event",
	"./event/alias",
	"./manipulation",
	"./manipulation/_evalUrl",
	"./wrap",
	"./css",
	"./css/hiddenVisibleSelectors",
	"./serialize",
	"./ajax",
	"./ajax/xhr",
	"./ajax/script",
	"./ajax/jsonp",
	"./ajax/load",
	"./event/ajax",
	"./effects",
	"./effects/animatedSelector",
	"./offset",
	"./dimensions",
	"./deprecated",
	"./exports/amd"
], function( jQuery ) {

	
// 设置全局的jQuery变量
return ( window.jQuery = window.$ = jQuery );

} );
