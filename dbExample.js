const { knex } = require('./db/database');


// knex.schema.dropTable('articulos')
//     .then(()=> console.log('Tabla borrada'))
//     .catch(err => console.log(err))

// knex.schema.createTable('articulos', (table) => {
//     table.string('nombre')
//     table.string('codigo')
//     table.float('precio')
//     table.integer('stock')
//     table.increments('id')

// })
// .then(()=> console.log("Tabla creada"))
// .catch(error => console.log(error))

const articulos = [
    {nombre: 'articulo1', codigo: 'codigo1', precio: 1, stock: 30},
    {nombre: 'articulo2', codigo: 'codigo2', precio: 2, stock: 30},
    {nombre: 'articulo3', codigo: 'codigo3', precio: 3, stock: 30},
    {nombre: 'articulo4', codigo: 'codigo4', precio: 4, stock: 30},
    {nombre: 'articulo5', codigo: 'codigo5', precio: 5, stock: 30}
]

// knex('articulos').insert(articulos)
//     .then(()=> console.log('Articulos insertados'))
//     .catch(err => { console.log(err); throw err})
//     .finally(()=> {
//         knex.destroy();
//     })

// knex.from('articulos').select("*")
//     .then( rows => {
//         for (row of rows) {
//             console.log(`${row['id']} ${row['nombre']} ${row['precio']}`)
//         }
//     }).catch(err => { console.log(err); throw err})
//     .finally(()=> {
//         knex.destroy();
//     })

// knex.from('articulos').where('id', '=', 28).del()
//     .then(()=> console.log('Car deleted'))
//     .catch(err => { console.log(err); throw err})
//     .finally(()=> {
//         knex.destroy();
//     })

knex.from('articulos').where('id', '=', 29).update({ stock: 0})
    .then(()=> console.log('Car stock updated'))
    .catch(err => { console.log(err); throw err})
    .finally(()=> {
        knex.destroy();
    })