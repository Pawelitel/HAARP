﻿//скрипт содержащий широкий набор функций вычисляющих ПСУ и взвешенные оценки
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1i 1O(a,b){14(a>=1h.1s((33-b)*13/17))a=1h.1s((33-b)*13/17);19{14(a>1h.1s((33-b-1)*13/17)+2.45)a=1h.1s((33-b)*13/17);19 a=1O(a,b+1)}1l a}1i 26(a,b){1B(a>17){a--;b+=13/17}9 c=[];c[16]=13;9 d=1O(b,a);1c(9 a=17;a<38;a++){c[a]=c[a-1];14(a>=24)c[a]-=8*(1-(a-24)/10);14(a==21)c[a]-=20;14(1h.1s(d)==35)c[a]-=10;14(1h.1s(d)==17)c[a]-=10;14(1h.1s(d)<=0)c[a]=0;d-=13/17}1l c}1i 1A(a,b){1l 10*(1+(a/13))*(1+(b/13))}1i 2B(a,b){1l(b/(10*(1+(a/13)))-1)/1*13}1i 2u(a,b,c,d,e){9 f=1t 1r(2I,6,15,0,0,0,0);9 g=1t 1r;1B(g>f)f.2C(f.2D()+1k);9 h=1h.1o((f.1P()-g.1P())/(2E*1m*1m*24))+1;9 i=26(a,c);9 j=7.5*(1+1.5*(e/13))*(1+1.5*(d/13));9 k=b;9 l=a;9 m=2F;1c(9 n=1O(c,a);n>=-12;n-=13/17){14(1h.1o(n)>0){14(m){k+=(1A(e,d)/13)*(i[l]/13)*h;m=1a}19 k+=(1A(e,d)/13)*(i[l]/13)*1k;l++}}1l k}1i 1E(a,b,c,d,e,f){9 g=1t 1r(2I,6,15,0,0,0,0);9 h=1t 1r;1B(h>g)g.2C(g.2D()+1k);9 j=1h.1o((g.1P()-h.1P())/(2E*1m*1m*24))+1;9 k=26(a,c);9 l=7.5*(1+1.5*(e/13))*(1+1.5*(d/13));9 m=b;9 n=a;9 o=2F;9 p=1O(c,a);1c(9 i=f;i>0;i--){14(1h.1o(p)>0){14(o){m+=(1A(e,d)/13)*(k[n]/13)*j;o=1a}19 m+=(1A(e,d)/13)*(k[n]/13)*1k;n++}19{n++;14(o){m+=(1h.1o(p)/13)*8*j;o=1a}19 m+=(1h.1o(p)/13)*8*1k}p-=13/17}1l m}1i 3R(a,b,c){14(c){$(\'<18 1f="\'+a+\'"><a 1b="#x">ПСУ +1</a>&1g;</18>\').1d(b);$(\'<18 1f="\'+a+\'"><a 1b="#x">ПСУ +2</a>&1g;</18>\').1d(b);$(\'<18 1f="\'+a+\'"><a 1b="#x">ПСУ +3</a>&1g;</18>\').1d(b);$(\'<18 1f="\'+a+\'"><a 1b="#x">ПСУ МАКС</a>&1g;</18>\').1d(b)}$(\'<18 1f="\'+a+\'"><a 1b="#x">СНА</a>&1g;</18>\').1d(b);$(\'<18 1f="\'+a+\'"><a 1b="#x">СКО</a>&1g;</18>\').1d(b);$(\'<18 1f="\'+a+\'"><a 1b="#x">СИЛ</a>&1g;</18>\').1d(b);$(\'<18 1f="\'+a+\'"><a 1b="#x">СОЗ</a>&1g;</18>\').1d(b);$(\'<18 1f="\'+a+\'"><a 1b="#x">ПАС</a>&1g;</18>\').1d(b);$(\'<18 1f="\'+a+\'"><a 1b="#x">СКО</a>&1g;</18>\').1d(b);$(\'<18 1f="\'+a+\'"><a 1b="#x">БРО</a>&1g;</18>\').1d(b);$(\'<18 1f="\'+a+\'"><a 1b="#x">СОЗ</a>&1g;</18>\').1d(b);$(\'<18 1f="\'+a+\'"><a 1b="#x">АТА</a>&1g;</18>\').1d(b);$(\'<18 1f="\'+a+\'"><a 1b="#x">РАЗ</a>&1g;</18>\').1d(b);$(\'<18 1f="\'+a+\'"><a 1b="#x">Вратр</a>&1g;</18>\').1d(b);$(\'<18 1f="\'+a+\'"><a 1b="#x">Зщтнк</a>&1g;</18>\').1d(b);$(\'<18 1f="\'+a+\'"><a 1b="#x">Край3P</a>&1g;</18>\').1d(b);$(\'<18 1f="\'+a+\'"><a 1b="#x">Центр</a>&1g;</18>\').1d(b);$(\'<18 1f="\'+a+\'"><a 1b="#x">ТОП В</a>&1g;</18>\').1d(b);$(\'<18 1f="\'+a+\'"><a 1b="#x">ТОП З</a>&1g;</18>\').1d(b);$(\'<18 1f="\'+a+\'"><a 1b="#x">ТОП К</a>&1g;</18>\').1d(b);$(\'<18 1f="\'+a+\'"><a 1b="#x">ТОП Ц</a>&1g;</18>\').1d(b)}1i 1j(a,b){9 c=0;1c(9 i=0;i<a.1e-1;i++){c+=b[i]*a[i]}c+=a[a.1e-1]*2G().1q.3O;1l c}1i 3d(g,h,k,l,m,n,o,q,r,t,u,v,w,x,y,z){9 A={};9 d=m;9 B=r;9 C=o;9 s=t;9 p=q;9 a=n;9 D=v;14(D>1L)D=1L;{C=o>23?23:o;a=n>1L?1L:n;A.3g=(2K/23)*C+0.3N*a+0.4*D}{a=n>1N?1N:n;B=r>1m?1m:r;A.2X=(28/1N)*a+(2K/1m)*B+0.4*D}{a=n>1N?1N:n;s=t>1k?1k:t;A.31=(32/1N)*a+(48/1k)*s+0.4*D}{p=q>2t?2t:q;a=n>2t?2t:n;B=r>40?40:r;A.3c=0.4*p+0.4*a+0.4*B+0.4*D}{a=n>27?27:n;p=q>40?40:q;s=t>20?20:t;A.3f=(44/27)*a+0.3M*p+0.5*s+0.4*D}{d=m>27?27:m;B=r>1m?1m:r;A.3h=d/4.3i+0.8*B+0.4*D}{d=m>13?13:m;C=o>1m?1m:o;p=q>40?40:q;A.2N=0.3K*d+0.44*C+0.3J*p+0.4*D}{d=m>2H?2H:m;p=q>1k?1k:q;B=r>25?25:r;A.2Q=(34/2H)*d+p/1.3I+0.24*B+0.4*D}{d=m>2Z?2Z:m;a=n>1k?1k:n;C=o>40?40:o;A.30=d/2.3H+a/2.3G+0.4*C+0.4*D}{d=m>23?23:m;s=t>1L?1L:t;A.39=0.32*d+0.3F*s+0.4*D}9 E=2G();9 F=E.1q.3E;9 G=E.1q.4c;9 H=E.1q.3D;9 I=E.1q.3C;9 J=[l/w*13,m/w*13,n/w*13,o/w*13,q/w*13,r/w*13,t/w*13,u/w*13];9 K=0;9 L=0;9 M=0;9 N=0;1c(9 i=0;i<J.1e;i++){K+=(J[i]-F[i])*(J[i]-F[i]);L+=(J[i]-G[i])*(J[i]-G[i]);M+=(J[i]-H[i])*(J[i]-H[i]);N+=(J[i]-I[i])*(J[i]-I[i])}14(K<1y)K=1-K/1y;19 K=0;14(L<1y)L=1-L/1y;19 L=0;14(M<1y)M=1-M/1y;19 M=0;14(N<1y)N=1-N/1y;19 N=0;A.3B=K;A.3A=L;A.3z=N;A.3y=M;J=[l,m,n,o,q,r,t,u,v];A.1W=1j(J,F);A.1X=1j(J,G);A.1Y=1j(J,I);A.2f=1j(J,H);9 O=26(g,k);A.3x=1A(x,h)*(O[g]/13);14(y!=1G)A.1Q=2B(x,y/(O[g]/13));9 P=3w.3v("3u",z);14(P==3s)P=[];14(P.1e>=1){y=0;9 Q=P.1e;1c(9 i=0;i<P.1e;i++){14(i+1<P.1e){9 R=P[i].d.2m(" ")[0].2m("/");9 S=P[i+1].d.2m(" ")[0].2m("/");9 T=1t 1r(1r.2J(R[0],R[1]*1-1,R[2]));9 U=1t 1r(1r.2J(S[0],S[1]*1-1,S[2]));9 V=1h.1s((U-T)/3r);1c(9 j=0;j<V-1;j++){y+=P[i].v|0;Q++}}y+=P[i].v|0}y/=Q;A.2M=y;A.1Q=2B(x,A.2M/(O[g]/13));A.2y=2u(g,w,k,A.1Q,x);A.2x=1E(g,w,k,A.1Q,x,1);A.2w=1E(g,w,k,A.1Q,x,2);A.2v=1E(g,w,k,A.1Q,x,3)}19{A.2y=2u(g,w,k,h,x);A.2x=1E(g,w,k,h,x,1);A.2w=1E(g,w,k,h,x,2);A.2v=1E(g,w,k,h,x,3)}9 W=[];1i 2d(a,b,c,d){9 e=a>b?a:b;9 f=c>d?c:d;1l e>f?e:f}A.1u=\'U\';14(K==2d(L,N,M,K)){W=F;A.1u=\'G\'}19 14(L==2d(L,N,M,K)){W=G;A.1u=\'D\'}19 14(N==2d(L,N,M,K)){W=I;A.1u=\'W\'}19 14(M==2d(L,N,M,K)){W=H;A.1u=\'C\'}A.3q=W[0]-l/w*13;A.3p=W[1]-m/w*13;A.3o=W[2]-n/w*13;A.3n=W[3]-o/w*13;A.3m=W[4]-q/w*13;A.3l=W[5]-r/w*13;A.3k=W[6]-t/w*13;A.3L=W[7]-u/w*13;9 X=2z.36.3j("37");9 Y=[];9 Z=[];9 1z=[];9 1w=[];14(X.1R==1G){1c(9 i=0;i<X.11.1e;i++){14(X.11[i].1V==1G){J=[X.11[i].1U,X.11[i].1T,X.11[i].2e,X.11[i].1Z,X.11[i].22,X.11[i].29,X.11[i].2a,X.11[i].2b,X.11[i].2c];Y.1n(1j(J,F));Z.1n(1j(J,G));1z.1n(1j(J,I));1w.1n(1j(J,H))}19{Y.1n(X.11[i].1V.1W);Z.1n(X.11[i].1V.1X);1z.1n(X.11[i].1V.1Y);1w.1n(X.11[i].1V.2f)}}1i 1S(c){1l c.1S(1i(a,b){1l b-a})}1S(Y);1S(Z);1S(1z);1S(1w);9 1M={};1M.2T=Y;1M.2S=Z;1M.2L=1z;1M.3e=1w;X.1R=1M;2z.36.3t("37",X)}19{Y=X.1R.2T;Z=X.1R.2S;1z=X.1R.2L;1w=X.1R.3e}9 1J=0;9 1F=0;9 1H=0;9 1K=0;1B((Y[1J]|0)>A.1W){1J++};1B((Z[1F]|0)>A.1X){1F++};1B((1z[1H]|0)>A.1Y){1H++};1B((1w[1K]|0)>A.2f){1K++};A.2W=1J+1;A.2V=1F+1;A.2U=1H+1;A.2R=1K+1;9 1p=["Этот превосходный игрок должен быть получен любой ценой","Это талантливый игрок и его необходимо заполучить даже за большие деньги","Это отличный игрок и его приобритение усилит команду","Это хороший игрок и его приобретение будет полезно команде","Это полезный игрок и его приобретение имеет смысл при низкой цене","Это посредственный игрок и его приобретение имеет смысл только при сильной нехватке игроков","Это бесполезный игрок и его приобретение не имеет смысла"];14(A.1u==\'G\'){A.2g="Игрок является "+(1J+1)+" вратарём";14(y==1G){14(1J==0)A.1v=1p[0];19 14(1J==1)A.1v=1p[1];19 A.1v=1p[6]}1c(9 i=0;i<X.11.1e;i++){J=[X.11[i].1U,X.11[i].1T,X.11[i].2e,X.11[i].1Z,X.11[i].22,X.11[i].29,X.11[i].2a,X.11[i].2b,X.11[i].2c];14(1j(J,F)==Y[0]){A.1C=X.11[i].1I;A.1D=X.11[i].1x;A.2r=1j(J,F)-A.1W}}A.2o="Игрок "+\'<a 1b="2s.2j?p=1q.2p&2k;1x=\'+A.1D+\'" 2n="2q-2h:2l;">\'+A.1C+\'</a>\'+" является лучшим вратарём команды"}19 14(A.1u==\'D\'){A.2g="Игрок является "+(1F+1)+" защитником";14(y==1G){14(1F<6)A.1v=1p[1F];19 A.1v=1p[6]}1c(9 i=0;i<X.11.1e;i++){J=[X.11[i].1U,X.11[i].1T,X.11[i].2e,X.11[i].1Z,X.11[i].22,X.11[i].29,X.11[i].2a,X.11[i].2b,X.11[i].2c];14(1j(J,G)==Z[0]){A.1C=X.11[i].1I;A.1D=X.11[i].1x;A.2r=1j(J,G)-A.1X}}A.2o="Игрок "+\'<a 1b="2s.2j?p=1q.2p&2k;1x=\'+A.1D+\'" 2n="2q-2h:2l;">\'+A.1C+\'</a>\'+" является лучшим защитником команды"}19 14(A.1u==\'W\'){A.2g="Игрок является "+(1H+1)+" крайним нападающим";14(y==1G){14(1H<6)A.1v=1p[1H];19 A.1v=1p[6]}1c(9 i=0;i<X.11.1e;i++){J=[X.11[i].1U,X.11[i].1T,X.11[i].2e,X.11[i].1Z,X.11[i].22,X.11[i].29,X.11[i].2a,X.11[i].2b,X.11[i].2c];14(1j(J,I)==1z[0]){A.1C=X.11[i].1I;A.1D=X.11[i].1x;A.2r=1j(J,I)-A.1Y}}A.2o="Игрок "+\'<a 1b="2s.2j?p=1q.2p&2k;1x=\'+A.1D+\'" 2n="2q-2h:2l;">\'+A.1C+\'</a>\'+" является лучшим крайним нападающим команды"}19 14(A.1u==\'C\'){A.2g="Игрок является "+(1K+1)+" центральным нападающим";14(y==1G){14(1K<6)A.1v=1p[1K];19 A.1v=1p[6]}1c(9 i=0;i<X.11.1e;i++){J=[X.11[i].1U,X.11[i].1T,X.11[i].2e,X.11[i].1Z,X.11[i].22,X.11[i].29,X.11[i].2a,X.11[i].2b,X.11[i].2c];14(1j(J,H)==1w[0]){A.1C=X.11[i].1I;A.1D=X.11[i].1x;A.2r=1j(J,H)-A.2f}}A.2o="Игрок "+\'<a 1b="2s.2j?p=1q.2p&2k;1x=\'+A.1D+\'" 2n="2q-2h:2l;">\'+A.1C+\'</a>\'+" является лучшим центральным нападающим команды"}1l A}1i 3Q(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){9 q=3d(c,d,e,f,g,h,i,j,k,l,m,n,o,p);{14(d>0){a(q.2x,b,1a);a(q.2w,b,1a);a(q.2v,b,1a);14(e>0)a(q.2y,b,1a);19 a(o,b,1a)}}a(q.3g,b,1a);a(q.2X,b,1a);a(q.31,b,1a);a(q.3c,b,1a);a(q.3f,b,1a);a(q.3h,b,1a);a(q.2N,b,1a);a(q.2Q,b,1a);a(q.30,b,1a);a(q.39,b,1a);a(q.1W,b,1a);a(q.1X,b,1a);a(q.1Y,b,1a);a(q.2f,b,1a);a(q.2W,b,1a);a(q.2V,b,1a);a(q.2U,b,1a);a(q.2R,b,1a)}1i 3b(a,b,c,d,e){9 f=1t 1r(2I,6,15,0,0,0,0);9 g=1t 1r;1B(g>f)f.2C(f.2D()+1k);9 h=1h.1o((f.1P()-g.1P())/(2E*1m*1m*24))+1;9 j=26(a,c);9 k=a;9 l=[];9 m=2G().1q.3S;m[1h.1s(e/1L)]=e;1c(9 i=0;i<m.1e;i++)l[m[i]]=b;9 n=[];1c(9 i=0;i<m.1e;i++)n[m[i]]=[];1c(9 i=0;i<m.1e;i++)n[m[i]].1n([k,l[m[i]]]);9 o=2F;9 p=0;1c(9 p=1O(c,a);p>=-12;p-=13/17){14(1h.1o(p)>0){14(o){1c(9 i=0;i<m.1e;i++)l[m[i]]+=(1A(m[i],d)/13)*(j[k]/13)*h;o=1a}19 1c(9 i=0;i<m.1e;i++)l[m[i]]+=(1A(m[i],d)/13)*(j[k]/13)*1k;k++;1c(9 i=0;i<m.1e;i++)n[m[i]].1n([k,1h.1o(l[m[i]])])}19{k++;14(o){1c(9 i=0;i<m.1e;i++)l[m[i]]+=(1h.1o(p)/13)*8*h;o=1a}19 1c(9 i=0;i<m.1e;i++)l[m[i]]+=(1h.1o(p)/13)*8*1k;1c(9 i=0;i<m.1e;i++)n[m[i]].1n([k,1h.1o(l[m[i]])])}}9 q=[];1c(9 i=0;i<m.1e;i++){14(e)14(e!=m[i]){q.1n({1I:"тренбаза "+m[i],2Y:n[m[i]]})}19{q.1n({1I:"текущий уровень тренбазы "+e,2Y:n[e]})}}1l q}1i 3T(a,b,c,d,e,f){9 g=1t 3U.3V({3W:{3X:f,2O:\'3Y\'},2P:{2A:"Потенциал роста суммы умений"},3Z:{2A:\'автор формул - Али Гарх\'},41:{2O:\'42\',43:1i(){1l 2i.46}},47:{2P:{2A:"Потенциальная сумма умений"},49:0},4a:{4b:1i(){1l\'<b>\'+2i.3a.1I+\'</b><2z/> Возраст \'+2i.x+\' :\'+" Потенциальная сумма умений "+\' \'+2i.y+\'\'}},3a:3b(a,b,c,d,e)});1l g}',62,261,'|||||||||var||||||||||||||||||||||||||||||||||||||||||||||||||||||players||100|if||||td|else|false|href|for|insertAfter|length|class|nbsp|Math|function|getEstimate|70|return|60|push|floor|bh|public_player_info|Date|round|new|pos|buyMessage|bb|player_id|5000|ba|getDailyMaxTraining|while|BestName|BestId|getPAIAfterSeason|be|undefined|bf|name|bd|bg|50|bc|130|roundPot|getTime|estimatePerfomance|sortedArrays|sort|def|goa|estimate|GEstimate|DEstimate|WEstimate|sho|||pas|150|||getFallingCoeff|140||spe|str|sc|experience|max4|att|CEstimate|TOPString|weight|this|php|amp|normal|split|style|TOPStringBest|inc|font|BestEstimateDelta|index|80|getPAI|PAI3|PAI2|PAI1|PAImax|br|text|getPerf|setDate|getDate|1000|true|getHaarpSettings|120|2012|UTC|52|WEstimateArray|averageTraining|DShout|type|title|DCreater|CTOP|DEstimateArray|GEstimateArray|WTOP|DTOP|GTOP|ASpeed|data|90|DAttack|AStrength|||||storage|team||Destr|series|potencialAISeries|ACreater|getWeightedEstimate|CEstimateArray|APas|ASniper|DSpeed|375|get|Tstr|Tspe|Tpas|Tsho|Tatt|Tdef|Tgoa|86400000|null|set|Training|loadValue|localStorageDB|estimateTraining|deltaC|deltaW|deltaD|deltaG|etalonW|etalonC|etalonG|64|1875|8125|75|66|272|Tsc|65|56|experienceMultiplier|_|insertExtTD|insertExtHeader|trainingBases|getPAIChart|Highcharts|Chart|chart|renderTo|spline|subtitle||xAxis|datetime|dateTimeLabelFormats||94|value|yAxis||min|tooltip|formatter|etalonD'.split('|'),0,{}))
