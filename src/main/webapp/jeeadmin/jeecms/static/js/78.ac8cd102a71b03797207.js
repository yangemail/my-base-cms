webpackJsonp([78],{C8px:function(n,t,a){var e=a("SRI1");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);a("FIqI")("b329d7a2",e,!0,{})},SRI1:function(n,t,a){t=n.exports=a("UTlt")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},n7ci:function(n,t,a){"use strict";function e(n){a("C8px")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("3cXf"),l=a.n(s),i=a("hRKE"),o=a.n(i),r=a("lcoF"),d=a("2sCs"),c=a.n(d),f=a("x1ym"),p=a("P9l9"),u={mixins:[r.a],data:function(){var n=this,t=f.a.required("此项必填"),a=f.a.number("只能输入数字"),e=f.a.email("请输入正确的邮箱地址"),s=(f.a.validateName("用户名已存在"),f.a.tel("请输入正确的固定电话")),l=f.a.mobile("请输入正确的手机号");f.a.level(this.$route.query.type);return{params:{queryUsername:"",https:""},rules:{username:[t],email:[e],password:[function(){return{validator:function(t,a,e){""===a||void 0==a?e():a.length<n.passwordMinLen?e(new Error("密码长度不能小于系统设定值:"+n.passwordMinLen)):(""!==n.dataInfo.confirmPassword&&n.$refs.form.validateField("confirmPassword"),e())},trigger:"blur"}}()],confirmPassword:[function(){return{validator:function(t,a,e){""===a||void 0===a?e():a!==n.dataInfo.password?e(new Error("前后密码不一致")):e()},trigger:"blur"}}()],groupId:[t,a],grain:[t,a],phone:[s],mobile:[l],disabled:[t],rank:[function(){return{validator:function(n,t,a){""!=t&&c.a.post(p.a.adminValRank,{id:"",rank:t}).then(function(n){""==t?a():"200"==n.code?n.body.result?a():a(new Error("不能大于自身级别")):a(new Error("服务器响应异常"))})},trigger:"blur"}}()]},memberGroup:[],passwordMinLen:"",roles:[],dialogDepartments:!1,parents:[],departmentList:[],siteList:[],roleIds:[],steps:[],siteIds:[],allChannels:[],allControlChannels:[],defaultProps:{label:"name",value:"id",children:"child"},dialogVisible:!1}},methods:{getRoleIds:function(n){this.dataInfo.roleIds=n},getSiteIds:function(n,t){this.siteIds.indexOf(n)>=0?(this.allChannels[n]=!0,this.steps[n]=0):(this.allChannels[n]=!1,this.steps[n]=0)},inputDigit:function(n){function t(){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}(function(){var n=!1;for(var t in this.siteIds)for(var a in this.siteList)if(this.siteList[a].id===this.siteIds[t]){""!=this.steps[this.siteIds[t]]&&this.steps[this.siteIds[t]];var e=this.steps[this.siteIds[t]],s=/[1-9]{1}/;""!==e?(e>9||e<1?(alert("审核级别必须在1-9之间"),n=!0):n=!1,e=s.exec(e),e=null===e?"1":e[0]):(alert("审核级别必填"),n=!0),this.$refs.reviewLevel[a]._data.currentValue=e,this.steps[this.siteIds[t]]=e}!0===n&&inputDigit(),this.dialogVisible=!1}),getDataInfo:function(n,t){var a=this,e=this.$api;c.a.all([c.a.post(e.adminGlobleGet,{id:n,https:t}),c.a.post(e.groupList),c.a.post(e.roleList),c.a.post(e.siteList)]).then(c.a.spread(function(n,t,e,s){a.dataInfo=n.body,a.passwordMinLen=a.dataInfo.passwordMinLen,a.memberGroup=t.body,a.roles=e.body,a.siteList=s.body,a.parents=a.dataInfo.departmentIds;var l=[],i=[],o=[],r=[];n.body.sites.forEach(function(n,t){l.push(n.id),i[n.id]=a.dataInfo.allChannels[t],r[n.id]=a.dataInfo.steps[t]}),a.siteIds=l,a.steps=r,a.allChannels=i,a.allControlChannels=o,a.$refs.form.resetFields(),a.loading=!1})).catch(function(n){a.loading=!1})},update:function(){var n=this,t={};for(var a in this.dataInfo)t[a]=this.dataInfo[a];t.roleIds=t.roleIds.join(","),t.siteIds=this.siteIds.join(","),t.steps=this.siteIds.join(",");for(var e in t)"object"==o()(t[e])&&delete t[e];var s=[];this.siteIds.forEach(function(t,a){var e={siteIds:t,steps:n.steps[t],allChannels:n.allChannels[t]};s.push(e)}),t.source=l()(s),this.updateDataInfo(this.$api.adminGlobleUpdate,t,"list")}},created:function(){this.getDataInfo(this.$route.query.id)}},m=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[a("cms-back"),n._v(" "),a("el-form",{ref:"form",staticClass:"cms-form",attrs:{"label-width":"162px",model:n.dataInfo,rules:n.rules}},[a("el-form-item",{staticClass:"flex-50",attrs:{label:"用户名",prop:"username"}},[n._v("\n            "+n._s(n.dataInfo.username)+"\n        ")]),n._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"电子邮箱",prop:"email"}},[a("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.email,callback:function(t){n.$set(n.dataInfo,"email",t)},expression:"dataInfo.email"}})],1),n._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"密码",prop:"password"}},[a("el-input",{staticClass:"cms-width",attrs:{type:"password"},model:{value:n.dataInfo.password,callback:function(t){n.$set(n.dataInfo,"password",t)},expression:"dataInfo.password"}}),n._v(" "),a("span",{staticClass:"gray"},[n._v("不修改请留空")])],1),n._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"确认密码",prop:"confirmPassword"}},[a("el-input",{staticClass:"cms-width",attrs:{type:"password"},model:{value:n.dataInfo.confirmPassword,callback:function(t){n.$set(n.dataInfo,"confirmPassword",t)},expression:"dataInfo.confirmPassword"}}),n._v(" "),a("span",{staticClass:"gray"},[n._v("不修改请留空")])],1),n._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"会员组",prop:"groupId"}},[a("el-select",{staticClass:"cms-width",model:{value:n.dataInfo.groupId,callback:function(t){n.$set(n.dataInfo,"groupId",t)},expression:"dataInfo.groupId"}},n._l(n.memberGroup,function(n,t){return a("el-option",{key:t,attrs:{label:n.name,value:n.id}})}),1)],1),n._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"等级",prop:"rank"}},[a("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:n.dataInfo.rank,callback:function(t){n.$set(n.dataInfo,"rank",t)},expression:"dataInfo.rank"}}),n._v(" "),a("span",{staticClass:"gray"},[n._v("越大等级越高")])],1),n._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"禁用",prop:"disabled"}},[a("el-radio-group",{model:{value:n.dataInfo.disabled,callback:function(t){n.$set(n.dataInfo,"disabled",t)},expression:"dataInfo.disabled"}},[a("el-radio",{attrs:{label:!0}},[n._v("是")]),n._v(" "),a("el-radio",{attrs:{label:!1}},[n._v("否")])],1)],1),n._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"登录次数",prop:"loginCount"}},[n._v("\n            "+n._s(n.dataInfo.loginCount)+"\n        ")]),n._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"注册",prop:"loginCount"}},[n._v("\n            "+n._s(n.dataInfo.registerTime)+" "+n._s(n.dataInfo.registerIp)+"\n        ")]),n._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"最后登录",prop:"lastLoginTime"}},[n._v("\n            "+n._s(n.dataInfo.lastLoginTime)+"\n        ")]),n._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"真实姓名",prop:"realname"}},[a("el-input",{staticClass:"cms-width",attrs:{type:"username"},model:{value:n.dataInfo.userRealName,callback:function(t){n.$set(n.dataInfo,"userRealName",t)},expression:"dataInfo.userRealName"}})],1),n._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"\t性别",prop:"gender"}},[a("el-radio-group",{model:{value:n.dataInfo.gender,callback:function(t){n.$set(n.dataInfo,"gender",t)},expression:"dataInfo.gender"}},[a("el-radio",{attrs:{label:!0}},[n._v("男")]),n._v(" "),a("el-radio",{attrs:{label:!1}},[n._v("女")])],1)],1),n._v(" "),a("el-form-item",{staticClass:"flex-100",attrs:{label:"受限管理员",prop:"selfAdmin"}},[a("el-radio-group",{model:{value:n.dataInfo.selfAdmin,callback:function(t){n.$set(n.dataInfo,"selfAdmin",t)},expression:"dataInfo.selfAdmin"}},[a("el-radio",{attrs:{label:!0}},[n._v("是")]),n._v(" "),a("el-radio",{attrs:{label:!1}},[n._v("否")])],1),n._v(" "),a("span",{staticClass:"gray"},[n._v("只能管理自己的数据")])],1),n._v(" "),a("el-form-item",{staticClass:"flex-100",attrs:{label:"角色",prop:"roleIds"}},[a("el-checkbox-group",{on:{change:n.getRoleIds},model:{value:n.dataInfo.roleIds,callback:function(t){n.$set(n.dataInfo,"roleIds",t)},expression:"dataInfo.roleIds"}},n._l(n.roles,function(t,e){return a("el-checkbox",{key:e,attrs:{label:t.id}},[n._v(n._s(t.name))])}),1),n._v(" "),a("span",{staticClass:"gray"},[n._v("功能权限的控制在角色中")])],1),n._v(" "),a("el-form-item",{staticClass:"flex-100",attrs:{label:"站群权限"}},[a("el-button",{on:{click:function(t){n.dialogVisible=!0}}},[n._v("站群权限")]),n._v(" "),a("el-dialog",{attrs:{title:"站群权限设置",visible:n.dialogVisible},on:{"update:visible":function(t){n.dialogVisible=t}}},[a("div",{staticClass:"channels-box"},[a("el-checkbox-group",{staticClass:"pull-left check-vertical",model:{value:n.siteIds,callback:function(t){n.siteIds=t},expression:"siteIds"}},n._l(n.siteList,function(t,e){return a("el-checkbox",{key:e,attrs:{label:t.id},on:{change:function(a){n.getSiteIds(t.id,e)}}},[n._v(n._s(t.name))])}),1),n._v(" "),a("div",{staticClass:"pull-left"},n._l(n.siteList,function(t,e){return a("div",{key:e,staticClass:"cms-channels"},[a("div",{staticClass:"pull-left",staticStyle:{"margin-right":"12px"}},[a("label",{staticClass:"font-size:12px;",attrs:{for:""}},[n._v("审核级别")]),n._v(" "),a("el-input",{ref:"reviewLevel",refInFor:!0,staticClass:"w50",attrs:{type:"number",disabled:"-1"==n.siteIds.indexOf(t.id)},model:{value:n.steps[t.id],callback:function(a){n.$set(n.steps,t.id,a)},expression:"steps[item.id]"}})],1),n._v(" "),a("el-checkbox",{staticClass:"pull-left",attrs:{"false-label":"",disabled:"-1"==n.siteIds.indexOf(t.id)},model:{value:n.allChannels[t.id],callback:function(a){n.$set(n.allChannels,t.id,a)},expression:"allChannels[item.id]"}},[n._v("所有栏目内容权限")])],1)}),0)],1),n._v(" "),a("div",{staticClass:"form-footer"},[a("el-button",{on:{click:n.inputDigit}},[n._v("确定")])],1)]),n._v(" "),a("span",{staticClass:"gray"})],1),n._v(" "),a("div",{staticClass:"form-footer"},[a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/adminGlobal/edit",expression:"'/adminGlobal/edit'"}],attrs:{type:"primary"},on:{click:function(t){n.update()}}},[n._v("修改")]),n._v(" "),a("el-button",{attrs:{type:"info"},on:{click:n.$reset}},[n._v("重置")])],1)],1)],1)},v=[],b={render:m,staticRenderFns:v},I=b,h=a("C7Lr"),_=e,g=h(u,I,!1,_,null,null);t.default=g.exports}});