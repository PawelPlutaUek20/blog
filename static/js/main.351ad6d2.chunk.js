(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{257:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(11),i=n.n(a),r=n(32),l=n(10),o=n(12),s=n(286),j=n(289),d=n(291),b=n(139),h=n(292),u=n(293),m=n(2),O=Object(s.a)((function(e){return{paper:{padding:e.spacing(2),width:"calc(100% + 16px)"},button:{width:"100%",height:72,textDecoration:"none",textTransform:"none"},container:{height:"calc(100% + 16px)"},buttonContainer:{marginTop:"auto",width:"90%",alignSelf:"center",marginBottom:8}}})),x=function(e){var t=e.user,n=O();return Object(m.jsx)(j.a,{className:n.paper,children:Object(m.jsxs)(d.a,{className:n.container,container:!0,spacing:2,direction:"column",children:[Object(m.jsx)(d.a,{item:!0,children:Object(m.jsx)(b.a,{gutterBottom:!0,children:Object(m.jsx)("b",{children:t.name})})}),Object(m.jsxs)(d.a,{item:!0,children:[Object(m.jsx)(b.a,{children:Object(m.jsx)(h.a,{href:"#",underline:"always",children:t.email})}),Object(m.jsx)(b.a,{children:Object(m.jsx)(h.a,{href:"#",underline:"always",children:t.phone.split(" ")[0]})}),Object(m.jsx)(b.a,{gutterBottom:!0,children:Object(m.jsx)(h.a,{href:"#",underline:"always",children:t.website})})]}),Object(m.jsxs)(d.a,{item:!0,children:[Object(m.jsx)(b.a,{children:t.company.name}),Object(m.jsx)(b.a,{children:t.company.catchPhrase}),Object(m.jsx)(b.a,{gutterBottom:!0,children:Object(m.jsx)("b",{children:t.company.bs})})]}),Object(m.jsx)(d.a,{item:!0,container:!0,className:n.buttonContainer,children:Object(m.jsx)(r.b,{className:n.button,to:"/user/".concat(t.id),children:Object(m.jsx)(u.a,{className:n.button,variant:"outlined",children:Object(m.jsx)(b.a,{children:"Details"})})})})]})})},p=n(294),f=Object(s.a)((function(e){return{container:{marginTop:e.spacing(6),minWidth:350}}})),g=function(e){var t=e.children,n=f();return Object(m.jsx)(p.a,{className:n.container,children:t})},y=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(m.jsx)(g,{children:Object(m.jsx)(d.a,{container:!0,spacing:2,children:n.map((function(e){return Object(m.jsx)(d.a,{item:!0,container:!0,xs:12,sm:6,md:3,children:Object(m.jsx)(x,{user:e})},e.id)}))})})},v=n(19),C=n(295),S=n(127),w=n.n(S),B=n(128),N=n.n(B),k=Object(s.a)((function(e){return{paper:{padding:e.spacing(2)},post:{display:"-webkit-box",boxOrient:"vertical",lineClamp:1,wordBreak:"break-all",overflow:"hidden"},container:{flexWrap:"nowrap"},button:{marginLeft:"auto"}}})),E=function(e){var t=e.post,n=e.handleDelete,c=k(),a=Object(l.f)().userId;return Object(m.jsx)(j.a,{className:c.paper,children:Object(m.jsxs)(d.a,{container:!0,className:c.container,spacing:1,alignItems:"center",children:[Object(m.jsx)(d.a,{item:!0,children:Object(m.jsx)(C.a,{onClick:function(){return n(t.id)},color:"primary",fontSize:"large","aria-label":"delete",children:Object(m.jsx)(w.a,{})})}),Object(m.jsx)(d.a,{className:c.post,item:!0,children:Object(m.jsx)(b.a,{children:t.title})}),Object(m.jsx)(d.a,{item:!0,className:c.button,children:Object(m.jsx)(r.b,{to:"/user/".concat(a,"/").concat(t.id),children:Object(m.jsx)(C.a,{color:"primary",fontSize:"large","aria-label":"next",children:Object(m.jsx)(N.a,{})})})})]})})},T=n(135),I=n.n(T),q=n(129),W=n.n(q),A=Object(s.a)((function(e){return{empty:{width:48},header:{marginBottom:e.spacing(6)}}})),P=function(e){var t=e.user,n=e.link,c=e.children,a=A();return Object(m.jsxs)(d.a,{item:!0,container:!0,justifyContent:"space-between",alignItems:"center",className:a.header,children:[Object(m.jsx)(r.b,{to:n,children:Object(m.jsx)(C.a,{color:"primary",fontSize:"large","aria-label":"back",children:Object(m.jsx)(W.a,{})})}),Object(m.jsx)(b.a,{variant:"h6",children:Object(m.jsx)("b",{children:t.name})}),c||Object(m.jsx)("div",{className:a.empty})]})},z=n(296),D=n(301),J=n(297),V=n(78),F=n(29),H=Object(s.a)((function(e){return{actions:{paddingTop:e.spacing(4)}}})),L=F.a({title:F.b("Enter a title").required("Title is required"),body:F.b("Enter a body").required("Body is required")}),_=function(e){var t=e.handleClose,n=e.handleAdd,c=H(),a=Object(V.a)({initialValues:{title:"",body:""},validationSchema:L,onSubmit:function(e){n(e),t()}});return Object(m.jsxs)("form",{onSubmit:a.handleSubmit,children:[Object(m.jsx)(z.a,{children:Object(m.jsxs)(d.a,{container:!0,spacing:2,direction:"column",children:[Object(m.jsx)(d.a,{item:!0,children:Object(m.jsx)(D.a,{name:"title",value:a.values.title,onChange:a.handleChange,label:"Title",fullWidth:!0,variant:"outlined",error:a.touched.title&&Boolean(a.errors.title),helperText:a.touched.title&&a.errors.title})}),Object(m.jsx)(d.a,{item:!0,children:Object(m.jsx)(D.a,{name:"body",value:a.values.body,onChange:a.handleChange,label:"Body",fullWidth:!0,multiline:!0,rows:4,variant:"outlined",error:a.touched.body&&Boolean(a.errors.body),helperText:a.touched.body&&a.errors.body})})]})}),Object(m.jsxs)(J.a,{className:c.actions,children:[Object(m.jsx)(u.a,{variant:"outlined",onClick:t,children:"Cancel"}),Object(m.jsx)(u.a,{variant:"contained",type:"submit",color:"primary",children:"Save"})]})]})},G=n(303),K=n(298),M=function(e){var t=e.open,n=e.handleClose,c=e.title,a=e.children;return Object(m.jsxs)(G.a,{fullWidth:!0,maxWidth:"sm",open:t,onClose:n,"aria-labelledby":"form-dialog-title",children:[Object(m.jsx)(K.a,{id:"form-dialog-title",children:c}),a]})},Q=function(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),r=Object(o.a)(i,2),s=r[0],j=r[1],b=Object(c.useState)(!1),h=Object(o.a)(b,2),u=h[0],O=h[1],x=Object(l.f)().userId,p=function(){O(!1)},f=function(e){j(s.filter((function(t){return t.id!==e})))};return Object(c.useEffect)((function(){Promise.all([fetch("https://jsonplaceholder.typicode.com/users/".concat(x)),fetch("https://jsonplaceholder.typicode.com/users/".concat(x,"/posts"))]).then((function(e){var t=Object(o.a)(e,2),n=t[0],c=t[1];return Promise.all([n.json(),c.json()])})).then((function(e){var t=Object(o.a)(e,2),n=t[0],c=t[1];a(n),j(c)}))}),[x]),Object(m.jsx)(g,{children:Object(m.jsxs)(d.a,{container:!0,spacing:2,children:[Object(m.jsx)(P,{user:n,link:"/",children:Object(m.jsx)(C.a,{onClick:function(){O(!0)},color:"primary",fontSize:"large","aria-label":"add",children:Object(m.jsx)(I.a,{})})}),Object(m.jsx)(d.a,{item:!0,container:!0,spacing:2,direction:"column",children:s.map((function(e){return Object(m.jsx)(d.a,{item:!0,xs:12,children:Object(m.jsx)(E,{post:e,handleDelete:f})},e.id)}))}),Object(m.jsx)(M,{open:u,handleClose:p,title:"Add post",children:Object(m.jsx)(_,{handleClose:p,handleAdd:function(e){e.id=91+s.length,j((function(t){return[].concat(Object(v.a)(t),[e])}))}})})]})})},R=Object(s.a)((function(e){return{paper:{padding:e.spacing(2)}}})),U=function(e){var t=e.comment,n=R();return Object(m.jsx)(j.a,{className:n.paper,children:Object(m.jsxs)(d.a,{container:!0,spacing:2,children:[Object(m.jsxs)(d.a,{item:!0,container:!0,justifyContent:"space-between",children:[Object(m.jsx)(b.a,{children:Object(m.jsx)("b",{children:t.name})}),Object(m.jsx)(h.a,{href:"#/",underline:"always",children:Object(m.jsx)(b.a,{children:t.email})})]}),Object(m.jsx)(d.a,{item:!0,children:Object(m.jsx)(b.a,{children:t.body})})]})})},X=Object(s.a)((function(e){return{actions:{paddingTop:e.spacing(4)}}})),Y=F.a({name:F.b("Enter your name").required("Name is required"),email:F.b("Enter your email").email("Enter a valid email").required("Email is required"),body:F.b("Enter a body").required("Body is required")}),Z=function(e){var t=e.handleAdd,n=e.handleClose,c=X(),a=Object(V.a)({initialValues:{name:"",email:"",body:""},validationSchema:Y,onSubmit:function(e){t(e),n()}});return Object(m.jsxs)("form",{onSubmit:a.handleSubmit,children:[Object(m.jsx)(z.a,{children:Object(m.jsxs)(d.a,{container:!0,spacing:2,direction:"column",children:[Object(m.jsx)(d.a,{item:!0,children:Object(m.jsx)(D.a,{name:"name",value:a.values.name,onChange:a.handleChange,label:"Name",fullWidth:!0,variant:"outlined",error:a.touched.name&&Boolean(a.errors.name),helperText:a.touched.name&&a.errors.name})}),Object(m.jsx)(d.a,{item:!0,children:Object(m.jsx)(D.a,{name:"email",value:a.values.email,onChange:a.handleChange,label:"Email",type:"email",fullWidth:!0,variant:"outlined",error:a.touched.email&&Boolean(a.errors.email),helperText:a.touched.email&&a.errors.email})}),Object(m.jsx)(d.a,{item:!0,children:Object(m.jsx)(D.a,{name:"body",value:a.values.body,onChange:a.handleChange,label:"Body",fullWidth:!0,multiline:!0,rows:4,variant:"outlined",error:a.touched.body&&Boolean(a.errors.body),helperText:a.touched.body&&a.errors.body})})]})}),Object(m.jsxs)(J.a,{className:c.actions,children:[Object(m.jsx)(u.a,{variant:"outlined",onClick:n,children:"Cancel"}),Object(m.jsx)(u.a,{variant:"contained",color:"primary",type:"submit",children:"Save"})]})]})},$=function(e){var t=e.comments,n=e.setComments,a=Object(c.useState)(!1),i=Object(o.a)(a,2),r=i[0],l=i[1],s=Object(c.useState)(!1),j=Object(o.a)(s,2),u=j[0],O=j[1],x=function(){O(!1)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(d.a,{item:!0,container:!0,justifyContent:"space-between",children:[Object(m.jsx)(h.a,{onClick:function(){return l(!r)},href:"#/",underline:"always",children:r?Object(m.jsx)(b.a,{children:"Hide commments"}):Object(m.jsx)(b.a,{children:"Show comments"})}),r?Object(m.jsx)(h.a,{href:"#/",onClick:function(){O(!0)},underline:"always",children:Object(m.jsx)(b.a,{children:"Add comment"})}):null]}),r?Object(m.jsx)(d.a,{item:!0,container:!0,spacing:2,direction:"column",children:t.map((function(e){return Object(m.jsx)(d.a,{item:!0,xs:12,children:Object(m.jsx)(U,{comment:e})},e.id)}))}):null,Object(m.jsx)(M,{open:u,handleClose:x,title:"Add comment",children:Object(m.jsx)(Z,{handleAdd:function(e){e.id=496+t.length,n((function(t){return[].concat(Object(v.a)(t),[e])}))},handleClose:x})})]})},ee=function(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)({}),r=Object(o.a)(i,2),s=r[0],j=r[1],h=Object(c.useState)([]),u=Object(o.a)(h,2),O=u[0],x=u[1],p=Object(l.f)(),f=p.userId,y=p.postId;return Object(c.useEffect)((function(){Promise.all([fetch("https://jsonplaceholder.typicode.com/users/".concat(f)),fetch("https://jsonplaceholder.typicode.com/posts?userId=".concat(f,"&id=").concat(y,"&_embed=comments"))]).then((function(e){var t=Object(o.a)(e,2),n=t[0],c=t[1];return Promise.all([n.json(),c.json()])})).then((function(e){var t=Object(o.a)(e,2),n=t[0],c=Object(o.a)(t[1],1)[0];a(n),j(c),x((null===c||void 0===c?void 0:c.comments)||[])}))}),[f,y]),Object(m.jsx)(g,{children:Object(m.jsxs)(d.a,{container:!0,spacing:2,children:[Object(m.jsx)(P,{user:n,link:"/user/".concat(n.id)}),Object(m.jsx)(d.a,{item:!0,children:Object(m.jsx)(b.a,{gutterBottom:!0,variant:"h5",children:Object(m.jsx)("b",{children:null===s||void 0===s?void 0:s.title})})}),Object(m.jsx)(d.a,{item:!0,children:Object(m.jsx)(b.a,{gutterBottom:!0,children:null===s||void 0===s?void 0:s.body})}),Object(m.jsx)($,{setComments:x,comments:O})]})})},te=function(){return Object(m.jsx)(r.a,{basename:"/blog",children:Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{path:"/",exact:!0,component:y}),Object(m.jsx)(l.a,{path:"/user/:userId",exact:!0,component:Q}),Object(m.jsx)(l.a,{path:"/user/:userId/:postId",exact:!0,component:ee})]})})},ne=n(136),ce=n(299),ae=n(300),ie=Object(ne.a)({palette:{type:"light"}});i.a.render(Object(m.jsxs)(ce.a,{theme:ie,children:[Object(m.jsx)(ae.a,{}),Object(m.jsx)(te,{})]}),document.getElementById("root"))}},[[257,1,2]]]);
//# sourceMappingURL=main.351ad6d2.chunk.js.map