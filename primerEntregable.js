class Usuario {
    constructor(name,lastname){
        this.name=name;
        this.lastname=lastname;
        this.books=[];
        this.pets=[];
    }
    getfullname = function(){
        return `Hola, mi nombre es ${this.name} ${this.lastname}. Un gusto saludarte.`;
    };
    addpet = function(pet){
        this.pets.push(pet);
    };
    countpets=function(){
        return this.pets.lenght;
    };
    addbook=function(title,author){
        this.books.push({Title:title, Author:author});
    };
    getbooknames=function(){
        let bookTittle = this.books.map(function(book){
            return `Los titulos de los libros son: ${book.Title}`;
        })
    };
};

let usuario1 = new Usuario("Ismael","Abero");

usuario1.addpet("Perro - Rocky");
usuario1.addbook("El hombre que calcuba","Malba Tahan");
usuario1.addpet("Gato - Pelusa");
usuario1.addbook("Agilmente","Estanislao Bachrach");

usuario1.getfullname();
usuario1.getbooknames();
usuario1.countpets();
