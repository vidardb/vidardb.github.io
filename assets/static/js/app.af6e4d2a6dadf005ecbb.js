webpackJsonp([1],{"/yRs":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=(i=a("8ebl")).default||i,n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-street-view-pano-container"},[e("div",{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var s=a("VU/8")(r,n,!1,function(t){a("uGSN")},null,null);e.default=s.exports},"5ZbH":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=(i=a("hOwk")).default||i,n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-map-container"},[e("div",{ref:"vue-map",staticClass:"vue-map"}),this._v(" "),e("div",{staticClass:"vue-map-hidden"},[this._t("default")],2),this._v(" "),this._t("visible")],2)},staticRenderFns:[]};var s=a("VU/8")(r,n,!1,function(t){a("aNJ/")},null,null);e.default=s.exports},"5cLx":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=(i=a("WgA/")).default||i,n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{ref:"flyaway"},[this._t("default")],2)])},staticRenderFns:[]},s=a("VU/8")(r,n,!1,null,null,null);e.default=s.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},r,!1,function(t){a("oHNY")},null,null).exports,s=a("/ocq"),o=a("//Fk"),l=a.n(o),c=a("mtWM"),u=a.n(c),d=a("mw3O"),p=a.n(d),m=a("zL8q"),f=a.n(m),h=u.a.create({timeout:6e4,baseURL:"https://api.vidardb.com/"});h.interceptors.request.use(function(t){return t},function(t){return m.Message.error({message:"Request timeout!"}),l.a.reject(t)}),h.interceptors.response.use(function(t){return t.data},function(t){if(t.response){if(306===t.response.status){var e=t.response.data+"&version=v3&callback="+encodeURIComponent(window.location.href);return void(window.location=e)}504===t.response.status||404===t.response.status?m.Message.error({message:"Server Internal Error, Please contact admin!"}):403===t.response.status?m.Message.error({message:"Perm Error, Please contact admin!"}):400===t.response.status&&console.log(t.response.data)}else m.Message.error({message:"Unknown Error!"});return l.a.resolve(t.response)});var _={post:function(t,e){return new l.a(function(a,i){return h({method:"post",baseURL:"https://api.vidardb.com/",url:t,data:p.a.stringify(e)||"",withCredentials:!0,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){a(t)}).catch(function(t){console.log(t),i(t)})})},get:function(t,e,a){return void 0===a&&(a=!0),new l.a(function(i,r){return h({method:"get",url:t,params:e,withCredentials:a,headers:{"Content-Type":"application/json"}}).then(function(t){i(t)}).catch(function(t){console.log(t),r(t)})})},fileRequest:function(t,e){return new l.a(function(a,i){h({method:"post",url:t,data:p.a.stringify(e)||"",headers:{"Content-Type":"multipart/form-data"}}).then(function(t){a(t)}).catch(function(t){console.log(t),i(t)})})}};var v=a("XNC2"),g=a("spco"),k=a.n(g),b=a("BO1k"),w=a.n(b),y=a("sA6N"),T={name:"GoogleMap",props:["dataToGoogleMap"],data:function(){return{center:{lat:41.881832,lng:-87.623177},markers:[],dataFromParentComp:[],defaultData:[{mark:[41.898331794,-87.620762865],id:"3"},{mark:[41.892042136,-87.63186395],id:"0"},{mark:[41.884987192,-87.620992913],id:"0"},{mark:[41.934762456,-87.639853859],id:"2"},{mark:[41.892072635,-87.628874157],id:"3"},{mark:[41.900265687,-87.63210922],id:"0"},{mark:[41.877406123,-87.621971652],id:"0"},{mark:[41.880994471,-87.632746489],id:"0"},{mark:[41.900265687,-87.63210922],id:"3"},{mark:[41.89321636,-87.63784421],id:"4"}]}},computed:{google:y.gmapApi},watch:{dataToGoogleMap:function(t){var e=this;this.dataFromParentComp&&t&&(this.dataFromParentComp=t,this.markers.length=0,this.dataFromParentComp.forEach(function(t){var a=t.mark,i=t.id,r=e.chooseColor(i);e.addMarker(a,r)}))},markers:function(t){if(t.length>2){var e=new this.google.maps.LatLngBounds,a=!0,i=!1,r=void 0;try{for(var n,s=w()(this.markers);!(a=(n=s.next()).done);a=!0){var o=n.value;e.extend(o.position)}}catch(t){i=!0,r=t}finally{try{!a&&s.return&&s.return()}finally{if(i)throw r}}this.$refs.map.fitBounds(e)}}},mounted:function(){this.addDefaultMarkers(this.defaultData)},methods:{addMarker:function(t,e){var a="https://maps.google.com/mapfiles/ms/icons/";a+=e+"-dot.png";var i={lat:t[0],lng:t[1]};this.markers.push({position:i,icon:a})},clean:function(){this.markers.length=0},addDefaultMarkers:function(t){var e=this;t.forEach(function(t){var a=t.mark,i=t.id,r=e.chooseColor(i);e.addMarker(a,r)})},chooseColor:function(t){return"0"===t?"red":"1"===t?"blue":"2"===t?"orange":"3"===t?"green":"4"===t?"yellow":"black"}}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("gmap-map",{staticStyle:{width:"100%",height:"400px"},attrs:{center:this.center,zoom:12}},this._l(this.markers,function(t,a){return e("gmap-marker",{key:a,attrs:{position:t.position,icon:t.icon}})}),1)],1)},staticRenderFns:[]},S=a("VU/8")(T,x,!1,null,null,null).exports;v.a.register("currency",k.a);var C={name:"VidarDbDemo",components:{GoogleMap:S},data:function(){return this.theme={line:{smooth:!0}},this.extend={series:{smooth:!0}},this.grid={left:15,right:35},this.markLine={data:[{name:"average",type:"average"}]},this.markPoint={data:[{name:"max",type:"max"}]},this.vchartsLineConfig={legendName:{fare:"maximum trip fare"},legend:{y:"bottom",x:"center"},yAxisType:["$ 0,0.00"],dataType:function(t){return t+" $"}},{msg:"Welcome to VidarDB demo App",taskId:"",interval_id:0,biChartData:{columns:["trip_start_timestamp","fare"],rows:[{trip_start_timestamp:"2016-12-01 01:45:00",fare:"6"},{trip_start_timestamp:"2016-12-01 02:45:00",fare:"7"},{trip_start_timestamp:"2016-12-01 08:30:00",fare:"46"},{trip_start_timestamp:"2016-12-01 09:00:00",fare:"17"},{trip_start_timestamp:"2016-12-01 09:15:00",fare:"8"},{trip_start_timestamp:"2016-12-01 09:15:00",fare:"7"},{trip_start_timestamp:"2016-12-01 09:30:00",fare:"6"},{trip_start_timestamp:"2016-12-01 09:30:00",fare:"4"},{trip_start_timestamp:"2016-12-01 09:45:00",fare:"12"},{trip_start_timestamp:"2016-12-01 10:00:00",fare:"15"}]},biSqlData:[],rawTableData:[{id:1,trip_start_timestamp:"2016-12-01 01:45:00",taxi_id:6743,pickup_latitude:42,pickup_longitude:-88,fare:6,row_vec:"{41.898331794000001,-87.620762865000003}"},{id:2,trip_start_timestamp:"2016-12-01 02:45:00",taxi_id:3012,pickup_latitude:42,pickup_longitude:-88,fare:7,row_vec:"{41.892042136000001,-87.631863949999996}"},{id:3,trip_start_timestamp:"2016-12-01 08:30:00",taxi_id:340,pickup_latitude:42,pickup_longitude:-88,fare:46,row_vec:"{41.884987191999997,-87.620992912999995}"},{id:4,trip_start_timestamp:"2016-12-01 09:00:00",taxi_id:8696,pickup_latitude:42,pickup_longitude:-88,fare:17,row_vec:"{41.934762456000001,-87.639853858999999}"},{id:5,trip_start_timestamp:"2016-12-01 09:15:00",taxi_id:733,pickup_latitude:42,pickup_longitude:-88,fare:8,row_vec:"{41.900265687000001,-87.632109220000004}"},{id:6,trip_start_timestamp:"2016-12-01 09:15:00",taxi_id:5243,pickup_latitude:42,pickup_longitude:-88,fare:7,row_vec:"{41.892072634999998,-87.628874156999998}"},{id:7,trip_start_timestamp:"2016-12-01 09:30:00",taxi_id:5114,pickup_latitude:42,pickup_longitude:-88,fare:6,row_vec:"{41.877406123,-87.621971651999999}"},{id:8,trip_start_timestamp:"2016-12-01 09:30:00",taxi_id:5114,pickup_latitude:42,pickup_longitude:-88,fare:6,row_vec:"{41.877406123,-87.621971651999999}"},{id:9,trip_start_timestamp:"2016-12-01 09:45:00",taxi_id:4320,pickup_latitude:42,pickup_longitude:-88,fare:12,row_vec:"{41.900265687000001,-87.632109220000004}"},{id:10,trip_start_timestamp:"2016-12-01 10:00:00",taxi_id:1504,pickup_latitude:42,pickup_longitude:-88,fare:15,row_vec:"{41.893216359999997,-87.637844209999997}"}],aiTableData:[],aiSqlData:[],biSql:[1],aiSql:[1],disableStopBtn:!1,center:[],dataToGoogleMap:[],screenWidth:document.body.clientWidth}},mounted:function(){var t=this;window.onresize=function(){return window.screenWidth=document.body.clientWidth,void(t.screenWidth=window.screenWidth)},this.$notify.success(this.msg)},created:function(){var t=this;this.taskId=localStorage.getItem("task_id"),this.taskId&&0===this.interval_id?(this.fetchTaskResult(this.taskId),this.interval_id=setInterval(function(){t.fetchTaskResult(t.taskId)},2e3)):this.disableStopBtn=!0},methods:{fetchTaskResult:function(t){var e,a=this;(e={task_id:t},_.get("/api/v1/task/taskId/result",e)).then(function(t){0===t.code?(a.biChartData.rows=t.data.bi,a.aiTableData=t.data.ai,a.sendDataToGoogleMap(),a.rawTableData=t.data.raw,a.biSql=t.data.biSql,a.aiSql=t.data.aiSql,"finish"===t.data.status?(a.disableStopBtn=!0,a.$notify.success({message:"The task is finished.",duration:5e3}),clearInterval(a.interval_id),a.interval_id=0):a.disableStopBtn=!1):(a.$notify.error({title:"Error",message:t.data}),clearInterval(a.interval_id),a.interval_id=0)})},beforeDestroy:function(){clearInterval(this.interval_id),this.interval_id=0},start:function(){var t,e=this;this.interval_id>0?this.$notify.warning("There are already tasks running."):_.post("/auth/v1/task/create",t).then(function(t){0===t.code?(e.$notify.success("Create task success"),e.taskId=t.data.task_id,localStorage.setItem("task_id",e.taskId),e.sleep(1e3),e.fetchTaskResult(e.taskId),e.interval_id=setInterval(function(){e.fetchTaskResult(e.taskId)},2e3)):e.$notify.error({title:"Error",message:t.data})})},stop:function(){var t,e=this;(t={task_id:this.taskId},_.post("/auth/v1/task/stop",t)).then(function(t){0===t.code?(e.$notify.success("Stop task success"),clearInterval(e.interval_id),e.interval_id=0,e.disableStopBtn=!0,localStorage.removeItem("task_id")):e.$notify.error({title:"Error",message:t.data})})},sendDataToGoogleMap:function(){var t=[];this.aiTableData&&this.aiTableData.forEach(function(e){var a=e.row_vec.replace("{","").replace("}","").split(",").map(function(t){return+t}),i=e.cluster_id;t.push({mark:a,id:i})}),this.dataToGoogleMap=t},pickUpLocationFormatter:function(t){var e=t.row_vec.replace("{","").replace("}","").split(",");return e[0].substring(0,7)+", "+e[1].substring(0,8)},tripFareFormatter:function(t){return"$"+t.fare},sleep:function(t){var e=Date.now(),a=null;do{a=Date.now()}while(a-e<t)}}},E={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return this.screenWidth>=1e3?a("div",{staticClass:"vidardb"},[t._m(0),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:14}},[a("div",{staticStyle:{align:"center",margin:"0 auto 15px auto"}},[a("el-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"primary",round:""},on:{click:t.start}},[t._v("start")]),t._v(" "),a("el-button",{attrs:{type:"danger",disabled:t.disableStopBtn,round:""},on:{click:t.stop}},[t._v("stop")])],1)]),t._v(" "),a("el-col",{attrs:{span:10}})],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:14}},[a("span",{staticStyle:{"font-weight":"bold"}},[t._v("Maximum Trip Fare Updated Every 2 Seconds")])]),t._v(" "),a("el-col",{attrs:{span:10}},[a("span",{staticStyle:{"font-weight":"bold"}},[t._v("Data Flow of Taxi Trip Orders")])])],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:14}},[a("div",{staticStyle:{border:"1px solid #EBEEF5"}},[a("ve-line",{attrs:{data:t.biChartData,extend:t.extend,grid:t.grid,"mark-line":t.markLine,settings:t.vchartsLineConfig,"mark-point":t.markPoint}})],1)]),t._v(" "),a("el-col",{attrs:{span:10}},[a("el-table",{attrs:{data:t.rawTableData.slice(-9),"header-cell-style":{background:"#eef1f6",color:"#606266"},stripe:"",border:"",align:"center"}},[a("el-table-column",{attrs:{prop:"trip_start_timestamp",label:"Trip Start Time","min-width":"25%",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"taxi_id",label:"Taxi ID","min-width":"11%",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"row_vec",label:"Pickup Location",formatter:t.pickUpLocationFormatter,"min-width":"25%",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"fare",label:"Fare",formatter:t.tripFareFormatter,"min-width":"9%",align:"center"}})],1)],1)],1),t._v(" "),a("br"),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:14}},[a("span",{staticStyle:{"font-weight":"bold"}},[t._v("Clustering of Pickup Location (KMeans, k = 5)")])])],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:14}},[a("div",{staticStyle:{height:"400px"}},[a("google-map",{attrs:{"data-to-google-map":this.dataToGoogleMap}})],1)]),t._v(" "),a("el-col",{attrs:{span:10}},[a("el-row",[a("div",{staticStyle:{height:"50%"}},[a("el-table",{attrs:{data:t.biSql,"header-cell-style":{background:"#eef1f6",color:"#606266"},"highlight-current-row":"",stripe:"",borde:""}},[a("el-table-column",{attrs:{prop:"value",label:"Maximum Trip Fare"}},[a("highlight-code",{staticStyle:{margin:"-1% auto -1% auto"},attrs:{lang:"sql"}},[t._v("SELECT MAX(FARE) FROM CHICAGO_TAXI_TRIPS WHERE TRIP_START_TIMESTAMP > LAST_VISITED;")])],1)],1),t._v(" "),a("br"),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.aiSql,"header-cell-style":{background:"#eef1f6",color:"#606266"},stripe:"",border:""}},[a("el-table-column",{attrs:{prop:"value",label:"Clustering Pickup Location (Running KMeans Training)","min-width":"60"}},[a("highlight-code",{staticStyle:{margin:"-1% auto -1% auto"},attrs:{lang:"sql"}},[t._v("\n              CREATE TABLE km_result AS SELECT * FROM madlib.kmeanspp(\n                  'chicago_taxi_trips_change',   -- Table of source data\n                  'row_vec',                     -- Column containing point co-ordinates\n                  5,                             -- Number of centroids to calculate\n                  'madlib.squared_dist_norm2',   -- Distance function\n                  'madlib.avg',                  -- Aggregate function\n                  20,                            -- Number of iterations\n                  0.001                          -- Fraction of centroids reassigned to keep iterating\n              );")])],1)],1)],1)]),t._v(" "),a("el-row")],1)],1)],1):a("div",[t._v("\n  Your screen's weight does not meet our minimum requirement. Please try to rotate it or use a bigger one to see our demo.\n")])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"text-align":"left","margin-bottom":"15px"}},[e("span",[this._v("This demo simulates a console for Uber-like companies collecting realtime taxi data of Chicago. The system calculates the maximum and average trip fares online, which are instructional to taxi drivers. Additionally, in order to improve revenue, it is useful to point out taxi drivers the increasingly hot areas with customers by clustering the pickup locations recorded in real-time.")]),e("br"),this._v(" "),e("span",[this._v("The dataset comes from "),e("a",{attrs:{href:"https://data.cityofchicago.org/Transportation/Taxi-Trips/wrvz-psew"}},[this._v("Chicago Taxi Trip")]),this._v(" and the backend system is developed with VidarDB enabling realtime business intelligence and online machine learning.")])])}]};var I=a("VU/8")(C,E,!1,function(t){a("P40b")},"data-v-282f1e69",null).exports;i.default.use(s.a);var M=new s.a({routes:[{path:"/",name:"VidarDbDemo",component:I}]}),D=a("vO7p"),R=a.n(D),F=(a("Qbfk"),a("tvR6"),a("wUZ8")),P=a.n(F),$=a("7H7j"),q=a("8IMK"),A=a.n(q);a("c/gx");i.default.config.productionTip=!1,i.default.use(f.a,{size:"small",locale:P.a}),i.default.use(R.a),i.default.prototype.$axios=u.a,i.default.use(y,{load:{key:"AIzaSyCqu8xFvtQPTKbKEbd7fJ2zBCNZ02d01I0"}}),i.default.use($.a,{languages:{sql:A.a}}),new i.default({el:"#app",router:M,components:{App:n},template:"<App/>"})},P40b:function(t,e){},Qbfk:function(t,e){},T5eZ:function(t,e,a){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("label",[e("span",{domProps:{textContent:this._s(this.label)}}),this._v(" "),e("input",{ref:"input",class:this.className,attrs:{type:"text",placeholder:this.placeholder}})])},staticRenderFns:[]};e.a=i},YI6p:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("jIen"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);var s=a("T5eZ"),o=a("VU/8")(r.a,s.a,!1,null,null,null);e.default=o.exports},"aNJ/":function(t,e){},"c/gx":function(t,e){},oHNY:function(t,e){},preG:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=(i=a("hQTS")).default||i,n={render:function(){var t=this.$createElement;return(this._self._c||t)("input",this._g(this._b({ref:"input"},"input",this.$attrs,!1),this.$listeners))},staticRenderFns:[]},s=a("VU/8")(r,n,!1,null,null,null);e.default=s.exports},tvR6:function(t,e){},uGSN:function(t,e){}},["NHnr"]);