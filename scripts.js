// Currency quote of the day.
const USD = 5.51
const EUR = 6.04
const GBP = 7.22

// Obtaining form elements.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")

// Manipulating the input value to receive only numbers.
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Capturing the form submit event.
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value){

            case "USD":
                convertCurrency(amount.value, USD,"US$")
                break
            case "EUR":
                convertCurrency(amount.value, EUR, "€")
                break
            case "GBP":
                convertCurrency(amount.value, GBP, "£")
                break    
        }    
    }

// Function to convert currency.
function convertCurrency (amount, price, symbol) {
    try {
        // Displaying the rate of the selected currency.
        description.textContent = `${symbol} 1 = ${price}`
        // Apply the class that displays the footer.
        footer.classList.add("show-result")
    } catch (error) {
        // Remove the class that displays the footer.
        footer.classList.remove("show-result")
        console.log(error)
        alert("Não foi possível converter.")
    }
}

