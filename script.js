const sounds =  ['合掌','故人','お直り下さい','ご焼香願います','ありがとうございました']

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
  　
    btn.innerText = sound;
  
    btn.addEventListener('click', () => {
      stopmp3()
      
      document.getElementById(sound).play();
    })
  
    document.getElementById('buttons').appendChild(btn);
  })