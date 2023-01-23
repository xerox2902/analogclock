setInterval(() => {
   date  =new Date();
   htime = date.getHours();
   mtime = date.getMinutes();
   stime = date.getSeconds();
   hRotation = (htime*30) + (mtime/2)  +(stime/120);
   mRotation = (mtime*6) + (stime/10);
   sRotation = 6*stime;
   hour.style.transform =`rotate(${hRotation}deg)`;
   minutes.style.transform =`rotate(${mRotation}deg)`;
   seconds.style.transform =`rotate(${sRotation}deg)`;
}, 1000);
let string="";
setInterval(() => {
   date  =new Date();
   htime = date.getHours();
   mtime = date.getMinutes();
   stime = date.getSeconds();
   if(htime>=12){
      document.getElementById('session').innerHTML="PM";
      htime=htime-12;
   }
   document.getElementById('hourd').innerHTML=htime;
   document.getElementById('minutesd').innerHTML=mtime;
   document.getElementById('secondsd').innerHTML=stime;
}, 1000);