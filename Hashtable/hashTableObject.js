class HashTable{
    constructor(){
        this.table={}
    }
    hash(key){
        let hashKey=''
        for(let i in key){
            hashKey+= key.charCodeAt(i)
        }
        return hashKey % 37
    }

    insert(key, value){
        this.table[this.hash(key)]=value
    }

    get(key){
        console.log(this.table[this.hash(key)])
        return this.table[this.hash(key)]
    }
    remove(key){
        delete this.table[this.hash(key)]
    }
}

const ht= new HashTable();
ht.insert("apple", 220)
ht.insert("mango", 150)
ht.insert("orange", 120)
ht.insert("chikku", 170)
ht.insert("apple", 270)

console.log(
    
)


console.log(ht)