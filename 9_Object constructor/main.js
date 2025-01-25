var User = function (firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User('Son', 'Dang', 'Avatar');
var user = new User('Vu', 'Nguyen', 'Avatar');

author.title = 'Chia se dao tai FB';
user.comment = 'Lieu co khoa asp.net k ad ';

console.log(author);
console.log(user);