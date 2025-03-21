
let inp = document.querySelector(".input");
let btn = document.querySelector("button");



btn.addEventListener("click", function () {
    let input = inp.value.trim(); // input ma hanya ko value linya vayo yolay
    if (input === "") return;// yeslay chai input box khali xa ki vanyar check garnya vayo

    let list = document.querySelector(".studentlist"); //ul list lai list vanya variable vitra store garyau
    let li = document.createElement("li");// li html create garyau
    let span = document.createElement("span");//span html create garyau
    const d = new Date();// we store the date in d variable 
    let date = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`; // Format date as DD/MM/YYYY

    span.textContent = `${input}--${"P"} ------- ${date}`


    li.appendChild(span); // li ko vitra span html lai halyau
    list.appendChild(li); // ul vitra list hai halyau

    inp.value = ""; // yo lay chai input ma value hanya paxi enter garyako value lai chear garnya vayo
});
