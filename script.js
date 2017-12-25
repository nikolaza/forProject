let person = {
    name: "nikola",
    lastName: "zafirovski",
    married: true,
    phones:["223305", "264832", "252380" ]

};

let ulTag = document.getElementById("ListaTel");


console.log("Name = " + person.name);

for(let i = 0; i < person.phones.length; i++) {
    let phoneItem = document.createElement("li");
    ulTag.appendChild (phoneItem);
    phoneItem.innerHTML = person.phones [i];
 
}


