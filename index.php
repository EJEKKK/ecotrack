<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ECOTRACK</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>ECOTRACK</h1>
        <fb:login-button 
            scope="public_profile,email"
            onlogin="checkLoginState();">
        </fb:login-button>
    </header>
    <main>
        <section id="reportSection" style="display:none;">
            <h2>Report Environmental Issue</h2>
            <form id="reportForm">
                <label for="description">Description:</label>
                <textarea id="description" name="description" required></textarea>
                <label for="photo">Upload Photo:</label>
                <input type="file" id="photo" name="photo" accept="image/*" required>
                <button type="submit">Submit Report</button>
            </form>
        </section>
        <section id="reportsSection" style="display:none;">
            <h2>Reported Issues</h2>
            <div id="reports"></div>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 ECOTRACK. All rights reserved.</p>
    </footer>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>
    <script>
        window.fbAsyncInit = function() {
            FB.init({
                appId      : '436785522663409',
                cookie     : true,
                xfbml      : true,
                version    : 'v20.0'
            });

            FB.AppEvents.logPageView();   
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        function checkLoginState() {
            FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
            });
        }

        function statusChangeCallback(response) {
            if (response.status === 'connected') {
                // Logged into your webpage and Facebook.
                console.log('Successfully logged in with Facebook');
                FB.api('/me?fields=name,email', function(response) {
                    console.log('Successful login for: ' + response.name);
                    console.log('Email: ' + response.email);
                    // Show the report sections
                    document.getElementById('reportSection').style.display = 'block';
                    document.getElementById('reportsSection').style.display = 'block';
                    // Hide the login button
                    document.querySelector('fb\\:login-button').style.display = 'none';
                });
            } else {
                // Not logged into your webpage or unable to tell.
                console.log('User not authenticated');
            }
        }
    </script>
</body>
</html>
