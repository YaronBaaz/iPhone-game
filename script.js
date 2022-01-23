const imgs = document.getElementById("imgs")
const img = document.querySelectorAll("#imgs img")
let idx= 0;


const clicker = document.getElementById("click");
const scorebox = document.getElementById("scorebox")
const ppc = document.getElementById("ppc")
let ppcNumber = 1;
ppc.innerText = ppcNumber;

const pps = document.getElementById("pps")
let ppsNumber = 0;
pps.innerText = ppsNumber;

const upgradeButton = document.getElementById("btn") 
let score = 0;
scorebox.innerText = score;

var iphones=["Iphone 1","Iphone 3g", "Iphone 4", "iphone 5", "iphone 6","iphone 7", "iphone 8", "iphone 10","iphone 11", "iphone 12",]
const iphoneVer = document.getElementById("iphoneVer")
let iphoneVersionNumber = 0
iphoneVer.innerText=iphones[iphoneVersionNumber];

const pointsForUpgradeBox = document.getElementById("pointsForUpgrade")
let pointsForUpgrade = 1000;
pointsForUpgradeBox.innerText=pointsForUpgrade

setInterval(checkUpgrade, 100)
setInterval(automaticCounter, 1000)

/* UPGRADE 1*/

const upgrade1= document.getElementById("upgrade1");
const upgrade1req = document.getElementById("upgrade1req");
const upgrade1count = document.getElementById("upgrade1count");
let upgrade1reqNumber = 10; 
let upgrade1countNumber = 0;

upgrade1req.innerText= upgrade1reqNumber;
upgrade1count.innerText= upgrade1countNumber;

upgrade1.addEventListener("click", () =>{
    if (score >= upgrade1reqNumber){
        upgrade1countNumber++;
        score = score - upgrade1reqNumber;
        upgrade1reqNumber = Math.floor(upgrade1reqNumber * 1.5);
        upgrade1req.innerText= upgrade1reqNumber;
        upgrade1count.innerText= upgrade1countNumber;
        scorebox.innerText = score;
    }
})

/* UPGRADE 2*/

const upgrade2= document.getElementById("upgrade2");
const upgrade2req = document.getElementById("upgrade2req");
const upgrade2count = document.getElementById("upgrade2count");
let upgrade2reqNumber = 150; 
let upgrade2countNumber = 0;

upgrade2req.innerText= upgrade2reqNumber;
upgrade2count.innerText= upgrade2countNumber;

upgrade2.addEventListener("click", () =>{
    if (score >= upgrade2reqNumber){
        upgrade2countNumber++;
        score = score - upgrade2reqNumber;
        upgrade2reqNumber = Math.floor(upgrade2reqNumber * 1.6);
        upgrade2req.innerText= upgrade2reqNumber;
        upgrade2count.innerText= upgrade2countNumber;
        scorebox.innerText = score;
    }
})

/* UPGRADE 3*/

const upgrade3= document.getElementById("upgrade3");
const upgrade3req = document.getElementById("upgrade3req");
const upgrade3count = document.getElementById("upgrade3count");
let upgrade3reqNumber = 1000; 
let upgrade3countNumber = 0;

upgrade3req.innerText= upgrade3reqNumber;
upgrade3count.innerText= upgrade3countNumber;

upgrade3.addEventListener("click", () =>{
    if (score >= upgrade3reqNumber){
        upgrade3countNumber++;
        score = score - upgrade3reqNumber;
        upgrade3reqNumber = Math.floor(upgrade3reqNumber * 1.7);

        upgrade3req.innerText= upgrade3reqNumber;
        upgrade3count.innerText= upgrade3countNumber;
        scorebox.innerText = score;
    }
})

/*UPGRADE 4*/

const upgrade4= document.getElementById("upgrade4");
const upgrade4req = document.getElementById("upgrade4req");
const upgrade4count = document.getElementById("upgrade4count");
let upgrade4reqNumber = 10000; 
let upgrade4countNumber = 0;

upgrade4req.innerText= upgrade4reqNumber;
upgrade4count.innerText= upgrade4countNumber;

upgrade4.addEventListener("click", () =>{
    if (score >= upgrade4reqNumber){
        upgrade4countNumber++;
        score = score - upgrade4reqNumber;
        upgrade4reqNumber = Math.floor(upgrade4reqNumber * 2);

        upgrade4req.innerText= upgrade4reqNumber;
        upgrade4count.innerText= upgrade4countNumber;
        scorebox.innerText = score;
    }
})

/*UPGRADE 5*/

const upgrade5= document.getElementById("upgrade5");
const upgrade5req = document.getElementById("upgrade5req");
const upgrade5count = document.getElementById("upgrade5count");
let upgrade5reqNumber = 150000; 
let upgrade5countNumber = 0;

upgrade5req.innerText= upgrade5reqNumber;
upgrade5count.innerText= upgrade5countNumber;

upgrade5.addEventListener("click", () =>{
    if (score >= upgrade5reqNumber){
        upgrade5countNumber++;
        score = score - upgrade5reqNumber;
        upgrade5reqNumber = Math.floor(upgrade5reqNumber * 1.75);

        upgrade5req.innerText= upgrade5reqNumber;
        upgrade5count.innerText= upgrade5countNumber;
        scorebox.innerText = score;
    }
})

/*UPGRADE 6*/

const upgrade6= document.getElementById("upgrade6");
const upgrade6req = document.getElementById("upgrade6req");
const upgrade6count = document.getElementById("upgrade6count");
let upgrade6reqNumber = 500000; 
let upgrade6countNumber = 0;

upgrade6req.innerText= upgrade6reqNumber;
upgrade6count.innerText= upgrade6countNumber;

upgrade6.addEventListener("click", () =>{
    if (score >= upgrade6reqNumber){
        upgrade6countNumber++;
        score = score - upgrade6reqNumber;
        upgrade6reqNumber = Math.floor(upgrade6reqNumber * 1.52);

        upgrade6req.innerText= upgrade6reqNumber;
        upgrade6count.innerText= upgrade6countNumber;
        scorebox.innerText = score;
    }
})

/* If click on iphone score goes up by 1*/

/* SCORE UPDATED HERE*/

clicker.addEventListener("click", () =>{
    /*SUPER IMPORTANT  SCORE IS HERE*/
    score = score + ppcNumber
    scorebox.innerText = score
})


 /* UPGRADING THE IPHONE */ 
upgradeButton.addEventListener("click",()=>{
    if (score> pointsForUpgrade){

        /* if you did all the upgrades, it disables the upgrade button*/
        if (iphoneVersionNumber == 8){
            upgradeButton.classList.remove("active");
            upgradeButton.classList.add("inactive"); 
            pointsForUpgrade = ""; /* dont put text here messes up everything*/
            pointsForUpgradeBox.innerText=pointsForUpgrade
        }
        if (iphoneVersionNumber > 8){

            upgradeButton.classList.remove("active");
            upgradeButton.classList.add("inactive"); /*if no more upgrades inactivate it*/
          
        }
    
    /* else if you didnt do all the upgrades than its going to upgrade your iphone*/    
    else{
    
    iphoneUpgrader()
    
    iphoneVersionNumber++
    iphoneVer.innerText=iphones[iphoneVersionNumber];

    score= score - pointsForUpgrade;
    scorebox.innerText = score;
    upgradeButton.classList.remove("active");
    pointsForUpgrade = pointsForUpgrade * 10; /*change this*/
    pointsForUpgradeBox.innerText=pointsForUpgrade
    }}
})

/* AUTOMATIC COUNTER */
function automaticCounter(){
    if (iphoneVersionNumber > 0) /* if iphone was upgrade*/{
        let autoclickerpoints = iphoneVersionNumber *5;
        score = score + autoclickerpoints;
        pps.innerText = autoclickerpoints;
        scorebox.innerText = score;
    }
}

/*checks if you can buy the upgrade*/
function checkUpgrade(){
    if (score > pointsForUpgrade){
        upgradeButton.classList.add("active");

    }
    ppcNumber = 1 + (upgrade1countNumber*1) + (upgrade2countNumber*3)+(upgrade3countNumber*6)+(upgrade4countNumber*12)+(upgrade5countNumber*20)+(upgrade6countNumber*40)
    ppc.innerText = ppcNumber
    /*running the upgrade blur*/
    upgradeBlur()
    
}

/* once you buy the upgrade it switches the iphone*/
function iphoneUpgrader(){
    idx++; 
    imgs.style.transform=`translateX(${idx*-337}px)`
}

/*TURN UPGRADES DARK IF CANT AFFORD*/

function upgradeBlur(){
    if (score < upgrade1reqNumber){
        upgrade1.classList.add("dark");
    }
    else{
        upgrade1.classList.remove("dark")
    }

    if (score < upgrade2reqNumber){
        upgrade2.classList.add("dark");
    }
    else{
        upgrade2.classList.remove("dark")
    }

    if (score < upgrade3reqNumber){
        upgrade3.classList.add("dark");
    }
    else{
        upgrade3.classList.remove("dark")
    }

    if (score < upgrade4reqNumber){
        upgrade4.classList.add("dark");
    }
    else{
        upgrade4.classList.remove("dark")
    }

    if (score < upgrade5reqNumber){
        upgrade5.classList.add("dark");
    }
    else{
        upgrade5.classList.remove("dark")
    }
    if (score < upgrade6reqNumber){
        upgrade6.classList.add("dark");
    }
    else{
        upgrade6.classList.remove("dark")
    }
}