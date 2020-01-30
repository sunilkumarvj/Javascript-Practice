const inputs=document.querySelectorAll('.controls input');//taking all the elements of input

      function handleUpdate(){
          const suffix= this.dataset.sizing || '';//dataset is an object that contains all the data attributes from specific element(data-sizing)
      document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);//setting the propery of name to value
      }
      inputs.forEach(input=> input.addEventListener('change',handleUpdate));//taking each element and loop over each eliments of inputs. Event listner listening for change event
      inputs.forEach(input=> input.addEventListener('mousemove',handleUpdate))//listening for mouse move

