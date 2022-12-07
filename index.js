let reference = document.getElementById("txtn");
let cards = document.querySelectorAll(".cards li")

reference.addEventListener('input', () => {
  if(reference.value !== ''){
    for(let card of cards){
    let title = card.querySelector('h2')

    let filterText = title.textContent.toLowerCase();
    let r = reference.value.toLowerCase()

    if(!filterText.includes(r)){
      card.style.cssText = `
      opacity: 0;
      transform: scale(0);
      `
    }
    else{
      card.style.cssText = `
      opacity: 1;
      `
    }
   }
  }
   else{
     for(let card of cards){
       card.style.cssText = `
      opacity: 1;
      transform: scale(1);
       `
     }
  }
})

function fundo(){
  const header = document.querySelector(".header i")
  const fun = document.querySelector("#fundo");
  const main = document.querySelector('#main');
  const ul = document.querySelector('#ul');
  const foo = document.querySelector("#footer")

  let cls = fun.getAttribute('class')
  console.log(cls)

  if(cls == 'circle'){
    fun.classList.add('back-white');
    document.body.classList.add('white');
    foo.classList.add("footer-black")
    main.style.cssText = `
    border: 1px solid black
    `
    ul.style.cssText = `
    border: 1px solid black
    `
    reference.style.cssText = `
    background-color: #1c1f26;
    color:white;
    `
    header.style.cssText = `
    color:white;
    `

  }
  else{
    fun.classList.remove('back-white')
    document.body.classList.remove('white')
    foo.classList.remove('footer-black')
    main.style.cssText = `
    border: 1px solid white;
    `
    ul.style.cssText = `
    border: 1px solid white;
    `
    reference.style.cssText = `
    background-color: white;
    color:black;
    `
    header.style.cssText = `
    color:black;
    `
    }
  }
