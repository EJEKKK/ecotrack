// Declare the FB object to avoid TypeScript errors
declare const FB: any;

interface Window {
    fbAsyncInit: () => void;
}

document.addEventListener('DOMContentLoaded', function() {
    // Facebook SDK initialization
    window.fbAsyncInit = function() {
        FB.init({
            appId: '436785522663409', // Replace 'YOUR_APP_ID' with your actual Facebook App ID
            cookie: true,
            xfbml: true,
            version: 'v13.0'
        });

        FB.AppEvents.logPageView();
    };

    const loginBtn = document.getElementById('loginBtn') as HTMLButtonElement | null;
    const reportSection = document.getElementById('reportSection') as HTMLElement | null;
    const reportsSection = document.getElementById('reportsSection') as HTMLElement | null;
    const reportForm = document.getElementById('reportForm') as HTMLFormElement | null;
    const reportsDiv = document.getElementById('reports') as HTMLElement | null;

    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            FB.login(function(response: any) {
                if (response.authResponse) {
                    alert('Logged in with Facebook!');
                    if (reportSection) reportSection.style.display = 'block';
                    if (reportsSection) reportsSection.style.display = 'block';
                } else {
                    alert('User cancelled login or did not fully authorize.');
                }
            }, {scope: 'public_profile,email'});
        });
    }

    if (reportForm) {
        reportForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const descriptionInput = document.getElementById('description') as HTMLTextAreaElement | null;
            const photoInput = document.getElementById('photo') as HTMLInputElement | null;

            if (!descriptionInput || !photoInput) {
                alert('Form elements not found.');
                return;
            }

            const description = descriptionInput.value;
            const photo = photoInput.files ? photoInput.files[0] : null;

            if (!description || !photo) {
                alert('Please provide both a description and a photo.');
                return;
            }

            // Create a new report element
            const reportDiv = document.createElement('div');
            reportDiv.className = 'report';
            const photoURL = URL.createObjectURL(photo);
            reportDiv.innerHTML = `
                <p><strong>Description:</strong> ${description}</p>
                <p><strong>Photo:</strong> <img src="${photoURL}" alt="Reported Issue Photo" style="max-width: 100%; height: auto;"></p>
            `;

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