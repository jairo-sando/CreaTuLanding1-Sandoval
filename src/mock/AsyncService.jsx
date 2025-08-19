export const products = [
      
   {
   
     name: 'Desconexión Total',
     description: 'La combinación entre técnicas de respiración con aromaterapia y movimientos prolongados, le permiten alcanzar una serenidad a todo su ser. Ideal para las personas que buscan una desconexión total.',
     price: 10000,
     stock: 15,
     category: 'Día de Spa',
     img: '../dia_spa_2.jpg'
   },
    
    {
     
     name: 'Bienestar completo',
     description: 'Vivirás una experiencia memorable, el servicio incluye: Circuito Hídrico, Masajes Relajantes(Vela o piedra Sabai), Facial de acto impacto con efecto lifting con principios activos de algas o caviar.',
     price: 10000,
     stock: 15,
     category: 'Día de Spa',
     img: '../dia_spa_3.jpg'
   },

    {
     
     name: 'Anti-Fatiga con Vitamina C',
     description: 'Regenera y reafirma tu piel con nuestra terapia innovadora para lograr un tratamiento de rejuvenecimiento, donde tu piel recupera luz y vitalidad. La combinación de una alta concentración de Vitamina C hace de esta mascarilla un producto de gran impacto, ofreciendo una excelente opción para reducir líneas de expresión, aclarar la piel y restablecer la apariencia juvenil.',
     price: 5000,
     stock: 15,
     category: 'Faciales',
     img: '../facial1.jpg'
   },

   {
     
     name: 'Facial Intensivo con Radiofrecuencia',
     description: 'Facial  intensivo con propiedades que regenera y estimula  la producción de colágeno con principios activos a base de vitamina c y algas.',
     price: 5000,
     stock: 15,
     category: 'Faciales',
     img: '../facial2.jpg'
   },

   {
    
     name: 'Hidratación Facial Relajante',
     description: 'Tratamiento facial que refina los poros abiertos e hidrata profundamente la piel, dejándola clara y limpia.',
     price: 5000,
     stock: 15,
     category: 'Faciales',
     img: '../facial3.jpg'
   },
   
   {
     
     name: 'Ritual Corporal Descontracturante',
     description: 'Genere una sensación de bienestar a su cuerpo con este masaje de presión profunda el cual alivia, descontractura, descongestiona y suelta tensión muscular.',
     price: 8000,
     stock: 15,
     category: 'Masajes Descontracturantes',
     img: '../masajes1.jpg'
   },
   
   {
     
     name: 'Ritual Relax Corporal',
     description: 'Este masaje terapéutico con piedras calientes devuelve el balance de los puntos energéticos del ser humano, oxigena y relaja profundamente los músculos, logrando así, un equilibrio perfecto.',
     price: 8000,
     stock: 15,
     category: 'Masajes Descontracturantes',
     img: '../masajes2.jpg'
   },
   
   {
     
     name: 'Ritual en pareja completo',
     description: 'Relaja tu cuerpo y mente a través de un masaje corporal que liberará la tensión y el estrés acompañado de una meditación que te permitirá silenciar tu mente para vivir el aquí y el ahora. Incluye: Exfolación corporal, masaje corporal, mascarilla, copa de vino y jacuzzi.',
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

export const getOneProduct = (id) => {

  return new Promise((resolve) => {
      setTimeout (()=>{
        let oneProduct = products.find ((prod)=> prod.id === id)
        resolve(oneProduct)
      },2000 )
  })

}
