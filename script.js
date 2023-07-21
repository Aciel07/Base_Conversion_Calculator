// Program to convert number systems for programmers
document.addEventListener("DOMContentLoaded", () => {
    const convertButton = document.getElementById("convertButton");
    const numberInput = document.getElementById("numberInput");
    const conversionType = document.getElementById("conversionType");
    const resultContainer = document.getElementById("resultContainer");

    function binary_to_decimal(binary) {
        return parseInt(binary, 2);
    }

    function binary_to_octal(binary) {
        return parseInt(binary, 2).toString(8);
    }

    function binary_to_hexadecimal(binary) {
        return parseInt(binary, 2).toString(16).toUpperCase();
    }

    function decimal_to_binary(decimal) {
        return parseInt(decimal, 10).toString(2);
    }

    function decimal_to_octal(decimal) {
        return parseInt(decimal, 10).toString(8);
    }

    function decimal_to_hexadecimal(decimal) {
        return parseInt(decimal, 10).toString(16).toUpperCase();
    }

    function octal_to_binary(octal) {
        return parseInt(octal, 8).toString(2);
    }

    function octal_to_decimal(octal) {
        return parseInt(octal, 8).toString(10);
    }

    function octal_to_hexadecimal(octal) {
        return parseInt(octal, 8).toString(16).toUpperCase();
    }

    function hexadecimal_to_binary(hexadecimal) {
        return parseInt(hexadecimal, 16).toString(2);
    }

    function hexadecimal_to_decimal(hexadecimal) {
        return parseInt(hexadecimal, 16).toString(10);
    }

    function hexadecimal_to_octal(hexadecimal) {
        return parseInt(hexadecimal, 16).toString(8);
    }

    function performConversion(event) {
        event.preventDefault();
    
        const inputValue = numberInput.value.trim();
        if (inputValue === "") {
            alert("Please enter a valid number.");
            return;
        }

        const selectedConversion = conversionType.value;
        let result = "";
        switch (selectedConversion) {
            case "binary":
                result = `<center>
                        <strong>Decimal:</strong> ${binary_to_decimal(inputValue)}<br> 
                        <strong>Octal:</strong> ${binary_to_octal(inputValue)}<br> 
                        <strong>Hexadecimal:</strong> ${binary_to_hexadecimal(inputValue)}<br> 
                        </center>`;
                break;
            case "decimal":
                result = `<center>
                        <strong>Binary:</strong> ${decimal_to_binary(inputValue)}<br> 
                        <strong>Octal:</strong> ${decimal_to_octal(inputValue)}<br> 
                        <strong>Hexadecimal:</strong> ${decimal_to_hexadecimal(inputValue)}<br> 
                        </center>`;
                break;
            case "octal":
                result = `<center>
                        <strong>Binary:</strong> ${octal_to_binary(inputValue)}<br> 
                        <strong>Decimal:</strong> ${octal_to_decimal(inputValue)}<br> 
                        <strong>Hexadecimal:</strong> ${octal_to_hexadecimal(inputValue)}<br> 
                        </center>`;
                break;
            case "hexadecimal":
                result = `<center>
                        <strong>Binary:</strong> ${hexadecimal_to_binary(inputValue)}<br> 
                        <strong>Decimal:</strong> ${hexadecimal_to_decimal(inputValue)}<br> 
                        <strong>Octal:</strong> ${hexadecimal_to_octal(inputValue)}<br> 
                        </center>`;
                break;
            default:
                break;
        }
        resultContainer.innerHTML = result; 
    }
    convertButton.addEventListener("click", performConversion);
});
