function checkStatus(){
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const messageMes = document.getElementById("message");
    const button = document.getElementById("sumbit");
    const num = [0,1,2,3,4,5,6,7,8,9];
    for (let i = 0; i < num.length; i++) {
        if(firstName.includes(num[i]) || lastName.includes(num[i]) || firstName.includes("") || lastName.includes("")){
           messageMes.textContent = "Invalid  name";
           messageMes.style.color = "red";
           
        }
        else{
            messageMes.textContent = "";

        }

      
    }


}