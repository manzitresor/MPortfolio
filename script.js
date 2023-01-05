const nameInput = document.querySelector('#fullname')
const email = document.querySelector('#email')
const messaget = document.querySelector('#message')
const success = document.querySelector('#success')
const errorNodes = document.querySelectorAll('.error')


function validateForm(){
if(nameInput.value.length<1){

    clearMessage();

    errorNodes[0].innerText="You can not send Empty an Form";
    nameInput.classList.add('error-border');
}


}
function clearMessage(){
    for(let i =0; i< errorNodes.length;i++ ){
        errorNodes[i].innerText ="";
    }
    nameInput.classList.remove('error-border')

}