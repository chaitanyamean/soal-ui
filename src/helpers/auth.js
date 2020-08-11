export const authenticate = (response, next) => {
    localStorage.setItem('token', response.data.data.token);
    localStorage.setItem('user', response.data.data.userDetails.role);
    localStorage.setItem('username', response.data.data.userDetails.username);


    
    
    next();
};


// access user info from localstorage
export const isAuth = () => {
    // localStorage.setItem('token', response.data.data.token);
    // localStorage.setItem('user', response.data.data.userDetails.role);

    if (process.browser) {
        const cookieChecked = localStorage.getItem('token');
        if (cookieChecked) {
            if (localStorage.getItem('user')) {
                return localStorage.getItem('user');
            } else {
                return false;
            }
        }
    }
};