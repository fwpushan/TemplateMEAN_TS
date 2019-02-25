
//Login request to API
//Sends: user login credentials
//Returns: Auth token & true/false ->> success/fail
export const login =  async (credentials) => {
    let res = await fetch(
        'api/login',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
    if(res.status == 202){
        return(true)
    }else{
        return(false)
    }
}

//Logout request to API
//Returns: true/false ->> success/fail
export const logout = async() => {
    let res = await fetch('api/logout')
    if (res.status === 200){
        // destroy Auth key or something
        //return success(true) to tell router to redirect back to login
        return(true)
    }else{
        //return success(false) to know to render error message
        return(false)
    }
}

//Change password request to API
//Sends: User current password and User new password
//Returns: true/false ->> success/fail
export const changePass = async(credentials) =>{
    let res = await fetch('api/changePass',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    if (res.status === 202){
        return(true)
        //do stuff with response, grab auth token, etc
    }else{
        return(false)
        //do something else, render red 'failed' text or something
    }
}

//Request for all pilots in database
//Returns: JSON string of all pilots
export const getPilots = async() =>{
    let res = await fetch('api/pilot/allPilot')
    if (res.status === 200){
        return(res.json())
    }else{
        return(null)
    }
}

