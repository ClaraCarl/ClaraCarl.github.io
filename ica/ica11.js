function tellFortune(numberOfChildren, partnerName, geographicalLocation,jobTitle){
    let fortune = "You will be a X in Y, and married to Z with N kids.";
}

function tellFortune(children, partner, location, job) {
    const fortune = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
    document.getElementById("results").innerHTML += `<p>${fortune}</p>`;
  }
  tellFortune(2, "Hank", "Stockholm", "Architect");
  tellFortune(3, "Mike", "San Fransisco", "Engineer");
  tellFortune(1, "John", "New York", "Designer");

  function calculateDogAge(age) {
    const dogAge = age * 7;
    document.getElementById("results").innerHTML += `<p>Your dog is ${dogAge} years old in dog years!</p>`;
  }
  calculateDogAge(4);
  calculateDogAge(1);
  calculateDogAge(7);


  function reverseNumber(number) {
    const reversed = number.toString().split('').reverse().join('');
    document.getElementById("results").innerHTML += `<p>Reversed Number: ${reversed}</p>`;
  }
  reverseNumber(32243);
  reverseNumber(98765);

  function alphabetizeString(str) {
    const alphabetized = str.split('').sort().join('');
    document.getElementById("results").innerHTML += `<p>Alphabetized String: ${alphabetized}</p>`;
  }
  alphabetizeString("webfwemaster");
  alphabetizeString("fwelfjieqoef");

  function capitalizeWords(sentence) {
    const capitalized = sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    document.getElementById("results").innerHTML += `<p>Capitalized Sentence: ${capitalized}</p>`;
  }
  capitalizeWords("i bought berries in new york");
  capitalizeWords("the snow fell quickly today in the town of boulder");
