## DevVerse
-Create vite React App
-Install  tailwind css and daisy ui
-Add navbar component to app.jsx
-Create a Navbar.jsx to  a seperate component file
-Install react router dom and handle all the routing
-Create a login page
-Install axios
-CORS-Install cors in backend=>add middleware to app.js with configurations:origin, credentials:true
-In Frontend whenever you are making api call pass axios=>{withcredentials:true}  otherwise cookies will not be sent.
-the login and signup page is created
-basic routing is done and the basic folder structure is created
-navbar is created
-after the user is logged in the redux store is created to store the authenticated user's data
-Persistent login-After reload 1st make /profile/view api call to find user and put it in the store
-Protected route-if user is authenticated show the children components if it is not authenticated navigate to /login
-GuestRoute-if user is  authenticated navigate to /feed and if not authenticated show the login page
-Logout user api implemented-when u click on logout button,logout api is called->clear the store->navigate to /login 




