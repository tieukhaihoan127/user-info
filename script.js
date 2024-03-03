// Lấy thông tin tài khoản vừa mới đăng ký hiện trên URL để thêm vào database

let query = window.location.search;
const search = new URLSearchParams(query);

const fullName = search.get('fullName');
const email = search.get('email');
const password = search.get('password');

// Thêm thông tin người dùng
if(query) {

    if(localStorage.index == undefined) {
        localStorage.index = "0";
        const tempName = "fullname0" ;
        const tempEmail = "email0" ;
        const tempPass = "password0";
        localStorage.setItem(`${tempName}`, fullName);
        localStorage.setItem(`${tempEmail}`, email);
        localStorage.setItem(`${tempPass}`, password);
    }
    else{
        let num = Number(localStorage.getItem("index"));
        num+=1;
        localStorage.setItem(`index`, num.toString());
        const tempName = "fullname" + num.toString();
        const tempEmail = "email" + num.toString();
        const tempPass = "password" + num.toString();

        localStorage.setItem(`${tempName}`, fullName);
        localStorage.setItem(`${tempEmail}`, email);
        localStorage.setItem(`${tempPass}`, password);
    }
}

const table = document.querySelector("#database");

if(localStorage.index){
    const index = Number(localStorage.getItem("index"));
    for(let i=0;i<=index;i++) {
        const userInfo =  
        `<tr>
            <td>${localStorage.getItem(`email${i.toString()}`)}</td>
            <td>${localStorage.getItem(`fullname${i.toString()}`)}</td>
            <td>${localStorage.getItem(`password${i.toString()}`)}</td>
        </tr>`;
        table.insertAdjacentHTML('beforeend', userInfo);
    }
}

// Nút quay trở về và reset data người dùng
const buttonBack = document.querySelector("#back-register");
const buttonReset = document.querySelector("#reset");

buttonBack.addEventListener("click", () => {
    window.location.href = "https://tieukhaihoan127.github.io/register/registerGet.html";
});

buttonReset.addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "https://tieukhaihoan127.github.io/user-info/data.html";
});

const rows = document.querySelectorAll("table tbody tr");
rows.forEach(row => {
    row.addEventListener("click", () => {
        if(!row.className) {
            row.classList.add("active-row");
        }
        else {
            row.classList.remove("active-row");
        }
    });
});





