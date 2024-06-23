document.addEventListener('DOMContentLoaded', function () {
    var loginBtn = document.getElementById('loginBtn');
    var reportSection = document.getElementById('reportSection');
    var reportsSection = document.getElementById('reportsSection');
    var reportForm = document.getElementById('reportForm');
    var reportsDiv = document.getElementById('reports');
    if (loginBtn) {
        loginBtn.addEventListener('click', function () {
            // Simulate Facebook login
            alert('Logged in with Facebook!');
            if (reportSection)
                reportSection.style.display = 'block';
            if (reportsSection)
                reportsSection.style.display = 'block';
        });
    }
    if (reportForm) {
        reportForm.addEventListener('submit', function (event) {
            event.preventDefault();
            var descriptionInput = document.getElementById('description');
            var photoInput = document.getElementById('photo');
            if (!descriptionInput || !photoInput) {
                alert('Form elements not found.');
                return;
            }
            var description = descriptionInput.value;
            var photo = photoInput.files ? photoInput.files[0] : null;
            if (!description || !photo) {
                alert('Please provide both a description and a photo.');
                return;
            }
            // Create a new report element
            var reportDiv = document.createElement('div');
            reportDiv.className = 'report';
            var photoURL = URL.createObjectURL(photo);
            reportDiv.innerHTML = "\n                <p><strong>Description:</strong> " + description + "</p>\n                <p><strong>Photo:</strong> <img src=\"" + photoURL + "\" alt=\"Reported Issue Photo\" style=\"max-width: 100%; height: auto;\"></p>\n            ";
            // Append the new report to the reports section
            if (reportsDiv) {
                reportsDiv.appendChild(reportDiv);
            }
            // Reset form
            reportForm.reset();
            alert('Report submitted successfully!');
        });
    }
});