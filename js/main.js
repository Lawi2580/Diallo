(function(){
var roles=["géographe","spécialiste SIG","expert en collecte numérique","cartographe par drone"],i=0,j=0,del=false,el=document.getElementById("typed");
function tick(){el=document.getElementById("typed");if(!el)return setTimeout(tick,500);var w=roles[i];j+=del?-1:1;el.textContent=w.slice(0,j);
var t=del?40:80;if(!del&&j===w.length){del=true;t=1400}else if(del&&j===0){del=false;i=(i+1)%roles.length;t=300}setTimeout(tick,t)}tick();
document.querySelectorAll(".chip").forEach(function(c){c.addEventListener("click",function(){document.querySelectorAll(".chip").forEach(function(x){x.classList.remove("on")});c.classList.add("on");
var f=c.dataset.f;document.querySelectorAll("[data-c]").forEach(function(a){a.style.display=(f==="all"||a.dataset.c===f)?"":"none"})})});
var cf=document.getElementById("cf");if(cf)cf.addEventListener("submit",function(e){e.preventDefault();var d=new FormData(cf);
location.href="mailto:moussadiall275@gmail.com?subject="+encodeURIComponent("Message du portfolio – "+d.get("n"))+"&body="+encodeURIComponent(d.get("m")+"\n\n"+d.get("e"))});
document.querySelectorAll("nav a").forEach(function(a){a.addEventListener("click",function(){document.body.classList.remove("open")})});
})();