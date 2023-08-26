let pass = document.getElementById("pass");
let strong = document.getElementById("strong");
let weak = document.getElementById("weak");
let funny = document.getElementById("funny");
let range = document.getElementById("range");
let num = document.getElementById("num");
let name = document.getElementById("name");
let dob = document.getElementById("dob");
let genrate = document.getElementById("genrate");
num.value = range.value;
range.addEventListener("change", () => {
    num.value = range.value;
})

class password {
    strongpass() {
        let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let lower = "abcdefghijklmnopqrstuvwxyz";
        let num = "1234567890";
        let special = "!@#$%&*";
        let result1 = ''
        for (let i = 0; i < 4; i++) {
            result1 += upper.charAt(Math.floor(Math.random() * upper.length));
        }
        for (let i = 0; i < 4; i++) {
            result1 += lower.charAt(Math.floor(Math.random() * lower.length));
        }
        for (let i = 0; i < 4; i++) {
            result1 += num.charAt(Math.floor(Math.random() * num.length));
        }
        for (let i = 0; i < 4; i++) {
            result1 += special.charAt(Math.floor(Math.random() * special.length));
        }
        let result = ""
        for (let i = 0; i < range.value; i++) {
            result += result1.charAt(Math.floor(Math.random() * result1.length));
        }
        return result;
    }
    weakpass() {
        let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let lower = "abcdefghijklmnopqrstuvwxyz";
        let result1 = ''
        for (let i = 0; i < 5; i++) {
            result1 += upper.charAt(Math.floor(Math.random() * upper.length));
        }
        for (let i = 0; i < 5; i++) {
            result1 += lower.charAt(Math.floor(Math.random() * lower.length));
        }
        let result = ""
        for (let i = 0; i < range.value; i++) {
            result += result1.charAt(Math.floor(Math.random() * result1.length));
        }
        return result;
    }
    ueslesspass() {
        let funny = ["Password", "Incorrect", "1234567890", "12345678", "abcd", "1password", "iloveyou", "unknown", "0000000"]
        let result = Math.floor(Math.random() * funny.length);
        return funny[result];
    }
    coustompass() {
        let name = document.getElementById("name");
        let dob = document.getElementById("dob");
        let nam = name.value.replace(/ /g,'');
        let date=dob.value.replace(/-/g,'');
        let special="!@#$%&*"
        let result=''
        for(let i=0;i<4;i++){
            result+=nam.charAt(Math.floor(Math.random()*nam.length));
        }
        for(let i=0;i<4;i++){
            result+=date.charAt(Math.floor(Math.random()*date.length));
        }
        for(let i=0;i<3;i++){
            result+=special.charAt(Math.floor(Math.random()*special.length));
        }
        return result;
    }
}
let obj = new password();
strong.addEventListener("click", () => {
    let result = obj.strongpass();
    pass.value = result;

})
weak.addEventListener("click", () => {
    let result = obj.weakpass();
    pass.value = result
})
funny.addEventListener("click", () => {
    let result = obj.ueslesspass();
    pass.value = result
})
genrate.addEventListener("click", () => {
    if(name.value!=''&& dob!=''){
        let result = obj.coustompass();
        pass.value = result
    }
   
})


let check = document.getElementById("check");
let contaner = document.getElementById("con5");
contaner.style.display = "none";
check.addEventListener("click", () => {
    if (check.checked == true) {
        contaner.style.display = "block";
    }
    else {
        contaner.style.display = "none";
    }
})

