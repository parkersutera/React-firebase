(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{32:function(e,t,a){e.exports=a(40)},37:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a.n(n),c=a(31),l=a.n(c),i=(a(37),a(28)),u=a(12),s=a(25);a(41),a(42);s.a.initializeApp({apiKey:"AIzaSyD6mUPRmBAo2z1-ILtoL8jT9ga1WCOvVNo",authDomain:"firegram-38f33.firebaseapp.com",projectId:"firegram-38f33",storageBucket:"firegram-38f33.appspot.com",messagingSenderId:"937708434166",appId:"1:937708434166:web:b93f27f1e0682186cc32d7"});var o=s.a.storage(),m=s.a.firestore(),f=s.a.firestore.FieldValue.serverTimestamp,p=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=m.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(i.a)(Object(i.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{docs:r}},d=function(){var e=p("images").docs;return console.log(e),r.a.createElement("div",{className:"img-grid"},e&&e.map((function(e){return r.a.createElement("div",{className:"img-wrap",key:e.id},r.a.createElement("img",{src:e.url,alt:"img alt"}))})))},g=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Firebase Collection"),r.a.createElement("h2",null,"Your Pictures"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))},b=a(1),E=a.n(b),v=a(3),j=function(e){var t=Object(n.useState)(0),a=Object(u.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),i=Object(u.a)(l,2),s=i[0],p=i[1],d=Object(n.useState)(null),g=Object(u.a)(d,2),b=g[0],j=g[1];return Object(n.useEffect)((function(){var t=o.ref(e.name),a=m.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){p(e)}),Object(v.a)(E.a.mark((function e(){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:n=e.sent,r=f(),a.add({url:n,createdAt:r}),j(n);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,url:b,error:s}},O=function(e){var t=e.file,a=e.setFile,c=j(t),l=c.url,i=c.progress;return Object(n.useEffect)((function(){l&&a(null)}),[l,a]),r.a.createElement("div",{className:"progress-bar",style:{width:i+"%"}})},h=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),i=Object(u.a)(l,2),s=i[0],o=i[1],m=["image/png","image/jpeg"];return r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&m.includes(t.type)?(c(t),o(null)):(c(null),o("Please select an image file (png or jpg)"))}}),r.a.createElement("span",null,"+")),r.a.createElement("div",{className:"output"},s&&r.a.createElement("div",{className:"error"},s),a&&r.a.createElement("div",null,a.name),a&&r.a.createElement(O,{file:a,setFile:c})))};var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(h,null),r.a.createElement(d,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.d661c56f.chunk.js.map