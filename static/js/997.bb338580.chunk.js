"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[997],{8997:function(n,e,r){r.r(e),r.d(e,{default:function(){return J}});var t,o,a,i,s,d,c,l,u,x,p=r(2791),b=r(9434),m=r(3634),h=r(9332),g=r(9505),f=r(168),Z=r(8789),v=Z.ZP.li(t||(t=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 8px 0px;\n  transition: border-bottom 250ms linear;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.54);\n  :hover {\n    border-bottom: 1px solid #1363df;\n    :hover > svg {\n      transition: color 250ms linear;\n      color: #1363df;\n    }\n  }\n"]))),j=Z.ZP.button(o||(o=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-left: auto;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  :hover > svg {\n    transition: color 250ms linear;\n    color: tomato;\n  }\n"]))),w=r(184),k=function(n){var e=n.id,r=n.number,t=n.name,o=(0,b.I0)();return(0,w.jsxs)(v,{children:[(0,w.jsx)(h.Z,{fontSize:"large",sx:{mr:1}}),(0,w.jsxs)("p",{children:[t,": ",(0,w.jsx)("span",{children:r})]}),(0,w.jsxs)(j,{type:"button",onClick:function(){o((0,m.GK)(e))},children:["Delete",(0,w.jsx)(g.Z,{sx:{fontSize:30}})]})]})},y=Z.ZP.ul(a||(a=(0,f.Z)(["\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 12px;\n"]))),z=function(n){return n.contacts.isLoading},P=function(n){return n.filter},C=function(n){return n.contacts.items},_=function(){var n=(0,b.v9)(C),e=(0,b.v9)(P),r=(0,b.I0)(),t=e.toLowerCase(),o=n.filter((function(n){return n.name.toLowerCase().includes(t)}));return(0,p.useEffect)((function(){r((0,m.yF)())}),[r]),(0,w.jsx)(y,{children:o.map((function(n){var e=n.id,r=n.name,t=n.number;return(0,w.jsx)(k,{id:e,name:r,number:t},e)}))})},A=r(4808),F=Z.ZP.h2(i||(i=(0,f.Z)(["\n    font-size: 30px;\n    margin: 10px 0;\n    color: darkblue;\n    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);\n    text-align: center;\n"]))),S=Z.ZP.input(s||(s=(0,f.Z)(["\n    width: 275px;\n    height: 22px;\n    margin-bottom: 10px;\n    padding: 4px;\n    border: 0.3px solid rgb(78, 41, 20);\n    border: 0.3px solid darkcyan;\n    border: 0.3px solid rgb(20, 66, 78);\n    border-radius: 10px;\n    background-color: rgba(228, 253, 252, 0.952);\n    font-size: 18px;\n    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);\n        &:focus, :hover {\n        box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.4);\n}    \n"]))),I=function(){var n=(0,b.v9)(P),e=(0,b.I0)();return(0,w.jsxs)("label",{children:[(0,w.jsx)(F,{children:"Filter"}),(0,w.jsx)(S,{type:"text",name:"filter",value:n,onChange:function(n){e((0,A.x)(n.currentTarget.value))},placeholder:"Enter request"})]})},E=r(9439),T=r(5984),q=Z.ZP.h1(d||(d=(0,f.Z)(["\n    font-size: 35px;\n    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);\n"]))),D=Z.ZP.form(c||(c=(0,f.Z)(["\n    margin: 0 auto;\n    list-style: inside;\n    display: flex;\n    flex-direction: column;\n    max-width: 640px;\n    min-width: 340px;\n    /* width: 355px; */\n    padding: 20px;\n    border: 1px solid black;\n    border: 0.3px solid darkcyan;\n    border-radius: 5px;\n    /* background-color: rgb(100, 237, 207); */\n    color: darkblue;\n    box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.15);\n"]))),L=Z.ZP.label(l||(l=(0,f.Z)(["\n    font-size: 18px;\n    font-weight: 500;\n    margin-bottom: 10px;\n"]))),N=Z.ZP.input(u||(u=(0,f.Z)(["\n    width: 250px;\n    margin-bottom: 10px;\n    padding: 4px;\n    border: 0.3px solid rgb(20, 66, 78);\n    border-radius: 3px;\n    background-color: rgba(228, 253, 252, 0.952);\n    font-size: 18px;\n    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);\n        &:focus, :hover {\n        box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.4);\n}\n"]))),K=Z.ZP.button(x||(x=(0,f.Z)(["\n    width: 125px;\n    padding: 10px 15px;\n    margin-top: 20px;\n    background-color: rgb(20, 89, 116);\n    /* background-color: rgb(28, 80, 165); */\n    color: white;\n    border: none;\n    border-radius: 15px;\n\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n        &:hover {\n        background-color: #fafafa;\n        color: darkblue;\n        box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.4);\n        }\n"]))),B=function(){var n=(0,p.useState)(""),e=(0,E.Z)(n,2),r=e[0],t=e[1],o=(0,p.useState)(""),a=(0,E.Z)(o,2),i=a[0],s=a[1],d=(0,b.I0)(),c=function(n){switch(n.currentTarget.name){case"name":t(n.currentTarget.value);break;case"number":s(n.currentTarget.value);break;default:return}console.log(r,i)},l=(0,T.x0)(),u=(0,T.x0)();return(0,w.jsxs)(D,{onSubmit:function(n){n.preventDefault();var e={name:r,number:i,id:(0,T.x0)()};d((0,m.uK)(e)),t(""),s("")},children:[(0,w.jsx)(q,{children:"Create new contact"}),(0,w.jsxs)(L,{htmlFor:l,children:["Name ",""]}),(0,w.jsx)(N,{type:"text",name:"name",id:l,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Emmy Richards",required:!0,value:r,onChange:c}),(0,w.jsxs)(L,{htmlFor:u,children:["Number ",""]}),(0,w.jsx)(N,{type:"tel",name:"number",id:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"000-000-00",required:!0,value:i,onChange:c}),(0,w.jsx)(K,{type:"submit",children:"Add contact"})]})},G=r(159),H=r(6101);function J(){var n=(0,b.I0)(),e=(0,b.v9)(z);return(0,p.useEffect)((function(){n((0,m.yF)())}),[n]),(0,w.jsxs)(G.o,{children:[e&&(0,w.jsx)(H.Z,{}),(0,w.jsxs)("h2",{children:[(0,w.jsx)(h.Z,{fontSize:"large",sx:{mr:1}}),"Your Contacts"]}),(0,w.jsx)(I,{}),(0,w.jsx)(B,{}),(0,w.jsx)(_,{})]})}},159:function(n,e,r){r.d(e,{D:function(){return s},o:function(){return d}});var t,o,a=r(168),i=r(8789),s=i.ZP.h1(t||(t=(0,a.Z)(["\n  font-family: 'Handlee', cursive;\n  font-size: 24px;\n  text-align: center;\n  margin-bottom: 20px;\n"]))),d=i.ZP.main(o||(o=(0,a.Z)(["\ndisplay: flex;\nflex-direction: column;\n/* justify-content: center; */\nalign-items: center;\n  margin: 0 auto;\n"])))}}]);
//# sourceMappingURL=997.bb338580.chunk.js.map