function playSound(e){
      
    const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);//taking the keycode from particular single element
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // console.log(audio);
    if(!audio)return; //stop the fuction from running all together
    audio.currentTime=0;//revind to the start
    audio.play();
  key.classList.add('playing');


}
function removeTransition(e){
  if(e.propertyName!=='transform') return; //skip it if it is not a transform
  console.log(this);
  this.classList.remove('playing');//it will remove the playing
}
window.addEventListener('keydown', playSound);//it will play the sound when keydown

const keys=document.querySelectorAll('.key');//it will take all the key associated with key name

keys.forEach(key=> key.addEventListener('transitionend', removeTransition));//remove the transition