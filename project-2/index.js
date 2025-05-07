const btn = document.getElementById('btn');
const birthdate = document.getElementById('birthdate');
const result = document.getElementById('result')


// this function for calculate 
function CalculateAge(event) {
    event.preventDefault();
    const birthdayValue = birthdate.value
    if (birthdayValue == "") {
        alert("Please enter your birthdate")
        return
    } 

        const date = new Date(birthdayValue)
        const currentDate = new Date()
        if (date > currentDate) {
            
            result.innerText = "Invalid Date"
            result.style.color = "red"
            
        }else{
            const age = getAge(birthdayValue)
            console.log(age);
            result.innerText = `You are ${age} years old`
        }

       
    
}

// this 

function getAge(birthdayValue) {
    const currentDate = new Date()
    console.log(currentDate, "crrentDate");

    const birthDate = new Date(birthdayValue)

    if (currentDate.getFullYear() < birthDate.getFullYear()) {
        return "Invalid Date"
    }

    console.log(birthDate, "birthDate");

    let age = currentDate.getFullYear() - birthDate.getFullYear()


    const month = currentDate.getMonth() - birthDate.getMonth()


    if (month < 0 || month == 0 && currentDate.getDate() < birthDate.getDate()) {
        age--
    }
    return age

}

btn.addEventListener('click', CalculateAge)