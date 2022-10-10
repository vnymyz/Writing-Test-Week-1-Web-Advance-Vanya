# Writing Test Week 1 Advance
## **Javascript Intermediet**
### **Array**
- Array adalah core concept dari programming
- Array adalah kumpulan tipe data yang dapat menyimpan tipe data apapun di dalamnya.
- Tipe data yang dapat disimpan yaitu seperti string, number, boolean dll.
- contoh array

```
let toDoList = [
    'this is javascript',
    'eating pizza',
    'making something from javascript'
];
console.log(toDoList);
// output nya dibawah
[
  'this is javascript',
  'eating pizza',
  'making something from javascript'
]
```

atau juga bisa seperti ini

```
let randomData = ['this is string', 80, true];
console.log(randomData);
// output nya [ 'this is string', 80, true ]
```

- contoh cara mengupdate array :

```
let YummyFood = ['Chicken', 'Pizza', 'Sandwich'];

YummyFood[0] = 'Steak';
console.log(YummyFood);
// output [ 'Steak', 'Pizza', 'Sandwich' ]
```

### **Const**
- const tidak bisa melakukan update data tapi pada array bisa melakukan update mutable atau isi nilai dalam array.
- berbeda dengan let yang bisa mengubah semua array ataupun konten nilai pada array
- tidak bisa mengubah array dengan array baru
- contoh nya :

```
const animal = ['cat', 'dog', 'fish'];
animal = ['cow'];
console.log(animal);
// hasilnya nanti akan terjadi error karena tidak dapat melakukan update data dengan adanya const
```

### **Array Multidimensi**
- Definisi dari array di dalam array
- contohnya :

```
let barang =[
    ['Tas Dior', 10],
    ['Headset', 22],
    ['Sepatu Nike', 30],
    ['Jaket Denim', 12],
];

console.log(barang);
// outputnya dibawah
[
  [ 'Tas Dior', 10 ],
  [ 'Headset', 22 ],
  [ 'Sepatu Nike', 30 ],
  [ 'Jaket Denim', 12 ]
]
```

- push() yaitu untuk nambah item dalam array dan urutan paling akhir
- pop() yaitu menghapus item array pada index terakhir
- shift() yaitu menghapus item array pada index pertama
- unshift() yaitu nambah item array pada index pertama
- sort() yaitu mengurutkan secara ascending atau Descending Alphanumeric

### **Looping pada array**
- forEach() adalah looping pada setiap elemen array, contohnya :

```
const mobil = ['tesla', 'avanza', 'toyota'];
mobil.forEach(element => {
    console.log(element);
});
// output :
tesla
avanza
toyota
```

- map() adalah looping dengan membuat array baru. contohnya:

```
let angka = [3,4,5,6,7];

let doubled = angka.map(num => {
    return num * 2;
});

console.log(doubled);
// output : [ 6, 8, 10, 12, 14 ]
```

### **Object**
- Object dalam dunia programming adalah **tipe data** pada variable yang dapat menyimpan properti dan fungsi(method)
- Properti adalah data lengkap object
- method yaitu action dari object atau aktivitas apa saja yang dilakukan dari suatu object
- membuat sebuah object contohnya :

```
let person = {} // person ini adalah object yang kosong
```

### **Recursive**
- function memanggil dirinya sendiri sampai sesuai kondisi tertentu
- Biasanya digunakan untuk case math atau matematika, fisika, kimia atau yang berhubungan dengan calculation
- Tujuan Recursive yaitu memecahkan masalah dengan mengurangi masalah dan menjadi masalah-masalah kecil
- contoh kasus recursive :

```
function countDown(fromNumber){
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    // jika kondisi nya false maka recursive akan berhenti
    if (nextNumber > 0){
        countDown(nextNumber);
    }
}
    countDown(4);
// output adalah
3
2
1
```
