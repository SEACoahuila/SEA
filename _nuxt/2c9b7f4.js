(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{647:function(e,t,n){var content=n(648);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("52d9b218",content,!0,{sourceMap:!1})},648:function(e,t,n){var o=n(17)((function(i){return i[1]}));o.push([e.i,".v-dialog{border-radius:4px;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);margin:24px;outline:none;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{animation-duration:.15s;animation-name:animate-dialog;animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;height:100%;left:0;margin:0;overflow-y:auto;position:fixed;top:0}.v-dialog--fullscreen>.v-card{margin:0!important;min-height:100%;min-width:100%;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),o.locals={},e.exports=o},674:function(e,t,n){"use strict";var o=n(97),r=n(2),c=(n(9),n(8),n(188),n(54),n(23),n(13),n(14),n(7),n(4),n(71),n(81),n(10),n(61),n(647),n(707)),l=n(644),d=n(241),v=n(649),h=n(246),f=n(650),m=n(651),S=n(242),x=n(6),O=n(15),y=n(0);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=Object(x.a)(d.a,v.a,h.a,f.a,m.a,l.a);t.a=A.extend({name:"v-dialog",directives:{ClickOutside:S.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){return Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)({},"v-dialog ".concat(this.contentClass).trim(),!0),"v-dialog--active",this.isActive),"v-dialog--persistent",this.persistent),"v-dialog--fullscreen",this.fullscreen),"v-dialog--scrollable",this.scrollable),"v-dialog--animated",this.animate)},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(t=this.previousActiveElement)||void 0===t||t.focus())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(O.e)("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):h.a.options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$nextTick((function(){var t,n;(null===(t=e.$refs.dialog)||void 0===t?void 0:t.contains(document.activeElement))||(e.previousActiveElement=document.activeElement,null===(n=e.$refs.dialog)||void 0===n||n.focus()),e.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===y.y.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&this.$refs.dialog&&![document,this.$refs.dialog].includes(t)&&!this.$refs.dialog.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var n=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),r=Object(o.a)(n).find((function(e){return!e.hasAttribute("disabled")&&!e.matches('[tabindex="-1"]')}));r&&r.focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(c.a,{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:_({role:"dialog","aria-modal":e.hideOverlay?void 0:"true"},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=_(_({},data.style),{},{maxWidth:Object(y.h)(this.maxWidth),width:Object(y.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},697:function(e,t,n){"use strict";n(244);var o=n(245);t.a=Object(o.a)("layout")},717:function(e,t,n){var content=n(847);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("7ae2a70f",content,!0,{sourceMap:!1})},846:function(e,t,n){"use strict";n(717)},847:function(e,t,n){var o=n(17)((function(i){return i[1]}));o.push([e.i,".min-height-vh[data-v-e0bb85d4]{min-height:70vh}",""]),o.locals={},e.exports=o},892:function(e,t,n){"use strict";n.r(t);var o=n(236),r=n(227),c=n(106),l=n(694),d=n(616),v=n(614),h=n(875),f=n(674),m=n(598),S=n(223),x=n(697),O=n(615),y=n(612),C=n(665),_=(n(29),n(239),n(9),n(8),n(13),n(14),n(7),n(10),n(20)),A=n(2),R=(n(72),n(54),n(4),n(71),n(61),n(129)),w=n.n(R),k=n(99);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){Object(A.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N={name:"Vistas",data:function(){return{page:{color:"blacl",title:"SEA USER",icon:"mdi-cogs"},menuFechaResolucion:!1,nuevaInstitucion:!1,nuevoSancionado:!1,verSancionados:!1,verContratos:!1,verPartSancionado:!1,hidden:!0,valid:!1,loading:!1,dialog:!1,picker:null,picker1:null,picker2:null,menu:!1,menu1:!1,menu2:!1,menu3:!1,monedasMulta:["MXN","USD"],userGeneral:!1,userSancionados:!1,userContratos:!1,AllUsers:[],allSancionados:[],allParticularesSancionados:[],search:"",search2:"",permitidosSancion:["ADMIN","USER-INSTITUCION","USER-SANCION","USER-SANCIONES-CONCENTRADORA","USER-INSTITUCION-CONCENTRADORA"],permitidosContratos:["ADMIN","USER-INSTITUCION","USER-CONTRATOS","USER-CONTRATOS-CONCENTRADORA","USER-INSTITUCION-CONCENTRADORA"],nombresColumnas:[{text:"Nombre",value:"DatosServidor.Nombres",sortable:!0,align:"start"},{text:"Primer Apellido",value:"DatosServidor.PrimerApellido"},{text:"Segundo Apellido",value:"DatosServidor.SegundoApellido"},{text:"Dependencia",value:"Dependencium.Dependencia"},{text:"Puesto",value:"DatosServidor.Puesto.Puesto"},{text:"Responsabilidad",value:"NivelesResponsabilidad"},{text:"Tipo de contrataciónes",value:"TipoProcedimiento"},{text:"Ejercicio Fiscal",value:"EjercicioFiscal"},{text:"Ramo",value:"Ramo.Ramo"}],patSancionadosColumnas:[{text:"Nombre / Razón Social",value:"Particular.NombreRazonSocial"},{text:"Objeto Social",value:"Particular.ObjetoSocial"},{text:"Expediente",value:"Expediente"},{text:"Falta",value:"Acto"},{text:"Autoridad Sancionadora",value:"AutoridadSancionadora"},{text:"Sentido de la resolución",value:"SentidoResolucion"},{text:"Resolución",value:"URLResolucion"},{text:"Teléfono",value:"Particular.Telefono"}],sancionadosColumnas:[{text:"Nombre",value:"DatosServidor.Nombres",sortable:!0,align:"start"},{text:"Primer Apellido",value:"DatosServidor.PrimerApellido"},{text:"Segundo Apellido",value:"DatosServidor.SegundoApellido"},{text:"Dependencia",value:"Dependencia.Dependencia"},{text:"Expediente",value:"Expediente"},{text:"Falta",value:"Falta.TipoFalta"},{text:"Autoridad Sancionadora",value:"AutoridadSancionadora"},{text:"Observaciones",value:"Observaciones"}]}},computed:j(j({},Object(k.c)(["usuario","URL"])),{},{hasM:function(){var e;return null===(e=this.IdTipoSancion)||void 0===e?void 0:e.some((function(e){return"M"===e}))},hasI:function(){var e;return null===(e=this.IdTipoSancion)||void 0===e?void 0:e.some((function(e){return"I"===e}))}}),watch:{menu:function(e){var t=this;e&&setTimeout((function(){return t.$refs.picker.activePicker="YEAR"}))}},methods:j(j({},Object(k.b)(["guardarUsuario","cerrarSesion","noAvisoPrivacidad"])),{},{save:function(e){this.$refs.menu.save(e)},userExist:function(){0==this.$store.state.usuario.data.Role?this.$router.push("/admin"):(this.traerServidores(),this.traerSancionados(),this.traerParticularesSancionados(),"ADMIN"===this.usuario.data.Role||"USER-INSTITUCION"===this.usuario.data.Role||"USER-INSTITUCION-CONCENTRADORA"===this.usuario.data.Role?this.userGeneral=!0:"USER-SANCIONES"===this.usuario.data.Role||"USER-SANCIONES-CONCENTRADORA"===this.usuario.data.Role?this.userSancionados=!0:"USER-CONTRATOS"!==this.usuario.data.Role&&"USER-CONTRATOS-CONCENTRADORA"!==this.usuario.data.Role||(this.userContratos=!0))},traerServidores:function(){var e=this;return Object(_.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e,o={headers:{"x-token":"".concat(e.usuario.token)}},!n.permitidosContratos.includes(e.usuario.data.Role)){t.next=5;break}return t.next=5,w.a.get("".concat(e.$store.state.URL,"/api/servidores/institucion"),o).then((function(t){e.AllUsers=t.data.ServidoresContrataciones,console.log(e.AllUsers)})).catch((function(e){n.$swal({title:"Error!",text:e.response.data.msg,icon:"error"})}));case 5:case"end":return t.stop()}}),t)})))()},traerSancionados:function(){var e=this;return Object(_.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e,o={headers:{"x-token":"".concat(e.usuario.token)}},!n.permitidosSancion.includes(e.usuario.data.Role)){t.next=5;break}return t.next=5,w.a.get("".concat(e.$store.state.URL,"/api/sanciones/misSancionados"),o).then((function(t){e.allSancionados=t.data.Sancionados})).catch((function(e){n.$swal({title:"Error!",text:e.response.data.msg,icon:"error"})}));case 5:case"end":return t.stop()}}),t)})))()},traerParticularesSancionados:function(){var e=this;return Object(_.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e,o={headers:{"x-token":"".concat(e.usuario.token)}},!n.permitidosSancion.includes(e.usuario.data.Role)){t.next=5;break}return t.next=5,w.a.get("".concat(e.$store.state.URL,"/api/sanciones/misParticularesSancionados"),o).then((function(t){e.allParticularesSancionados=t.data.SancionadosParticulares})).catch((function(e){n.$swal({title:"Error!",text:e.response.data.msg,icon:"error"})}));case 5:case"end":return t.stop()}}),t)})))()},dialogtrue:function(){this.$store.state.avisoPrivacidad&&(this.dialog=!0)}}),beforeMount:function(){},mounted:function(){this.userExist(),this.dialogtrue()}},P=(n(846),n(69)),component=Object(P.a)(N,(function(){var e=this,t=e._self._c;return t("div",[t(v.a,{staticClass:"flex-grow-1 min-height-vh"},[t(O.a,{attrs:{justify:"center"}},[t(d.a,{attrs:{cols:"12"}},[t("div",{staticClass:"text-h2",attrs:{align:"center"}},[e._v(e._s(e.$store.state.usuario.data.siglasInstitucion))]),e._v(" "),t("h3",{staticClass:"mb-5",attrs:{align:"center"}},[e._v("Datos")]),e._v(" "),t(m.a)],1),e._v(" "),t(d.a,{staticClass:"mb-10",attrs:{cols:"12"}},[t(x.a,{},[t(O.a,{attrs:{justify:"center"}},[e.userContratos||e.userGeneral?t(d.a,{attrs:{cols:"12",xl:"4",lg:"4"}},[t(o.a,{attrs:{block:""},on:{click:function(t){e.verPartSancionado=!1,e.verSancionados=!1,e.verContratos=!0}}},[t(S.a,{attrs:{color:"info"}},[e._v("mdi mdi-eye-settings")]),e._v("\n\n                                Ver Servidores en Contratos "),t("p",{staticStyle:{color:"green"}},[e._v(e._s(e.AllUsers.length))])],1)],1):e._e(),e._v(" "),e.userSancionados||e.userGeneral?t(d.a,{attrs:{cols:"12",xl:"4",lg:"4"}},[t(o.a,{attrs:{block:""},on:{click:function(t){e.verPartSancionado=!1,e.verContratos=!1,e.verSancionados=!0}}},[t(S.a,{attrs:{color:"warning"}},[e._v("mdi mdi-eye-settings")]),e._v("\n\n                                Servidores Sancionados "),t("p",{staticStyle:{color:"red"}},[e._v(e._s(e.allSancionados.length))])],1)],1):e._e(),e._v(" "),e.userSancionados||e.userGeneral?t(d.a,{attrs:{cols:"12",xl:"4",lg:"4"}},[t(o.a,{attrs:{block:""},on:{click:function(t){e.verPartSancionado=!0,e.verContratos=!1,e.verSancionados=!1}}},[t(S.a,{attrs:{color:"danger"}},[e._v("mdi mdi-eye-settings")]),e._v("\n\n                                Particulares Sancionados "),t("p",{staticStyle:{color:"red"}},[e._v(e._s(e.allParticularesSancionados.length))])],1)],1):e._e()],1)],1)],1),e._v(" "),e.verSancionados?t(d.a,{attrs:{cols:"12"}},[[t(c.d,[t(C.a,{attrs:{"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),t(h.a,{staticClass:"elevation-1",attrs:{dense:"",search:e.search,headers:e.sancionadosColumnas,items:e.allSancionados,"item-key":"IdServidorPubSancionado"}})]],2):e._e(),e._v(" "),e.verPartSancionado?t(d.a,{attrs:{cols:"12"}},[[t(c.d,[t(C.a,{attrs:{"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),t(h.a,{staticClass:"elevation-1",attrs:{dense:"",search:e.search,headers:e.patSancionadosColumnas,items:e.allParticularesSancionados,"item-key":"IdServidorPubSancionado"},scopedSlots:e._u([{key:"item.URLResolucion",fn:function(n){var o=n.item;return[t("a",{attrs:{href:o.URLResolucion}},[t(l.a,[e._v("\n                     Ver Resolución\n                    ")])],1)]}}],null,!1,3781474086)})]],2):e._e(),e._v(" "),e.verContratos?t(d.a,{attrs:{cols:"12"}},[[t(c.d,[t(C.a,{attrs:{"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":""},model:{value:e.search2,callback:function(t){e.search2=t},expression:"search2"}})],1),e._v(" "),t(h.a,{staticClass:"elevation-1",attrs:{dense:"",search:e.search2,headers:e.nombresColumnas,items:e.AllUsers,"item-key":"IdServidorEnContrataciones"}})]],2):e._e()],1)],1),e._v(" "),e.dialog?t(f.a,{attrs:{"max-width":"90%"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(r.a,[t(c.d,{staticClass:"text-h5"},[e._v("\n            AVISO DE PRIVACIDAD SIMPLIFICADO\n        ")]),e._v(" "),t(c.c,[e._v("\n            La Secretaría Ejecutiva del Sistema Anticorrupción del Estado de Coahuila de Zaragoza, utilizará los datos personales aquí recabados para los trámites correspondientes del Organismo como lo son: solicitudes de información, procedimientos de recursos de revisión, contratos de prestación de servicios, servicios de proveedores, eventos de capacitación realizados por las Direcciones y Unidades Administrativas. Su información no será compartida con ninguna entidad, institución u órgano. En caso de que por alguna razón se tuviese que compartir algún dato personal, se avisará al titular de estos. Usted cuenta con la posibilidad de ejercer los derechos de Acceso, Rectificación, Cancelación y Oposición, así como el de portabilidad de los datos, ante la Dirección de Asuntos Jurídicos y Transparencia de este Secretaría Ejecutiva, ubicada en Blvd. Luis Donaldo Colosio # 703, Piso 3, Fracc. Valle Real, en Saltillo, Coahuila, una vez que haya otorgado su consentimiento para el tratamiento de estos, y se encuentren en poder de esta dependencia pública.\n        ")]),e._v(" "),t(c.a,[t(y.a),e._v(" "),t(o.a,{attrs:{color:"amber darken-2",text:"",to:"../aviso-de-privacidad/"},on:{click:function(t){e.dialog=!1}}},[e._v("\n            Ver aviso integral\n          ")]),e._v(" "),t(o.a,{attrs:{color:"",text:""},on:{click:function(t){e.noAvisoPrivacidad(!1),e.dialog=!1}}},[e._v("\n            Cerrar\n          ")])],1)],1)],1):e._e()],1)}),[],!1,null,"e0bb85d4",null);t.default=component.exports}}]);