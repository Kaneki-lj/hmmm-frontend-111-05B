(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14d62184"],{"03c8":function(t,e,a){},"4ecf":function(t,e,a){"use strict";a.d(e,"c",(function(){return l})),a.d(e,"e",(function(){return r})),a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return o})),a.d(e,"f",(function(){return s})),a.d(e,"d",(function(){return i}));var n=a("b775"),l=function(t){return Object(n["a"])("/subjects","get",t)},r=function(t){return Object(n["a"])("/subjects/simple","get",t)},c=function(t){return Object(n["a"])("/subjects/".concat(t.id),"get",t)},o=function(t){return Object(n["a"])("/subjects","post",t)},s=function(t){return Object(n["a"])("/subjects/".concat(t.id),"put",t)},i=function(t){return Object(n["a"])("/subjects/".concat(t.id),"delete",t)}},"4f75":function(t,e,a){"use strict";a.d(e,"c",(function(){return l})),a.d(e,"a",(function(){return r})),a.d(e,"e",(function(){return c})),a.d(e,"d",(function(){return o})),a.d(e,"b",(function(){return s}));var n=a("b775"),l=function(t){return Object(n["a"])("/users/","get",t)},r=function(t){return Object(n["a"])("/users","post",t)},c=function(t){return Object(n["a"])("/users/".concat(t.id),"put",t)},o=function(t){return Object(n["a"])("/users/".concat(t.id),"delete",t)},s=function(t){return Object(n["a"])("/users/".concat(t.id),"get",t)}},"72a0":function(t,e,a){"use strict";a.d(e,"d",(function(){return n})),a.d(e,"a",(function(){return l})),a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return c}));var n=[{value:1,label:"启用"},{value:0,label:"禁用"}],l=[{value:1,label:"简单"},{value:2,label:"一般"},{value:3,label:"困难"}],r=[{value:1,label:"单选"},{value:2,label:"多选"},{value:3,label:"简答"}],c=["o2o","外包服务","企业服务","互联网金融","企业咨询","互联网","电子商务","其他"]},a77a:function(t,e,a){"use strict";a.d(e,"d",(function(){return l})),a.d(e,"f",(function(){return r})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return o})),a.d(e,"g",(function(){return s})),a.d(e,"e",(function(){return i})),a.d(e,"b",(function(){return u}));a("99af");var n=a("b775"),l=function(t){return Object(n["a"])("/directorys","get",t)},r=function(t){return Object(n["a"])("/directorys/simple","get",t)},c=function(t){return Object(n["a"])("/directorys/".concat(t.id),"get",t)},o=function(t){return Object(n["a"])("/directorys","post",t)},s=function(t){return Object(n["a"])("/directorys/".concat(t.id),"put",t)},i=function(t){return Object(n["a"])("/directorys/".concat(t.id),"delete",t)},u=function(t){return Object(n["a"])("/directorys/".concat(t.id,"/").concat(t.state),"post",t)}},cc7d:function(t,e,a){"use strict";a.r(e);a("14d9");var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"header"},[e("span",{staticStyle:{"font-size":"12px",color:"pink"}},[t._v("说明：目前支持学科和关键字条件筛选")]),e("el-button",{staticStyle:{float:"right"},attrs:{type:"success",icon:"el-icon-edit",size:"small"},on:{click:function(e){return t.$router.push("new")}}},[t._v("新增试题")])],1),e("el-form",{attrs:{model:t.form,"label-width":"85px",inline:!0}},[e("el-row",[e("el-form-item",{staticClass:"el-col el-col-6",attrs:{label:"学科"}},[e("el-select",{attrs:{size:"small",placeholder:"请选择"},on:{change:t.submit},model:{value:t.form.subjectID,callback:function(e){t.$set(t.form,"subjectID",e)},expression:"form.subjectID"}},t._l(t.subjects,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),e("el-form-item",{staticClass:"el-col el-col-6",attrs:{label:"二级目录"}},[e("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:t.form.catalogID,callback:function(e){t.$set(t.form,"catalogID",e)},expression:"form.catalogID"}},t._l(t.list,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),e("el-form-item",{staticClass:"el-col el-col-6",attrs:{label:"标签"}},[e("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:t.form.tags,callback:function(e){t.$set(t.form,"tags",e)},expression:"form.tags"}},t._l(t.tagOptions,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),e("el-form-item",{staticClass:"el-col el-col-6",attrs:{label:"关键字"}},[e("el-input",{attrs:{placeholder:"根据题干搜索",size:"small"},model:{value:t.form.keyword,callback:function(e){t.$set(t.form,"keyword",e)},expression:"form.keyword"}})],1),e("el-form-item",{staticClass:"el-col el-col-6",attrs:{label:"试题类型"}},[e("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:t.form.questionType,callback:function(e){t.$set(t.form,"questionType",e)},expression:"form.questionType"}},t._l(t.questionType,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),e("el-form-item",{staticClass:"el-col el-col-6",attrs:{label:"难度"}},[e("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:t.form.difficulty,callback:function(e){t.$set(t.form,"difficulty",e)},expression:"form.difficulty"}},t._l(t.difficulty,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),e("el-form-item",{staticClass:"el-col el-col-6",attrs:{label:"方向"}},[e("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:t.form.direction,callback:function(e){t.$set(t.form,"direction",e)},expression:"form.direction"}},t._l(t.direction,(function(t){return e("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1),e("el-form-item",{staticClass:"el-col el-col-6",attrs:{label:"录入人"}},[e("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:t.form.creatorID,callback:function(e){t.$set(t.form,"creatorID",e)},expression:"form.creatorID"}},t._l(t.user,(function(t){return e("el-option",{key:t.id,attrs:{label:t.username,value:t.id}})})),1)],1),e("el-form-item",{staticClass:"el-col el-col-6",attrs:{label:"题目备注"}},[e("el-input",{attrs:{size:"small"},model:{value:t.form.remarks,callback:function(e){t.$set(t.form,"remarks",e)},expression:"form.remarks"}})],1),e("el-form-item",{staticClass:"el-col el-col-6",attrs:{label:"企业简称"}},[e("el-input",{attrs:{size:"small"},model:{value:t.form.shortName,callback:function(e){t.$set(t.form,"shortName",e)},expression:"form.shortName"}})],1),e("el-form-item",{staticClass:"el-col el-col-6",attrs:{label:"城市"}},[e("el-select",{staticStyle:{width:"49%"},attrs:{size:"small",placeholder:"请选择"},on:{change:t.handleCity},model:{value:t.form.province,callback:function(e){t.$set(t.form,"province",e)},expression:"form.province"}},t._l(t.cityOptions,(function(t){return e("el-option",{key:t,attrs:{label:t,value:t}})})),1),e("el-select",{staticStyle:{width:"49%","margin-left":"2%"},attrs:{size:"small",placeholder:"请选择"},model:{value:t.form.city,callback:function(e){t.$set(t.form,"city",e)},expression:"form.city"}},t._l(t.city,(function(t){return e("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1),e("el-form-item",{staticClass:"el-col el-col-6",staticStyle:{"text-align":"right"}},[e("el-button",{attrs:{size:"small"},on:{click:t.clear}},[t._v("清除")]),e("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"small"},on:{click:t.submit1}},[t._v("搜索")])],1)],1)],1),e("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"全部",name:"first"}}),e("el-tab-pane",{attrs:{label:"待审核",name:"second"}}),e("el-tab-pane",{attrs:{label:"已审核",name:"third"}}),e("el-tab-pane",{attrs:{label:"已拒绝",name:"fourth"}})],1),e("el-alert",{staticStyle:{"margin-bottom":"15px"},attrs:{title:"数据一共".concat(t.count,"条"),type:"info",closable:!1,"show-icon":""}}),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"header-cell-style":t.getRowClass}},[e("el-table-column",{attrs:{prop:"number",label:"试题编号",width:"230"}}),e("el-table-column",{attrs:{prop:"subject",label:"学科"}}),e("el-table-column",{attrs:{prop:"catalog",label:"目录"}}),e("el-table-column",{attrs:{prop:"questionType",label:"题型"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s("1"===a.questionType?"单选":"2"===a.questionType?"多选":"简答")+" ")]}}])}),e("el-table-column",{attrs:{prop:"question",label:"题干",width:"280"},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.row;return[e("div",{domProps:{innerHTML:t._s(n.question)}})]}}])}),e("el-table-column",{attrs:{prop:"addDate",label:"录入时间",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t._f("parseTimeByString")(a.addDate))+" ")]}}])}),e("el-table-column",{attrs:{prop:"difficulty",label:"难度",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s("1"===a.difficulty?"简单":"2"===a.difficulty?"一般":"困难")+" ")]}}])}),e("el-table-column",{attrs:{prop:"creator",label:"录入人",width:"120"}}),e("el-table-column",{attrs:{prop:"chkState",label:"审核状态",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(0===a.chkState?"待审核":1===a.chkState?"已审核":"已拒绝")+" ")]}}])}),e("el-table-column",{attrs:{prop:"chkRemarks",label:"审核意见",width:"180"}}),e("el-table-column",{attrs:{prop:"chkUser",label:"审核人",width:"120"}}),e("el-table-column",{attrs:{prop:"publishState",label:"发布状态",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(t._f("state_pub")(a))+" ")]}}])}),e("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.row;return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.look(n)}}},[t._v("预览")]),e("el-button",{attrs:{type:"text",size:"small",disabled:1===n.chkState||2===n.chkState},on:{click:function(e){return t.open(n)}}},[t._v("审核")]),e("el-button",{attrs:{type:"text",size:"small",disabled:1===n.publishState},on:{click:function(e){return t.$router.push("new?id=".concat(n.id))}}},[t._v("修改")]),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.open1(n)}}},[t._v(t._s(0===n.publishState?"上架":"下架"))]),e("el-button",{attrs:{type:"text",size:"small",disabled:1===n.publishState},on:{click:function(e){return t.del(n)}}},[t._v("删除")])]}}])})],1),e("el-pagination",{staticStyle:{"text-align":"right","margin-top":"20px"},attrs:{"page-sizes":[5,10,20,50],"page-size":5,background:"",layout:" prev, pager, next,sizes, jumper",total:t.count,"hide-on-single-page":""},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),e("el-dialog",{attrs:{title:"题目审核",visible:t.dialogVisible,width:"400px","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("el-form",{ref:"formdata",attrs:{model:t.formdata}},[e("el-form-item",[e("el-radio",{attrs:{label:1},model:{value:t.formdata.chkState,callback:function(e){t.$set(t.formdata,"chkState",e)},expression:"formdata.chkState"}},[t._v("通过")]),e("el-radio",{attrs:{label:2},model:{value:t.formdata.chkState,callback:function(e){t.$set(t.formdata,"chkState",e)},expression:"formdata.chkState"}},[t._v("拒绝")])],1),e("el-form-item",[e("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入审核意见"},model:{value:t.formdata.chkRemarks,callback:function(e){t.$set(t.formdata,"chkRemarks",e)},expression:"formdata.chkRemarks"}})],1)],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:t.handleClose}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确 定")])],1)],1),e("Container",{ref:"questionPreview",attrs:{data:t.questionInfo}})],1)},l=[],r=a("c7eb"),c=a("1da1"),o=a("4ecf"),s=a("a77a"),i=a("fcec"),u=a("4f75"),f=a("72a0"),d=a("9eca"),b=a("b59c"),m={data:function(){return{questionInfo:{},dialogVisible:!1,formdata:{id:null,chkState:1,chkRemarks:null},activeName:"first",form:{page:1,pagesize:5,catalogID:null,tags:null,city:null,chkState:null},count:0,subjects:[],list:[],tagOptions:[],questionType:[],difficulty:[],direction:[],user:[],tableData:[],cityOptions:Object(b["b"])(),city:[]}},created:function(){var t=this;return Object(c["a"])(Object(r["a"])().mark((function e(){var a,n,l,c,s;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["e"])();case 2:return a=e.sent,t.subjects=a.data,e.next=6,f["c"];case 6:return n=e.sent,t.questionType=n,e.next=10,f["a"];case 10:return l=e.sent,t.difficulty=l,e.next=14,f["b"];case 14:return c=e.sent,t.direction=c,e.next=18,Object(u["c"])();case 18:s=e.sent,t.user=s.data.list,t.data();case 21:case"end":return e.stop()}}),e)})))()},methods:{data:function(){var t=this;return Object(c["a"])(Object(r["a"])().mark((function e(){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["b"])(t.form);case 2:a=e.sent,t.tableData=a.data.items,t.count=a.data.counts;case 5:case"end":return e.stop()}}),e)})))()},open:function(t){var e=this;return Object(c["a"])(Object(r["a"])().mark((function a(){return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.dialogVisible=!0,e.formdata.id=t.id;case 2:case"end":return a.stop()}}),a)})))()},confirm:function(){var t=this;return Object(c["a"])(Object(r["a"])().mark((function e(){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!==t.formdata.chkRemarks){e.next=2;break}return e.abrupt("return",t.$message.warning("请输入审核意见"));case 2:return e.next=4,Object(d["d"])(t.formdata);case 4:t.handleClose(),t.$message.success("操作成功"),t.data();case 7:case"end":return e.stop()}}),e)})))()},handleClose:function(){this.dialogVisible=!1,this.formdata.chkRemarks=null},open1:function(t){var e=this;return Object(c["a"])(Object(r["a"])().mark((function a(){return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$confirm("您确认".concat(0===t.publishState?"上架":"下架","这道题目吗?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});case 2:return a.next=4,Object(d["e"])({id:t.id,publishState:1===t.publishState?0:1});case 4:e.$message.success("".concat(0===t.publishState?"上架":"下架","成功")),e.data();case 6:case"end":return a.stop()}}),a)})))()},del:function(t){var e=this;return Object(c["a"])(Object(r["a"])().mark((function a(){return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$confirm("此操作将永久删除该题目, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});case 2:return a.next=4,Object(d["i"])(t);case 4:e.data();case 5:case"end":return a.stop()}}),a)})))()},look:function(t){var e=this;this.questionInfo=t,this.$nextTick((function(){e.$refs.questionPreview.open()}))},submit:function(t){var e=this;return Object(c["a"])(Object(r["a"])().mark((function a(){var n,l,c,o;return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.form.catalogID=null,e.form.tags=null,!t){a.next=15;break}return a.next=5,Object(s["f"])({subjectID:t});case 5:return n=a.sent,l=n.data,e.list=l,a.next=10,Object(i["e"])({subjectID:t});case 10:c=a.sent,o=c.data,e.tagOptions=o,a.next=17;break;case 15:e.list=[],e.tagOptions=[];case 17:case"end":return a.stop()}}),a)})))()},handleCity:function(t){this.form.city=null,this.city=Object(b["a"])(t)},clear:function(){this.form={page:1,pagesize:5},this.data()},submit1:function(){this.data(this.form)},handleClick:function(t,e){"全部"===t.label?(this.form.chkState=null,this.data()):"待审核"===t.label?(this.form.chkState=0,this.data()):"已审核"===t.label?(this.form.chkState=1,this.data()):"已拒绝"===t.label&&(this.form.chkState=2,this.data())},getRowClass:function(t){var e=t.rowIndex;t.columnIndex;if(0===e)return"background:#f8faff; border-bottom: 2px solid #e8e8e8;"},handleSizeChange:function(t){this.form.pagesize=t,this.form.page=1,this.data()},handleCurrentChange:function(t){this.form.page=t,this.data()}},filters:{state_pub:function(t){return 1===t.publishState&&1===t.chkState?"已发布":0===t.publishState&&1===t.chkState?"已下架":"待发布"}}},p=m,h=(a("d097"),a("2877")),v=Object(h["a"])(p,n,l,!1,null,"737b2182",null);e["default"]=v.exports},d097:function(t,e,a){"use strict";a("03c8")},fcec:function(t,e,a){"use strict";a.d(e,"c",(function(){return l})),a.d(e,"e",(function(){return r})),a.d(e,"a",(function(){return c})),a.d(e,"f",(function(){return o})),a.d(e,"d",(function(){return s})),a.d(e,"b",(function(){return i}));a("99af");var n=a("b775"),l=function(t){return Object(n["a"])("/tags","get",t)},r=function(t){return Object(n["a"])("/tags/simple","get",t)},c=function(t){return Object(n["a"])("/tags","post",t)},o=function(t){return Object(n["a"])("/tags/".concat(t.id),"put",t)},s=function(t){return Object(n["a"])("/tags/".concat(t.id),"delete",t)},i=function(t){return Object(n["a"])("/tags/".concat(t.id,"/").concat(t.state),"post",t)}}}]);
//# sourceMappingURL=chunk-14d62184.83c3f1a8.js.map