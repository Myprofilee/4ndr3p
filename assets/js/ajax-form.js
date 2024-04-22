$(function () {

    // Get the form and budget container
    var form = $('#contact-form');
    var budgetContainer = $('#budgetContainer');

    // Hide budget container by default
    budgetContainer.hide();

    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
        // Get selected kategori value
        var selectedKategori = $('#kategoriSelect').val();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Check if kategori is jasa website
        if (selectedKategori === 'jasa website') {
            formData += '&budget=' + $('select[name="budget"]').val();
        } else {
            // Remove budget from form data if kategori is contact
            formData = formData.replace(/&?budget=[^&]+/g, '');
        }

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData,
            dataType: 'json',
            encode: true
        })
        .done(function (response) {
            // Handle success
        })
        .fail(function () {
            // Handle error
        });

        // Prevent the default form submission
        e.preventDefault();
    });

    // Show or hide budget container based on kategori selection
    $('#kategoriSelect').change(function() {
        if ($(this).val() === 'jasa website') {
            budgetContainer.show();
        } else {
            budgetContainer.hide();
        }
    });

});