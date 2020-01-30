const secondHand=document.querySelector('.second-hand');//taking sec-hand element
      const minHand=document.querySelector('.min-hand');//taking min-hand element
      const hourHand=document.querySelector('.hour-hand');
      function setDate(){

          const now=new Date();//taking date value
          const seconds= now.getSeconds();//taking the seconds from system
          const secondsDegrees=((seconds/60)*360)+90 ;
          secondHand.style.transform=`rotate(${secondsDegrees}deg)`;

          const mins= now.getMinutes();
          const minsDegrees=((mins/60)*360)+90 ;
          minHand.style.transform=`rotate(${minsDegrees}deg)`;

          const hour= now.getHours();
          const hourDegrees=((hour/12)*360)+90 ;//setting hour hand to rotate
          hourHand.style.transform=`rotate(${hourDegrees}deg)`;
          console.log(seconds);
      }
      setInterval(setDate,1000);//setting time interval

      setDate();