import{f as d}from"./fetch-DIdBfUoL.js";function p(t,o){const e=document.getElementById("snackbar-target");e.className="show",e.innerText=o,e.style.backgroundColor=t,setTimeout(function(){e.className=e.className.replace("show","")},3e3),e.classList.contains("show")||(e.classList.add("show"),setTimeout(function(){e.classList.remove("show")},3e3))}function f(t){const o=t.split("T")[0],[e,n,s]=o.split("-");return`${s}-${n}-${e}`}function w(){const t=new Date,o=t.getFullYear(),e=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${o}-${e}-${n}`}const u=document.querySelector("#entry_form");u.addEventListener("submit",t=>{const o=document.getElementById("workout").value;if(t.preventDefault(),u.checkValidity())if(o==="placeholder"){p("Crimson","Please select a color to represent your mood");return}else S();else{u.reportValidity();return}});async function S(){const t=document.getElementById("workout").value,o=document.getElementById("duration").value,e=document.getElementById("intensity").value,n=document.getElementById("notes").value,s=localStorage.getItem("token");if(!s){console.error("Token not found in local storage");return}const a={workout:t,duration:o,intensity:e,notes:n,entry_date:w()},r={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+s},body:JSON.stringify(a)};I(r)}async function I(t){b("https://trdns.northeurope.cloudapp.azure.com/api/entries",t).then(o=>{console.log("Response:",o),p("darkgreen","New entry added!")}).catch(o=>{console.error("Error:",o),p("crimson","New entry couldn't be added!")})}async function b(t,o={}){return(await fetch(t,o)).json()}const T=document.querySelector(".toggle_list"),v=document.querySelector(".result-table");let m=!1;T.addEventListener("click",()=>{m=!m,m?v.style.display="table":v.style.display="none"});const B=document.querySelector(".get_entries");B.addEventListener("click",y);async function y(){console.log("Haetaan kaikki merkinnät");const t="https://trdns.northeurope.cloudapp.azure.com/api/entries",e={method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("token")}};d(t,e).then(n=>{D(n)}).catch(n=>{console.error("Error fetching entries:",n)})}function D(t){console.log(t);const o=document.querySelector(".tbody");o.innerHTML="",t.forEach(e=>{console.log(e.user_id,e.entry_date,e.workout,e.duration,e.intensity,e.notes);const n=document.createElement("tr"),s=document.createElement("td");s.innerText=f(e.entry_date);const a=document.createElement("td");a.innerText=e.workout;const r=document.createElement("td");r.innerText=e.duration;const g=document.createElement("td");g.innerText=e.intensity;const h=document.createElement("td");h.innerText=e.notes;const k=document.createElement("td"),c=document.createElement("button");c.className="check",c.setAttribute("data-id",e.entry_id),c.innerText="Edit workout",k.appendChild(c);const E=document.createElement("td"),i=document.createElement("button");i.className="check",i.setAttribute("data-id",e.entry_id),i.innerText="Delete",E.appendChild(i),c.addEventListener("click",C),i.addEventListener("click",x),n.appendChild(s),n.appendChild(a),n.appendChild(r),n.appendChild(g),n.appendChild(h),n.appendChild(k),n.appendChild(E),o.appendChild(n)})}const l=document.querySelector(".info_dialog"),$=document.querySelector(".info_dialog button");$.addEventListener("click",()=>{l.close()});async function C(t){console.log("Muokataan tietoa"),console.log(t);const o=t.target.attributes["data-id"].value;console.log(o);const e=`https://trdns.northeurope.cloudapp.azure.com/api/entries/${o}`,s={method:"GET",headers:{Authorization:"Bearer: "+localStorage.getItem("token")}};d(e,s).then(a=>{console.log(a),L(a)})}function L(t){l.showModal(),console.log("in modal"),l.querySelector("p").innerHTML=`
    <div>Entry ID: <span>${t.entry_id}</span></div>
    <div>Entry Date: <input type="date" id="edit-entry-date" value="${t.entry_date}"></div>
    <div>Workout: <input type="text" id="edit-workout" value="${t.workout}"></div>
    <div>Duration: <input type="number" id="edit-duration" value="${t.duration}"></div>
    <div>Intensity: <input type="text" id="edit-intensity" value="${t.intensity}"></div>
    <div>Notes: <textarea id="edit-notes">${t.notes}</textarea></div>
    <button class="save-edit" data-id="${t.entry_id}">Save Changes</button>
  `,document.querySelector(".save-edit").addEventListener("click",_)}async function _(t){const o=t.target.dataset.id;console.log("Saving changes for entry ID:",o);const e={entry_date:document.getElementById("edit-entry-date").value,workout:document.getElementById("edit-workout").value,duration:document.getElementById("edit-duration").value,intensity:document.getElementById("edit-intensity").value,notes:document.getElementById("edit-notes").value},n=`https://trdns.northeurope.cloudapp.azure.com/api/entries/${o}`,a={method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify(e)};d(n,a).then(r=>{console.log("Workout updated successfully:",r),y(),l.close()}).catch(r=>{console.error("Error updating workout:",r)})}async function x(t){console.log("Deleting workout entry");const o=t.target.dataset.id;if(console.log("Entry ID to delete:",o),!confirm(`Are you sure you want to delete workout entry with ID: ${o}?`))return;const n=`https://trdns.northeurope.cloudapp.azure.com/api/entries/${o}`,a={method:"DELETE",headers:{Authorization:"Bearer "+localStorage.getItem("token")}};d(n,a).then(r=>{console.log("Workout entry deleted successfully:",r),y()}).catch(r=>{console.error("Error deleting workout entry:",r)})}async function N(){console.log("Onnistuneesti kirjauduttu ja käyttäjätietojen pitäisi näkyä");const t="https://trdns.northeurope.cloudapp.azure.com/api/auth/me",e={method:"GET",headers:{Authorization:"Bearer: "+localStorage.getItem("token")}};d(t,e).then(n=>{console.log(n),document.getElementById("name").innerHTML=n.user.username})}document.querySelector(".logout").addEventListener("click",z);function z(t){t.preventDefault(),localStorage.removeItem("token"),console.log("logginout"),window.location.href="index.html"}N();
