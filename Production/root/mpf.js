function multiStart(){document.getElementById("question").innerHTML=question.question,document.getElementById("options").innerHTML="";for(var o="<p>",t=1;t<question.options.length+1;t++)o+='<button id="option'+t+'" class="option option'+t+'" onclick="multiCheck(event, '+t+')">'+question.options[t-1]+"</button>",document.getElementById("options").innerHTML=o+"</p>"}function multiCheck(o,t){scoreReset(!1);var e=o.target.outerText;e==question.answer&&scoreIncrease(1),multiResults(t)}function multiResults(o){for(var t=0;t<question.options.length;t++)document.getElementById("option"+(t+1)).style.background=question.options[t]==question.answer?"Green":"Red";if(question.hasOwnProperty("popup")&&1==question.popup){var e=question.popupItems[o-1];popupToggle(e)}}function enablePopups(o){if(1==o){var t='<div id="popupBoxPosition"><div id="popupBoxWrapper"><div id="popupBoxContent" style="text-align: center"></div></div></div>';document.body.innerHTML+=t,currentGameSession.addIns.push("popupBoxPosition")}}function popupToggle(o){var t="<h3>"+o[0]+"</h3><p>"+o[1]+'</p><button id="closePopup" class="option" onclick="popupToggle(\'popupBoxPosition\')">Close</button>',e=document.getElementById("popupBoxPosition");document.getElementById("popupBoxContent").innerHTML=t,e.style.display="block"==e.style.display?"none":"block"}