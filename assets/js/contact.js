document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const kategori = document.querySelector('select[name="kategori"]').value;
    const budget = kategori === 'jasa website' ? document.querySelector('select[name="budget"]').value : '';
    const message = document.querySelector('textarea[name="message"]').value;

    let body = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AKategori: ${kategori}%0A`;

    if (kategori === 'jasa website') {
        body += `Budget: ${budget}%0A`;
    }

    body += `Message: ${message}`;

    const emailLink = `mailto:andrep13.id@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = emailLink;
});
