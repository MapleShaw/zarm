webpackJsonp([17],{270:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(a(291),a(292)),c=(a(293),a(294)),l=(a(338),a(339)),r=a(15),i=a.n(r),s=a(16),u=a.n(s),d=a(17),o=a.n(d),h=a(18),m=a.n(h),f=a(19),p=a.n(f),k=a(0),v=a.n(k),E=a(301),C=a(303),b=a(302),_=function(e){function t(e){u()(this,t);var a=m()(this,(t.__proto__||i()(t)).call(this,e));return a.toggle=function(e){a.setState({value:e})},a.state={value:!1},a}return p()(t,e),o()(t,[{key:"render",value:function(){var e=this;return v.a.createElement(E.a,{className:"switch-page"},v.a.createElement(C.a,{title:"开关 Switch"}),v.a.createElement("main",null,v.a.createElement(n.a,null,v.a.createElement(n.a.Header,{title:"基本"}),v.a.createElement(n.a.Body,null,v.a.createElement(c.a,{description:v.a.createElement(l.a,{value:this.state.value,onChange:function(t){e.setState({value:t})}})},"普通"),v.a.createElement(c.a,{description:v.a.createElement(l.a,{defaultChecked:!0})},"默认开"),v.a.createElement(c.a,{description:v.a.createElement(l.a,{disabled:!0})},"禁用的开关（默认关）"),v.a.createElement(c.a,{description:v.a.createElement(l.a,{defaultChecked:!0,disabled:!0})},"禁用的开关（默认开）")))),v.a.createElement(b.a,null))}}]),t}(k.Component);t.default=_},338:function(e,t,a){"use strict";var n=(a(34),a(417));a.n(n)},339:function(e,t,a){"use strict";var n=a(76),c=a.n(n),l=a(15),r=a.n(l),i=a(16),s=a.n(i),u=a(17),d=a.n(u),o=a(18),h=a.n(o),m=a(19),f=a.n(m),p=a(0),k=a.n(p),v=a(46),E=a.n(v),C=function(e,t){return"checked"in e&&e.checked?e.checked:"defaultChecked"in e&&e.defaultChecked?e.defaultChecked:t},b=function(e){function t(e){s()(this,t);var a=h()(this,(t.__proto__||r()(t)).call(this,e));return a.onValueChange=function(){var e=a.props,t=e.disabled,n=e.onChange;if(!t){var c=!a.state.checked;a.setState({checked:c}),"function"==typeof n&&n(c)}},a.state={checked:C(e,!1)},a}return f()(t,e),d()(t,[{key:"componentWillReceiveProps",value:function(e){"checked"in e&&this.setState({checked:!!e.checked})}},{key:"render",value:function(){var e,t=this.props,a=t.prefixCls,n=t.className,l=t.theme,r=t.disabled,i=this.state.checked,s=E()(""+a,n,(e={},c()(e,"theme-"+l,!!l),c()(e,"checked",i),c()(e,"disabled",r),e));return k.a.createElement("span",{className:s},k.a.createElement("input",{type:"checkbox",className:a+"-input",disabled:r,checked:i,onChange:this.onValueChange}))}}]),t}(p.PureComponent);t.a=b,b.defaultProps={prefixCls:"za-switch",theme:"primary",disabled:!1}},417:function(e,t){}});