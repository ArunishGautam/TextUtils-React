(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),l=n(5),s=n.n(l),r=(n(10),n(2)),o=(n(11),n(4)),i=n.n(o),d=n(0);function b(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],l=n[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(d.jsx)("h1",{children:e.heading}),Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){l(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"grey",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"12",placeholder:"Enter The Text Here"})}),Object(d.jsx)("button",{className:"btn btn-primary mx-3 ",style:{padding:"10px"},onClick:function(){var t=c.toUpperCase();l(t),e.showalert("Converted to Uppercase","success")},children:"Convert Upparcase"}),Object(d.jsx)("button",{className:"btn btn-primary mx-3",style:{padding:"10px"},onClick:function(){var t=c.toLowerCase();l(t),e.showalert("Converted to LowerCase","success")},children:"Convert Lowercase"}),Object(d.jsx)("button",{className:"btn btn-primary mx-3",style:{padding:"10px"},onClick:function(t){l(""),e.showalert("Clear","success")},children:"Clear"}),Object(d.jsx)("button",{className:"btn btn-primary mx-3",style:{padding:"10px"},onClick:function(t){var n=document.getElementById("myBox");n.select(),navigator.clipboard.writeText(n.value),e.showalert("Text Copied","success")},children:"Copy Text"}),Object(d.jsx)("button",{className:"btn btn-primary mx-3",style:{padding:"10px"},onClick:function(t){var n=c.split(/[ ]+/);l(n.join(" ")),e.showalert("Extra Space Removed","success")},children:"Remove Extra Space"})]}),Object(d.jsxs)("div",{className:"container my-4",style:{color:"dark"===e.mode?"white":"black"},children:[Object(d.jsx)("h2",{children:"Your Text Summary"}),Object(d.jsxs)("p",{children:[c.split(" ").length," Words and ",c.length," Characters"]}),Object(d.jsxs)("p",{children:[.008*c.split(" ").length," Minutes read"]}),Object(d.jsx)("h2",{children:"Preview"}),Object(d.jsx)("p",{children:c.length>0?c:"Enter Something in the TextBox to Preview it Here"})]})]})}function h(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2);n[0],n[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navba-".concat(e.mode,"  bg-").concat(e.mode),children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(d.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(d.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(d.jsx)("label",{className:"form-check-label",htmlfor:"flexSwitchCheckDefault",children:"Enable Dark Mode in Grey"})]}),Object(d.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(d.jsx)("input",{className:"form-check-input",onClick:e.toggleMode1,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(d.jsx)("label",{className:"form-check-label",htmlfor:"flexSwitchCheckDefault",children:"Enable Dark Mode in Green"})]})]})]})})})}h.prototype={title:i.a.string.isRequired,aboutText:i.a.string};var u=h;function m(e){return e.alert&&Object(d.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(d.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),":",e.alert.msg]})}var j=function(){var e=Object(a.useState)("light"),t=Object(r.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(null),s=Object(r.a)(l,2),o=s[0],i=s[1],h=function(e,t){i({msg:e,type:t}),setTimeout((function(){i(null)}),1e3)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{title:"TextUtils",aboutText:"About TextUtils",mode:n,toggleMode:function(){"light"===n?(c("dark"),document.body.style.backgroundColor="grey",h("Dark Mode has been Enabled","success"),document.title="TextUtils - Dark Mode Grey",setInterval((function(){document.title="TextUtils is Amazing"}),3e3),setInterval((function(){document.title="Install TextUtils"}),5e3)):(c("light"),document.body.style.backgroundColor="white",h("Light Mode has been Enabled","success"),document.title="TextUtils - Light Mode",setInterval((function(){document.title="TextUtils is Amazing"}),3e3),setInterval((function(){document.title="Install TextUtils"}),5e3))},toggleMode1:function(){"light"===n?(c("dark"),document.body.style.backgroundColor="green",h("Dark Mode has been Enabled in Green","success"),document.title="TextUtils - Dark Mode Green",setInterval((function(){document.title="TextUtils is Amazing"}),3e3),setInterval((function(){document.title="Install TextUtils"}),5e3)):(c("light"),document.body.style.backgroundColor="white",h("Light Mode has been Enabled","success"),document.title="TextUtils - Light Mode",setInterval((function(){document.title="TextUtils is Amazing"}),3e3),setInterval((function(){document.title="Install TextUtils"}),5e3))}}),Object(d.jsx)(m,{alert:o}),Object(d.jsx)("div",{className:"container my-3",children:Object(d.jsx)(b,{showalert:h,heading:"Enter the Text for analyze",mode:n})})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),l(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.96fd0c13.chunk.js.map