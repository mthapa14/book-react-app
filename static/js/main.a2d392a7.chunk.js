(this["webpackJsonpbook-app"]=this["webpackJsonpbook-app"]||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/harrypotter.9e76b652.jpg"},22:function(e,a,t){e.exports=t.p+"static/media/spiderman.0b9324c6.jpg"},23:function(e,a,t){e.exports=t.p+"static/media/blackhammer.1fe344ea.jpg"},24:function(e,a,t){e.exports=t.p+"static/media/venom.5827aaf9.jpg"},25:function(e,a,t){e.exports=t.p+"static/media/avenger.ecc194d5.jpg"},26:function(e,a,t){e.exports=t.p+"static/media/wasp.d1feba84.jpg"},27:function(e,a,t){e.exports=t.p+"static/media/batman.e72d5cac.jpg"},28:function(e,a,t){e.exports=t(44)},37:function(e,a,t){},38:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(19),i=t.n(o),s=t(8),c=(t(33),t(36),t(37),t(6)),l=t(7),m=t(10),u=t(9),d=t(1),h=(t(38),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"BookList"},r.a.createElement("h1",{className:"text-center mb-3 mt-3"},"My Favourite Comic Book Lists"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},this.props.books.map((function(e){return r.a.createElement("div",{className:"Book col-md-3 align-item-center card mt-2",key:e.name},r.a.createElement("img",{src:e.src,alt:e.src,class:"img-thumbnail rounded poster"}),r.a.createElement("h4",null,e.name),r.a.createElement(s.b,{to:"/books/".concat(e.name)},r.a.createElement("button",{type:"button",className:"btn btn-light mb-2"},"Learn More")))})))))}}]),t}(n.Component)),p=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.book;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"BookDetails row justify-content-center mt-4 mb-4"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("img",{src:e.src,alt:e.src,class:"img-thumbnail rounded"})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"BookDetails-card card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h1",{className:"card-title"},e.name),r.a.createElement("h4",{className:"card-subtitle text-muted"},e.author)),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Country: ",e.country),r.a.createElement("li",{className:"list-group-item"},"Language: ",e.language),r.a.createElement("li",{className:"list-group-item"},"Genere: ",e.genere),r.a.createElement("li",{className:"list-group-item"},"Date: ",e.date)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,"Plot of the Story"),r.a.createElement("p",null,e.plot)),r.a.createElement("div",{className:"card-body"},r.a.createElement(s.b,{to:"/books"},r.a.createElement("button",{type:"button",className:"btn btn-secondary"},"Go Back")))))))}}]),t}(n.Component),b=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/books",render:function(){return r.a.createElement(h,{books:e.props.books})}}),r.a.createElement(d.b,{exact:!0,path:"/books/:name",render:function(a){var t=a.match.params.name,n=e.props.books.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}));return r.a.createElement(p,Object.assign({},a,{book:n}))}}),r.a.createElement(d.a,{to:"/books"}))}}]),t}(n.Component),g=(t(43),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement(s.c,{to:"/books",className:"navbar-brand"},"Book Navbar"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(s.c,{exact:!0,to:"/books",className:"nav-item nav-link active"},"Home")))))}}]),t}(n.Component)),v=t(21),y=t.n(v),f=t(22),k=t.n(f),E=t(23),w=t.n(E),N=t(24),S=t.n(N),j=t(25),M=t.n(j),C=t(26),O=t.n(C),B=t(27),x=t.n(B),A=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,{books:this.props.books}),r.a.createElement(b,{books:this.props.books}))}}]),t}(n.Component);A.defaultProps={books:[{name:"HarryPotter",src:y.a,author:"J.K. Rowling",country:"United Kingdom",language:"English",genere:"Fantasy",date:"26 June 1997",plot:"The central character in the series is Harry Potter, a boy who lives in the fictional town of Little Whinging, Surrey with his aunt, uncle, and cousin - the Dursleys - and discovers at the age of eleven that he is a wizard, though he lives in the ordinary world of non-magical people known as Muggles. The wizarding world exists parallel to the Muggle world, albeit hidden and in secrecy."},{name:"SpiderMan",src:k.a,author:"Stan lee, Steve Ditko",country:"United States",language:"English",genere:"Superhero",date:"August 1962",plot:"Spider-Man is fictional superhero created by writer editor Steve Ditko. In the stories, Spider-Man is the alias of Peter Parker, an orphan raised by his aunt May and uncle Ben in New York City after his parents Richard and Mary Parker died in a plane crash. His origin story has him acquiring spider-related abilities after a bite from a radioactive spider-sense."},{name:"BlackHammer",src:w.a,author:"Jeff Lemire",country:"United States",language:"English",genere:"Superhero",date:"July 2016 - Present",plot:"Ten years ago, Black Hammer and six other superheroes had saved Spiral City from the Anti-God, but in process became trapped in Rockwood, a timeless Twilight Zone-ish town. Shortly after the heroes arrive, Black Hammer dies. In the present, the six heroes live on Black Hammer farm with very little hope of ever escaping Rockwood."},{name:"Venom",src:S.a,author:"Randy Schueller, Roger Stern",country:"United States",language:"English",genere:"Superhero",date:"May 1984",plot:'Venom is a fictional character appearing in American comic books published by Marvel Comics, commonly in association with Spider-Man. The character is a sentient alien symbiote with an amorphous, liquid-like form, who survives by bonding with a host, usually human. This dual-life form receives enhanced powers and usually refers to itself as "Venom".'},{name:"Avengers",src:M.a,author:"Stan lee, Jack Kirby",country:"United States",language:"English",genere:"Superhero",date:"September 1963",plot:"The Avengers are a fictional team of superheroes appearing in American comic books published by Marvel Comics. The team made its debut in The Avengers #1 (cover-dated Sept. 1963), created by writer-editor Stan Lee and artist/co-plotter Jack Kirby. The Avengers is Lee and Kirby renovation of a previous superhero team, All-Winners Squad, who appeared in comic books series published by Marvel Comics predecessor Timely Comics."},{name:"The Unstoppable Wasp",src:O.a,author:"Mark Waid, Alan Davis",country:"United States",language:"English",genere:"Action, Superhero",date:"July 2016",plot:"Nadia van Dyne is the Marvel Comics version of the Hope van Dyne seen in the Marvel Cinematic Universe and briefly had her own comic, The Unstoppable Wasp, but it was cancelled after eight issues for low sales. A second series with the same title debuted in October 2018. This second series was, in turn, cancelled after ten issues.[1] She also had a 5 issues limited series with Ant-Man in 2018."},{name:"BatMan",src:x.a,author:"Bob Kane, Bill Finger",country:"Gotham City",language:"English",genere:"Superhero",date:"March 1939",plot:'Batman is a fictional superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger,[2][3] and first appeared in Detective Comics #27 in 1939. Originally named the "Bat-Man," the character is also referred to by such epithets as the Caped Crusader, the Dark Knight, and the Worlds Greatest Detective'}]};var T=A;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(s.a,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.a2d392a7.chunk.js.map