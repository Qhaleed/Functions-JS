/*
This function is for a To-Do list

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask (){
    if(inputBox.value === '') {
        alert("You must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement ("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputBox.value ="";




        saveData ();

}
    }

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData ()
    }
}
)
function saveData () {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask () {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask ();
*/

/*This function is for a shopping cart

<body>
    <h1>Shem's REStaurant</h1>


                <button onclick="cost += 5;
                 console.log(`Purchased a Coffee`);">Coffee (5$)</button>


                <button onclick="cost += 3;
                    console.log(`Purchased a Bagel`);
                ">Bagel ($3)</button>


                <button onclick="cost += 9;
                    console.log(`Purchased a Soup`)
                ">Soup($9)</button>

                <button onclick="cost = cost * 0;
                    console.log(`Total: $ ${cost}`);
                "> Reset</button>


                <button onclick="cost = cost;
                console.log('Here is the Total:');
                console.log(`Pre Tax Cost: $ ${cost}`);
                
                cost = cost * vat + cost ;
                
                
                console.log(`Vatable Taxes : $ ${cost * vat}`)
                
                    console.log(`Total: $ ${cost}`);
                "> Total</button>


</body>
<script>
        const vat = 0.10;
        let cost = 0;
        console.log(cost);
</script>
*/
/*This function is for "Click" tranformation and darkmode 

const menu = document.getElementById("menu");
const drop = document.getElementById("drop");
const lightMode = document.getElementById("lightMode");
const pageBody = document.getElementById("pageBody");
const chapter = document.getElementById("chapter")
const li = document.getElementById ("li");

let isToggled = false;

menu.addEventListener("click", function() {
    if (isToggled) {
        this.classList.remove("changed-style");
        this.classList.add("normal-style");
        drop.classList.remove("before-style");
        drop.classList.add ("after-style");
    } else {
        this.classList.remove("normal-style");
        this.classList.add("changed-style");
        drop.classList.remove("after-style");
        drop.classList.add ("before-style");
    }

    isToggled = !isToggled;
});




lightMode.addEventListener ("click", function () {

    isToggled = !isToggled; // Toggle the isToggled variable

    if (isToggled) {
        pageBody.style.backgroundColor = "#fff";
        pageBody.style.color = "#000";
        chapter.style.color = "#000";
        li.style.color = "#000"
       
    }
    else {
        pageBody.style.backgroundColor ="rgb(43, 43, 43)";
        pageBody.style.color = "#fff";
        chapter.style.color = "#fff";
        li.style.color = "#fff"
      
    }

})
*/
