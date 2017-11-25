/*eslint-disable */

const vm = require('vm');
const colors = require('colors');


code = `R=Math.random;X=a=>_.map((b,e)=>1<z[b=a+2*_[3&e+i]]&&X(b,i=9*R(z[b]=z[(a+b)/2]=F=0)));for(z=[c=190,i=380];i--;)_=[S=20,z[i]=i%S?5:-1,-S,1]
for(X(22);F<2;F?0:$=[...z],$[21]=$[c]=4)c^22?z[c]=z[c]+~F&3:c=++F&&190,5>z[n=c+_[z[c]]]&&(c=n)
""+$.map(b=>'\n....+@'[++b])`;


// R=Math.random;X=a=>_.map((b,e)=>1<z[b=a+2*_[3&e+i+0]]&&X(b,i=R(z[b]=z[(a+b)/2]=F=0)*9));for(z=[c=66,i=6*22];--i;)_=[-12,z[i]=i%12?5:-1,12,1];for(X(14);F<2;F?0:$=[...z],$[13]=$[c]=4)c^14?z[c]=z[c]+~F&3:c=++F&&66,5>z[n=c+_[z[c]]]&&(c=n);""+$.map(b=>'\\n....+@'[++b])


X = (r,c,o=2*c+2,i=2*r*o+o,z=[],F=(p,i=Math.random()*4)=>[o,1,-o,-1].map((s,j,d)=>z[s=p+2*d[j+i&3]]>0&&(z[s]=z[(p+s)/2]=' ',F(s))))=>{for(;i--;)z[i]=i%o?8:`\n`;F(o+2);return z}

valid = false;

MIN = 10

do {

  x = X(9,9)

  s = code.split("")

  y = i = "";

  for (a in x){
    c = x[a]

    if (c == " "){
      y += "  ";
    } else if (c == '\n'){
      y += "\n";
    } else {
      y += (s[i++] || ";") + (s[i++] || ";");
    }
  }

  try {
    s = new vm.Script(y, {displayErrors: true});
    valid = true;

    console.log(y)

  } catch (e) {
    const stack = e.stack.split("\n");
    const line = stack[1];
    const marker = stack[2];
    const [before, after] = y.split("\n" + line + "\n");

    if (before.length >= MIN) {
      MIN = before.length;
      console.log(before.white);
      console.log(line.white);
      console.log(marker.red);
      console.log(after.grey);
      console.log(before.length);
    }
  }


} while (!valid);


