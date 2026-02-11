function encryptData() {
    // Get values from input
    const text = document.getElementById("plainInput").value;
    let shiftValue = document.getElementById("encryptShift").value;
    
    // Convert shift to a number
    let shift = parseInt(shiftValue);

    // Validate if inputs are empty
    if (!text) {
        document.getElementById("encryptResult").textContent = "Please enter text";
        return;
    }

    let result = caesarCipher(text, shift);
    
    // Set text to the result div
    document.getElementById("encryptResult").textContent = result;
}

function decryptData() {
    const text = document.getElementById("cipherInput").value;
    let shiftValue = document.getElementById("decryptShift").value;
    
    let shift = parseInt(shiftValue);

    if (!text) {
        document.getElementById("decryptResult").textContent = "Please enter text";
        return;
    }
    
    // To decrypt, we shift by (26 - shift) to go backwards
    let result = caesarCipher(text, (26 - (shift % 26)));
    
    document.getElementById("decryptResult").textContent = result;
}

function caesarCipher(str, shift) {
    let output = "";

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        // Only encrypt letters
        if (char.match(/[a-z]/i)) {
            // Get ASCII number using charCodeAt
            let code = str.charCodeAt(i);

            // Uppercase (A=65, Z=90)
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26 + 26) % 26 + 65);
            }
            // Lowercase (a=97, z=122)
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26 + 26) % 26 + 97);
            }
        }
        output += char;
    }
    return output;
}