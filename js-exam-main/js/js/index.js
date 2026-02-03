
let btn=document.getElementById('btn');
btn.addEventListener("click",function(e){
    e.preventDefault();
    let name =document.getElementById('title').value;
    let price=document.getElementById('price').value;
    let img=document.getElementById('img').value;
    let category=document.getElementById('category').value;
    console.log(name,price,img,category);
    if(name=="" || price==""||img==""||category==""){
        alert("please enter data properly");
        return;
    }
    if(price<0){
        alert("price must be grater than 0");
    }
    else{
        let users=JSON.parse(localStorage.getItem("users"))||[];

        let obj={
            id:Date.now(),
            name,
            price,
            img,
            category
        }
        console.log(obj);
            users.push(obj);
            console.log(" pushing dat");
            console.log(users);
        localStorage.setItem("users",JSON.stringify(users));
        console.log(" data added");
    }
    window.location.href="./allitem.html";
});