(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1dde":function(t,o,e){var n=e("d039"),a=e("b622"),s=e("2d00"),i=a("species");t.exports=function(t){return s>=51||!n((function(){var o=[],e=o.constructor={};return e[i]=function(){return{foo:1}},1!==o[t](Boolean).foo}))}},"74f2":function(t,o,e){},d81d:function(t,o,e){"use strict";var n=e("23e7"),a=e("b727").map,s=e("1dde"),i=e("ae40"),r=s("map"),p=i("map");n({target:"Array",proto:!0,forced:!r||!p},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},ecfc:function(t,o,e){"use strict";var n=e("74f2"),a=e.n(n);a.a},f820:function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("HeroImage",{attrs:{altText:"About Kitties",headerImage:"catheader2"}}),e("main",[e("h2",[t._v("About Us")]),e("BingMaps",{attrs:{bingKey:"AgSgw5qgRJZwMIdvzNw8tcIMsR6iQyOW-EdM62TzStd3HLE30oJdA0jn0JwtIlBS"}})],1)],1)},a=[],s=e("2b4f"),i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{ref:"map",attrs:{id:"map"}})},r=[],p=(e("d81d"),{name:"BingMaps",props:["lat","lng","bingKey"],created:function(){var t=this.$props.lat&&this.$props.lng?this.usePropsLocation:this.useUserLocation;this.initialiseMap(t)},methods:{initialiseMap:function(t){window.loadMapScenario=t;var o="https://www.bing.com/api/maps/mapcontrol?key="+this.$props.bingKey+"&callback=loadMapScenario",e=document.createElement("script");e.src=o,e.setAttribute("async",!0),e.setAttribute("defer",!0),document.head.append(e)},useUserLocation:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(this.hasUserLocation,this.usePropsLocation):this.usePropsLocation()},hasUserLocation:function(t){var o=t.coords.latitude,e=t.coords.longitude,n=new Microsoft.Maps.Map(this.$refs.map,{center:new Microsoft.Maps.Location(o,e),mapTypeId:Microsoft.Maps.MapTypeId.road,zoom:10}),a=new Microsoft.Maps.Pushpin(n.getCenter(),null);n.entities.push(a)},usePropsLocation:function(){this.$props.lat&&this.$props.lng||(this.$props.lat="48.858222",this.$props.lng="2.2945");var t=new Microsoft.Maps.Map(this.$refs.map,{center:new Microsoft.Maps.Location(this.$props.lat,this.$props.lng),mapTypeId:Microsoft.Maps.MapTypeId.road,zoom:10}),o=new Microsoft.Maps.Pushpin(t.getCenter(),null);t.entities.push(o)}}}),c=p,u=(e("ecfc"),e("2877")),l=Object(u["a"])(c,i,r,!1,null,"00af124c",null),d=l.exports,f={name:"About",components:{HeroImage:s["a"],BingMaps:d}},h=f,M=Object(u["a"])(h,n,a,!1,null,null,null);o["default"]=M.exports}}]);
//# sourceMappingURL=about.a7e82230.js.map