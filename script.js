const users = [
    {
        name: "Eduardo",
        password: "12345",
        age: 27, 
        email: "eduoliveira6544@gmail.com"
    },
    {
        name: "Alice",
        password: "securePass1",
        age: 32,
        email: "alice.wonderland@example.com"
    },
    {
        name: "Bob",
        password: "password123",
        age: 45,
        email: "bob.thebuilder@example.com"
    },
    {
        name: "Charlie",
        password: "charliePass",
        age: 22,
        email: "charlie.brown@example.com"
    },
    {
        name: "Diana",
        password: "dianaStrong",
        age: 29,
        email: "diana.prince@example.com"
    }
];

const login = function(){
    const userEmail = document.getElementById("userEmail").value;
    const password = document.getElementById("password").value;

    let userRecognized = false;
    for(let i = 0; i < users.length; i++){
        const currentUser = users[i]
        if(currentUser.email === userEmail && currentUser.password === password){
           alert("Login successful! Welcome, " + currentUser.name);
            userRecognized = true;
            break;
        }
    }
    if(!userRecognized) {
        alert("Login failed! Please check your email and password.");
    }

}
