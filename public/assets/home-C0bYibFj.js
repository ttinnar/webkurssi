import{f as c}from"./fetch-bcwo1m7F.js";const u=document.querySelector(".createuser");u.addEventListener("click",async n=>{n.preventDefault(),console.log("Nyt luodaan käyttäjä");const o="https://trdns.northeurope.cloudapp.azure.com/api/users",e=document.querySelector(".create_user_form"),s={username:e.querySelector("input[name=username]").value,password:e.querySelector("input[name=password]").value,email:e.querySelector("input[name=email]").value},t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};try{const a=await c(o,t);console.log(a)}catch(a){console.error(a)}});const i=document.querySelector(".loginuser");i.addEventListener("click",async n=>{n.preventDefault(),console.log("Nyt logataan sisään");const o="https://trdns.northeurope.cloudapp.azure.com/api/auth/login",e=document.querySelector(".login_form"),r={username:e.querySelector("input[name=username]").value,password:e.querySelector("input[name=password]").value},s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};c(o,s).then(t=>{console.log(t),console.log(t.token),localStorage.setItem("token",t.token),localStorage.setItem("name",t.user.username),l("loginResponse",`localStorage set with token value: ${t.token}`),t.token==null?alert("Unauthorized: username or password incorrect!"):(alert("Authorized: you will now be redirected in 3 seconds"),setTimeout(function(){window.location.href="index.html"},3e3))})});const m=document.querySelector("#meRequest");m.addEventListener("click",async()=>{console.log("Testataan TOKENIA ja haetaan käyttäjän tiedot");const n="https://trdns.northeurope.cloudapp.azure.com/api/auth/me",o=localStorage.getItem("token");console.log("Tämä on haettu LocalStoragesta",o);const e={method:"GET",headers:{Authorization:"Bearer: "+o}};console.log(e),c(n,e).then(r=>{console.log(r),l("meResponse",`Authorized user info: ${JSON.stringify(r)}`)})});const d=document.querySelector("#clearButton");d.addEventListener("click",p);function l(n,o){document.getElementById(n).innerText=o}function p(){localStorage.removeItem("token"),l("clearResponse","localStorage cleared!")}
