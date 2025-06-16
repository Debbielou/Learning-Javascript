function talk() {
    return this;
}

const me = {
    name: 'John',
    age: 30,
    talk
}
console.log(me.talk()); // { name: 'John', age: 30, talk: [Function: talk] }

talk = talk.bind(me);
console.log(talk()); // { name: 'John', age: 30, talk: [Function: talk] }

function talk2(lang) {
if (lang === 'english') {
    return `${this.name} speaks ${lang}`;
} else if (lang === 'france') {
    return `${this.name} parle ${lang}`;
} else {
    return `${this.name} does not speak ${lang}`;
}
}
const baliki ={
    name: 'Baliki',
}
talk2 = talk2.bind(baliki);
console.log(talk2('english')); // Baliki speaks en

function shout(lang, isPolite) {
    if (lang === 'english') {
        return isPolite ? `Please ${this.name}, speak ${lang}` : `${this.name} shouts in ${lang}`;
    } else if (lang === 'france') {
        return isPolite ? `S'il vous plaît ${this.name}, parlez ${lang}` : `${this.name} crie en ${lang}`;
    } else {
        return `${this.name} does not speak ${lang}`;
    }
}
const john = {
    name: 'John',
};
shout = shout.bind(john);
console.log(shout('english', true)); // Please John, speak english
console.log(shout('france', false)); // John crie en france