const cities=['Madrid',
               'Londres',
                'berlin']

const countries=['Spain',
                  'Belgium',
                   'Italy']

const world = [...cities,...countries]


console.log(world)




const modelsWoman = {
    Sara: 'Spain',
    Kelly: 'England',
    Fionella: 'Italy'
}

const modelsMan = {
    Pepe: 'Spain',
    Jordan: 'United State',
    Korea: 'Kim You Ul'
}


const models ={...modelsWoman, ...modelsMan}


console.log(models)