const imgs = document.getElementById("imgs")
const img = document.querySelectorAll("#imgs img")
let idx= 0;

const clicker = document.getElementById("click");
const scorebox = document.getElementById("scorebox")
const upgradeButton = document.getElementById("btn") 
let score = 500;
scorebox.innerText = score;

var iphones=["Iphone 1","Iphone 3g", "Iphone 4", "iphone 5", "iphone 6","iphone 7", "iphone 8", "iphone 10","iphone 11", "iphone 12",]
const iphoneVer = document.getElementById("iphoneVer")
let iphoneVersionNumber = 0
iphoneVer.innerText=iphones[iphoneVersionNumber];

const pointsForUpgradeBox = document.getElementById("pointsForUpgrade")
let pointsForUpgrade = 10;
pointsForUpgradeBox.innerText=pointsForUpgrade

setInterval(checkUpgrade, 100)

/* UPGRADE 1*/

const upgrade1= document.getElementById("upgrade1");
const upgrade1req = document.getElementById("upgrade1req");
const upgrade1count = document.getElementById("upgrade1count");
let upgrade1reqNumber = 500; 
let upgrade1countNumber = 0;

upgrade1req.innerText= upgrade1reqNumber;
upgrade1count.innerText= upgrade1countNumber;

/* UPGRADE 2*/

const upgrade2= document.getElementById("upgrade2");
const upgrade2req = document.getElementById("upgrade2req");
const upgrade2count = document.getElementById("upgrade2count");
let upgrade2reqNumber = 5500; 
let upgrade2countNumber = 0;

upgrade2req.innerText= upgrade2reqNumber;
upgrade2count.innerText= upgrade2countNumber;



clicker.addEventListener("click", () =>{
    score++;
    scorebox.innerText = score
    
})



upgradeButton.addEventListener("click",()=>{
    if (score> 10){
        
        if (iphoneVersionNumber > 8){
            upgradeButton.classList.remove("active");
            upgradeButton.classList.add("inactive"); /*if no more upgrades inactivate it*/
            pointsForUpgrade = "";
            pointsForUpgradeBox.innerText=pointsForUpgrade
        }
       
    else{
    
    iphoneUpgrader()
    
    iphoneVersionNumber++
    iphoneVer.innerText=iphones[iphoneVersionNumber];

    score= score - 10;
    scorebox.innerText = score;
    upgradeButton.classList.remove("active");
    }}
})


function checkUpgrade(){
    if (score > 10){
        upgradeButton.classList.add("active");
    }
}

function iphoneUpgrader(){
    idx++; 
    imgs.style.transform=`translateX(${idx*-337}px)`
}