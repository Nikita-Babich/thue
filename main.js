var out1 = document.getElementById("output1");
var strings;
for(i = -3; i < 10; i++) {
 if (i) {strings += i*i + "<br>";}
}
out1.innerHTML = strings;
