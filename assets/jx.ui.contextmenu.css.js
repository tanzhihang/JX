(function(styleText){var d=document,n=d.createElement('style'),s,t;n.type='text/css';if(s=n.styleSheet){s.cssText=styleText;}else{t=d.createTextNode(styleText);n.appendChild(t);}(d.head || d.documentElement).appendChild(n);})(
'.clearfix{ zoom:1; }\
.clearfix:after { content: "."; display: block; height: 0; clear: both; visibility: hidden; }\
.context_menu{ position: absolute; display: none; z-index: 999999; width: 140px; overflow: hidden; }\
.context_menu_iframe{ opacity:0; filter:alpha(opacity = 0); position:absolute; z-index:-1; border-style:none; left:0; top:0; }\
.context_menu_container{ background: #fff; border: 1px solid #B8CBCB; padding: 1px; overflow: hidden; box-shadow: #666 2px 2px 5px; -moz-box-shadow: #666 2px 2px 5px; -webkit-box-shadow: #666 2px 2px 5px; }\
.context_menu_item_list, .context_menu_item_container, .context_menu_flashitem_item{ margin: 0; padding: 0; list-style: none; vertical-align: middle; }\
.context_menu_item_list{ }\
.context_menu_flashitem_item{ position:absolute; top:0px; left:0px; overflow:hidden; }\
.context_menu_item_container{ }\
.documentMode_6 .context_menu_item_container, .documentMode_7 .context_menu_item_container{ width:100%; }\
.context_menu_item{ display: block; padding: 0 5px; color: #000; text-decoration: none; line-height: 24px; height: 25px; overflow: hidden; position: relative; }\
.context_menu_item:hover, .context_menu_item_hover .context_menu_item{ color: #fff; background: #348CCC; text-decoration: none; }\
.context_menu_item_icon{ width: 16px; height: 16px; position: absolute; top: 5px; left: 4px; }\
.context_menu_item_subicon{ width: 16px; height: 16px; position: absolute; top: 5px; right: 5px; background: url(http://qplus1.idqqimg.com/jx/assets/images/subicon.gif) no-repeat; }\
.context_menu_item:hover .context_menu_item_subicon, .context_menu_item_hover .context_menu_item_subicon{ background-position: -140px -458px; }\
.context_menu_item_text{ margin: 0 20px; display: block; }\
.context_menu_separator_container{ font-size: 0; line-height: 0; }\
.context_menu_separator{ background: url(http://qplus1.idqqimg.com/jx/assets/images/context_menu_separator.gif) repeat-x left center; display: block; height: 7px; margin: 0 3px; }\
.context_menu_item_disable .context_menu_item{ color: #999; cursor: default; }\
.context_menu_item_disable .context_menu_item:hover{ color: #999; background: none; }');