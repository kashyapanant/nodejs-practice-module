function x(name, y){
    console.log('Inside x');
    y(name[0], name[1]);
}

setTimeout(x, 3000, '', (a, b) => console.log(`a+b ${a+b}`));

x(['qw','ysdt'], function(c, d){
    console.log(`c --> ${c}  d --> ${d}`);
});

x([7, 93], (a, b) => console.log(`a+b ${a+b}`));