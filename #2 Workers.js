

const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500},
    {'name':"Kirill","salary":1600}
];
var workersNames = [];


function WorkersMoney(object){
    for (var i=0; i<object.length;i++){
        if(object[i].salary>1000){
            workersNames.push(object[i].name);
        }
    }
    return workersNames;
}

console.log(WorkersMoney(workers));
