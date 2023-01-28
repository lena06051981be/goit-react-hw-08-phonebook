"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[783],{6783:function(n,r,e){e.r(r),e.d(r,{default:function(){return K}});var t,o,a,i,d,c,s,l,u,x,p=e(2791),b=e(9434),h=e(3634),f=e(9332),g=e(9505),m=e(168),v=e(8789),Z=v.ZP.li(t||(t=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 8px 0px;\n  transition: border-bottom 250ms linear;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.54);\n  :hover {\n    border-bottom: 1px solid #1363df;\n    :hover > svg {\n      transition: color 250ms linear;\n      color: #1363df;\n    }\n  }\n"]))),w=v.ZP.button(o||(o=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-left: auto;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  :hover > svg {\n    transition: color 250ms linear;\n    color: tomato;\n  }\n"]))),j=e(184),k=function(n){var r=n.id,e=n.number,t=n.name,o=(0,b.I0)();return(0,j.jsxs)(Z,{children:[(0,j.jsx)(f.Z,{fontSize:"large",sx:{mr:1}}),(0,j.jsxs)("p",{children:[t,": ",(0,j.jsx)("span",{children:e})]}),(0,j.jsxs)(w,{type:"button",onClick:function(){o((0,h.GK)(r))},children:["Delete",(0,j.jsx)(g.Z,{sx:{fontSize:30}})]})]})},z=v.ZP.ul(a||(a=(0,m.Z)(["\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 12px;\n"]))),y=function(n){return n.contacts.isLoading},C=function(n){return n.filter},P=function(n){return n.contacts.items},S=function(){var n=(0,b.v9)(P),r=(0,b.v9)(C),e=(0,b.I0)(),t=r.toLowerCase(),o=n.filter((function(n){return n.name.toLowerCase().includes(t)}));return(0,p.useEffect)((function(){e((0,h.yF)())}),[e]),(0,j.jsx)(z,{children:o.map((function(n){var r=n.id,e=n.name,t=n.number;return(0,j.jsx)(k,{id:r,name:e,number:t},r)}))})},_=e(4808),A=v.ZP.h2(i||(i=(0,m.Z)(["\n    font-size: 30px;\n    margin: 10px 0;\n    color: darkblue;\n    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);\n    text-align: center;\n"]))),F=v.ZP.input(d||(d=(0,m.Z)(["\n    width: 275px;\n    height: 22px;\n    margin-bottom: 10px;\n    padding: 4px;\n    border: 0.3px solid rgb(78, 41, 20);\n    border: 0.3px solid darkcyan;\n    border: 0.3px solid rgb(20, 66, 78);\n    border-radius: 10px;\n    background-color: rgba(228, 253, 252, 0.952);\n    font-size: 18px;\n    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);\n        &:focus, :hover {\n        box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.4);\n}    \n"]))),H=function(){var n=(0,b.v9)(C),r=(0,b.I0)();return(0,j.jsxs)("label",{children:[(0,j.jsx)(A,{children:"Filter"}),(0,j.jsx)(F,{type:"text",name:"filter",value:n,onChange:function(n){r((0,_.x)(n.currentTarget.value))},placeholder:"Enter request"})]})},L=e(9439),M=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,r){return n+=(r&=63)<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r>62?"-":"_"}),"")},V=v.ZP.h1(c||(c=(0,m.Z)(["\n    font-size: 35px;\n    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);\n"]))),I=v.ZP.form(s||(s=(0,m.Z)(["\n    margin: 0 auto;\n    list-style: inside;\n    display: flex;\n    flex-direction: column;\n    max-width: 640px;\n    min-width: 340px;\n    /* width: 355px; */\n    padding: 20px;\n    border: 1px solid black;\n    border: 0.3px solid darkcyan;\n    border-radius: 5px;\n    /* background-color: rgb(100, 237, 207); */\n    color: darkblue;\n    box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.15);\n"]))),D=v.ZP.label(l||(l=(0,m.Z)(["\n    font-size: 18px;\n    font-weight: 500;\n    margin-bottom: 10px;\n"]))),E=v.ZP.input(u||(u=(0,m.Z)(["\n    width: 250px;\n    margin-bottom: 10px;\n    padding: 4px;\n    border: 0.3px solid rgb(20, 66, 78);\n    border-radius: 3px;\n    background-color: rgba(228, 253, 252, 0.952);\n    font-size: 18px;\n    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);\n        &:focus, :hover {\n        box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.4);\n}\n"]))),T=v.ZP.button(x||(x=(0,m.Z)(["\n    width: 125px;\n    padding: 10px 15px;\n    margin-top: 20px;\n    background-color: rgb(20, 89, 116);\n    /* background-color: rgb(28, 80, 165); */\n    color: white;\n    border: none;\n    border-radius: 15px;\n\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n        &:hover {\n        background-color: #fafafa;\n        color: darkblue;\n        box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.4);\n        }\n"]))),q=function(){var n=(0,p.useState)(""),r=(0,L.Z)(n,2),e=r[0],t=r[1],o=(0,p.useState)(""),a=(0,L.Z)(o,2),i=a[0],d=a[1],c=(0,b.I0)(),s=function(n){switch(n.currentTarget.name){case"name":t(n.currentTarget.value);break;case"number":d(n.currentTarget.value);break;default:return}console.log(e,i)},l=M(),u=M();return(0,j.jsxs)(I,{onSubmit:function(n){n.preventDefault();var r={name:e,number:i,id:M()};c((0,h.uK)(r)),t(""),d("")},children:[(0,j.jsx)(V,{children:"Create new contact"}),(0,j.jsxs)(D,{htmlFor:l,children:["Name ",""]}),(0,j.jsx)(E,{type:"text",name:"name",id:l,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Emmy Richards",required:!0,value:e,onChange:s}),(0,j.jsxs)(D,{htmlFor:u,children:["Number ",""]}),(0,j.jsx)(E,{type:"tel",name:"number",id:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"000-000-00",required:!0,value:i,onChange:s}),(0,j.jsx)(T,{type:"submit",children:"Add contact"})]})},N=e(159),B=e(6101);function K(){var n=(0,b.I0)(),r=(0,b.v9)(y);return(0,p.useEffect)((function(){n((0,h.yF)())}),[n]),(0,j.jsxs)(N.or,{children:[r&&(0,j.jsx)(B.Z,{}),(0,j.jsxs)("h2",{children:[(0,j.jsx)(f.Z,{fontSize:"large",sx:{mr:1}}),"Your Contacts"]}),(0,j.jsx)(H,{}),(0,j.jsx)(q,{}),(0,j.jsx)(S,{})]})}},159:function(n,r,e){e.d(r,{Dx:function(){return s},ii:function(){return l},or:function(){return u}});var t,o,a,i=e(168),d=e(8789),c=e(1942),s=d.ZP.h1(t||(t=(0,i.Z)(["\n  font-family: 'Handlee', cursive;\n  font-size: 24px;\n  text-align: center;\n  margin-bottom: 20px;\n  width: 180px;\n  padding-bottom: 5px;\n  border-radius: 10px;\n  background-color: #fff;\n  /* color:  #065b94; */\n"]))),l=d.ZP.h1(o||(o=(0,i.Z)(["\n  font-family: 'Handlee', cursive;\n  font-size: 24px;\n  text-align: center;\n  margin-bottom: 20px;\n  width: 80px;\n  padding-bottom: 5px;\n  border-radius: 10px;\n  background-color: #fff;\n  /* box-shadow: ; */\n  /* color: #0f7ec9; */\n"]))),u=d.ZP.main(a||(a=(0,i.Z)(["\n\nheight: 100vh;\ndisplay: flex;\nflex-direction: column;\n/* justify-content: center; */\nalign-items: center;\n  margin: 0 auto;\n  padding-top: 22px;\n  background-image: url('","');\n"])),c)},9332:function(n,r,e){var t=e(4836);r.Z=void 0;var o=t(e(5649)),a=e(184),i=(0,o.default)((0,a.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"}),"AccountBox");r.Z=i},9505:function(n,r,e){var t=e(4836);r.Z=void 0;var o=t(e(5649)),a=e(184),i=(0,o.default)((0,a.jsx)("path",{d:"M14.12 10.47 12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"}),"DeleteForeverOutlined");r.Z=i},1942:function(n,r,e){n.exports=e.p+"static/media/background.35f28b0a3d196a8c89d6.jpg"}}]);
//# sourceMappingURL=783.36c6d555.chunk.js.map