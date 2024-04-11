

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList.add("modal__overlay--visible"); // Corrected
    emailjs
    .sendForm( // Corrected
        'service_iexo6at',
        'template_mnczjqc',
        event.target,
        'D8AzacTu3Aho9NZBE'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList.add("modal__overlay--visible"); // Corrected
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me on tristiankorn@gmail.com" // Corrected
        );
    });
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
  isModalOpen = true;
  document.body.classList += " modal__open"
}