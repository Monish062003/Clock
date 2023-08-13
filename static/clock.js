let time,hours,minutes,seconds;
let hourarrow,minutearrow,secondarrow;

hourarrow=document.getElementById("hoursarrow");
minutearrow=document.getElementById("minutesarrow");
secondarrow=document.getElementById("secondsarrow");

const hour=document.getElementsByClassName("texttime")[0];
const minute=document.getElementsByClassName("texttime")[1];
const second=document.getElementsByClassName("texttime")[2];
const millisecond=document.getElementsByClassName("texttime")[3];

let activestart,arrowrotator,timedisplay;
let clockrotator=()=>{
        timedisplay=(()=>{
            hour.innerHTML=hours+"";
            minute.innerHTML=minutes+"";
            second.innerHTML=seconds+"";
        });
        
        arrowrotator=(()=>{
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

        
        activestart=setInterval(()=>{
            time=new Date();
            hours=time.getHours();
            seconds=time.getSeconds();
            minutes=time.getMinutes();
            timedisplay();
            arrowrotator();
        },1000);

}

clockrotator();

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

module.exports={
    arrowrotator:arrowrotator,
    timedisplay:timedisplay
};