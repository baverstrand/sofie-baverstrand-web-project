
// fetch a random Chuck joke
async function randomchuck() {
    const response = await fetch("http://api.icndb.com/jokes/random?escape=javascript"); // with quotation mark fix
    const tojson = await response.json();
    console.log(tojson);
    document.getElementById("randomjoke").innerText = tojson.value.joke;
  }

// fetch a random John Doe Chuck joke
async function randomjohndoe() {
    let firstName = "";
    if (document.getElementById("firstName").value == "")
      firstName = "John";
    else 
      firstName = document.getElementById("firstName").value;

    let lastName = "";
    if (document.getElementById("lastName").value == "")
        lastName = "Doe";
    else 
        lastName = document.getElementById("lastName").value;
    
    //document.getElementById("lastName").value;
    const nameurl = "http://api.icndb.com/jokes/random?escape=javascript&firstName=" + firstName + "&lastName=" + lastName;
    //console.log(nameurl);
    const response = await fetch(nameurl); // with quotation mark fix
    const tojson = await response.json();
    //console.log(tojson);
    document.getElementById("johndoejoke").innerText = tojson.value.joke;
  }

  // header content
  (function fillheader() {
    document.getElementById("header").innerText = document.getElementById("genericheader").innerText;
  })();