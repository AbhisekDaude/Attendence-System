
let inp = document.querySelector(".input");
let btn = document.querySelector("button");
let save=document.querySelector(".save");
let remove=document.querySelector(".remove");






btn.addEventListener("click", attendance);

// Trigger attendance on "Enter" key press
inp.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        attendance();
    }
});


 function attendance () {
    let input = inp.value.trim(); // input ma hanya ko value linya vayo yolay
    if (input === "") return;// yeslay chai input box khali xa ki vanyar check garnya vayo
  
    let list = document.querySelector(".studentlist"); //ul list lai list vanya variable vitra store garyau
 
    let li = document.createElement("li");// li html create garyau
    let span = document.createElement("span");//span html create garyau
    let btn1=document.createElement("button");

    
    const d = new Date();// we store the date in d variable 
    let date = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`; // Format date as DD/MM/YYYY

    span.textContent = `${input}--${"P"} --- ${date}`
   
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "25px";
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.style.color = "white";
    deleteBtn.style.border = "none";
    deleteBtn.style.padding = "5px 8px";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.borderRadius = "50px";
    


    deleteBtn.addEventListener("click", function () {
        li.remove(); // Remove the list item when delete button is clicked
    });

    li.appendChild(span); // li ko vitra span html lai halyau
    li.appendChild(deleteBtn);
    list.appendChild(li); // ul vitra list hai halyau


    inp.value = ""; // yo lay chai input ma value hanya paxi enter garyako value lai chear garnya vayo

   
}



inp.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        attendance();
    }
});
save.addEventListener("click", function () {
    let items = document.querySelectorAll(".studentlist li span");
    let content = "";
    
    if(items.length===0)
    {
        alert("Please Enter Full Name Or Roll No");
    }
else{


    items.forEach(item => {
        content += item.textContent + "\n\n";
    });

    let blob = new Blob([content], { type: "text/plain" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "attendance.txt";
    a.click();
}
});
remove.addEventListener("click",function(){
   
let all =document.querySelector(".studentlist");
all.innerHTML=""



})

    


