﻿//скрипт содержащий широкий набор функций вычисляющих ПСУ и взвешенные оценки
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1l 1O(a,b){18(a>=1j.1y((33-b)*13/17))a=1j.1y((33-b)*13/17);1a{18(a>1j.1y((33-b-1)*13/17)+2.46)a=1j.1y((33-b)*13/17);1a a=1O(a,b+1)}1m a}1l 29(a,b){1E(a>17){a--;b+=13/17}9 c=[];c[16]=13;9 d=1O(b,a);1e(9 a=17;a<38;a++){c[a]=c[a-1];18(a>=24)c[a]-=8*(1-(a-24)/10);18(a==20)c[a]-=20;18(1j.1y(d)==35)c[a]-=10;18(1j.1y(d)==17)c[a]-=10;18(1j.1y(d)<=0)c[a]=0;d-=13/17}1m c}1l 1r(a,b){1m 10*(1+(a/13))*(1+(b/13))}1l 2J(a,b){1m(b/(10*(1+(a/13)))-1)/1*13}1l 2i(a,b,c,d){9 e=1A 1t(2C,6,15,0,0,0,0);9 f=1A 1t;1E(f>e)e.2F(e.2E()+1n);9 g=1j.1q((e.1S()-f.1S())/(2D*1o*1o*24))+1;9 h=29(a,c);9 i=b;9 j=a;9 k=2H;1e(9 l=1O(c,a);l>=-12;l-=13/17){18(1j.1q(l)>0){18(k){i+=(d/13)*(h[j]/13)*g;k=1c}1a i+=(d/13)*(h[j]/13)*1n;j++}}1m i}1l 1u(a,b,c,d,e,f){9 g=1A 1t(2C,6,15,0,0,0,0);9 h=1A 1t;1E(h>g)g.2F(g.2E()+1n);9 j=1j.1q((g.1S()-h.1S())/(2D*1o*1o*24))+1;9 k=29(a,c);9 l=b;9 m=a;9 n=2H;9 o=1O(c,a);1e(9 i=f;i>0;i--){18(1j.1q(o)>0){18(n){l+=(e/13)*(k[m]/13)*j;n=1c}1a l+=(e/13)*(k[m]/13)*1n;m++}1a{m++;18(n){l+=(1j.1q(o)/13)*8*j;n=1c}1a l+=(1j.1q(o)/13)*8*1n}o-=13/17}1m l}1l 3S(a,b,c){18(c){$(\'<19 1i="\'+a+\'"><a 1b="#x" 1d="Потенциальная СУ к концу текущего сезона">ПСУ +1</a>&1f;</19>\').1h(b);$(\'<19 1i="\'+a+\'"><a 1b="#x" 1d="Потенциальная СУ к концу следующего сезона">ПСУ +2</a>&1f;</19>\').1h(b);$(\'<19 1i="\'+a+\'"><a 1b="#x" 1d="Потенциальная СУ к концу сезона через сезон">ПСУ +3</a>&1f;</19>\').1h(b);$(\'<19 1i="\'+a+\'"><a 1b="#x" 1d="Максимальная потенциальная СУ игрока за всю его карьеру">ПСУ МАКС</a>&1f;</19>\').1h(b)}$(\'<19 1i="\'+a+\'"><a 1b="#x" 1d="Тактический профиль снайпера">СНА</a>&1f;</19>\').1h(b);$(\'<19 1i="\'+a+\'"><a 1b="#x" 1d="Тактический профиль скоростного нападающего">СКО</a>&1f;</19>\').1h(b);$(\'<19 1i="\'+a+\'"><a 1b="#x" 1d="Тактический профиль силового нападающего">СИЛ</a>&1f;</19>\').1h(b);$(\'<19 1i="\'+a+\'"><a 1b="#x" 1d="Тактический профиль созидающего нападающего">СОЗ</a>&1f;</19>\').1h(b);$(\'<19 1i="\'+a+\'"><a 1b="#x" 1d="Тактический профиль пасующего нападающего">ПАС</a>&1f;</19>\').1h(b);$(\'<19 1i="\'+a+\'"><a 1b="#x" 1d="Тактический профиль скоростного защитника">СКО</a>&1f;</19>\').1h(b);$(\'<19 1i="\'+a+\'"><a 1b="#x" 1d="Тактический профиль бросающего защитника">БРО</a>&1f;</19>\').1h(b);$(\'<19 1i="\'+a+\'"><a 1b="#x" 1d="Тактический профиль созидающего защитника">СОЗ</a>&1f;</19>\').1h(b);$(\'<19 1i="\'+a+\'"><a 1b="#x" 1d="Тактический профиль атакующего защитника">АТА</a>&1f;</19>\').1h(b);$(\'<19 1i="\'+a+\'"><a 1b="#x" 1d="Тактический профиль разрушающего защитника">РАЗ</a>&1f;</19>\').1h(b);$(\'<19 1i="\'+a+\'"><a 1b="#x" 1d="Взвешенная оценка игрока на позиции вратаря">Вратр</a>&1f;</19>\').1h(b);$(\'<19 1i="\'+a+\'"><a 1b="#x" 1d="Взвешенная оценка игрока на позиции защитника">Зщтнк</a>&1f;</19>\').1h(b);$(\'<19 1i="\'+a+\'"><a 1b="#x" 1d="Взвешенная оценка игрока на позиции крайнего нападающего">Край3Q</a>&1f;</19>\').1h(b);$(\'<19 1i="\'+a+\'"><a 1b="#x" 1d="Взвешенная оценка игрока на позиции центрального нападающего">Центр</a>&1f;</19>\').1h(b);$(\'<19 1i="\'+a+\'"><a 1b="#x" 1d="Рейтинг игрока в команде на позиции вратаря">ТОП В</a>&1f;</19>\').1h(b);$(\'<19 1i="\'+a+\'"><a 1b="#x" 1d="Рейтинг игрока в команде на позиции защитника">ТОП З</a>&1f;</19>\').1h(b);$(\'<19 1i="\'+a+\'"><a 1b="#x" 1d="Рейтинг игрока в команде на позиции крайнего нападающего">ТОП К</a>&1f;</19>\').1h(b);$(\'<19 1i="\'+a+\'"><a 1b="#x" 1d="Рейтинг игрока в команде на позиции центрального нападающего">ТОП Ц</a>&1f;</19>\').1h(b)}1l 1k(a,b){9 c=0;1e(9 i=0;i<a.1g-1;i++){c+=b[i]*a[i]}c+=a[a.1g-1]*2A().1v.3P;1m c}1l 2Y(g,h,k,l,m,n,o,q,r,t,u,v,w,x,y,z){9 A={};9 d=m;9 B=r;9 C=o;9 s=t;9 p=q;9 a=n;9 D=v;18(D>1s)D=1s;{C=o>1W?1W:o;a=n>1s?1s:n;A.3e=(3h/1W)*C+0.3O*a+0.4*D}{a=n>1T?1T:n;B=r>1o?1o:r;A.2S=(28/1T)*a+(3h/1o)*B+0.4*D}{a=n>1T?1T:n;s=t>1n?1n:t;A.2Z=(32/1T)*a+(48/1n)*s+0.4*D}{p=q>2z?2z:q;a=n>2z?2z:n;B=r>40?40:r;A.3d=0.4*p+0.4*a+0.4*B+0.4*D}{a=n>1X?1X:n;p=q>40?40:q;s=t>20?20:t;A.3g=(44/1X)*a+0.3N*p+0.5*s+0.4*D}{d=m>1X?1X:m;B=r>1o?1o:r;A.2L=d/4.3M+0.8*B+0.4*D}{d=m>13?13:m;C=o>1o?1o:o;p=q>40?40:q;A.2Q=0.3L*d+0.44*C+0.3i*p+0.4*D}{d=m>2B?2B:m;p=q>1n?1n:q;B=r>25?25:r;A.2T=(34/2B)*d+p/1.3K+0.24*B+0.4*D}{d=m>30?30:m;a=n>1n?1n:n;C=o>40?40:o;A.31=d/2.3J+a/2.3I+0.4*C+0.4*D}{d=m>1W?1W:m;s=t>1s?1s:t;A.37=0.32*d+0.3H*s+0.4*D}9 E=2A();9 F=E.1v.3G;9 G=E.1v.3F;9 H=E.1v.4d;9 I=E.1v.3E;9 J=[l/w*13,m/w*13,n/w*13,o/w*13,q/w*13,r/w*13,t/w*13,u/w*13];9 K=0;9 L=0;9 M=0;9 N=0;1e(9 i=0;i<J.1g;i++){K+=(J[i]-F[i])*(J[i]-F[i]);L+=(J[i]-G[i])*(J[i]-G[i]);M+=(J[i]-H[i])*(J[i]-H[i]);N+=(J[i]-I[i])*(J[i]-I[i])}18(K<1H)K=1-K/1H;1a K=0;18(L<1H)L=1-L/1H;1a L=0;18(M<1H)M=1-M/1H;1a M=0;18(N<1H)N=1-N/1H;1a N=0;A.3D=K;A.3C=L;A.3B=N;A.3A=M;J=[l,m,n,o,q,r,t,u,v];A.1V=1k(J,F);A.2a=1k(J,G);A.2b=1k(J,I);A.2c=1k(J,H);9 O=29(g,k);A.3z=1r(x,h)*(O[g]/13);18(y!=1N)A.39=2J(x,y/(O[g]/13));9 P=3y.3x("3w",z);18(P==3u)P=[];18(P.1g>=1){y=0;9 Q=P.1g;1e(9 i=0;i<P.1g;i++){18(i+1<P.1g){9 R=P[i].d.2j(" ")[0].2j("/");9 S=P[i+1].d.2j(" ")[0].2j("/");9 T=1A 1t(1t.2K(R[0],R[1]*1-1,R[2]));9 U=1A 1t(1t.2K(S[0],S[1]*1-1,S[2]));9 V=1j.1y((U-T)/3t);1e(9 j=0;j<V-1;j++){y+=P[i].v|0;Q++}}y+=P[i].v|0}y/=Q;A.1P=y;A.39=2J(x,A.1P/(O[g]/13));A.3s=Q;18(Q>14){A.2m=2i(g,w,k,A.1P/(O[g]/13));A.2n=1u(g,w,k,h,A.1P/(O[g]/13),1);A.2o=1u(g,w,k,h,A.1P/(O[g]/13),2);A.2p=1u(g,w,k,h,A.1P/(O[g]/13),3)}1a{A.2m=2i(g,w,k,1r(x,h));A.2n=1u(g,w,k,h,1r(x,h),1);A.2o=1u(g,w,k,h,1r(x,h),2);A.2p=1u(g,w,k,h,1r(x,h),3)}}1a{A.2m=2i(g,w,k,1r(x,h));A.2n=1u(g,w,k,h,1r(x,h),1);A.2o=1u(g,w,k,h,1r(x,h),2);A.2p=1u(g,w,k,h,1r(x,h),3)}9 W=[];1l 22(a,b,c,d){9 e=a>b?a:b;9 f=c>d?c:d;1m e>f?e:f}A.1x=\'U\';18(K==22(L,N,M,K)){W=F;A.1x=\'G\'}1a 18(L==22(L,N,M,K)){W=G;A.1x=\'D\'}1a 18(N==22(L,N,M,K)){W=I;A.1x=\'W\'}1a 18(M==22(L,N,M,K)){W=H;A.1x=\'C\'}A.3r=W[0]-l/w*13;A.3q=W[1]-m/w*13;A.3p=W[2]-n/w*13;A.3o=W[3]-o/w*13;A.3n=W[4]-q/w*13;A.3m=W[5]-r/w*13;A.3l=W[6]-t/w*13;A.3k=W[7]-u/w*13;9 X=2G.3a.3j("3b");9 Y=[];9 Z=[];9 1D=[];9 1C=[];18(X.1U==1N){1e(9 i=0;i<X.11.1g;i++){18(X.11[i].27==1N){J=[X.11[i].2d,X.11[i].2g,X.11[i].2e,X.11[i].2f,X.11[i].1Y,X.11[i].1Z,X.11[i].21,X.11[i].23,X.11[i].26];Y.1p(1k(J,F));Z.1p(1k(J,G));1D.1p(1k(J,I));1C.1p(1k(J,H))}1a{Y.1p(X.11[i].27.1V);Z.1p(X.11[i].27.2a);1D.1p(X.11[i].27.2b);1C.1p(X.11[i].27.2c)}}1l 1R(c){1m c.1R(1l(a,b){1m b-a})}1R(Y);1R(Z);1R(1D);1R(1C);9 1Q={};1Q.2P=Y;1Q.2O=Z;1Q.2M=1D;1Q.3f=1C;X.1U=1Q;2G.3a.3v("3b",X)}1a{Y=X.1U.2P;Z=X.1U.2O;1D=X.1U.2M;1C=X.1U.3f}9 1L=0;9 1K=0;9 1J=0;9 1M=0;1E((Y[1L]|0)>A.1V){1L++};1E((Z[1K]|0)>A.2a){1K++};1E((1D[1J]|0)>A.2b){1J++};1E((1C[1M]|0)>A.2c){1M++};A.2X=1L+1;A.2W=1K+1;A.2V=1J+1;A.2U=1M+1;9 1w=["Этот превосходный игрок должен быть получен любой ценой","Это талантливый игрок и его необходимо заполучить даже за большие деньги","Это отличный игрок и его приобритение усилит команду","Это хороший игрок и его приобретение будет полезно команде","Это полезный игрок и его приобретение имеет смысл при низкой цене","Это посредственный игрок и его приобретение имеет смысл только при сильной нехватке игроков","Это бесполезный игрок и его приобретение не имеет смысла"];18(A.1x==\'G\'){A.2s="Игрок является "+(1L+1)+" вратарём";18(y==1N){18(1L==0)A.1z=1w[0];1a 18(1L==1)A.1z=1w[1];1a A.1z=1w[6]}1e(9 i=0;i<X.11.1g;i++){J=[X.11[i].2d,X.11[i].2g,X.11[i].2e,X.11[i].2f,X.11[i].1Y,X.11[i].1Z,X.11[i].21,X.11[i].23,X.11[i].26];18(1k(J,F)==Y[0]){A.1B=X.11[i].1I;A.1G=X.11[i].1F;A.2h=1k(J,F)-A.1V}}A.2v="Игрок "+\'<a 1b="2w.2x?p=1v.2y&2u;1F=\'+A.1G+\'" 2t="2q-2k:2l;">\'+A.1B+\'</a>\'+" является лучшим вратарём команды"}1a 18(A.1x==\'D\'){A.2s="Игрок является "+(1K+1)+" защитником";18(y==1N){18(1K<6)A.1z=1w[1K];1a A.1z=1w[6]}1e(9 i=0;i<X.11.1g;i++){J=[X.11[i].2d,X.11[i].2g,X.11[i].2e,X.11[i].2f,X.11[i].1Y,X.11[i].1Z,X.11[i].21,X.11[i].23,X.11[i].26];18(1k(J,G)==Z[0]){A.1B=X.11[i].1I;A.1G=X.11[i].1F;A.2h=1k(J,G)-A.2a}}A.2v="Игрок "+\'<a 1b="2w.2x?p=1v.2y&2u;1F=\'+A.1G+\'" 2t="2q-2k:2l;">\'+A.1B+\'</a>\'+" является лучшим защитником команды"}1a 18(A.1x==\'W\'){A.2s="Игрок является "+(1J+1)+" крайним нападающим";18(y==1N){18(1J<6)A.1z=1w[1J];1a A.1z=1w[6]}1e(9 i=0;i<X.11.1g;i++){J=[X.11[i].2d,X.11[i].2g,X.11[i].2e,X.11[i].2f,X.11[i].1Y,X.11[i].1Z,X.11[i].21,X.11[i].23,X.11[i].26];18(1k(J,I)==1D[0]){A.1B=X.11[i].1I;A.1G=X.11[i].1F;A.2h=1k(J,I)-A.2b}}A.2v="Игрок "+\'<a 1b="2w.2x?p=1v.2y&2u;1F=\'+A.1G+\'" 2t="2q-2k:2l;">\'+A.1B+\'</a>\'+" является лучшим крайним нападающим команды"}1a 18(A.1x==\'C\'){A.2s="Игрок является "+(1M+1)+" центральным нападающим";18(y==1N){18(1M<6)A.1z=1w[1M];1a A.1z=1w[6]}1e(9 i=0;i<X.11.1g;i++){J=[X.11[i].2d,X.11[i].2g,X.11[i].2e,X.11[i].2f,X.11[i].1Y,X.11[i].1Z,X.11[i].21,X.11[i].23,X.11[i].26];18(1k(J,H)==1C[0]){A.1B=X.11[i].1I;A.1G=X.11[i].1F;A.2h=1k(J,H)-A.2c}}A.2v=\'Игрок \'+\'<a 1b="2w.2x?p=1v.2y&2u;1F=\'+A.1G+\'" 2t="2q-2k:2l;">\'+A.1B+\'</a>\'+" является лучшим центральным нападающим команды"}1m A}1l 3R(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){9 q=2Y(c,d,e,f,g,h,i,j,k,l,m,n,o,p);{18(d>0){a(q.2n,b,1c);a(q.2o,b,1c);a(q.2p,b,1c);18(e>0)a(q.2m,b,1c);1a a(o,b,1c)}}a(q.3e,b,1c);a(q.2S,b,1c);a(q.2Z,b,1c);a(q.3d,b,1c);a(q.3g,b,1c);a(q.2L,b,1c);a(q.2Q,b,1c);a(q.2T,b,1c);a(q.31,b,1c);a(q.37,b,1c);a(q.1V,b,1c);a(q.2a,b,1c);a(q.2b,b,1c);a(q.2c,b,1c);a(q.2X,b,1s);a(q.2W,b,1s);a(q.2V,b,1s);a(q.2U,b,1s)}1l 36(a,b,c,d,e){9 f=1A 1t(2C,6,15,0,0,0,0);9 g=1A 1t;1E(g>f)f.2F(f.2E()+1n);9 h=1j.1q((f.1S()-g.1S())/(2D*1o*1o*24))+1;9 j=29(a,c);9 k=a;9 l=[];9 m=2A().1v.3T;m[1j.1y(e/1s)]=e;1e(9 i=0;i<m.1g;i++)l[m[i]]=b;9 n=[];1e(9 i=0;i<m.1g;i++)n[m[i]]=[];1e(9 i=0;i<m.1g;i++)n[m[i]].1p([k,l[m[i]]]);9 o=2H;9 p=0;1e(9 p=1O(c,a);p>=-12;p-=13/17){18(1j.1q(p)>0){18(o){1e(9 i=0;i<m.1g;i++)l[m[i]]+=(1r(m[i],d)/13)*(j[k]/13)*h;o=1c}1a 1e(9 i=0;i<m.1g;i++)l[m[i]]+=(1r(m[i],d)/13)*(j[k]/13)*1n;k++;1e(9 i=0;i<m.1g;i++)n[m[i]].1p([k,1j.1q(l[m[i]])])}1a{k++;18(o){1e(9 i=0;i<m.1g;i++)l[m[i]]+=(1j.1q(p)/13)*8*h;o=1c}1a 1e(9 i=0;i<m.1g;i++)l[m[i]]+=(1j.1q(p)/13)*8*1n;1e(9 i=0;i<m.1g;i++)n[m[i]].1p([k,1j.1q(l[m[i]])])}}9 q=[];1e(9 i=0;i<m.1g;i++){18(m[i])18(e!=m[i]){q.1p({1I:"тренбаза "+m[i],3c:n[m[i]]})}1a{q.1p({1I:"текущий уровень тренбазы "+e,3c:n[e]})}}1m q}1l 3U(a,b,c,d,e,f){9 g=1A 3V.3W({3X:{3Y:f,2R:\'3Z\'},1d:{2I:"Потенциал роста суммы умений"},41:{2I:\'автор формул - Али Гарх\'},42:{2R:\'43\',45:1l(){1m 2r.47}},49:{1d:{2I:"Потенциальная сумма умений"},4a:0},4b:{4c:1l(){1m\'<b>\'+2r.2N.1I+\'</b><2G/> Возраст \'+2r.x+\' :\'+" Потенциальная сумма умений "+\' \'+2r.y+\'\'}},2N:36(a,b,c,d,e)});1m g}',62,262,'|||||||||var||||||||||||||||||||||||||||||||||||||||||||||||||||||players||100|||||if|td|else|href|false|title|for|nbsp|length|insertAfter|class|Math|getEstimate|function|return|70|60|push|floor|getDailyMaxTraining|50|Date|getPAIAfterSeason|public_player_info|bh|pos|round|buyMessage|new|BestName|bb|ba|while|player_id|BestId|5000|name|bf|be|bd|bg|undefined|roundPot|averageTraining|bc|sort|getTime|130|sortedArrays|GEstimate|150|140|pas|spe||str|max4|sc|||experience|estimate||getFallingCoeff|DEstimate|WEstimate|CEstimate|goa|att|sho|def|BestEstimateDelta|getPAI|split|weight|normal|PAImax|PAI1|PAI2|PAI3|font|this|TOPString|style|amp|TOPStringBest|index|php|inc|80|getHaarpSettings|120|2012|1000|getDate|setDate|br|true|text|getPerf|UTC|DSpeed|WEstimateArray|series|DEstimateArray|GEstimateArray|DShout|type|ASpeed|DCreater|CTOP|WTOP|DTOP|GTOP|getWeightedEstimate|AStrength|90|DAttack|||||potencialAISeries|Destr||estimatePerfomance|storage|team|data|ACreater|ASniper|CEstimateArray|APas|52|66|get|Tsc|Tstr|Tspe|Tpas|Tsho|Tatt|Tdef|Tgoa|trainingDays|86400000|null|set|Training|loadValue|localStorageDB|estimateTraining|deltaC|deltaW|deltaD|deltaG|etalonW|etalonD|etalonG|64|1875|8125|75|272|375|65|56|experienceMultiplier|_|insertExtTD|insertExtHeader|trainingBases|getPAIChart|Highcharts|Chart|chart|renderTo|spline||subtitle|xAxis|datetime||dateTimeLabelFormats|94|value||yAxis|min|tooltip|formatter|etalonC'.split('|'),0,{}))