for(S=12,c=A=66,z=[i=132];i--;)z[i]=i%S?5:-1;X=a=>(D=[S,1,-S,-1]).map((b,e,j)=>1<z[b=a+2*j[3&e+i]]&&(z[b]=z[(a+b)/2]=0,i=9*Math.random(),X(b))),X(S+2),F=0

while(!F){c==14?F=c=A:F||(z[c]=(z[c]+1)%4),5>z[n=c+D[z[c]]]&&(c=n),F||(Z=z.slice``),Z[c]=4};

""+Z.map(b=>"    +X"[b]||`
`)