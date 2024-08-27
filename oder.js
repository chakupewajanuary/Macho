const tobos=[
    {
    id:1,
    text:'meet with doctor',
    day$time:'jully 2024'
},
{
    id:2,
    text:'meet with teacher',
    day$time:'march 2024'
},
{
    id:1,
    text:'meet with dentist',
    day$time:'august 2024'
}
];

for (let tai = 0; tai < tobos.length; tai++) {
    const eg= tobos[tai];
    console.log(eg)
    
}

for(let tax of tobos){
    console.log(tax.text);
}

tobos.forEach(function(user) {
    console.log(`Name: ${user.id}, status: ${user.text}`);
});