const splash = document.getElementById("splash");

const login = document.getElementById("login");

const startBtn = document.getElementById("startBtn");

const loginBtn = document.getElementById("loginBtn");

startBtn.onclick=function(){

splash.style.display="none";

login.style.display="flex";

}

const dashboard = document.getElementById("dashboard");

loginBtn.onclick = function () {

    let name = document.getElementById("studentName").value.trim();

    let section = document.getElementById("studentSection").value.trim();

    if (name === "") {

        alert("Please enter your name.");

        return;

    }

    login.style.display = "none";

    dashboard.style.display = "flex";

    document.getElementById("welcomeText").innerHTML =
        "Welcome, " + name + "!";

        localStorage.setItem("studentName",name);

        localStorage.setItem("studentSection",section);
};
/* ===================================
LESSON DATA
=================================== */

const lessons = [

{
title:"ðŸ“– Kuwento: Ang Regalo ni Maria",
content:`
Si <strong>Maria</strong> ay nagdiwang ng kanyang kaarawan. Bilang regalo, binigyan siya ng kanyang lola ng <strong>â‚±500</strong>.

Habang pauwi, nakita niya ang mga bagay na gusto niyang bilhin:

ðŸ” Burger â€“ â‚±150<br>
ðŸŽ® Mobile Game â€“ â‚±250<br>
ðŸ“š Kuwaderno â€“ â‚±80<br>
ðŸ’° Magtabi ng pera para sa hinaharap

<hr>

<strong>Tanong:</strong><br>
Kung ikaw si Maria, ano ang iyong gagawin? Ipaliwanag ang iyong sagot.

<br><br>

<textarea
id="storyAnswer"
placeholder="Isulat dito ang iyong sagot..."
rows="8"
style="width:100%;font-size:20px;"></textarea>

<br><br>

<button onclick="checkStoryAnswer()">
ðŸ“‹ Suriin ang Sagot
</button>

<br><br>

<h3 id="storyScore"></h3>

<p id="storyFeedback"></p>
`
},

{
title:"ðŸŒ± Layunin ng Aralin",
content:`
Sa araling ito, matututuhan mo ang kahalagahan ng
<strong>pagtitipid</strong> at
<strong>pag-iimpok</strong>
bilang mabuting tagapangasiwa ng mga biyayang ipinagkaloob ng Diyos.
`
},

{
title:"ðŸŽ Mga Biyaya ng Diyos",
content:`
ðŸ‘¨â€ðŸ‘©â€ðŸ‘§ Pamilya<br>
â¤ï¸ Kalusugan<br>
ðŸ“š Edukasyon<br>
ðŸŽ Talento<br>
â° Oras<br>
ðŸ’° Pera

<br><br>

Ang lahat ng ito ay biyayang mula sa Diyos kaya dapat natin itong gamitin nang may pananagutan.
`
},

{
title:"ðŸ’° Ano ang Mabuting Tagapangasiwa?",
content:`
Ang mabuting tagapangasiwa ay marunong gumamit ng kanyang oras,
talento, at pera nang may pananagutan.

Ang pagtitipid at pag-iimpok ay nagpapakita ng pagiging mabuting katiwala
ng mga biyaya ng Diyos.
`
},

{
title:"ðŸŽ¯ Gawain 1",
content:`

<h3>Ano ang pinakamainam na gawin ni Maria?</h3>

<form id="activity1">

<label>
<input type="radio" name="answer" value="A">
ðŸ” Bilhin ang burger.
</label>

<br><br>

<label>
<input type="radio" name="answer" value="B">
ðŸŽ® Bilhin ang mobile game.
</label>

<br><br>

<label>
<input type="radio" name="answer" value="C">
ðŸ“š Bilhin ang kuwaderno at ipunin ang natitirang pera.
</label>

<br><br>

<label>
<input type="radio" name="answer" value="D">
ðŸ’¸ Gastusin ang buong â‚±500.
</label>

</form>

<br>

<button onclick="checkActivity1()">
Isumite ang Sagot
</button>

<p id="activityResult"></p>

`
},

{
title:"ðŸŽ® Laro: Pangangailangan o Kagustuhan",

content:`

<h2>Pangangailangan o Kagustuhan?</h2>

<p>Piliin kung ang bagay ay Pangangailangan o Kagustuhan.</p>

<hr>

<h1 id="gameWord">ðŸš Bigas</h1>

<button onclick="checkGame('need')">
ðŸ¥– Pangangailangan
</button>

<button onclick="checkGame('want')">
ðŸŽ Kagustuhan
</button>

<br><br>

<p id="gameFeedback"></p>

<p id="gameScore"></p>

`
}

,
{
title:"ðŸ“ Pagninilay",

content:`

<p>
Matapos ang aralin, sagutin ang tanong sa ibaba.
</p>

<hr>

<h3>
Bilang isang mabuting katiwala ng mga biyaya ng Diyos,
ano ang isang bagay na sisimulan mong gawin upang
makapagtipid o makapag-impok?
</h3>

<textarea
id="reflectionAnswer"
rows="8"
style="
width:90%;
font-size:18px;
padding:10px;
border-radius:10px;
"
placeholder="Isulat dito ang iyong sagot..."></textarea>

<br><br>

<button onclick="submitReflection()">
ðŸ’¾ Isumite ang Pagninilay
</button>

<br><br>

<p id="reflectionResult"></p>

`
},

{
title:"ðŸ† Sertipiko ng Pagkumpleto",

content:`

<div style="
max-width:900px;
margin:auto;
padding:40px;
border:10px solid #2E7D32;
background:#fffdf5;
border-radius:20px;
text-align:center;
">

<h3>Republic of the Philippines</h3>

<h3>Department of Education</h3>

<h2>Camachiles National High School</h2>

<hr>

<h1 style="color:#2E7D32;font-size:48px;">
ðŸ† CERTIFICATE OF COMPLETION
</h1>

<p>
This certificate is proudly presented to
</p>

<h1 id="certificateName"
style="
font-size:42px;
color:#1565C0;
margin:20px 0;
">
____________________
</h1>

<h3>
Section:
<span id="certificateSection">
________________
</span>
</h3>

<br>

<p style="font-size:22px;">

for successfully completing the Interactive Learning Module in

<strong>Values Education 7</strong>

</p>

<h3>

"Nakapag-uugnay sa kahalagahan ng pagtitipid at pag-iimpok sa sariling pangangasiwa sa mga biyaya ng Diyos."

</h3>

<br>

<p id="certificateDate"></p>

<br><br>

<button onclick="window.print()">
ðŸ–¨ï¸ I-print ang Sertipiko
</button>

</div>

`
}

];

let currentLesson = 0;

let activityFinished = false;

let reflectionFinished = false;

let storyPassed = false;

const lesson = document.getElementById("lesson");

const learnBtn = document.getElementById("learnBtn");

const playBtn = document.getElementById("playBtn");

const reflectionBtn = document.getElementById("reflectionBtn");

const certificateBtn = document.getElementById("certificateBtn");

const lessonTitle = document.getElementById("lessonTitle");

const lessonContent = document.getElementById("lessonContent");

function showLesson(){

lessonTitle.innerHTML = lessons[currentLesson].title;

lessonContent.innerHTML = lessons[currentLesson].content;

let percent=((currentLesson+1)/lessons.length)*100;

document.getElementById("progressBar").style.width=percent+"%";

document.getElementById("progressText").innerHTML=
"Hakbang "+(currentLesson+1)+" sa "+lessons.length;

// GAME
if(lessons[currentLesson].title==="ðŸŽ® Laro: Pangangailangan o Kagustuhan"){

    setTimeout(startGame,100);

}

// CERTIFICATE
if(lessons[currentLesson].title==="ðŸ† Sertipiko ng Pagkumpleto"){

    let studentName = localStorage.getItem("studentName");

    if(studentName == null){

        studentName = "Mag-aaral";

    }

    document.getElementById("certificateName").innerHTML = studentName;

    let section = localStorage.getItem("studentSection");

if(section==null){

section="";

}

document.getElementById("certificateSection").innerHTML =
section;

    let today = new Date();

    document.getElementById("certificateDate").innerHTML =
    "Petsa ng Pagkumpleto: " + today.toLocaleDateString('fil-PH');

}

}

learnBtn.onclick = function(){

    dashboard.style.display = "none";

    lesson.style.display = "flex";

    currentLesson = 0;

    showLesson();

};

playBtn.onclick = function(){

    dashboard.style.display = "none";

    lesson.style.display = "flex";

    currentLesson = 5;

    showLesson();

};

reflectionBtn.onclick=function(){

dashboard.style.display="none";

lesson.style.display="flex";

// Reflection is the last lesson
currentLesson=6;

showLesson();

};

certificateBtn.onclick = function(){

let kulang = [];

if(!activityFinished){
    kulang.push("âœ” Gawain");
}

if(!gameFinished){
    kulang.push("âœ” Laro");
}

if(!reflectionFinished){
    kulang.push("âœ” Pagninilay");
}

if(kulang.length > 0){

alert(
"ðŸ”’ Hindi pa maaaring makuha ang Sertipiko.\n\n" +
"Pakikumpleto muna ang sumusunod:\n\n" +
kulang.join("\n")
);

return;

}

dashboard.style.display="none";

lesson.style.display="flex";

currentLesson=7;

showLesson();

};

const nextBtn=document.getElementById("nextBtn");

nextBtn.onclick = function () {

    // Check only on the Story card (Card 1)
if(currentLesson===0){

    if(!storyPassed){

        alert("Kailangan mo munang pindutin ang 'ðŸ“‹ Suriin ang Sagot' at makakuha ng hindi bababa sa 6/10 bago magpatuloy.");

        return;

    }

}

if(currentLesson < 4){

    currentLesson++;

    showLesson();

}
else{

    activityFinished = true;

    alert("ðŸŽ‰ Binabati kita!\n\nNatapos mo ang aralin.\nIbabalik ka sa Dashboard upang piliin ang susunod na gawain.");

    lesson.style.display = "none";

    dashboard.style.display = "flex";

}

}

const prevBtn=document.getElementById("prevBtn");

prevBtn.onclick=function(){

if(currentLesson>0){

currentLesson--;

showLesson();

}

}
const backDashboard=document.getElementById("backDashboard");

backDashboard.onclick=function(){

lesson.style.display="none";

dashboard.style.display="flex";

}

function checkActivity1(){

let answer=document.querySelector('input[name="answer"]:checked');

if(answer==null){

alert("Pumili muna ng iyong sagot.");

return;

}

if(answer.value=="C"){

activityFinished = true;

document.getElementById("activityResult").innerHTML=
"âœ… Tama! Ang pagbili ng kailangan at pag-iimpok ng natitirang pera ay nagpapakita ng pagiging mabuting tagapangasiwa.";

}else{

document.getElementById("activityResult").innerHTML=

"âŒ Hindi pa tama. Isipin kung paano maipapakita ang pagtitipid at pag-iimpok.";

}

}

/* ==========================
   GAME
========================== */

const gameItems = [

{word:"ðŸš Bigas",answer:"need"},

{word:"ðŸ“š Kuwaderno",answer:"need"},

{word:"ðŸ’Š Gamot",answer:"need"},

{word:"ðŸ‘• Uniporme",answer:"need"},

{word:"ðŸ’¡ Bayad sa Kuryente",answer:"need"},

{word:"ðŸ§‹ Milk Tea",answer:"want"},

{word:"ðŸŽ® Mobile Game",answer:"want"},

{word:"ðŸŸ French Fries",answer:"want"},

{word:"ðŸŽ§ Headset",answer:"want"},

{word:"âŒš Mamahaling Relo",answer:"want"}

];

let gameNumber = 0;
let gamePoints = 0;

function startGame(){



gameNumber = 0;
gamePoints = 0;

showGame();

}

function showGame(){

document.getElementById("gameWord").innerHTML =
gameItems[gameNumber].word;

document.getElementById("gameFeedback").innerHTML="";

document.getElementById("gameScore").innerHTML =
"Iskor: " + gamePoints + " / " + gameItems.length;

}

function checkGame(choice){

if(choice===gameItems[gameNumber].answer){

gamePoints++;

document.getElementById("gameFeedback").innerHTML =
"âœ… Tama!";

}else{

document.getElementById("gameFeedback").innerHTML =
"âŒ Mali.";

}

setTimeout(function(){

gameNumber++;

if(gameNumber<gameItems.length){

showGame();

}else{

document.getElementById("gameWord").innerHTML =
"ðŸŽ‰ Natapos mo ang laro!";

document.getElementById("gameFeedback").innerHTML =
"Final Score: " + gamePoints + " / " + gameItems.length;

document.getElementById("gameScore").innerHTML =
"Mahusay! Maaari ka nang magpatuloy.";

gameFinished = true;

}

},800);

}

/* ==========================
   REFLECTION
========================== */

function saveReflection(){

let answer =
document.getElementById("reflectionAnswer").value.trim();

if(answer===""){

alert("Pakisulat muna ang iyong pagninilay.");

return;

}

localStorage.setItem("reflection",answer);

reflectionFinished = true;

document.getElementById("reflectionResult").innerHTML=
`
<div style="
background:#d4edda;
padding:15px;
border-radius:10px;
color:#155724;
font-size:20px;
">

âœ… Mahusay!

Naipakita mo ang iyong pag-unawa sa kahalagahan ng
pagtitipid at pag-iimpok bilang mabuting katiwala ng
mga biyaya ng Diyos.

</div>
`;

}

function checkStoryAnswer(){

let answer =
document.getElementById("storyAnswer").value.toLowerCase();

if(answer.trim()==""){

    alert("Pakisulat muna ang iyong sagot.");

    return;

}

let score = 0;

// ============================
// RUBRIC 1
// Binili ang kailangan
// ============================

if(
answer.includes("kuwaderno") ||
answer.includes("paaralan") ||
answer.includes("burger") ||
answer.includes("pera") ||
answer.includes("pangangailangan")
){

score += 3;

}

// ============================
// RUBRIC 2
// Nag-ipon
// ============================

if(
answer.includes("ipon") ||
answer.includes("impok") ||
answer.includes("magtabi") ||
answer.includes("itatabi") ||
answer.includes("save")
){

score += 3;

}

// ============================
// RUBRIC 3
// Responsableng paggamit
// ============================

if(
answer.includes("responsable") ||
answer.includes("wasto") ||
answer.includes("mabuting") ||
answer.includes("itatabi") ||
answer.includes("pera") ||
answer.includes("tagapangasiwa") ||
answer.includes("katiwala")
){

score += 3;

}

// ============================
// RUBRIC 4
// Pagbanggit sa Diyos
// ============================

if(
answer.includes("diyos") ||
answer.includes("biyaya") ||
answer.includes("pagpapala")
){

score += 3;

}

// ============================
// RUBRIC 5
// Mahabang paliwanag
// ============================

if(answer.length>=50){

score += 3;

}

// ============================
// TOTAL
// ============================

document.getElementById("storyScore").innerHTML =
"â­ Iskor: "+score+"/15";

let feedback="";

if(score>=9){

feedback="ðŸ† Napakahusay! Kumpleto at makabuluhan ang iyong paliwanag.";

}
else if(score>=7){

feedback="âœ… Mahusay! May ilang bahagi pang maaaring dagdagan.";

}
else if(score>=5){

feedback="ðŸ™‚ Katamtaman. Subukang ipaliwanag pa ang iyong sagot.";

}
else{

feedback="ðŸ“– Basahin muli ang kuwento at subukang sagutin muli.";

}

document.getElementById("storyFeedback").innerHTML =
feedback;

if(score >= 6){

    storyPassed = true;

}else{

    storyPassed = false;

}
}

function gradeReflection(answer){

    let score = 0;

    answer = answer.toLowerCase();

    // Criterion 1 - May konkretong aksyon
    if(
        answer.includes("gagawin") ||
        answer.includes("sisimulan") ||
        answer.includes("mag") ||
        answer.includes("ako")
    ){
        score += 5;
    }

    // Criterion 2 - Pagtitipid
    if(
        answer.includes("tipid") ||
        answer.includes("pagtitipid") ||
        answer.includes("magtitipid")
    ){
        score += 5;
    }

    // Criterion 3 - Pag-iimpok
    if(
        answer.includes("ipon") ||
        answer.includes("mag-iipon") ||
        answer.includes("impok")
    ){
        score += 5;
    }

    // Criterion 4 - Pananagutan
    if(
        answer.includes("responsable") ||
        answer.includes("pananagutan") ||
        answer.includes("maingat")
    ){
        score += 5;
    }

    // Criterion 5 - Diyos
    if(
        answer.includes("diyos") ||
        answer.includes("biyaya") ||
        answer.includes("katiwala")
    ){
        score += 5;
    }

    return score;

}

function submitReflection(){

    const answer =
    document.getElementById("reflectionAnswer").value.trim();

    if(answer===""){

        alert("Pakisagot muna ang pagninilay.");

        return;

    }

    let score = gradeReflection(answer);

    let remarks = "";

    if(score>=9){

        remarks="ðŸ† Napakahusay";

    }else if(score>=7){

        remarks="ðŸ¥‡ Mahusay";

    }else if(score>=5){

        remarks="ðŸ‘ Katamtaman";

    }else{

        remarks="ðŸ“– Kailangang pagbutihin";

    }

    document.getElementById("reflectionResult").innerHTML=

    "<h3>Score: "+score+" </h3>" +

    "<h3>"+remarks+"</h3>";

    reflectionFinished=true;

}

if("serviceWorker" in navigator){

window.addEventListener("load",function(){

navigator.serviceWorker.register("sw.js");

});

}
