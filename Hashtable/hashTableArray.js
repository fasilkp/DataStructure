class HashTable{
    constructor(size=10){
        this.size=size
        this.table= []
    }
    hash(key){
        let hashKey=''
        for(let i in key){
            hashKey+= key.charCodeAt(i)
        }
        return hashKey % this.size
    }

    insert(key, value){
        const hashKey= this.hash(key)
        if(!this.table[hashKey]){
            this.table[hashKey]=[]
        }
        this.table.push({key, value})
    }

    get(key){
        const bucket = this.table[this.hash(key)];
        if(!bucket){
            return 'no data found'
        }
        for(let item of bucket){
            if(item.key===key){
                return item.value
            }
        }
        return 'no data found'

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