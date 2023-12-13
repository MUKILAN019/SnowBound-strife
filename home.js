var containers=document.getElementsByClassName("button");
Array.from(containers).forEach(function(containers,i){
    containers.addEventListener("click",function(){
        if (i==0){
            funcNo1();
        }
        else if(i==1){
            funcNo2();
        }
        else if(i==2){
            funcNo3();
        }
    })
})
function funcNo1(){
    console.log("started")
    const image = document.getElementById('santahome');
    //adding motion to image
    image.style.transform = 'translateY(-100px)';
     // Adjust the duration to match the CSS animation duration
    setTimeout(() => {
        image.style.transform = 'translateY(0)';
        
      }, 500);
     
     setTimeout(()=>{
        window.location.href="./start.html";
     },1000);
    }

function funcNo2(){
    const image = document.getElementById('santahome');
    //adding motion to image
    image.style.transform = 'translateY(-100px)';
    // Adjust the duration to match the CSS animation duration
    setTimeout(() => {
        image.style.transform = 'translateY(0)';
        }, 500);
    setTimeout(()=>{
            window.location.href="./about1.html";
        },1000);
}
function funcNo3(){
    window.close();
}
