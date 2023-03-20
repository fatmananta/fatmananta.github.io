//Name
const TheName = document.getElementById('name-regex')
const myName = document.getElementById('my-name')
const checkName = (value) => {
    const regex = (/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)
    const isName = regex.test(value)
    if (isName){
        return true
    } else {
        return false
    }
}

TheName.addEventListener('keyup', (e) => {
    const value = e.target.value
    const isName = checkName (value)
    if (value.length >= 3) {
        if (isName){
            myName.innerHTML = " <span style = 'color:green;'></span>"
        } else {
            myName.innerHTML = " <span style = 'color:red;'>Name can only use letters.</span>"
        }
    } else {
        myName.innerHTML = " <span style = 'color:red;'>Name is too short.</span>"
    }
}
)

//Email
const TheEmail = document.getElementById('email-regex')
const myEmail = document.getElementById('my-email')
const checkEmail = (value) => {
    const regex = (/^[a-z0-9]+@gmail.com/)
    const isEmail = regex.test(value)
    if (isEmail){
        return true
    } else {
        return false
    }
}

TheEmail.addEventListener('keyup', (e) => {
    const value = e.target.value
    const isEmail = checkEmail (value)
    if (value.length >= 8) {
        if (isEmail){
            myEmail.innerHTML = " <span style = 'color:green;'></span>"
        } else {
            myEmail.innerHTML = " <span style = 'color:red;'>Email can only use letters and numbers with @gmail.com format.</span>"
        }
    } else {
        myEmail.innerHTML = " <span style = 'color:red;'>Email is too short.</span>"
    }
}
)

//Phone  Number
const TheNumber = document.getElementById('number-regex')
const myNumber = document.getElementById('my-number')
const checkNumber = (value) => {
    const regex = (/^(\+62|0)8[1-9][0-9]{6,9}$/)
    const isNumber = regex.test(value)
    if (isNumber){
        return true
    } else {
        return false
    }
}

TheNumber.addEventListener('keyup', (e) => {
    const value = e.target.value
    const isNumber = checkNumber (value)
    if (  11 >= value.length <=13) {
        if (isNumber){
            myNumber.innerHTML = "<span style = 'color:green;'></span>"
        } else {
            myNumber.innerHTML = " <span style = 'color:red;'> Phone Number can only use numbers, must contain 11-13 characters and only begin with 08 or +62.<span>"
        }
    } else {
        myName.innerHTML = " <span style = 'color:red;'>Phone Number must contain 11-13 characters.</span></span>"
    }
}
)

//Username
const TheUsername = document.getElementById('username-regex')
const myUsername = document.getElementById('my-username')
const checkUsername = (value) => {
    const regex = (/^[a-zA-Z0-9.$@*!]{3,20}$/)
    const isUsername = regex.test(value)
    if (isUsername){
        return true
    } else {
        return false
    }
}

TheUsername.addEventListener('keyup', (e) => {
    const value = e.target.value
    const isUsername = checkUsername (value)
    if (value.length >= 6) {
        if (isUsername){
            myUsername.innerHTML = "<span style = 'color:green;'></span>"
        } else {
            myUsername.innerHTML = 'gagal'
        }
    } else {
        myUsername.innerHTML = " <span style = 'color:red;'>Phone Number must contain at least 6 characters. Can only use letter and numbers with no space</span></span>"
    }
}
)

//Password
const ThePassword = document.getElementById('password-regex')
const myPassword = document.getElementById('my-password')
const checkPassword = (value) => {
    const regex = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
    const isPassword = regex.test(value)
    if (isPassword){
        return true
    } else {
        return false
    }
}

ThePassword.addEventListener('keyup', (e) => {
    const value = e.target.value
    const isPassword = checkPassword (value)
    if (value.length >= 8) {
        if (isPassword){
            myPassword.innerHTML = " <span style = 'color:green;'></span>"
        } else {
            myPassword.innerHTML = "<span style = 'color:red;'>Password must contain at least 8 characters, one number and one uppercase letter.</span>"
        }
    } else {
        myPassword.innerHTML = " <span style = 'color:red;'>Password is too short.</span>"
    }
}
)