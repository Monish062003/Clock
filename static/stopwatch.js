let time,hours,minutes,seconds,milliseconds;
let hourarrow,minutearrow,secondarrow,timestart,timeiterate=0;

hourarrow=document.getElementById("hoursarrow");
minutearrow=document.getElementById("minutesarrow");
secondarrow=document.getElementById("secondsarrow");

const hour=document.getElementsByClassName("texttime")[0];
const minute=document.getElementsByClassName("texttime")[1];
const second=document.getElementsByClassName("texttime")[2];
const millisecond=document.getElementsByClassName("texttime")[3];

let clearbtn=document.getElementById("Clear");
let stopwatchbtn=document.getElementById("Startwatch");
let savebtn=document.getElementById("Save");
let leftcol=document.getElementsByClassName("leftcol")[0];

let stopwatch=()=>{
    if (hours==null && minutes==null && seconds==null) {
        hours=minutes=seconds=0;
    }

    let timedisplay=(()=>{
        hour.innerHTML=hours+"";
        minute.innerHTML=minutes+"";
        second.innerHTML=seconds+"";
    });
    
    let arrowrotator=(()=>{
        if (hours<=12) {
            hourarrow.style.transform=`rotate(${hours*30}deg)`;
        }
        else{
            hours-=12;
            hourarrow.style.transform=`rotate(${hours*30}deg)`;
        }
        
        secondarrow.style.transform=`rotate(${seconds*6}deg)`;
        minutearrow.style.transform=`rotate(${minutes*6}deg)`;

        hourarrow.style.transformOrigin="bottom";
        minutearrow.style.transformOrigin="bottom";
        secondarrow.style.transformOrigin="bottom";
    });


    timestart=setInterval(()=>{
        time=new Date();
        milliseconds=parseInt(Math.round((time.getMilliseconds())/16));
        
        if (milliseconds>=55 && milliseconds<=60 ) {
            seconds+=1;
            if (parseInt(seconds)==60) {
                minutes+=1;
                if (parseInt(minutes)==60) {
                    hours+=1;
                    minutes=0;
                }
                seconds=0;
            }
        }

        millisecond.innerHTML=milliseconds+"";

        timedisplay();
        arrowrotator();
    },100);

    
}

let x=((key)=>{
    let link="/";
    switch (key) {
        case 0:
            link="/changetime"  
            break;

        case 1:
            link="/worldclock"
            break;

        case 2:
            link="/stopwatch"
            break;

        case 3:
            link="/"
            break;
    
        default:
            link="/"
            break;
}
    window.location.href=link;
});

let start_stop=(()=>{
    let btnvalue = stopwatchbtn.innerHTML;
    if (btnvalue=="Stop") {
        stopwatchbtn.innerHTML="Start";
        clearInterval(timestart);
    } else {
        stopwatchbtn.innerHTML="Stop";
        stopwatch();
    }
});

let clear=(()=>{
    if (clearbtn.innerHTML=="Clear") {
        stopwatchbtn.innerHTML="Start";
        clearInterval(timestart);
        hours=minutes=seconds=0;
        hour.innerHTML="0";
        minute.innerHTML="0";
        second.innerHTML="0";
        millisecond.innerHTML="0";
    }
});

let panel1,scb,ssb=[],deltimebtn;

let save=(()=>{
    panel1=document.createElement("div");
    scb=document.createElement("div");
    deltimebtn=document.createElement("button");

    panel1.classList.add("panel1");
    scb.classList.add("savetimecirclebox")
    deltimebtn.classList.add("delbin");

    scb.innerHTML=`${timeiterate}`;
    deltimebtn.innerHTML="Del";

    leftcol.appendChild(panel1);
    panel1.appendChild(scb);
    for (let index = 0; index < 4; index++) {
        ssb[index]=document.createElement("div");
        ssb[index].classList.add("savetimesquarebox");
        panel1.appendChild(ssb[index]);
    }

    panel1.appendChild(deltimebtn);

    ssb[0].innerHTML=`${hours}`;
    ssb[1].innerHTML=`${minutes}`;
    ssb[2].innerHTML=`${seconds}`;
    ssb[3].innerHTML=`${milliseconds}`;
    timeiterate+=1;
});


leftcol.addEventListener('click',function (e) {
    if (e.target.tagName=="BUTTON") {
        e.target.parentElement.remove();
    }
})

stopwatchbtn.addEventListener('click',start_stop);
clearbtn.addEventListener('click',clear);
savebtn.addEventListener('click',save)