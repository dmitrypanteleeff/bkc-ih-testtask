
const input = document.querySelectorAll('.input__file')

const addClassInput = (itemInput) => {
    //console.dir(itemInput)
    const check = itemInput.nextElementSibling.querySelector('.box__text-check');
    const img = itemInput.nextElementSibling.querySelector('.card-item__circle-img');
    img.src = 'img/img-pen.svg'
    check.classList.remove('box__text-check-none')
}

input.forEach(itemInput => {
    itemInput.addEventListener('change',function(){
        if( this.value ){
            addClassInput(itemInput);
          } else {
          }
    });
})

