const presidents = [
    {
        name:"Joe Biden",
        age:74,
        isAlive:true,
        salary:30.67,
        gender:"Male",
        wife:undefined,
        car:["Marcedez", "BMW", "Range Rover"],
        children:[
            {
                id:1,
                name:"Kim Jong Un",
                married:true,
                gender:"Male"
            },
            {
                id:2,
                name:"Vladimir Putin",
                married:false,
                gender:"Male"
            }
        ]
    },
    {
        name:"Sheikh Hasina",
        age:74,
        isAlive:true,
        salary:30.67,
        gender:"Female",
        wife:null,
        car:["Marcedez", "BMW", "Range Rover"],
        children:[
            {
                id:1,
                name:"Sazib Wazed Joy",
                married:true,
                gender:"Male"
            },
            {
                id:2,
                name:"Putul",
                married:false,
                gender:"Female"
            }
        ]
    }
]

for(var president of presidents){
    console.log(president.children[0].name)
}