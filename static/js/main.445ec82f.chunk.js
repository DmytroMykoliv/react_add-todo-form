(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{21:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(11),i=a.n(n),s=a(4),r=a(5),o=a(7),c=a(6),l=a(3),d=a(10),u=a(1),m=a.n(u),h=a(9),b=a(2),p=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],j=a(0),g=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={inputTitle:"",selectedName:"",isTitle:!1,isName:!1},e.handleChange=function(t){var a=t.target,n=a.name,i=a.value;"inputTitle"===n&&e.setState(Object(b.a)({},n,i)),"selectedName"===n&&e.setState(Object(b.a)({},n,i))},e.submitTodo=function(t){t.preventDefault();var a=e.state,n=a.inputTitle,i=a.selectedName;if(e.setState((function(){return{isTitle:!n}})),e.setState((function(){return{isName:!i}})),n&&i){var s={title:n,user:p.find((function(e){return e.name===i}))};e.props.addTodo(s),e.setState((function(){return{inputTitle:"",selectedName:"",isTitle:!1,isName:!1}}))}},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:"App__form",noValidate:!0,onSubmit:this.submitTodo,children:[Object(j.jsxs)("label",{htmlFor:"todo",className:"App__label",children:[Object(j.jsx)("input",{className:"form-control",type:"text",id:"todo",name:"inputTitle",placeholder:"add todo",pattern:"[A-Za-z\u0430-\u044f\u0410-\u042f\u0401\u04510-9]+",required:!0,value:this.state.inputTitle,onChange:this.handleChange}),this.state.isTitle&&Object(j.jsx)("p",{className:"alert alert-danger",children:"Please enter the title"})]}),Object(j.jsxs)("label",{htmlFor:"users",className:"App__label",children:[Object(j.jsxs)("select",{className:"form-control",name:"selectedName",id:"users",required:!0,value:this.state.selectedName,onChange:this.handleChange,children:[Object(j.jsx)("option",{value:"",disabled:!0,children:"Choose a user"}),p.map((function(e){return Object(j.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),this.state.isName&&Object(j.jsx)("p",{className:"alert alert-danger",children:"Please choose a user"})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"ADD"})]})}}]),a}(m.a.Component),y=function(e){var t=e.userTodos;return Object(j.jsxs)("table",{className:"table table-dark",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:"Email"})]})}),t&&t.map((function(e){return Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.user.name}),Object(j.jsx)("td",{children:e.title}),Object(j.jsx)("td",{children:e.user.email})]})},e.id)}))]})},f=(a(21),[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}]),O=Object(d.a)(f).map((function(e){return Object(l.a)(Object(l.a)({},e),{},{id:Object(h.uuid)(),user:p.find((function(t){return t.id===e.userId}))})})),x=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={userTodos:O},e.addTodo=function(t){var a=Object(l.a)(Object(l.a)({},t),{},{id:Object(h.uuid)()});e.setState((function(e){return{userTodos:[].concat(Object(d.a)(e.userTodos),[a])}}))},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.userTodos;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Add todo form"}),Object(j.jsx)(g,{addTodo:this.addTodo}),Object(j.jsx)(y,{userTodos:e})]})}}]),a}(m.a.Component);i.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.445ec82f.chunk.js.map