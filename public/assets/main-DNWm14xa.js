import{f as c}from"./fetch-Jo4KHL5H.js";const u=document.querySelector(".createuser");u.addEventListener("click",async t=>{t.preventDefault(),console.log("Nyt luodaan käyttäjä");const o="https://trdns.northeurope.cloudapp.azure.com/api/users",e=document.querySelector(".create_user_form");if(!e.checkValidity()){e.reportValidity();return}console.log("Tiedot valideja, jatketaan");const s={username:e.querySelector("input[name=username]").value,password:e.querySelector("input[name=password]").value,email:e.querySelector("input[name=email]").value},l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};try{const n=await c(o,l);console.log(n),showSnackbar("darkgreen","New user created!")}catch(n){console.error(n),alert("could not create new user. The creation did not match the security needs")}});const i=document.querySelector(".loginuser");i.addEventListener("click",async t=>{t.preventDefault(),console.log("Nyt logataan sisään");const o="https://trdns.northeurope.cloudapp.azure.com/api/auth/login",e=document.querySelector(".login_form"),a=e.querySelector("input[name=username]").value,s=e.querySelector("input[name=password]").value,n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:s})};c(o,n).then(r=>{console.log(r),console.log(r.token),localStorage.setItem("token",r.token),r.token==null?alert("Käyttäjänimi tai salasana väärin"):(alert("logging in to your account now!"),window.location.href="home.html"),m("loginResponse",`localStorage set with token value: ${r.token}`)})});const d=document.querySelector("#meRequest");d.addEventListener("click",async()=>{console.log("Testataan TOKENIA ja haetaan käyttäjän tiedot");const t="https://trdns.northeurope.cloudapp.azure.com/api/auth/me",o=localStorage.getItem("token");console.log(o);const e={method:"GET",headers:{Authorization:"Bearer: "+o}};console.log(e),c(t,e).then(a=>{console.log(a)})});function m(t,o){document.getElementById(t).innerText=o}
