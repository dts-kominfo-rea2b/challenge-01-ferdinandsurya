// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: new Set
    (
        ["Yellow",
        "Pink",
        "White",
        "Purple"]
    ),
    isHavePet: true,
    education: [
        new education("SD 01", "Jakarta", 2016),
        new education("SMP 02", "Jakarta", 2019),
        new education("SMA 03", "Tangerang"),
    ],
    favoriteRestaurant: new Set
    (
        ["Bento", 
        "Sushi", 
        "Pancake", 
        "Eggy", 
        "Tempura", 
        "Bento", 
        "Eggy", 
        "Padang", 
        "Tteok", 
        "Sushi", 
        "Sushi"]
    )
};

const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: new Set
    (
        ["Blue",
        "Black",
        "Grey"]
    ),
    isHavePet: false,
    education: [
        new education("SD 02", "Jakarta", 2010),
        new education("SMP 03", "Bogor", 2013),
        new education("SMA 01", "Surabaya", 2016),
        new education("Universitas Maju", "Tangerang")
    ],
    favoriteRestaurant: new Set 
    (
        ["Tempura", 
        "Bento", 
        "Sushi", 
        "Pancake", 
        "Padang", 
        "Katsu", 
        "Geprek", 
        "Pancake", 
        "Eggy"]
    )
};

function education (name, city, graduate) {
    this.name = name;
    this.city = city;
    this.graduate = graduate;
}

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};