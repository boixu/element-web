(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1377:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n(17),s=n.n(a),i=n(87),o=n.n(i),c=n(91),r=n(88),l=n(94),u=n(95),d=n(100),h=n(109);class p extends o.a.PureComponent{constructor(){super(...arguments),s()(this,"onGoToSettingsClick",()=>{this.props.onFinished(),c.a.fire(u.a.ViewUserSettings)}),s()(this,"onSetupClick",()=>{this.props.onFinished(),l.a.createTrackedDialogAsync("Key Backup","Key Backup",n.e(7).then(n.bind(null,784)),null,null,!1,!0)})}render(){const e=o.a.createElement("span",{className:"mx_KeyBackupFailedDialog_title"},Object(r.a)("Recovery Method Removed"));return o.a.createElement(d.a,{className:"mx_KeyBackupFailedDialog",onFinished:this.props.onFinished,title:e},o.a.createElement("div",null,o.a.createElement("p",null,Object(r.a)("This session has detected that your Security Phrase and key for Secure Messages have been removed.")),o.a.createElement("p",null,Object(r.a)("If you did this accidentally, you can setup Secure Messages on this session which will re-encrypt this session's message history with a new recovery method.")),o.a.createElement("p",{className:"warning"},Object(r.a)("If you didn't remove the recovery method, an attacker may be trying to access your account. Change your account password and set a new recovery method immediately in Settings.")),o.a.createElement(h.a,{primaryButton:Object(r.a)("Set up Secure Messages"),onPrimaryButtonClick:this.onSetupClick,cancelButton:Object(r.a)("Go to Settings"),onCancel:this.onGoToSettingsClick})))}}}}]);
//# sourceMappingURL=34.js.map