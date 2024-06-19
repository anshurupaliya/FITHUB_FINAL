// /=============== SHOW MENU ===============/


// /=============== REMOVE MENU MOBILE ===============/


// /=============== CHANGE BACKGROUND HEADER ===============/


// /=============== SCROLL SECTIONS ACTIVE LINK ===============/


// /=============== SHOW SCROLL UP ===============/


// /=============== SCROLL REVEAL ANIMATION ===============/


// /=============== CALCULATE JS ===============/
const calculateForm = document.getElementById("calculate-form"),
    calculateCm = document.getElementById('calculate-cm'),
    calculateKg = document.getElementById('calculate-kg'),
    calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e) => {
    e.preventDefault()
    if (calculateCm.value === '' || calculateKg.value === '') {
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')
        //show message
        calculateMessage.textContent = 'Fill in the Height and Weight😒'

        //remove message three seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000)
    } else {
        //BMI Formula
        const cm = calculateCm.value / 100,
            kg = calculateKg.value,
            bmi = Math.round(kg / (cm * cm))

        if(bmi<18.5){
            //Add color and display message
            calculateMessage.classList.add('color-red')
            calculateMessage.textContent =  `Your BMI is ${bmi} and you are skinny`

        }
        else if(bmi < 25){
            calculateMessage.classList.add('color-red')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy`
        }
        else {
            calculateMessage.classList.add('color-red')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight`
        }

        //To clear the input field
        calculateCm.value = ''
        calculateKg.value = ''

        //Remove message in four seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 4000)
        }
    }
calculateForm.addEventListener('submit', calculateBmi)

// /=============== EMAIL JS ===============/
