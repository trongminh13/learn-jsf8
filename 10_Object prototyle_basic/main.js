function User(firstName1, lastName1, avatar1) {
    this.firstName1 = firstName1;
    this.lastName1 = lastName1;
    this.avatar1 = avatar1;
    this.getName = function () {
        return `${this.firstName1} ${this.lastName1}`
    }
}

User.prototype.className = 'F8';
User.prototype.getClassName = function () {
    return this.className;
}
var user = new User('Son', 'Dang', 'Avatar 1');
var user2 = new User('Tan', 'Dang', 'Avatar 2');

console.log(user.className);
console.log(user2.getClassName());