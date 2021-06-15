function HashTable() {
    this.table = new Array(137);
    this.buildChains = buildChains;
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
    this.putLinaer = putLinaer;
}

function buildChains(){
    for(var i = 0;i< this.table.length;i++){
        this.table[i] = [];
    }
}

function simpleHash(data) {
    var total = 0;
    for(var i = 0;i< data.length;i++){
        total += data.charCodeAt(i);
    }
    return total % this.table.length
}

function betterHash(data) {
    var H = 31;
    var total = 0;
    for(var i = 0; i< data.length; i++){
        total += H * total + data.charCodeAt(i);
    }
    if(total < 0){
        total += this.table.length -1;
    }
    return total % this.table.length;
}

function put(data) {
    // var pos = this.simpleHash(data);
    var pos = this.betterHash(data);
    // this.table[pos] = data;
    var index = 0;
    if(this.table[pos][index] == undefined){
        this.table[pos][index] = data;
        index++;
    } else {
        while(this.table[pos][index] !== undefined){
            ++index;
        }
        this.table[pos][index] = data;
    }
}

function putLinaer(data) {
    var pos = this.simpleHash(data);
    if(this.table[pos] === undefined){
        this.table[pos] = data;
    } else {
        while(this.table[pos] !== undefined) {
            pos++;
        }
        this.table[pos] = data;
    }
}

function get(key){
    var hash = this.simpleHash(key);
    console.log(hash);
    for(var i = =; i< this.table.length; i++){
       if(this.table[i] == key){
            return i;
        }
    }
    return undefined
}

function showDistro(){
    var n = 0;
    for(var i = 0; this.table.length; i++){
        if(this.table[i] !== undefined ){
            console.log(`键是 -> ${i}, 值是【${this.table[i]}】`);
        }
    }
}

var hTable = new HashTable();
hTable.buildChains()
hTable.put("China");
hTable.put("Japan");
hTable.put("America");
hTable.put("nicha");

hTable.showDistro();

console.log('nicha的位置', hTable.get('nicha'));
