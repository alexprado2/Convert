const amount = document.getElementById("amount")

// Manipulating the input value to receive only numbers.
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})