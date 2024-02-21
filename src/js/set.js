class Character {
    constructor(player) {
        this.player = player;
    }
}


class Team {
    constructor() {
        this.members = new Set();
    }

    add(member) {
        if (this.members.has(member)) {
            throw new Error(`Игрок ${member} уже есть в команде`)
        } else {
            this.members.add(member);
            return new Character(this.members);
        }
    }


    addAll(...args) {
        for (let one of args) {
            this.members.add(one);
        }
        return new Character(this.members);
    }


    toArray() {
        return [...this.members];
    }
}


export { Team, Character }

// const str2 = new Team();
// const result = str2.addAll('Max', 'Max1', 'Max2', 'Max3', 'Max');
// str2.add('Maxi');
// console.log(result);
// console.log(str2.toArray());
// // str2.forEach(size => console.log(size))
// console.log(str2)

// const str = new Character('Max');
// console.log(str);

// const str1 = new Character('Max');
// console.log(str1);
