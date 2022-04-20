"use strict";const fillLegend=document.querySelector(".js-fill_legend"),designLegend=document.querySelector(".js-design_legend"),shareLegend=document.querySelector(".js-share_legend"),designWrapper=document.querySelector(".js-design__wrapper"),fillWrapper=document.querySelector(".js-fill__wrapper"),shareWrapper=document.querySelector(".js-share__wrapper"),fillTriangle=document.querySelector(".js-fill__triangle"),designTriangle=document.querySelector(".js-design__triangle"),shareTriangle=document.querySelector(".js-share__triangle");function handleArrowS(){shareWrapper.classList.toggle("hidden"),shareTriangle.classList.toggle("turn"),designWrapper.classList.contains("hidden")||designWrapper.classList.add("hidden"),designTriangle.classList.remove("turn"),fillWrapper.classList.contains("hidden")||fillWrapper.classList.add("hidden"),fillTriangle.classList.remove("turn")}function handleArrowF(){fillWrapper.classList.toggle("hidden"),fillTriangle.classList.toggle("turn"),designWrapper.classList.contains("hidden")||designWrapper.classList.add("hidden"),designTriangle.classList.remove("turn"),shareWrapper.classList.contains("hidden")||shareWrapper.classList.add("hidden"),shareTriangle.classList.remove("turn")}function handleArrowD(){designWrapper.classList.toggle("hidden"),designTriangle.classList.toggle("turn"),shareWrapper.classList.contains("hidden")||shareWrapper.classList.add("hidden"),shareTriangle.classList.remove("turn"),fillWrapper.classList.contains("hidden")||fillWrapper.classList.add("hidden"),fillTriangle.classList.remove("turn")}designLegend.addEventListener("click",handleArrowD),fillLegend.addEventListener("click",handleArrowF),shareLegend.addEventListener("click",handleArrowS);const formAllInput=document.querySelector(".js-form"),namesCard=document.querySelector(".js_namesCard"),professionCard=document.querySelector(".js_professionCard"),iconMobile=document.querySelector(".js_iconMobile"),iconMail=document.querySelector(".js_iconMail"),iconLinkedIn=document.querySelector(".js_iconLinkedIn"),iconGit=document.querySelector(".js_iconGit"),buttonShare=document.querySelector(".js-buttonShare"),shareLink=document.querySelector(".js-shareLink"),shareLinkWrapper=document.querySelector(".js-shareLinkWrapper"),shareTwitter=document.querySelector(".js-shareTwitter"),data={palette:1,name:"",job:"",email:"",phone:"",linkedin:"",github:"",photo:""};function getDataInput(e){const t=e.target;"name"===t.id?data.name=t.value:"job"===t.id?data.job=t.value:"email"===t.id?data.email=t.value:"phone"===t.id?data.phone=t.value:"linkedin"===t.id?data.linkedin=t.value:"github"===t.id&&(data.github=t.value),renderPreview()}function renderPreview(){""===data.name?namesCard.innerHTML="nombre apellido":namesCard.innerHTML=data.name,""===data.job?professionCard.innerHTML="profesión":professionCard.innerHTML=data.job,""===data.email?iconMail.href="mailto:hola@adalab.es":iconMail.href="mailto: "+data.email,""===data.github?iconGit.href="https://github.com/Adalab/":iconGit.href=`https://github.com/${data.github}/ `,""===data.linkedin?iconLinkedIn.href="https://www.linkedin.com/school/adalab/?originalSubdomain=es":iconLinkedIn.href=`https://es.linkedin.com/in/${data.linkedin} `,""===data.phone?iconMobile.href="tel:666666666":iconMobile.href="tel: "+data.phone}function handleButtonShare(e){e.preventDefault(),fetch("https://awesome-profile-cards.herokuapp.com/card",{method:"POST",body:JSON.stringify(data),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{shareTwitter.innerHTML="",e.success&&(shareLink.href=e.cardURL,shareLinkWrapper.classList.remove("disapear"),shareTwitter.innerHTML+=`<a class="done__button-twitter__content" title="compartir en twitter" href="https://twitter.com/intent/tweet?text=Tarjeta%20de%20contacto%20equipo%206%20&url=${e.cardURL}&hashtags=equipo6" target="_blank"> <i class="fa-brands fa-twitter done__button-twitter__icon"></i>\n          Compartir en twitter\n        </a>`)}).catch(e=>console.log("Ha sucedido un error: "+e))}function elementsHtml(e){return document.querySelector(e)}buttonShare.addEventListener("click",handleButtonShare),formAllInput.addEventListener("keyup",getDataInput);const cardContainer=elementsHtml(".js_cardContainer"),radioButtonRed=elementsHtml(".js_button_paletteRed"),radioButtonMix=elementsHtml(".js_button_paletteMix"),radioButtonBlue=elementsHtml(".js_button_paletteBlue"),radioButtonTeam=elementsHtml(".js_button_paletteMixteam"),radioButtonPink=elementsHtml(".js_button_paletteMixteamPink");function changeColorRed(e){cardContainer.classList.remove("paletteBlue"),cardContainer.classList.remove("paletteMix"),cardContainer.classList.remove("paletteRed"),cardContainer.classList.remove("paletteTeam"),cardContainer.classList.add("paletteRed")}function changeColorMix(e){cardContainer.classList.remove("paletteBlue"),cardContainer.classList.remove("paletteRed"),cardContainer.classList.remove("paletteMix"),cardContainer.classList.remove("paletteTeam"),cardContainer.classList.add("paletteMix")}function changeColorBlue(e){cardContainer.classList.remove("paletteRed"),cardContainer.classList.remove("paletteMix"),cardContainer.classList.remove("paletteBlue"),cardContainer.classList.remove("paletteTeam"),cardContainer.classList.add("paletteBlue")}function changeColorTeam(e){cardContainer.classList.remove("paletteRed"),cardContainer.classList.remove("paletteTeam"),cardContainer.classList.remove("paletteMix"),cardContainer.classList.remove("paletteBlue"),cardContainer.classList.add("paletteTeam")}radioButtonBlue.addEventListener("click",changeColorBlue),radioButtonRed.addEventListener("click",changeColorRed),radioButtonMix.addEventListener("click",changeColorMix),radioButtonTeam.addEventListener("click",changeColorTeam);const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,data.photo=fr.result}function fakeFileClick(){fileField.click()}fileField.addEventListener("change",getImage);const radio1=document.querySelector(".js_radio1"),preview=document.querySelector(".js_cardContainer"),resetButton=document.querySelector(".js-resetButton"),resetName=document.querySelector(".js_resetName"),resetJob=document.querySelector(".js_resetJob"),resetMail=document.querySelector(".js_resetEmail"),resetPhone=document.querySelector(".js_resetPhone"),resetLinkedin=document.querySelector(".js_resetLinkedin"),resetGit=document.querySelector(".js_resetGithub"),resetTitle=document.querySelector(".js_resetNamesCard"),resetProfession=document.querySelector(".js_resetJobCard"),resetTelf=document.querySelector(".js_resetPhone"),resetEmail=document.querySelector(".js_resetMail"),resetLikendin=document.querySelector(".js_resetLinkedin"),resetGitHub=document.querySelector(".js_resetGithub");function resetCard(){preview.classList.remove("paletteBlue"),preview.classList.remove("paletteRed"),preview.classList.remove("paletteMix"),resetTitle.textContent="Nombre Apellido",resetProfession.textContent="Profesión",profilePreview.style.backgroundImage="",profileImage.style.backgroundImage="",resetTelf.href="",resetEmail.href="",resetLikendin.href="",resetGitHub.href=""}function resetForm(){radio1.checked="selected",resetName.value="",resetJob.value="",fileField.value="",resetMail.value="",resetPhone.value="",resetLinkedin.value="",resetGit.value=""}function handleResetCreate(e){e.preventDefault(),resetForm(),resetCard()}resetButton.addEventListener("click",handleResetCreate);