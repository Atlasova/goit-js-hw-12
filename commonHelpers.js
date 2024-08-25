import{a as S,S as v,i as l}from"./assets/vendor-C-TexYiS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function c(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=c(r);fetch(r.href,o)}})();const q="https://pixabay.com/api/";async function p(e,t){const c={key:"45497823-3ee11a5b90ff874601dfe7178",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t};try{return(await S.get(q,{params:c})).data}catch(s){throw new Error(s.message)}}const B=document.querySelector(".images-container");let u;function M(e){return`<li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
      <img 
        class="gallery-image" 
        src="${e.webformatURL}" 
        alt="${e.tags}" 
      />
    </a>
    <div class="img-details-box">
      <p class="detail-item"><b class="detail-title">Likes:</b> ${e.likes}</p>
      <p class="detail-item"><b class="detail-title">Views:</b> ${e.views}</p>
      <p class="detail-item"><b class="detail-title">Comments:</b> ${e.comments}</p>
      <p class="detail-item"><b class="detail-title">Downloads:</b> ${e.downloads}</p>
    </div>
    </li>
  `}function R(e){return e.map(M).join("")}function f(e){const t=R(e);B.insertAdjacentHTML("beforeend",t),u?u.refresh():u=new v(".images-container a",{captionsData:"alt",captionDelay:250})}const g=document.querySelector(".form"),$=document.querySelector(".images-container"),y=document.querySelector(".loader"),m=document.querySelector(".load-more-btn");g.addEventListener("submit",E);m.addEventListener("click",P);let a,L,i;async function E(e){if(e.preventDefault(),h(),$.innerHTML="",w(),i=e.target.elements.query.value.trim(),!i){l.error({message:"Search field is empty",position:"topRight"}),n();return}try{a=1;const t=await p(i,a);if(t&&t.hits&&t.hits.length)n(),L=Math.ceil(t.totalHits/15),b(),f(t.hits);else throw Error("Sorry, there are no images matching your search query. Please try again!")}catch{l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}finally{n()}g.reset()}async function P(){w(),h();try{a+=1;const e=await p(i,a);if(e&&e.hits&&e.hits.length){b(),f(e.hits);const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"});return}else throw new Error("We're sorry, there are no more posts to load")}catch{l.error({message:"We're sorry, there are no more posts to load",position:"topRight"})}finally{n()}}function b(){L>a?O():(h(),l.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}const w=()=>{y.classList.remove("is-hidden")},n=()=>{y.classList.add("is-hidden")};function O(){m.classList.remove("hidden")}function h(){m.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
