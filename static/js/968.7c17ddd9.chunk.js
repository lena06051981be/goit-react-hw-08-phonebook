"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[968],{3968:function(n,e,r){r.r(e),r.d(e,{default:function(){return Y}});var t,o,a,i,s,c,l,d,x,u,p,m=r(2791),h=r(9434),f=r(3634),b=r(168),g=r(8789),v=g.ZP.li(t||(t=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  min-width: 292px;\n  width: 100%;\n  padding: 8px 0px;\n  transition: border-bottom 250ms linear, background-color 250ms linear, color 250ms linear;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.54);\n  :hover {\n    border-bottom: 1px solid #1363df;\n    color: #003380;\n    /* box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.15); */\n    text-shadow: 3px 6px 6px rgba(0, 0, 0, 0.15);\n    :hover > svg {\n      transition: color 250ms linear;\n      color: #1363df;\n    }\n    :hover > div {\n      transition: background-color 250ms linear, color 250ms linear;\n      background-color: #0f7ec9;\n      color: #fafafa;\n    }\n  }\n"]))),Z=g.ZP.button(o||(o=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-left: auto;\n  background: transparent;\n  border: none;\n  cursor: pointer;  \n  /* :hover {\n    transition: color 150ms linear;\n    color: tomato;\n  } */\n  :hover > svg {\n    transition: color 150ms linear;\n    color: tomato;\n  }\n"]))),j=g.ZP.div(a||(a=(0,b.Z)(["\nwidth: 30px;\nheight: 30px;\nborder-radius: 50%;\nbackground-color: #1cb6cd;\n/* #83cdff; */\n /* rgba(179, 255, 252, 0.952); */\n/* #8cfcd1; */\n /* rgba(136, 252, 248, 0.952); */\n/* rgb(100, 237, 207); */\n /* #E6E6E6; */\njustify-content: center;\nalign-items: center;\ndisplay: flex;\nmargin-right: 10px;\n"]))),w=r(5206),y=(r(5462),r(9201)),z=r(184),k=(0,y.Z)((0,z.jsx)("path",{d:"M14.12 10.47 12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"}),"DeleteForeverOutlined"),C=function(n){var e=n.id,r=n.number,t=n.name,o=(0,h.I0)();return(0,z.jsxs)(v,{children:[(0,z.jsxs)(j,{children:[t.charAt(0).toUpperCase()," "]}),(0,z.jsxs)("p",{children:[t,": ",(0,z.jsx)("span",{children:r})]}),(0,z.jsxs)(Z,{type:"button",onClick:function(){o((0,f.GK)(e)),w.Am.error("Contact is removed from List.",{position:"top-right",theme:"dark"})},children:["Del",(0,z.jsx)(k,{sx:{fontSize:30}})]})]})},P=g.ZP.ul(i||(i=(0,b.Z)(["\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 12px;\n"]))),A=function(n){return n.contacts.isLoading},I=function(n){return n.filter},M=function(n){return n.contacts.items},S=function(){var n=(0,h.v9)(M),e=(0,h.v9)(I),r=(0,h.I0)(),t=e.toLowerCase(),o=n.filter((function(n){return n.name.toLowerCase().includes(t)}));return(0,m.useEffect)((function(){r((0,f.yF)())}),[r]),(0,z.jsx)(P,{children:o.map((function(n){var e=n.id,r=n.name,t=n.number;return(0,z.jsx)(C,{id:e,name:r,number:t},e)}))})},L=r(5403),_=r(890),H=r(9784),D=r(4808),E=g.ZP.div(s||(s=(0,b.Z)(["\n  display: flex;\n  align-items: flex-end;\n  min-width: 292px;\n  width: 100%;\n  margin-bottom: 20px;\n  transition: border-bottom 250ms linear;\n    :hover > svg {\n      transition: color 250ms linear;\n      color: #005ae0;\n    }  \n"]))),F=function(){var n=(0,h.v9)(I),e=(0,h.I0)();return(0,z.jsxs)("label",{children:[(0,z.jsx)(_.Z,{variant:"h6",gutterBottom:!0,sx:{width:"292px",mb:0,mt:1,fontFamily:"revert"},children:"Filter"}),(0,z.jsxs)(E,{children:[(0,z.jsx)(L.Z,{sx:{color:"#0f7ec9",mr:1,fontSize:30}}),(0,z.jsx)(H.Z,{variant:"standard",id:"standard-search",label:"Enter request",type:"search",name:"filter",value:n,onChange:function(n){e((0,D.x)(n.currentTarget.value))}})]})]})},V=r(9439),N=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},R=g.ZP.h2(c||(c=(0,b.Z)(["\n  font-family: 'Handlee', cursive;\n  text-align: center;\n"]))),T=(g.ZP.h1(l||(l=(0,b.Z)(["\n    font-size: 35px;\n    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);\n"]))),g.ZP.form(d||(d=(0,b.Z)(["\n    margin: 0 auto;\n    list-style: inside;\n    display: flex;\n    flex-direction: column;\n    max-width: 640px;\n    min-width: 340px;\n    /* width: 355px; */\n    padding: 20px;\n    border: 1px solid black;\n    border: 0.3px solid darkcyan;\n    border-radius: 5px;\n    /* background-color: rgb(100, 237, 207); */\n    color: darkblue;\n    box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.15);\n"]))),g.ZP.label(x||(x=(0,b.Z)(["\n    font-size: 18px;\n    font-weight: 500;\n    margin-bottom: 10px;\n"]))),g.ZP.input(u||(u=(0,b.Z)(["\n    width: 250px;\n    margin-bottom: 10px;\n    padding: 4px;\n    border: 0.3px solid rgb(20, 66, 78);\n    border-radius: 3px;\n    background-color: rgba(228, 253, 252, 0.952);\n    font-size: 18px;\n    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);\n        &:focus, :hover {\n        box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.4);\n}\n"]))),g.ZP.button(p||(p=(0,b.Z)(["\n    width: 125px;\n    padding: 10px 15px;\n    margin-top: 20px;\n    background-color: rgb(20, 89, 116);\n    /* background-color: rgb(28, 80, 165); */\n    color: white;\n    border: none;\n    border-radius: 15px;\n\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n        &:hover {\n        background-color: #fafafa;\n        color: darkblue;\n        box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.4);\n        }\n"]))),r(4554)),q=r(6151),U=(0,y.Z)([(0,z.jsx)("path",{fillRule:"evenodd",d:"M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"},"0"),(0,z.jsx)("circle",{cx:"9",cy:"8",r:"4",fillRule:"evenodd"},"1"),(0,z.jsx)("path",{fillRule:"evenodd",d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"},"2")],"PeopleAlt"),W=(0,y.Z)((0,z.jsx)("path",{d:"M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4 4-1.79 4-4zm2 2v2h3v3h2v-3h3v-2h-3V7h-2v3h-3zM1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4z"}),"PersonAddAlt1"),B=r(6057),K=function(){var n=(0,m.useState)(""),e=(0,V.Z)(n,2),r=e[0],t=e[1],o=(0,m.useState)(""),a=(0,V.Z)(o,2),i=a[0],s=a[1],c=(0,h.I0)(),l=(0,h.v9)(M),d=function(n){switch(n.currentTarget.name){case"name":t(n.currentTarget.value);break;case"number":s(n.currentTarget.value);break;default:return}console.log(r,i)};return(0,z.jsxs)(T.Z,{display:"flex",flexDirection:"column",gap:"10px",justifyContent:"center",alignItems:"center",component:"form",autoComplete:"off",maxWidth:"420px",onSubmit:function(n){n.preventDefault();var e={name:r,number:i,id:N()};l.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))?w.Am.warn("Name  ".concat(e.name,"  is alredy in contacts!")):(c((0,f.uK)(e)),w.Am.success("You have added a new contact ".concat(e.name)),t(""),s(""))},children:[(0,z.jsxs)(T.Z,{sx:{display:"flex",alignItems:"flex-end",gap:"10px"},children:[(0,z.jsx)(R,{children:"Add new contact"}),(0,z.jsx)(U,{})]}),(0,z.jsxs)(T.Z,{sx:{display:"flex",alignItems:"flex-end"},children:[(0,z.jsx)(W,{sx:{color:"#0f7ec9",mr:1,my:.5}}),(0,z.jsx)(H.Z,{sx:{width:"260px"},variant:"standard",onChange:d,type:"text",name:"name",value:r,required:!0,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",size:"small",margin:"none",id:"name",label:"Name",inputProps:{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"}})]}),(0,z.jsxs)(T.Z,{sx:{display:"flex",alignItems:"flex-end"},children:[(0,z.jsx)(B.Z,{sx:{color:"#0f7ec9",mr:1,my:.5}}),(0,z.jsx)(H.Z,{sx:{width:"260px"},variant:"standard",onChange:d,type:"tel",name:"number",value:i,required:!0,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",size:"small",margin:"none",fullWidth:!0,id:"number",label:"Number",inputProps:{inputMode:"numeric",pattern:"[0-9]*"}})]}),(0,z.jsx)(q.Z,{type:"submit",variant:"contained",sx:{mr:-1,mt:"18px",width:"200px"},children:"Add contact"}),(0,z.jsx)(w.Ix,{position:"top-center",autoClose:1500})]})},G=r(159),J=r(6101),O=r(6598);function Y(){var n=(0,h.I0)(),e=(0,h.v9)(A);return(0,m.useEffect)((function(){n((0,f.yF)())}),[n]),(0,z.jsx)(G.or,{children:(0,z.jsxs)(O.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",pt:2,pb:4},maxWidth:"xl",children:[e&&(0,z.jsx)(J.Z,{}),(0,z.jsx)(K,{}),(0,z.jsx)(F,{}),(0,z.jsx)(S,{})]})})}},159:function(n,e,r){r.d(e,{Dx:function(){return c},ii:function(){return l},or:function(){return d}});var t,o,a,i=r(168),s=r(8789),c=s.ZP.h1(t||(t=(0,i.Z)(["\n  font-family: 'Handlee', cursive;\n  font-size: 24px;\n  text-align: center;\n  margin-bottom: 20px;\n  width: 180px;\n  padding-bottom: 5px;\n  border-radius: 10px;\n  background-color: #fff;\n  /* color:  #065b94; */\n"]))),l=s.ZP.h1(o||(o=(0,i.Z)(["\n  font-family: 'Handlee', cursive;\n  font-size: 24px;\n  text-align: center;\n  margin-bottom: 20px;\n  width: 80px;\n  padding-bottom: 5px;\n  border-radius: 10px;\n  background-color: #fff;  \n  /* box-shadow: ; */\n  /* color: #0f7ec9; */\n"]))),d=s.ZP.main(a||(a=(0,i.Z)(["\n  /* height: 100vh; */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  /* margin: 0 auto; */\n  padding-top: 54px;  \n"])))},6057:function(n,e,r){var t=r(4836);e.Z=void 0;var o=t(r(5649)),a=r(184),i=(0,o.default)((0,a.jsx)("path",{d:"M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"}),"PhoneIphone");e.Z=i},5403:function(n,e,r){var t=r(4836);e.Z=void 0;var o=t(r(5649)),a=r(184),i=(0,o.default)((0,a.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");e.Z=i}}]);
//# sourceMappingURL=968.7c17ddd9.chunk.js.map