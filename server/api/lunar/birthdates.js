
var tg= ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"];
var dz= ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];
var sx= ["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"];
var w= ["木","火","土","金","水"];
var f= ["东","南","中","西","北"];
var sz= ["一","二","三","四","五","六","七","八","九","十",
"十一","十二","十三","十四","十五","十六","十七","十八","十九","二十",
"廿一","廿二","廿三","廿四","廿五","廿六","廿七","廿八","廿九","三十"];
var m0= [
0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,//1901
0,1,0,1,2,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,
1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,3,0,1,0,1,0,1,0,1,
0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,
0,4,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,3632];

var m1=[
1,0,1,0,0,4,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,//1911
1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,3,0,1,0,0,1,0,1,
1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,
1,2,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,
0,1,0,0,1,0,3,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,7294];

var m2=[
1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,2,1,0,0,1,0,1,1,//1921
0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,
1,0,1,3,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,
1,0,0,1,0,1,0,1,0,1,1,1,0,4,0,1,0,0,1,0,1,1,1,1,
0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,4,0,1,0,1,1,0,10955];

var m3=[
1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,//1931
0,1,1,0,5,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,
0,0,1,0,1,0,1,1,0,1,1,0,1,0,3,0,0,1,1,0,1,1,1,0,
1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,3,0,1,1,0,1,
1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,14587];

var m4=[
1,1,0,1,1,3,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,//1941
0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,3,0,1,0,1,1,0,1,1,
0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,
1,4,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,
1,0,1,1,0,1,2,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,18249];

var m5=[
1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,3,0,1,1,0,1,0,1,//1951
0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,
0,1,3,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,
1,0,1,0,1,0,0,4,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,
0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,4,1,0,1,0,1,0,21911];

var m6=[
1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,//1961
1,0,1,2,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,
0,1,0,1,0,0,1,0,0,1,1,0,1,1,4,1,0,0,1,0,0,1,1,0,
1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,4,1,0,1,0,1,
0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,25544];

var m7=[
0,1,0,0,4,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,//1971
1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,4,0,1,0,0,1,1,0,1,
1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,4,0,1,0,1,
1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,
1,0,0,1,0,5,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,29206];

var m8=[
0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,2,1,0,0,1,0,1,1,1,//1981
1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,4,1,1,
0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,
1,0,1,0,1,4,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,
1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,4,0,1,0,1,1,1,1,32868];

var m9=[
0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,//1991
0,1,4,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,
0,1,1,0,1,0,1,4,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,
1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,2,1,1,0,1,1,0,1,
1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,36499];

var m10=[
1,1,0,4,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,//2001
1,1,0,1,1,0,1,0,0,1,0,1,0,4,1,1,0,1,0,1,0,1,0,1,
0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,4,1,1,0,1,1,
0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,
1,1,0,0,4,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,40161];

var m11=[
1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,4,1,0,1,0,1,0,1,0,//2011
1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,4,1,0,1,
0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,
0,1,0,1,0,3,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,
1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,4,1,0,0,1,0,1,0,1,43823];

var m12=[
0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,//2021
0,4,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,
1,0,1,0,0,4,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,
1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,4,0,1,0,0,1,1,0,
1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,47455];

var m13=[
0,1,4,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,//2031
0,1,0,0,1,0,1,0,1,1,4,1,0,1,0,0,1,0,1,0,1,1,0,1,
1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,3,0,0,1,0,1,1,
1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,
1,1,0,1,4,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,51117];

var m14=[
0,1,0,1,0,1,1,0,1,1,0,1,0,4,0,1,0,1,0,1,1,0,1,1,//2041
0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,2,1,0,1,1,1,
1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,
1,0,1,1,3,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,
1,0,1,0,1,1,0,1,1,0,1,0,0,1,3,0,1,0,1,1,0,1,1,0,54779];

var ms=[m0,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14];

exports.getBirthdate = function(nian, yue, ri, hh){

  var ly=[29,30,58,59,59,60];
  var tw=[0,0,1,1,2,2,3,3,4,4];
  var dw=[4,2,0,0,2,1,1,2,3,3,2,4];
  var y=nian;
  var gl0=(Date.UTC(y,0,1)-Date.UTC(1901,1,19))/86400000;
  var dy=y-1901;
  var i=Math.floor(dy/10);

  var nl0=(i==0)?0:ms[i-1][120];
  var n=i*120;
  for (var j=0;j<120;j++){
   n++;
   if (n>dy*12) break;
   nl0+=ly[ms[i][j]];
  }
  var cjr=(nl0-gl0)%31+1;
  var cjy=(nl0-gl0>30)?2:1;
  var jq=tg[(dy+6)%10]+dz[dy%12];
  var jh=tg[(dy+7)%10]+dz[(dy+1)%12];
  var m=yue;
  var d=ri;
  var h=hh;
  if (m==""||d==""){
    return null;
  }
  else if (m>12||m<1)
   console.log("月应在1与12之间。"+re);
  else if (d>31||d<1)
   console.log("日应在1与31之间。"+re);
  else if ((m==4||m==6||m==9||m==11)&&d>30)
   console.log(m+"月只有30天。"+re);
  else if (y%4!=0&&m==2&&d>28)
   console.log(y+"年是平年，2月只有28天。"+re);
  else if (m==2&&d>29)
   console.log(y+"年是闰年，2月只有29天。"+re);
  else if (h>23||h<0)
   console.log("时应在0与23之间。"+re);
  else{
   if (hh=="") h=0;
   var sum=(Date.UTC(y,m-1,d,h)-Date.UTC(1901,1,18,23))/1000;
   var sumd=Math.floor(sum/86400);
   var day=(Math.floor((sum-1800)/86400)+51)%7;
   var xq=(day==0)?"日":sz[day-1];
   var tgr=(sumd+54)%10;
   var dzr=(sumd+52)%12;
   var gzr=tg[tgr]+dz[dzr];
   var dzs=Math.floor((h*1+1)/2)%12;
   var tgs=((tgr%5)*2+dzs)%10;
   var gzs=tg[tgs]+dz[dzs];
   for (i=0;ms[i][120]<=sumd;i++);
   var k=(i==0)?0:ms[i-1][120];
   var p=i*120;
   for (j=0;j<120;j++){
    k+=ly[ms[i][j]];
    p++;
    if (k>sumd) break;
   }
   if (sumd+30<0){
    ri=59+sumd;
    p=-1;
   }
   else if (sumd<0){
    ri=30+sumd;
    p=0;
   }
   else
    ri=sumd+ly[ms[i][j]]-k;
   yue=((p+11)%12==0)?"正":sz[(p+11)%12];
   var mij=ms[i][j];
   if ((mij==2||mij==3)&&ri>28){
    ri-=29;
    yue="闰"+yue;
   }
   else if ((mij==4||mij==5)&&ri>29){
    ri-=30;
    yue="闰"+yue;
   }
   ri=((ri<10)?"初":"")+sz[ri];
   var tgn=Math.floor((p-1)/12+7)%10;
   var dzn=Math.floor((p-1)/12+1)%12;
   var gzn=tg[tgn]+dz[dzn];
   var tgy=(p+5)%10;
   var dzy=(p+1)%12;
   var gzy=tg[tgy]+dz[dzy];
   var tn=tw[tgn];
   var dn=dw[dzn];
   var ty=tw[tgy];
   var dy=dw[dzy];
   var tr=tw[tgr];
   var dr=dw[dzr];
   var ts=tw[tgs];
   var ds=dw[dzs];
   return {
            "干支": gzn+gzy+gzr+gzs,
            "五行": w[tn]+w[dn]+w[ty]+w[dy]+w[tr]+w[dr]+w[ts]+w[ds],
            "方位": f[tn]+f[dn]+f[ty]+f[dy]+f[tr]+f[dr]+f[ts]+f[ds]
          };
  }
}
