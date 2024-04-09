// 
// 
// 

function contact(event) {
    event.preventDefault();
    // emailjs
    // .sendform(
    //     'service_iexo6at',
    //     'template_mnczjqc',
    //     event.target,
    //     'D8AzacTu3Aho9NZBE'
    // ).then(() => {
    //     console.log('this worked wooohooo')
    // })
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    setTimeout(() => {
        console.log('it worked 1')
    }, 1000);
}

