"use strict";(self.webpackChunkdark_warehouse_public_docs=self.webpackChunkdark_warehouse_public_docs||[]).push([[89],{43349:(e,t,r)=>{r.d(t,{a:()=>l});var n=r(96225);function l(e,t){var r=e.append("foreignObject").attr("width","100000"),l=r.append("xhtml:div");l.attr("xmlns","http://www.w3.org/1999/xhtml");var o=t.label;switch(typeof o){case"function":l.insert(o);break;case"object":l.insert((function(){return o}));break;default:l.html(o)}n.bg(l,t.labelStyle),l.style("display","inline-block"),l.style("white-space","nowrap");var a=l.node().getBoundingClientRect();return r.attr("width",a.width).attr("height",a.height),r}},96225:(e,t,r)=>{r.d(t,{$p:()=>d,O1:()=>a,WR:()=>p,bF:()=>o,bg:()=>c});var n=r(37514),l=r(73234);function o(e,t){return!!e.children(t).length}function a(e){return i(e.v)+":"+i(e.w)+":"+i(e.name)}var s=/:/g;function i(e){return e?String(e).replace(s,"\\:"):""}function c(e,t){t&&e.attr("style",t)}function d(e,t,r){t&&e.attr("class",t).attr("class",r+" "+e.attr("class"))}function p(e,t){var r=t.graph();if(n.Z(r)){var o=r.transition;if(l.Z(o))return o(e)}return e}},90089:(e,t,r)=>{r.d(t,{diagram:()=>a});var n=r(94641),l=r(94788),o=r(76365);r(64218),r(45625),r(41644),r(39354),r(27484),r(17967),r(27856);const a={parser:n.p,db:n.f,renderer:l.f,styles:l.a,init:e=>{e.flowchart||(e.flowchart={}),e.flowchart.arrowMarkerAbsolute=e.arrowMarkerAbsolute,(0,o.p)({flowchart:{arrowMarkerAbsolute:e.arrowMarkerAbsolute}}),l.f.setConf(e.flowchart),n.f.clear(),n.f.setGen("gen-2")}}},94788:(e,t,r)=>{r.d(t,{a:()=>h,f:()=>f});var n=r(45625),l=r(64218),o=r(76365),a=r(74852),s=r(43349),i=r(61691),c=r(71610);const d=(e,t)=>i.Z.lang.round(c.Z.parse(e)[t]);var p=r(51117);const b={},w=function(e,t,r,n,l,a){const i=n.select(`[id="${r}"]`);Object.keys(e).forEach((function(r){const n=e[r];let c="default";n.classes.length>0&&(c=n.classes.join(" ")),c+=" flowchart-label";const d=(0,o.k)(n.styles);let p,b=void 0!==n.text?n.text:n.id;if(o.l.info("vertex",n,n.labelType),"markdown"===n.labelType)o.l.info("vertex",n,n.labelType);else if((0,o.m)((0,o.c)().flowchart.htmlLabels)){const e={label:b.replace(/fa[blrs]?:fa-[\w-]+/g,(e=>`<i class='${e.replace(":"," ")}'></i>`))};p=(0,s.a)(i,e).node(),p.parentNode.removeChild(p)}else{const e=l.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",d.labelStyle.replace("color:","fill:"));const t=b.split(o.e.lineBreakRegex);for(const r of t){const t=l.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=r,e.appendChild(t)}p=e}let w=0,u="";switch(n.type){case"round":w=5,u="rect";break;case"square":case"group":default:u="rect";break;case"diamond":u="question";break;case"hexagon":u="hexagon";break;case"odd":case"odd_right":u="rect_left_inv_arrow";break;case"lean_right":u="lean_right";break;case"lean_left":u="lean_left";break;case"trapezoid":u="trapezoid";break;case"inv_trapezoid":u="inv_trapezoid";break;case"circle":u="circle";break;case"ellipse":u="ellipse";break;case"stadium":u="stadium";break;case"subroutine":u="subroutine";break;case"cylinder":u="cylinder";break;case"doublecircle":u="doublecircle"}t.setNode(n.id,{labelStyle:d.labelStyle,shape:u,labelText:b,labelType:n.labelType,rx:w,ry:w,class:c,style:d.style,id:n.id,link:n.link,linkTarget:n.linkTarget,tooltip:a.db.getTooltip(n.id)||"",domId:a.db.lookUpDomId(n.id),haveCallback:n.haveCallback,width:"group"===n.type?500:void 0,dir:n.dir,type:n.type,props:n.props,padding:(0,o.c)().flowchart.padding}),o.l.info("setNode",{labelStyle:d.labelStyle,labelType:n.labelType,shape:u,labelText:b,rx:w,ry:w,class:c,style:d.style,id:n.id,domId:a.db.lookUpDomId(n.id),width:"group"===n.type?500:void 0,type:n.type,dir:n.dir,props:n.props,padding:(0,o.c)().flowchart.padding})}))},u=function(e,t,r){o.l.info("abc78 edges = ",e);let n,a,s=0,i={};if(void 0!==e.defaultStyle){const t=(0,o.k)(e.defaultStyle);n=t.style,a=t.labelStyle}e.forEach((function(r){s++;const c="L-"+r.start+"-"+r.end;void 0===i[c]?(i[c]=0,o.l.info("abc78 new entry",c,i[c])):(i[c]++,o.l.info("abc78 new entry",c,i[c]));let d=c+"-"+i[c];o.l.info("abc78 new link id to be used is",c,d,i[c]);const p="LS-"+r.start,w="LE-"+r.end,u={style:"",labelStyle:""};switch(u.minlen=r.length||1,"arrow_open"===r.type?u.arrowhead="none":u.arrowhead="normal",u.arrowTypeStart="arrow_open",u.arrowTypeEnd="arrow_open",r.type){case"double_arrow_cross":u.arrowTypeStart="arrow_cross";case"arrow_cross":u.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":u.arrowTypeStart="arrow_point";case"arrow_point":u.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":u.arrowTypeStart="arrow_circle";case"arrow_circle":u.arrowTypeEnd="arrow_circle"}let f="",h="";switch(r.stroke){case"normal":f="fill:none;",void 0!==n&&(f=n),void 0!==a&&(h=a),u.thickness="normal",u.pattern="solid";break;case"dotted":u.thickness="normal",u.pattern="dotted",u.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":u.thickness="thick",u.pattern="solid",u.style="stroke-width: 3.5px;fill:none;";break;case"invisible":u.thickness="invisible",u.pattern="solid",u.style="stroke-width: 0;fill:none;"}if(void 0!==r.style){const e=(0,o.k)(r.style);f=e.style,h=e.labelStyle}u.style=u.style+=f,u.labelStyle=u.labelStyle+=h,void 0!==r.interpolate?u.curve=(0,o.n)(r.interpolate,l.c_6):void 0!==e.defaultInterpolate?u.curve=(0,o.n)(e.defaultInterpolate,l.c_6):u.curve=(0,o.n)(b.curve,l.c_6),void 0===r.text?void 0!==r.style&&(u.arrowheadStyle="fill: #333"):(u.arrowheadStyle="fill: #333",u.labelpos="c"),u.labelType=r.labelType,u.label=r.text.replace(o.e.lineBreakRegex,"\n"),void 0===r.style&&(u.style=u.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),u.labelStyle=u.labelStyle.replace("color:","fill:"),u.id=d,u.classes="flowchart-link "+p+" "+w,t.setEdge(r.start,r.end,u,s)}))},f={setConf:function(e){const t=Object.keys(e);for(const r of t)b[r]=e[r]},addVertices:w,addEdges:u,getClasses:function(e,t){return t.db.getClasses()},draw:async function(e,t,r,s){o.l.info("Drawing flowchart");let i=s.db.getDirection();void 0===i&&(i="TD");const{securityLevel:c,flowchart:d}=(0,o.c)(),p=d.nodeSpacing||50,b=d.rankSpacing||50;let f;"sandbox"===c&&(f=(0,l.Ys)("#i"+t));const h="sandbox"===c?(0,l.Ys)(f.nodes()[0].contentDocument.body):(0,l.Ys)("body"),g="sandbox"===c?f.nodes()[0].contentDocument:document,y=new n.k({multigraph:!0,compound:!0}).setGraph({rankdir:i,nodesep:p,ranksep:b,marginx:0,marginy:0}).setDefaultEdgeLabel((function(){return{}}));let k;const x=s.db.getSubGraphs();o.l.info("Subgraphs - ",x);for(let n=x.length-1;n>=0;n--)k=x[n],o.l.info("Subgraph - ",k),s.db.addVertex(k.id,{text:k.title,type:k.labelType},"group",void 0,k.classes,k.dir);const v=s.db.getVertices(),m=s.db.getEdges();o.l.info("Edges",m);let S=0;for(S=x.length-1;S>=0;S--){k=x[S],(0,l.td_)("cluster").append("text");for(let e=0;e<k.nodes.length;e++)o.l.info("Setting up subgraphs",k.nodes[e],k.id),y.setParent(k.nodes[e],k.id)}w(v,y,t,h,g,s),u(m,y);const _=h.select(`[id="${t}"]`),T=h.select("#"+t+" g");if(await(0,a.r)(T,y,["point","circle","cross"],"flowchart",t),o.u.insertTitle(_,"flowchartTitleText",d.titleTopMargin,s.db.getDiagramTitle()),(0,o.o)(y,_,d.diagramPadding,d.useMaxWidth),s.db.indexNodes("subGraph"+S),!d.htmlLabels){const e=g.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of e){const e=t.getBBox(),r=g.createElementNS("http://www.w3.org/2000/svg","rect");r.setAttribute("rx",0),r.setAttribute("ry",0),r.setAttribute("width",e.width),r.setAttribute("height",e.height),t.insertBefore(r,t.firstChild)}}Object.keys(v).forEach((function(e){const r=v[e];if(r.link){const n=(0,l.Ys)("#"+t+' [id="'+e+'"]');if(n){const e=g.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",r.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",r.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===c?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):r.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",r.linkTarget);const t=n.insert((function(){return e}),":first-child"),l=n.select(".label-container");l&&t.append((function(){return l.node()}));const o=n.select(".label");o&&t.append((function(){return o.node()}))}}}))}},h=e=>`.label {\n    font-family: ${e.fontFamily};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n  .cluster-label text {\n    fill: ${e.titleColor};\n  }\n  .cluster-label span,p {\n    color: ${e.titleColor};\n  }\n\n  .label text,span,p {\n    fill: ${e.nodeTextColor||e.textColor};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.mainBkg};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n  // .flowchart-label .text-outer-tspan {\n  //   text-anchor: middle;\n  // }\n  // .flowchart-label .text-inner-tspan {\n  //   text-anchor: start;\n  // }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${e.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${e.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${e.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${e.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n      background-color: ${e.edgeLabelBackground};\n      fill: ${e.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  /* For html labels only */\n  .labelBkg {\n    background-color: ${((e,t)=>{const r=d,n=r(e,"r"),l=r(e,"g"),o=r(e,"b");return p.Z(n,l,o,t)})(e.edgeLabelBackground,.5)};\n    // background-color: \n  }\n\n  .cluster rect {\n    fill: ${e.clusterBkg};\n    stroke: ${e.clusterBorder};\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${e.titleColor};\n  }\n\n  .cluster span,p {\n    color: ${e.titleColor};\n  }\n  /* .cluster div {\n    color: ${e.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${e.fontFamily};\n    font-size: 12px;\n    background: ${e.tertiaryColor};\n    border: 1px solid ${e.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${e.textColor};\n  }\n`}}]);