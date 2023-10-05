
function outest(){
    var c=20;
    function outer(b) {
        function inner(){
            console.log(a,b,c);
        }
        var a=10;
        return inner;
    }
    return outer;
}
var c=40;
var close = outest();
var closer = close("hello");
var closest = closer();
