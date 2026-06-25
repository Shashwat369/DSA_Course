function palindromeCheck(str) {
    let reverse = "";
    let temp = str
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];

    }

    if(reverse === temp){
        return "Palindrome"
    }
    else return "not palindrome"

}

const res = palindromeCheck("madam")
console.log(res);
