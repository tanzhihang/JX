(function(styleText){var d=document,n=d.createElement('style'),s,t;n.type='text/css';if(s=n.styleSheet){s.cssText=styleText;}else{t=d.createTextNode(styleText);n.appendChild(t);}(d.head || d.documentElement).appendChild(n);})(
'.ui_maskLayer{ cursor:default; display:none; position:absolute; top:0; left:0; height:100%; width:100%; background:black; opacity:0; filter: alpha(opacity = "0"); }\
.ui_maskLayerBody{ height:100%; width:100%; }\
.ui_maskBgIframe{ width:100%; height:100%; position:absolute; z-index:-1; border-style:none; left:0; top:0; opacity:0; filter:alpha(opacity = 0); }\
.ui_halfOpacity{ opacity: 0.5; }\
.ie9_0 .ui_maskLayer, .ie9_0 .ui_maskBgIframe{ filter: none; }');