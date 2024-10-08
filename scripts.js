// Currency quote of the day.
const USD = 5.51
const EUR = 6.04
const GBP = 7.22

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

// Manipulating the input value to receive only numbers.
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Capturing the form submit event.
form.onsubmit = (event) => {
    event.preventDefault()

    switch(currency.valeu){

            case "USD":
                convertCurrency(amount.valeu, USD,"US$")
                break
            case "EUR":
                convertCurrency(amount.valeu, EUR, "€")
                break
            case "GBP":
                convertCurrency(amount.valeu, GBP, "£")
                break    
        }    
    }

// Function to convert currency.

function convertCurrency (amount, price, symbol) {
    
}