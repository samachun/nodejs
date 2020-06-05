var members = ['egoing', 'k8805', 'hoya'];
console.log(members[1]); //k8805 array(배열)
var i = 0;
while (i < members.length) {
    console.log('array loop', members[i]);
    i = i + 1;
}



var roles = {
    'programmer': 'egoing', //programmer: key egoing: value
    'designer': 'k8805',
    'manager': 'hoya'
}
console.log(roles.designer); //k8805 object(객체)
console.log(roles['designer']); //k8805

for (var name in roles) {
    console.log('ovject => ', name, 'value => ', roles[name]); //첫번빼 name은 key 값이고 두번째 name은 밸류값이다.
}