# Theseus


Creating and solving a maze in only
256 bytes of JavaScript.

```


    ,@,@,@,@,@,@,@,@,@,@,@,
    ,+,+,+,+,+,+,@, , , ,@,
    ,@, ,@,@,@,+,@, ,@, ,@,
    ,@, ,@,+,+,+,@, ,@, ,@,
    ,@,@,@,+,@,@,@,@,@, ,@,
    ,@,+,+,+,@, , , , , ,@,
    ,@,+,@,@,@,+,@, ,@,@,@,
    ,@,+,@, , ,+,@, ,@, ,@,
    ,@,+,@,@,@,+,@, ,@, ,@,
    ,@,+,+,+,+,+,@, , , ,@,
    ,@,@,@,@,@,@,@,@,@,@,@

```

### Minimal Source (256 bytes):

```js
for(z=[c=66,i=132];i--;X=a=>_.map((b,e)=>
1<z[b=a+2*_[3&e+i]]&&X(b,i=9*Math.random(
z[b]=z[(a+b)/2]=F=0))))_=[-12,z[i]=i%12?5
:-1,12,1];for(X(14);F<2;F?0:$=[...z],$[13
]=$[c]=4)c^14?z[c]=z[c]+~F&3:c=++F&&66,5>
z[n=c+_[z[c]]]&&(c=n);""+$.map(b=>`
    +@`[++b])
```

### Links

* [aem1k.com](http://aem1k.com/) - Home
* [github.com/aemkei/theseus](https://github.com/aemkei/theseus) - Source
* [speakerdeck.com/aemkei/fwdays-daedalus](https://speakerdeck.com/aemkei/fwdays-daedalus?slide=130) - Presentation
* [maze solving machine](http://cyberneticzoo.com/mazesolvers/1952-%E2%80%93-theseus-maze-solving-mouse-%E2%80%93-claude-shannon-american/) - by Claude Shannon
