(()=>{"use strict";const e=document.querySelector(".loader"),t=()=>{const t=window.location.href.split("watch/").pop();document.querySelectorAll(".episodes__episode").forEach((o=>{o.addEventListener("click",(()=>{const c=document.querySelector(".current-episode");c&&c.classList.remove("current-episode"),o.classList.add("current-episode"),(async t=>{const o=document.getElementById("video-player");o.src="",e.classList.remove("hidden");const c=window.location.href.split("watch/").pop(),n=await fetch(`/api/v1/watch/${c}-episode-${t}`),s=(await n.json()).videoStreamURL;o.src=s,e.classList.add("hidden")})(parseInt(o.textContent)),localStorage.setItem(t,o.textContent)}))}))};function o(e,o,c){0===e&&(e=1),((e,t)=>{let o=[];for(let c=e;c<=t;c++)o.push(c);return o})(e,o).forEach((e=>{const t=document.createElement("li");t.classList.add("episodes__episode"),t.textContent=e,t.id=`episode-${e}`,c.append(t)})),t();const n=window.location.href.split("watch/").pop();document.getElementById(`episode-${localStorage.getItem(n)}`).classList.add("current-episode")}const c=document.querySelector(".loader");(function(){const e=document.querySelector(".burger-menu"),t=document.querySelector(".header__nav"),o=document.querySelector(".close-menu");e.addEventListener("click",(()=>{t.style.display="flex"})),o.addEventListener("click",(()=>{t.style.display="none"}))})(),function(){const e=document.querySelector(".search__barWrapper"),t=document.querySelector(".search__bar"),o=document.querySelector(".searchBtn-mobile"),c=document.querySelector(".search__barIcon__wrapper"),n=document.querySelector(".search__barCloseMenu"),s=document.querySelector(".header__logo"),r=document.querySelector(".burger-menu");function d(){s.classList.toggle("hidden"),r.classList.toggle("hidden"),n.classList.toggle("hidden"),c.classList.toggle("hidden"),o.classList.toggle("hidden"),e.style.display="flex"}c.addEventListener("click",(()=>{d(),t.style.display="block"})),document.querySelector(".search__barCloseMenu").addEventListener("click",(()=>{d(),t.style.display="none"}))}(),async function(){const e=window.location.href.split("watch/").pop();document.title=`Watch ${e.toLowerCase()}`,null==localStorage.getItem(e)&&localStorage.setItem(e,"1");const t=await fetch(`/api/v1/watch/${e}-episode-${localStorage.getItem(e)}`),n=await t.json(),s=document.getElementById("video-player"),r=n.videoStreamURL;s.src=r,c.classList.add("hidden"),(e=>{const t=e.episodeStartAndEnd,c=t[0],n=t[1],s=document.querySelector(".episodes__wrapper"),r=document.querySelector(".episodes__tabWrapper");n.forEach(((e,t)=>{const n=document.createElement("span");n.textContent=`${c[t]} - ${e}`,n.setAttribute("ep_start",c[t]),n.setAttribute("ep_end",e),n.addEventListener("click",(()=>{s.innerHTML=null;const e=parseInt(n.getAttribute("ep_end"));o(parseInt(n.getAttribute("ep_start")),e,s)})),r.append(n)})),o(1,parseInt(n[0]),s)})(n)}(),t()})();