webpackJsonp([18],{A7rL:function(t,a,e){var s=e("Q7ig");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("FIqI")("41a6452e",s,!0,{})},Q7ig:function(t,a,e){a=t.exports=e("UTlt")(!1),a.push([t.i,"\n.el-date-editor .el-range-separator{\r\n margin-top: -1px\n}\n.el-date-editor .el-range-separator{\r\n  width: 6%;\n}\n.content-div{\r\n  margin-bottom: 0px;\r\n  padding: 15px 0;\r\n  width: 100%;\n}\n.text-color{\r\n  top: -10px;\n}\n.el-color-picker,.el-color-picker__trigger{\r\n  width: 32px;\r\n  height: 32px;\n}\n.cms-col2{\r\n  width: 20%;\n}\n.cms-col4{\r\n  width: 40%;\n}\n.cms-col6{\r\n  width: 60%;\n}\n.content-div .el-form-item{\r\n  float: left;\n}\n.text-color-item{\r\n  height: 63px\n}\n.content-div .gray{\r\n  display: inline-block;\n}\n.flex-50{\r\n  height: 63px;\n}\n.upload{\r\n  height: 161px;\n}\n.upload .el-form-item__label{\r\n  margin-top: 49px;\n}\n.code-area{\r\n   height: 110px;\n}\r\n",""])},ygPA:function(t,a,e){"use strict";function s(t){e("A7rL")}Object.defineProperty(a,"__esModule",{value:!0});var i=e("2sCs"),l=e.n(i),n=e("x1ym"),o=e("lcoF"),r={mixins:[o.a],data:function(){var t=n.a.required("此项必填"),a=n.a.number("必须为数字");return{dataInfo:{},adTypes:[],conteDisable:[!0,!1,!1,!1],index:{image:0,flash:1,text:2,code:3},dateRange:[],rules:{name:[t],priority:[t,a],views:[t,a],enabled:[t],domain:[t],category:[t],displayCount:[t],clickCount:[t],adspaceId:[t],attr_image_link:[t],attr_flash_url:[t],attr_text_link:[t],attr_text_title:[t],code:[t]}}},methods:{getPath:function(t){var a=t;this.dataInfo.attr_image_url="423423",this.dataInfo.attr_image_url=a,console.log(a)},categoryChange:function(t){this.conteDisable=this.conteDisable.map(function(t){return!1}),this.conteDisable[this.index[t]]=!0},getAdTypes:function(){var t=this;l.a.post(this.$api.adSpaceList).then(function(a){"200"==a.code&&(t.adTypes=a.body,0!=t.id&&""!=t.dataInfo.adspaceId||a.body.length>0&&(t.dataInfo.adspaceId=a.body[0].id))})},cleanImageParm:function(){this.dataInfo.attr_image_height="",this.dataInfo.attr_image_width="",this.dataInfo.attr_image_url="",this.dataInfo.attr_image_link="",this.dataInfo.attr_image_title="",this.dataInfo.attr_image_target=""},cleanFlashParm:function(){this.dataInfo.attr_flash_url="",this.dataInfo.attr_flash_width="",this.dataInfo.attr_flash_height=""},cleanTextParm:function(){this.dataInfo.attr_text_title="",this.dataInfo.attr_text_target="",this.dataInfo.attr_text_font="",this.dataInfo.attr_text_color="",this.dataInfo.attr_text_link=""},cleanCodeParm:function(){this.dataInfo.code=""},getParam:function(){switch(this.dateRange.length>0&&(this.dataInfo.startTime=this.dateRange[0],this.dataInfo.endTime=this.dateRange[1]),this.dataInfo.category){case"image":this.cleanFlashParm(),this.cleanTextParm(),this.cleanCodeParm();break;case"flash":this.cleanImageParm(),this.cleanTextParm(),this.cleanCodeParm();break;case"text":this.cleanImageParm(),this.cleanFlashParm(),this.cleanCodeParm();break;case"code":this.cleanImageParm(),this.cleanFlashParm(),this.cleanTextParm()}},getDataInfo:function(t){var a=this;l.a.post(this.$api.adGet,{id:t}).then(function(e){a.loading=!1,a.dataInfo=e.body,0==t?(a.dataInfo.category="image",a.dataInfo.attr_text_target="_blank",a.dataInfo.attr_image_target="_blank"):(a.dateRange.push(e.body.startTime),a.dateRange.push(e.body.endTime)),a.getAdTypes(),a.categoryChange(a.dataInfo.category)}).catch(function(t){a.loading=!1})},update:function(){if("image"==this.dataInfo.category&&""==this.dataInfo.attr_image_url)return this.errorMessage("必须上传一张图片"),!1;this.getParam(),this.updateDataInfo(this.$api.adUpdate,this.dataInfo,"list")},add:function(t){if("image"==this.dataInfo.category&&""==this.dataInfo.attr_image_url)return this.errorMessage("必须上传一张图片"),!1;this.getParam(),this.saveDataInfo(t,this.$api.adSave,this.dataInfo,"list")}},created:function(){this.getDataInfo(this.id)}},d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"cms-body"},[e("cms-back"),t._v(" "),e("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:t.dataInfo,rules:t.rules,"label-width":"162px"}},[e("el-form-item",{staticClass:"flex-50 ",attrs:{label:"名称",prop:"name"}},[e("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.name,callback:function(a){t.$set(t.dataInfo,"name",a)},expression:"dataInfo.name"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"版位",prop:"adspaceId"}},[e("el-select",{staticClass:"cms-width",model:{value:t.dataInfo.adspaceId,callback:function(a){t.$set(t.dataInfo,"adspaceId",a)},expression:"dataInfo.adspaceId"}},t._l(t.adTypes,function(a,s){return e("el-option",{key:s,attrs:{label:t.adTypes[s].name,value:t.adTypes[s].id}})}),1)],1),t._v(" "),e("el-form-item",{staticClass:"flex-50 ",attrs:{label:"点击次数",prop:"clickCount"}},[e("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:t.dataInfo.clickCount,callback:function(a){t.$set(t.dataInfo,"clickCount",a)},expression:"dataInfo.clickCount"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-50 ",attrs:{label:"展现次数",prop:"displayCount"}},[e("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:t.dataInfo.displayCount,callback:function(a){t.$set(t.dataInfo,"displayCount",a)},expression:"dataInfo.displayCount"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-50 ",attrs:{label:"是否启用",prop:"enabled"}},[e("el-radio-group",{staticClass:"cms-width",model:{value:t.dataInfo.enabled,callback:function(a){t.$set(t.dataInfo,"enabled",a)},expression:"dataInfo.enabled"}},[e("el-radio",{attrs:{label:!0}},[t._v("是")]),t._v(" "),e("el-radio",{attrs:{label:!1}},[t._v("否")])],1)],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"时间范围"}},[e("el-date-picker",{staticClass:"cms-width",attrs:{editable:!1,type:"daterange",align:"right","value-format":"yyyy-MM-dd","unlink-panels":"","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间"},model:{value:t.dateRange,callback:function(a){t.dateRange=a},expression:"dateRange"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"类型",prop:"category"}},[e("el-radio-group",{staticClass:"cms-width",on:{change:t.categoryChange},model:{value:t.dataInfo.category,callback:function(a){t.$set(t.dataInfo,"category",a)},expression:"dataInfo.category"}},[e("el-radio",{attrs:{label:"image"}},[t._v("图片")]),t._v(" "),e("el-radio",{attrs:{label:"text"}},[t._v("文字")]),t._v(" "),e("el-radio",{attrs:{label:"code"}},[t._v("代码")])],1)],1),t._v(" "),t.conteDisable[0]?e("div",{staticClass:"content-div"},[e("el-form-item",{staticClass:"flex-50 ",attrs:{label:"链接地址",prop:"attr_image_link"}},[e("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.attr_image_link,callback:function(a){t.$set(t.dataInfo,"attr_image_link",a)},expression:"dataInfo.attr_image_link"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-50"},[e("el-input",{attrs:{type:"hidden"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-50 ",attrs:{label:"链接提示"}},[e("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.attr_image_title,callback:function(a){t.$set(t.dataInfo,"attr_image_title",a)},expression:"dataInfo.attr_image_title"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-50"},[e("el-input",{attrs:{type:"hidden"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-50 upload",attrs:{label:"图片地址"}},[e("cms-upload",{staticClass:"cms-width",attrs:{src:t.dataInfo.attr_image_url,isMark:!1},on:{change:t.getPath}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-50 upload"},[e("el-input",{attrs:{type:"hidden"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-50 ",attrs:{label:"图片尺寸"}},[e("el-input",{staticClass:"cms-col2",attrs:{type:"number"},model:{value:t.dataInfo.attr_image_width,callback:function(a){t.$set(t.dataInfo,"attr_image_width",a)},expression:"dataInfo.attr_image_width"}}),t._v(" ×\n              "),e("el-input",{staticClass:"cms-col2",attrs:{type:"number"},model:{value:t.dataInfo.attr_image_height,callback:function(a){t.$set(t.dataInfo,"attr_image_height",a)},expression:"dataInfo.attr_image_height"}}),t._v(" "),e("span",{staticClass:"gray"},[t._v("宽×高")])],1),t._v(" "),e("el-form-item",{staticClass:"flex-50"},[e("el-input",{attrs:{type:"hidden"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-50 ",attrs:{label:"链接目标",prop:"enabled"}},[e("el-radio-group",{staticClass:"cms-width",model:{value:t.dataInfo.attr_image_target,callback:function(a){t.$set(t.dataInfo,"attr_image_target",a)},expression:"dataInfo.attr_image_target"}},[e("el-radio",{attrs:{label:"_blank"}},[t._v("新窗口")]),t._v(" "),e("el-radio",{attrs:{label:"_self"}},[t._v("原窗口")])],1)],1),t._v(" "),e("el-form-item",{staticClass:"flex-50 "},[e("el-input",{attrs:{type:"hidden"}})],1)],1):t._e(),t._v(" "),t.conteDisable[2]?e("div",{staticClass:"content-div"},[e("el-form-item",{staticClass:"flex-50 ",attrs:{label:"文字内容",prop:"attr_text_title"}},[e("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.attr_text_title,callback:function(a){t.$set(t.dataInfo,"attr_text_title",a)},expression:"dataInfo.attr_text_title"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-50"},[e("el-input",{attrs:{type:"hidden"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-50 ",attrs:{label:"文字链接",prop:"attr_text_link"}},[e("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.attr_text_link,callback:function(a){t.$set(t.dataInfo,"attr_text_link",a)},expression:"dataInfo.attr_text_link"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-50"},[e("el-input",{attrs:{type:"hidden"}})],1),t._v(" "),e("el-form-item",{staticClass:" text-color-item flex-50 ",attrs:{label:"文字颜色"}},[e("el-input",{staticClass:"cms-width text-color",model:{value:t.dataInfo.attr_text_color,callback:function(a){t.$set(t.dataInfo,"attr_text_color",a)},expression:"dataInfo.attr_text_color"}}),t._v(" "),e("el-color-picker",{model:{value:t.dataInfo.attr_text_color,callback:function(a){t.$set(t.dataInfo,"attr_text_color",a)},expression:"dataInfo.attr_text_color"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-50"},[e("el-input",{attrs:{type:"hidden"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-50 ",attrs:{label:"文字大小"}},[e("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:t.dataInfo.attr_text_font,callback:function(a){t.$set(t.dataInfo,"attr_text_font",a)},expression:"dataInfo.attr_text_font"}}),t._v(" "),e("span",{staticClass:"gray"},[t._v("如12px")])],1),t._v(" "),e("el-form-item",{staticClass:"flex-50"},[e("el-input",{attrs:{type:"hidden"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-50 ",attrs:{label:"链接目标"}},[e("el-radio-group",{staticClass:"cms-width",model:{value:t.dataInfo.attr_text_target,callback:function(a){t.$set(t.dataInfo,"attr_text_target",a)},expression:"dataInfo.attr_text_target"}},[e("el-radio",{attrs:{label:"_blank"}},[t._v("新窗口")]),t._v(" "),e("el-radio",{attrs:{label:"_self"}},[t._v("原窗口")])],1)],1)],1):t._e(),t._v(" "),t.conteDisable[3]?e("div",{staticClass:"content-div"},[e("el-form-item",{staticClass:"flex-50 code-area",attrs:{label:"代码",prop:"code"}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.code,callback:function(a){t.$set(t.dataInfo,"code",a)},expression:"dataInfo.code"}})],1)],1):t._e(),t._v(" "),e("div",{staticClass:"form-footer"},[t.isType("save")?e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/ad/save",expression:"'/ad/save'"}],attrs:{type:"warning"},on:{click:function(a){t.add(!0)}}},[t._v("\n              提交并继续添加\n            ")]):t._e(),t._v(" "),t.isType("save")?e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/ad/save",expression:"'/ad/save'"}],attrs:{type:"primary"},on:{click:function(a){t.add(!1)}}},[t._v("\n              提交\n            ")]):t._e(),t._v(" "),t.isType("update")?e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/ad/update",expression:"'/ad/update'"}],attrs:{type:"primary"},on:{click:function(a){t.update()}}},[t._v("\n              修改\n            ")]):t._e(),t._v(" "),e("el-button",{attrs:{type:"info"},on:{click:t.$reset}},[t._v("重置")]),t._v(" "),t.isType("save")?e("span",{staticClass:"gray"},[t._v("选择“提交并继续添加”按钮会停留在添加页面；选择“提交”按钮后将跳转到对应的列表页")]):t._e()],1)],1)],1)},c=[],f={render:d,staticRenderFns:c},m=f,_=e("C7Lr"),p=s,u=_(r,m,!1,p,null,null);a.default=u.exports}});