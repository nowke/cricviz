(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(a){a.exports={x:[1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019],y:[190,212.33333333333334,178.75,203.33333333333334,228.8421052631579,205.66666666666666,186.16666666666666,201.3,195.28,208.04761904761904,191.85714285714286,218.34375,222.78125,197.9375,206.79032258064515,196.75,225.2972972972973,218.88524590163934,218.24074074074073,216.10169491525423,217.23076923076923,209.79310344827587,209.60493827160494,222.02061855670104,227.18333333333334,228.568,229.96363636363637,236.09345794392524,232.11920529801324,228.8671875,232.65,240.6875,224.4825174825175,229.55645161290323,251.39622641509433,234.0506329113924,240.94594594594594,233.54098360655738,244.46896551724137,237.06382978723406,240.6853146853147,243.2093023255814,242.3955223880597,258.3813559322034,264.46478873239437,265.37894736842105,258.0241935483871,248.29921259842519,250]}},18:function(a,n,e){a.exports=e(32)},23:function(a,n,e){},24:function(a,n,e){},32:function(a,n,e){"use strict";e.r(n);var t=e(0),r=e.n(t),i=e(5),d=e.n(i),o=(e(23),e(9)),g=e(1),s=e(2);e(24);function m(){var a=Object(g.a)(['\n  width: calc(100% - 20px);\n  margin: 30px 10px;\n  -webkit-appearance: none;\n\n  &::before {\n    content: "1971";\n    width: 40px;\n    display: inline-block;\n    margin: 0 10px;\n    font-size: 20px;\n    color: #2d3436;\n  }\n\n  &::after {\n    content: "2019";\n    width: 40px;\n    display: inline-block;\n    margin: 0 10px;\n    font-size: 20px;\n    color: #2d3436;\n  }\n\n  &::-webkit-slider-runnable-track {\n    cursor: pointer;\n    width: 100%;\n    height: 2px;\n    box-shadow: none;\n    background: #2d3436;\n    border-radius: 0px;\n  }\n  &::-moz-range-track {\n    cursor: pointer;\n    width: 100%;\n    height: 2px;\n    box-shadow: none;\n    background: #2d3436;\n    border-radius: 0px;\n  }\n\n  &::-webkit-slider-thumb {\n    box-shadow: none;\n    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);\n    height: 24px;\n    width: 36px;\n    margin-top: -12px;\n    border-radius: 24px;\n    background: rgba(0, 0, 0, 1);\n    cursor: pointer;\n    -webkit-appearance: none;\n  }\n  &::-moz-range-thumb {\n    box-shadow: none;\n    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);\n    height: 24px;\n    width: 36px;\n    border-radius: 24px;\n    background: rgba(0, 0, 0, 1);\n    cursor: pointer;\n    -webkit-appearance: none;\n    margin-top: -12px;\n  }\n\n  &:focus {\n    outline: none;\n  }\n  &::-moz-focus-outer {\n    border: 0;\n  }\n']);return m=function(){return a},a}function x(){var a=Object(g.a)(["\n  position: relative;\n  display: block;\n  background: transparent;\n  width: 120px;\n  height: 30px;\n  border-radius: 10px;\n  border: 2px solid #2d3436;\n  margin-left: 20px;\n  margin-right: 20px;\n  color: #2d3436;\n  font-size: 1.5em;\n  transform-origin: center center;\n  left: ",';\n\n  &::before {\n    content: "";\n    width: 0px;\n    height: 0px;\n    border: 0.4em solid transparent;\n    position: absolute;\n    left: 41%;\n    bottom: -20px;\n    border-top: 10px solid #2d3436;\n  }\n']);return x=function(){return a},a}var l=s.a.span(x(),function(a){console.log(a.width);var n=(a.value-a.min)*(a.width-145)/(a.max-a.min);return"".concat(n,"px")}),c=s.a.input(m());var p=function(a){var n=a.value,e=a.width,t=a.onChange,i=a.inputRef;return r.a.createElement("div",null,r.a.createElement(l,{min:1971,max:2019,value:n,width:e},n),r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(c,{type:"range",ref:i,value:n,min:1971,max:2019,onChange:t})))},u=e(3),v=e.n(u);var h=function(a){var n=a.value,e=a.data;return r.a.createElement(v.a,{data:[{x:e.x,y:e.y,type:"scatter",mode:"lines",hoverinfo:"skip",marker:{color:"#2d3436"}}],layout:{margin:{t:0},autosize:!0,sliders:{visible:!1},xaxis:{showgrid:!0,fixedrange:!0},yaxis:{showgrid:!0,fixedrange:!0,range:[160,280]},shapes:[{type:"line",x0:n,y0:0,x1:n,y1:300,line:{color:"#d63031",width:3,dash:"dot"}}]},style:{height:200,width:"100%"},config:{displayModeBar:!1,responsive:!0}})};var b=function(a){var n=a.data[a.year],e=n.data[0],t=n.data[1],i=n.avg;return r.a.createElement(v.a,{data:[{x:t,name:"outside std.dev",type:"histogram",autobinx:!1,opacity:.4,marker:{color:"#00b894"},xbins:{end:460,size:10,start:100}},{x:e,name:"within std.dev",type:"histogram",autobinx:!1,opacity:1,marker:{color:"#00b894"},xbins:{end:460,size:10,start:100}}],layout:{bargap:.02,barmode:"overlay",autosize:!0,showlegend:!0,legend:{orientation:"h"},margin:{t:10,b:30},sliders:{visible:!1},xaxis:{showgrid:!1,fixedrange:!0,range:[100,400]},yaxis:{showgrid:!1,fixedrange:!0},shapes:[{type:"line",x0:i,y0:0,x1:i,y1:15,line:{color:"#d63031",width:3,dash:"dot"}}]},style:{height:250,width:"100%"},config:{displayModeBar:!1,responsive:!0}})},f=e(10);var w=function(a){var n=a.data[a.year],e=[].concat(Object(f.a)(n.data[0]),Object(f.a)(n.data[1]));return r.a.createElement(v.a,{data:[{x:e,type:"box",boxmean:!0,name:"",hoverinfo:"skip",marker:{color:"#d63031"},line:{color:"#d63031"},fillcolor:"rgba(250, 177, 160, 0.5)"}],layout:{bargap:.02,autosize:!0,margin:{t:0,b:0},sliders:{visible:!1},xaxis:{visible:!1,showgrid:!1,fixedrange:!0,range:[100,400]},yaxis:{showgrid:!1,fixedrange:!0}},style:{height:100,width:"100%"},config:{displayModeBar:!1,responsive:!0}})},y=e(16),k=e(4);function E(){var a=Object(g.a)(["\n  display: block;\n  font-weight: bold;\n  font-size: 1.2em;\n  margin-bottom: 8px;\n"]);return E=function(){return a},a}function z(){var a=Object(g.a)(["\n  margin: 5px auto 0 auto;\n  border: 1px solid #2d3436;\n  max-width: 1000px;\n  width: 90%;\n  padding: 10px;\n  background: #2d3436;\n  color: #fff;\n"]);return z=function(){return a},a}function O(){var a=Object(g.a)(["\n  margin: 0 auto 10px auto;\n  border: 1px solid #2d3436;\n  max-width: 1000px;\n  width: 90%;\n  padding: 10px;\n"]);return O=function(){return a},a}var j=s.a.div(O()),M=s.a.header(z()),B=s.a.span(E());var C=function(){var a=Object(t.useState)(1971),n=Object(o.a)(a,2),e=n[0],i=n[1],d=Object(t.useState)(0),g=Object(o.a)(d,2),s=g[0],m=g[1],x=r.a.createRef(),l=k[e].avg.toFixed(2),c=k[e].std.toFixed(2),u=k[e],v=u.max,f=u.min,E=u.range;return r.a.createElement("div",{className:"App"},r.a.createElement(M,null,r.a.createElement(B,null,"Cricket ODI Matches - First innings scores distribution by year"),r.a.createElement("strong",null,"\xa0\xa0\xa0Mean:")," ",l,",",r.a.createElement("strong",null,"\xa0\xa0\xa0Std. dev:")," ",c,r.a.createElement("strong",null,"\xa0\xa0\xa0Max:")," ",v,",",r.a.createElement("strong",null,"\xa0\xa0\xa0Min:")," ",f,r.a.createElement("strong",null,"\xa0\xa0\xa0Range:")," ",E),r.a.createElement(j,null,r.a.createElement(b,{data:k,year:e}),r.a.createElement(w,{data:k,year:e}),r.a.createElement(p,{value:e,width:s,onChange:function(a){i(a.target.value),m(x.current.clientWidth)},inputRef:x}),r.a.createElement(h,{value:e,data:y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(a){a.unregister()})},4:function(a){a.exports={1971:{data:[[190],[]],avg:190,std:0,max:190,min:190,range:0},1972:{data:[[222,236],[179]],avg:212.33333333333334,std:24.253293018108327,max:236,min:179,range:57},1973:{data:[[181,187,189],[158]],avg:178.75,std:12.336429791475327,max:189,min:158,range:31},1974:{data:[[171,244,265,194,265],[81]],avg:203.33333333333334,std:65.0094010295605,max:265,min:81,range:184},1975:{data:[[224,227,278,190,266,266,290,158,230,192,291],[330,93,120,136,309,328,334,86]],avg:228.8421052631579,std:78.66201059823821,max:334,min:86,range:248},1976:{data:[[198,202,221,223],[236,154]],avg:205.66666666666666,std:26.449112566503164,max:236,min:154,range:82},1977:{data:[[176,169,171,208],[242,151]],avg:186.16666666666666,std:30.16298320053167,max:242,min:151,range:91},1978:{data:[[158,170,248,206,139,205,217],[313,278,79]],avg:201.3,std:65.20437101912724,max:313,min:79,range:234},1979:{data:[[211,190,176,217,189,207,194,165,221,238,182,244,212,159,193,139],[101,45,293,94,105,286,286,271,264]],avg:195.28,std:62.7264027344148,max:293,min:45,range:248},1980:{data:[[170,208,200,198,215,208,203,180,204,246,190,230,235,217,248],[320,156,162,127,163,289]],avg:208.04761904761904,std:43.45493143199788,max:320,min:127,range:193},1981:{data:[[215,156,180,233,210,210,161,208,222,160,192,188,220,218,209,235,236,236],[140,137,245,242,63,112,242,249,126,127]],avg:191.85714285714286,std:47.559522319566106,max:249,min:63,range:186},1982:{data:[[193,216,224,235,218,250,185,189,191,211,230,239,218,177,215,229,214,233,230,240,234,252,234],[276,146,159,295,269,74,277,171,263]],avg:218.34375,std:42.80231402549984,max:295,min:74,range:221},1983:{data:[[239,184,252,181,226,261,182,180,262,213,176,184,246,266,193,178,228,234,191,273,199,197,235,181,207,211,240,214,217,213,232,200,272,193,171,267,215,207,183,239,247,238,183,206],[168,167,302,136,138,166,155,282,296,333,166,88,151,320,295,322,282,333,304,338]],avg:222.78125,std:53.5558904177449,max:338,min:88,range:250},1984:{data:[[184,201,184,214,221,213,174,209,196,211,177,188,206,212,182,171,199,187,175,210,222,179,165,188,220,191,209,231,184,208,187,190,223,209,206],[252,157,234,244,114,135,272,96,235,252,163,157,264]],avg:197.9375,std:34.30342928070992,max:272,min:96,range:176},1985:{data:[[197,177,201,228,159,226,221,205,200,206,199,235,239,178,254,231,240,214,241,175,223,180,231,171,219,200,171,247,203,183,196,194,176,163,191,218,240,240,204,173,213,224],[135,267,271,125,309,262,139,265,51,264,259,271,116,323,145,127,121,277,270,138]],avg:206.79032258064515,std:50.062585700228425,max:323,min:51,range:272},1986:{data:[[199,193,245,172,148,191,196,159,198,238,170,202,165,160,197,231,202,214,187,229,186,235,229,161,202,202,162,195,164,242,164,205,152,161,239,217,222,238,214],[143,113,250,262,144,137,254,132,259,124,94,131,249,258,292,284,276,64,260,248,145]],avg:196.75,std:48.821315358492065,max:292,min:64,range:228},1987:{data:[[237,267,244,255,183,243,187,229,199,248,232,221,238,187,213,258,211,203,217,239,191,191,235,216,252,208,265,242,230,236,236,233,218,212,263,252,266,261,251,237,227,235,267,225,253,196,254,194,228,192,213],[171,157,147,270,272,289,181,166,269,360,145,176,297,286,154,120,166,176,177,273,135,299,296]],avg:225.2972972972973,std:43.59417569879674,max:360,min:120,range:240},1988:{data:[[249,186,238,178,222,219,244,186,204,250,222,177,230,241,241,196,176,208,199,235,229,188,221,221,219,216,243,249,235,177,194,217,220,196,246,242,176,221,236,258,239,232],[271,278,269,278,284,271,164,160,166,289,174,315,169,267,142,294,118,99,168]],avg:218.88524590163934,std:42.90481205028965,max:315,min:99,range:216},1989:{data:[[223,192,253,219,248,222,250,228,237,252,215,241,196,255,237,193,258,226,203,242,222,227,211,204,205,203,226,258,176,194,237,226,231,249,216,244,247],[273,140,279,138,150,148,289,169,87,278,277,273,265,170,148,170,165]],avg:218.24074074074073,std:42.41066217495277,max:289,min:87,range:202},1990:{data:[[211,227,249,214,170,181,196,241,214,253,246,176,212,188,239,187,208,194,263,244,199,208,166,192,236,221,229,266,255,211,203,214,168,258,195,170,202,223,235,245,220,194],[338,158,300,315,311,136,162,295,283,332,281,158,162,134,127,161,74]],avg:216.10169491525423,std:51.744710665661515,max:338,min:74,range:264},1991:{data:[[199,251,186,204,222,236,196,245,242,234,224,240,204,238,244,230,215,223,221,208,208],[257,173,170,262,145,177,270,157,177,283,173,272,172,264,126,262,175,287]],avg:217.23076923076923,std:39.39312808643057,max:287,min:126,range:161},1992:{data:[[236,170,195,171,254,214,211,244,203,252,220,204,200,198,206,248,230,186,237,208,203,189,200,215,216,175,254,180,216,197,216,236,216,207,175,205,214,212,195,190,255,166,241,191,233,247,189,184,220,239,228,210,249,197,178,177,190,207,203,166],[163,262,155,160,271,147,101,134,157,162,152,271,264,139,278,268,136,287,74,158,265,161,262,363,280,302,312]],avg:209.79310344827587,std:46.44342447080648,max:363,min:74,range:289},1993:{data:[[180,222,225,182,233,229,214,256,239,230,188,180,172,179,180,249,197,223,194,186,232,234,185,212,214,216,218,220,203,212,214,223,244,187,247,172,198,195,248,227,164,197,208,202,198,189,195,196,204,202,250,221],[266,135,263,150,260,265,103,270,149,140,43,268,267,259,268,71,258,149,277,143,147,260,262,147,281,313,137,258,284]],avg:209.60493827160494,std:48.23596297122741,max:313,min:43,range:270},1994:{data:[[192,205,256,224,265,208,259,257,230,256,226,198,202,265,225,230,200,224,217,254,227,180,247,210,221,226,203,201,251,219,242,245,208,255,244,246,232,223,255,237,214,222,213,179,206,217,203,238,207,246,253,222,250,250,207,240,187,249,181,251,237,260,215,250,200,213],[161,306,163,146,145,288,98,269,158,273,125,145,154,281,150,154,123,314,174,166,269,328,313,274,290,172,296,289,122,273,142]],avg:222.02061855670104,std:46.30312037345236,max:328,min:98,range:230},1995:{data:[[183,254,261,242,266,242,249,235,271,215,264,223,232,200,257,202,257,222,236,276,246,210,239,209,230,266,273,260,233,178,219,199,255,249,225,234,189,233,250,244,250,194],[280,167,348,286,163,146,145,151,306,282,137,143,303,333,160,126,123,160]],avg:227.18333333333334,std:49.82987446190177,max:348,min:123,range:225},1996:{data:[[267,241,258,194,219,264,201,216,198,229,249,262,271,234,195,176,215,177,234,223,207,184,271,242,219,192,199,206,228,231,264,188,181,220,215,278,225,206,213,276,189,238,235,201,230,272,251,263,281,218,215,226,188,185,258,279,266,243,236,267,202,246,264,191,238,273,228,226,241,197,247,249,242,237,203,277,211,226,239,227,228,261,251,199,213,215],[321,136,305,371,102,166,158,151,291,287,109,134,292,289,170,173,349,152,314,161,169,288,172,286,287,158,160,145,304,321,305,129,307,398,169,148,328,154,172]],avg:228.568,std:52.67945876715135,max:398,min:102,range:296},1997:{data:[[257,216,251,240,215,211,271,250,199,201,280,223,181,227,228,258,237,239,191,203,239,185,253,200,249,228,200,265,243,236,238,272,226,187,249,233,199,239,222,237,270,260,207,250,256,264,249,187,224,211,215,208,269,197,232,221,235,278,181,225,197,220,267,229,182,245,214,209,216,275,249],[289,327,179,179,311,121,116,285,149,319,309,174,284,281,291,170,165,339,283,305,170,168,170,179,141,100,347,302,153,151,294,159,284,130,281,296,310,172,293]],avg:229.96363636363637,std:50.08609447245944,max:347,min:100,range:247},1998:{data:[[259,281,226,200,259,220,242,196,250,247,228,249,245,236,235,209,219,233,223,245,265,248,231,223,274,259,258,272,258,250,235,281,212,212,247,231,205,252,227,228,211,207,196,222,237,272,244,236,256,236,256,241,190,207,213,264,245,223,217,246,266,196,243,257,226,280,196,205,266,212,240,251],[115,134,188,165,149,184,179,159,189,307,284,171,302,294,288,138,189,114,105,316,293,300,309,297,314,307,315,301,145,289,295,293,324,181,302]],avg:236.09345794392524,std:46.91840854084077,max:324,min:105,range:219},1999:{data:[[251,254,227,242,213,208,197,196,199,229,272,181,207,248,189,259,271,280,239,211,222,278,252,239,255,235,269,227,186,260,196,282,223,202,205,274,232,211,277,246,270,199,221,205,190,220,206,181,220,204,213,241,212,233,261,252,273,213,244,225,279,222,205,230,245,257,282,226,210,236,275,252,274,261,278,200,239,220,210,203,275,207,272,220,196,241,231,209,260,229,216,253,182,257,191,271,225,253,202,232,257,213,213,185,249,284],[310,178,290,156,167,291,329,303,163,125,151,296,110,314,349,376,303,323,161,178,116,145,287,292,302,121,132,325,292,293,178,68,179,173,310,152,300,287,154,286,117,373,288,175,178]],avg:232.11920529801324,std:52.10571617055651,max:376,min:68,range:308},2000:{data:[[175,218,232,192,231,224,277,283,184,192,197,225,176,222,191,268,282,265,240,191,194,241,213,262,256,194,206,226,226,265,264,221,199,264,261,211,263,273,276,248,260,204,274,182,280,226,207,195,232,194,237,252,205,248,184,267,204,249,183,195,208,241,211,248,253,208,265,256,272,243,227,196,204,262,276,197,199,263,249,240,269],[167,158,320,301,168,100,164,165,114,337,164,294,287,161,329,295,295,301,287,320,122,302,169,146,310,299,295,304,131,169,154,302,164,114,144,294,286,149,171,159,349,158,114,306,153,324,287]],avg:228.8671875,std:54.77501869775896,max:349,min:100,range:249},2001:{data:[[272,242,248,183,228,282,232,266,250,213,267,266,206,195,205,230,226,282,261,269,279,221,235,268,176,246,284,206,235,178,234,200,236,236,273,192,220,215,200,199,253,279,214,200,285,229,279,255,253,223,247,220,190,211,221,248,256,233,243,287,277,229,272,261,255,227,257,234,181,183,272,278,208,265,176,182,240,273,250,264,280,184],[159,354,143,151,295,152,133,38,363,156,149,299,308,154,309,290,311,169,138,135,90,297,291,123,163,290,302,300,173,290,338,315,156,127,173,351,165,338]],avg:232.65,std:57.28709133245756,max:363,min:38,range:325},2002:{data:[[260,275,210,227,274,243,196,266,279,244,257,201,269,198,186,253,255,293,213,218,204,248,249,241,244,218,191,267,271,271,273,250,238,275,226,213,226,292,187,190,212,267,283,229,223,235,256,258,200,281,272,202,218,242,242,220,222,296,211,240,217,251,229,291,210,290,281,270,239,283,279,288,258,245,202,259,240,285,220,228,288,244,265,196,241,278,253,199,261,232,295,193,244,190,281,292,283,261,254,242,277,290,260,235],[106,129,123,179,332,302,300,298,325,76,133,326,176,318,133,317,319,108,323,301,333,182,305,335,167,300,304,175,154,128,136,324,117,315,162,151,184,344,84,316]],avg:240.6875,std:55.39059145313198,max:344,min:76,range:268},2003:{data:[[174,217,211,283,235,163,229,212,264,246,207,277,255,243,214,168,255,258,272,270,185,196,270,222,228,284,256,256,215,204,198,198,201,252,225,247,272,203,253,202,256,261,193,191,174,198,196,246,199,208,223,191,246,252,286,250,172,278,254,168,246,210,229,180,225,281,173,182,241,244,286,257,286,271,229,204,192,197,170,267,204,279,273,223,277,278,276,183,272,254,243,225,258,268,199],[302,314,36,117,122,142,157,294,353,92,311,291,107,88,147,340,139,116,105,140,347,134,124,310,133,125,319,323,156,301,290,146,312,292,108,122,347,301,108,314,307,152,359,143,125,343,97,306]],avg:224.4825174825175,std:65.26008784081549,max:359,min:36,range:323},2004:{data:[[198,205,237,250,239,244,261,261,261,235,191,191,238,229,177,280,257,285,186,293,232,252,281,280,217,213,246,262,228,245,192,225,200,263,245,279,190,246,292,293,198,225,196,166,223,293,211,253,255,259,259,269,192,226,204,290,254,287,271,203,229,208,251,235,233,263,260,224,263,282,238,292,183,246,242,222,195,216,266,221,288,269,179,193,170,255],[126,359,122,147,65,101,329,146,118,307,300,141,347,344,304,136,303,299,122,104,348,93,147,297,131,296,156,35,323,307,94,159,135,124,349,144,343,308]],avg:229.55645161290323,std:64.76113709418271,max:359,min:35,range:324},2005:{data:[[267,263,206,264,240,278,223,269,219,266,255,196,250,301,201,295,211,249,301,196,226,270,250,249,198,261,237,231,233,237,198,251,252,243,239,303,281,267,226,293,252,215,244,241,220,281,265,247,228,244,307,206,230,253,249,285,215,272,269,205,262,298,221,258,249,284,261,291,303,276,208,236,210,273,238],[122,108,190,344,152,328,163,356,331,139,192,329,175,178,397,319,391,347,327,164,350,315,322,314,353,138,169,311,188,106,339]],avg:251.39622641509433,std:57.20200538199968,max:397,min:106,range:291},2006:{data:[[278,195,217,282,269,248,184,223,212,294,197,245,286,244,184,281,206,237,251,224,274,197,233,234,255,231,231,272,235,231,263,233,229,209,201,223,288,242,261,184,240,240,273,221,263,224,213,250,258,202,193,285,178,272,207,289,266,265,232,213,203,177,217,246,288,285,240,255,224,284,254,257,276,271,246,200,227,271,257,200,266,249,218,220,238,235,259,218,237,203,274,236,274,253,198,219,224,243,274,195,245,223,238,228,226,272,288,279],[321,165,137,301,301,125,168,118,434,80,161,162,313,161,157,368,146,138,124,318,338,302,324,161,154,134,333,151,145,91,166,319,151,152,85,118,309,344,418,443,328,130,169,152,153,305,309,318,94,309]],avg:234.0506329113924,std:63.22711698618112,max:443,min:80,range:363},2007:{data:[[289,174,247,211,248,247,183,290,208,187,259,235,191,307,269,280,206,278,260,276,196,200,292,294,254,257,174,209,193,206,211,268,251,202,303,230,252,290,255,210,268,193,193,265,274,242,250,289,262,210,232,281,288,205,226,278,284,286,294,177,233,194,189,250,199,306,209,306,246,270,284,260,226,254,230,281,289,292,308,225,219,177,209,203,241,254,300,291,221,197,243,183,230,207,222,213,173,244,275,218,238,189,186,235,296,279,282,239,289,234,201,228,266,234,263,242,205,230,212,259],[413,341,148,77,318,321,328,133,137,153,349,132,313,337,316,154,93,343,336,353,136,334,162,80,107,322,377,139,149,167,91,317,94,363,152,148,148,321,351,143,392,112,110,329,155,318,153,324,348,155,346,356,104,164,317,335,358,115,315,152,331,338,323,131,331]],avg:240.94594594594594,std:69.64533547794078,max:413,min:77,range:336},2008:{data:[[276,283,240,236,179,246,252,258,171,244,245,272,182,233,179,282,255,293,203,292,300,232,290,285,183,210,178,257,234,237,249,212,210,260,185,195,194,181,296,165,285,198,299,273,288,273,303,283,201,227,235,242,253,258,225,302,173,294,275,221,175,303,238,270,273,238,295,223,254,201,213,263,166,184,222,222,239,266],[127,146,308,341,317,330,146,117,115,156,142,158,358,67,322,387,159,329,158,402,130,83,143,142,308,340,357,118,148,374,112,117,152,101,315,336,141,162,152,155,332,308,347,307]],avg:233.54098360655738,std:70.8971949711004,max:402,min:67,range:335},2009:{data:[[181,309,257,209,250,185,246,304,249,266,292,232,244,207,252,271,234,239,214,290,288,231,248,256,250,299,212,256,188,264,275,205,303,219,287,186,293,221,186,295,207,286,275,220,250,246,306,259,188,274,228,239,303,198,302,216,307,270,296,205,211,270,289,197,273,279,210,220,249,214,196,250,295,232,200,237,301,260,205,301,219,270,203,285,222,263,199,269,225,288,233,247,286,179,229],[350,315,351,168,168,354,392,113,312,129,313,339,170,354,124,155,168,331,160,175,146,117,329,319,152,44,133,147,332,131,119,176,152,119,128,323,160,315,328,317,172,363,320,321,320,149,345,319,414,323]],avg:244.46896551724137,std:66.01996094937827,max:414,min:44,range:370},2010:{data:[[276,284,223,224,194,213,229,260,188,224,180,250,202,275,199,239,279,236,247,192,209,274,289,231,199,218,286,236,224,289,256,245,239,228,237,234,212,245,267,212,219,288,258,203,190,294,211,290,189,238,219,191,274,238,206,225,268,277,241,265,209,286,235,254,268,244,257,228,246,200,241,267,241,234,232,277,280,256,242,267,213,228,252,188,273,242,183,236,268,241,285,245,275,260,274,249,200,233],[312,172,154,168,175,139,300,299,174,161,118,167,325,170,385,324,141,298,347,317,177,365,177,173,316,163,399,103,315,324,336,120,401,117,351,296,141,125,153,303,103,115,170]],avg:237.06382978723406,std:58.43347587695966,max:401,min:103,range:298},2011:{data:[[262,231,214,222,208,255,270,268,272,248,260,296,211,268,262,180,191,229,206,230,259,269,247,302,238,207,284,298,218,274,188,203,249,184,292,184,190,222,303,289,208,253,184,220,200,198,274,225,260,221,217,271,201,279,300,199,183,265,268,214,257,187,251,304,280,298,249,277,229,211,234,299,235,262,220,250,267,237,189,265,260,298,205,294,270,225,249,220,221,243,225,293,275,211,229,220,286,284,246,240,230,277,250],[150,327,320,174,338,358,139,112,160,330,351,177,131,370,162,317,333,69,171,176,306,327,124,418,58,332,361,308,96,151,328,309,132,171,91,61,311,328,324,142]],avg:240.6853146853147,std:63.5641209854209,max:418,min:58,range:360},2012:{data:[[237,287,241,204,266,253,216,292,281,272,236,288,227,233,230,236,264,231,248,247,260,232,272,211,262,217,200,227,243,244,238,256,222,280,289,271,195,251,252,198,280,286,250,206,236,249,231,251,288,220,220,211,289,237,269,200,250,238,199,248],[158,182,131,154,153,320,145,304,329,135,314,138,321,190,176,373,188,372,301,188,312,294,299,294,315,163]],avg:243.2093023255814,std:50.378362898673664,max:373,min:131,range:242},2013:{data:[[265,302,238,223,231,205,247,262,226,266,183,280,211,305,233,234,191,242,230,227,266,298,183,253,299,250,185,247,208,283,253,259,219,261,179,199,183,227,288,287,279,220,228,232,227,211,201,288,260,209,181,244,242,260,258,274,295,229,269,232,263,229,285,224,269,211,294,273,218,208,284,268,223,268,259,303,252,304,293,266,259,257,269,243,229,222,247,225,223,236,234,269],[359,70,170,165,322,315,362,144,170,165,315,331,307,326,156,138,383,67,329,359,311,129,93,169,350,325,348,341,307,143,320,167,175,89,119,138,343,337,74,358,155,163]],avg:242.3955223880597,std:64.18629819107329,max:383,min:67,range:316},2014:{data:[[275,303,256,314,259,267,289,230,303,253,274,285,256,302,279,309,260,299,219,217,273,271,219,241,231,261,282,248,255,265,300,231,297,286,246,281,292,206,248,265,204,269,302,269,217,254,263,271,300,292,285,300,215,221,209,280,247,252,264,227,239,260,256,242,243,210,294,267,251,280,310,247,217,278,216,257,282,261,304,272,275,258,296,304,223,242,240,245],[102,154,159,165,202,317,363,316,338,172,185,326,202,364,339,327,341,404,159,321,329,105,350,167,67,330,363,180,157,128]],avg:258.3813559322034,std:56.03644690031922,max:404,min:67,range:337},2015:{data:[[310,273,305,303,296,329,287,268,298,273,276,208,250,232,307,316,247,237,246,276,299,216,299,255,331,267,283,271,309,283,283,214,276,302,210,267,213,304,210,328,219,302,248,318,200,206,256,303,288,245,303,332,255,303,216,262,218,259,276,213,281,278,222,300,285,304,278,259,253,317,276,241,237,315,239,282,307,235,309,331,271,268,300,234,223,287,287,270,279,275,200,235,204,222],[375,342,183,133,439,360,151,188,376,130,184,153,160,168,361,372,393,339,131,363,138,438,398,142,349,161,159,369,411,182,341,417,111,368,102,187,339,123,408,408,355,122,122,186,162,180,175,117]],avg:264.46478873239437,std:73.92398665129036,max:439,min:102,range:337},2016:{data:[[254,308,266,257,265,305,327,318,260,265,242,307,280,324,270,228,262,248,286,212,303,288,250,218,247,208,269,236,308,251,238,227,236,285,226,284,226,246,302,251,259,260,295,309,236,277,269,244,294,265,309,288,290,324,248,262,282,294,264,279,281,285,327,227,229],[126,195,399,361,167,330,337,354,153,330,116,175,348,201,178,188,378,198,189,160,377,444,154,123,337,371,343,168,190,341]],avg:265.37894736842105,std:62.052978883899286,max:444,min:116,range:328},2017:{data:[[204,279,292,229,289,308,208,202,281,264,212,270,238,225,307,325,232,242,219,216,323,265,310,238,205,215,268,252,207,263,257,291,278,324,264,277,321,281,271,205,319,203,236,203,292,286,238,192,300,251,220,278,316,270,289,288,191,211,251,317,293,310,215,299,280,253,305,292,236,230,271,233,220,230,248,296,310,282,321,217,280,219],[369,126,330,131,375,177,173,135,182,337,338,147,338,344,169,111,353,350,129,384,334,112,181,189,174,353,381,173,369,155,367,392,339,103,328,369,356,153,149,163,181,328]],avg:258.0241935483871,std:67.77470549544864,max:392,min:103,range:289},2018:{data:[[198,274,210,255,257,310,255,285,214,246,271,254,286,223,205,195,237,289,284,306,219,204,271,270,200,268,221,290,283,257,204,221,278,304,279,209,289,241,256,189,241,315,271,308,222,239,231,249,235,198,196,302,273,198,216,299,222,263,261,196,301,194,246,216,301,249,313,182,266,303,223,193,255,257,200,299,228,211,271,262,197,259,244,234,279,227,209,269,252,198,249,235],[363,371,335,364,333,124,162,117,67,177,154,150,82,377,320,322,320,333,399,331,170,91,321,366,152,322,134,104,116,357,481,322,173,342,118]],avg:248.29921259842519,std:68.06808945849446,max:481,min:67,range:414},2019:{data:[[313,242,225,231,230,298,189,256,252,319,277,198,236,203,243,266,289,250,240,266,307,280,226,232,226,284,317,288,272,223,254,216,251],[371,92,169,110,113,358,175,113,330,360,324,164,157,164,418,327,331,364,161]],avg:250,std:71.92490742220185,max:418,min:92,range:326}}}},[[18,1,2]]]);
//# sourceMappingURL=main.890d1815.chunk.js.map