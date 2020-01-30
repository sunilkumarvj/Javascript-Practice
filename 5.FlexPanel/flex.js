const panels= document.querySelectorAll('.panel');

      function toggleOpen() {
        console.log("hello");
          this.classList.toggle('open');// when it clicks open it(eventlistener)
          
      }
      function toggleActive(e){
          console.log(e.propertyName); 
          if(e.propertyName.includes('flex')){
                this.classList.toggle('open-active');//remove toggle 
          }
        
      }

      panels.forEach(panel => panel.addEventListener('click', toggleOpen));//listening for click of each panel

      panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));//remove the taggle at transitionend