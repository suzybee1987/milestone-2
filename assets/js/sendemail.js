    const subBtn = document.getElementById('submitEmail');

    document.getElementById('form')
        .addEventListener('submit', function (event) {
            event.preventDefault();

            subBtn.value = 'Sending...';

            const serviceID = 'service_hmey31f';
            const templateID = 'discworld';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    subBtn.value = 'Send Email';
                    alert('Thanks for your feedback!');
                }, (err) => {
                    subBtn.value = 'Send Email';
                    alert(JSON.stringify(err));
                });
        });
// https: //stackoverflow.com/questions/32244107/bootstrap-form-fields-not-clearing-after-submit 
    $('#form').on('submit', function () {
        $(this).each(function () {
            this.reset();
        });
    });