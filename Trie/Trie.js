class TrieNode{
  constructor(){
      this.children={};
      this.isEndOfWord=false
  }
}
class Trie{
  constructor(){
      this.root=new TrieNode();
  }
  insert(word){
      let current= this.root;
      for(let i=0; i<word.length; i++){
          let char=word[i]
          if(!current.children[char]){
              current.children[char]=new TrieNode()
          }
          current=current.children[char]
      }
      current.isEndOfWord=true;
  }
  search(word){
    let current= this.root;
    for(let i=0; i<word.length; i++){
        let char= word[i]
        if(!current.children[char]){
            return false
        }
        current=current.children[char]
    }
    return current.isEndOfWord
  }
  startsWith(preffix){
    let current=this.root;
    for(let i=0; i<preffix.length; i++){
        let char= preffix[i];
        if(!current.children[char]){
            return false
        }
        current= current.children[char];
    }
    return true
  }
  printAllStartsWith(preffix){
    let current=this.root;
    for(let i=0; i<preffix.length; i++){
        let char= preffix[i];
        if(!current.children[char]){
            return null;
        }
        current= current.children[char];
    }
    this.printWordsFromNode(current, preffix)
  }
  printWordsFromNode(current, preffix){
    if(current.isEndOfWord){
        console.log(preffix)
    }
    for(let char in current.children){
        const newPreffix=preffix+char;
        const children= current.children[char];
        this.printWordsFromNode(children, newPreffix)
    }
  }
  print(){
    this.printWordsFromNode(this.root, "")
  }

}


const trie= new Trie();
trie.insert('apple')
trie.insert('appse')
trie.insert('appgle')
trie.insert('orange')
trie.insert('bana')
trie.insert('banango')
trie.insert('banango')

// console.log(trie.search('apple'))
// console.log(trie.startsWith('ap'))
// console.log(trie.startsWith('apl'))

trie.printAllStartsWith('')

console.log(trie)

trie.print()