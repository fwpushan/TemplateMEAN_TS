//For resetting password with login's 'Forgot Password' link ONLY
//these are not used for changing a user's password with the 'change password' form.

//Connects to SMTP server
export const smtpConnect = () => {
    //connect to SMTP server using data stored in ENV_VARIABLES
}

//Sends password reset email to user's email address
export const resetPassword = () => {
    //access user email from value stored in validation token (or something)
    //Send generic email to email address with a link to 'reset password page'
    //re validate user auth token on redirect to site (something like /dashboard/changePass/redirect?SOME_RANDOM_HASH_CORRESPONDING_TO_USER_REQUEST)
    //allow user to change password
    //essentially need to validate a user by 
    //  1) generating a random hash and storing it in the database alongside the user's email
    //  2) sending a link to the user's email that has a /.../?[HASH_STRING]
    //  3) checking the URL parameter against the hash in the database to authenticate user & verify they followed the link from their email
    //  4) allow user to access the reset form & change the password associated with their email
}