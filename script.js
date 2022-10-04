let blackList = ['!','@','#','%'];

document.getElementById("startedSearch").onkeyup = function() {
let expr = new RegExp(blackList.join('|'));
if (this.value.search(expr) !== -1) {
this.value = '';

alert(' Символы !@#$ запрещены')
}
}