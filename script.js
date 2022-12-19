//1. pasizymiu elementu ant kintamuju
const my_custom_rows = document.getElementById('custom_rows');
const my_custom_column = document.getElementById('custom_column');
const gen_button = document.querySelector('button');

//2. deklaruoju funkcija
function createTable(){
  //pirmas ciklas kurs eilutes
  console.log(my_custom_rows.value);
  //pirmo ciklo viduje kurs stulpelius
  console.log(my_custom_column.value);
  //lentele turiu sukurti viena karta, funkcijai startavus
  const my_table = document.createElement('table');
  document.body.appendChild(my_table);
  for(let i = 0; i < my_custom_rows.value; i++){
    //kuriu eilutes
    const my_rows = document.createElement('tr');
    //idedu eilutes i lentele
    my_table.appendChild(my_rows);

    //kiekvienos eilutes vidueje kuriu stulpelius
    for(let j=0; j < my_custom_column.value; j++){
        //kuriu td elementus
        const my_col = document.createElement('td');
        //irasome teksta, kad matytume rezultata html dokumente
        my_col.innerText = "|Stulpelis|";
        //pridedu stulpelius i eilute tik tada atsiras html
        my_table.appendChild(my_col);
    }

  }

}

//3. kvieciu funkcija. aprasau mygtukui event
gen_button.addEventListener('click', createTable);