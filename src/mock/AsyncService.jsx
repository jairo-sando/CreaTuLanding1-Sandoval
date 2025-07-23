const products = [
   { 
      id: 'spa-01',
      name: 'Dia de Spa 01',
      description: 'loremloremlorem...',
      price: 10000,
      stock: 15,
      category: 'Día de Spa',
      img: '../dia_de_spa1.jpg'
     
   },
    
   {
     id: 'spa-02',
     name: 'Dia de Spa 02',
     description: 'loremloremlorem...',
     price: 10000,
     stock: 15,
     category: 'Día de Spa',
     img: '../dia_spa_2.jpg'
   },
    
    {
     id: 'spa-03',
     name: 'Dia de Spa 03',
     description: 'loremloremlorem...',
     price: 10000,
     stock: 15,
     category: 'Día de Spa',
     img: '../dia_spa_3.jpg'
   },

    {
     id: 'facial-01',
     name: 'Facial 01',
     description: 'loremloremlorem...',
     price: 5000,
     stock: 15,
     category: 'Faciales',
     img: '../facial1.jpg'
   },

   {
     id: 'facial-02',
     name: 'Facial 02',
     description: 'loremloremlorem...',
     price: 5000,
     stock: 15,
     category: 'Faciales',
     img: '../facial2.jpg'
   },

   {
     id: 'facial-03',
     name: 'Facial 03',
     description: 'loremloremlorem...',
     price: 5000,
     stock: 15,
     category: 'Faciales',
     img: '../facial3.jpg'
   },
   
   {
     id: 'masajes-01',
     name: 'Masajes 01',
     description: 'loremloremlorem...',
     price: 8000,
     stock: 15,
     category: 'Masajes Descontracturantes',
     img: '../masajes1.jpg'
   },
   
   {
     id: 'masajes-02',
     name: 'Masajes 02',
     description: 'loremloremlorem...',
     price: 8000,
     stock: 15,
     category: 'Masajes Descontracturantes',
     img: '../masajes2.jpg'
   },
   
   {
     id: 'masajes-03',
     name: 'Masajes 03',
     description: 'loremloremlorem...',
     price: 8000,
     stock: 15,
     category: 'Masajes Descontracturantes',
     img: '../masajes3.jpg'
   }
   

]

//Promesa de Productos

export const getProducts = () => {
  let error = false
   return new Promise ((resolve, reject)=> {
       setTimeout(() =>{
       if (error){
         reject ('Hubo un error, intente más tarde...')
         } else{
          resolve (products)
         }
       },2000)

    })

}
