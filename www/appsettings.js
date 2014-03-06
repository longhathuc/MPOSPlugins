var exec = require ("cordova/exec");
//AppSettings plugin
function AppSettings(){}

AppSettings.prototype.getAppSettings = function(){
	if (cordova.available)
		return cordova.exec(getAppSettingsSucc, getAppSettingsFail, "AppSettings", "getAppSettings",{});
	return 1;
}
function getAppSettingsSucc(dic){
	for (var key in defaultAppSettings) {
		if (typeof dic[key] !== "undefined"){
			defaultAppSettings[key] = dic[key];
		}
	}
	putAppSettingsToStorage();
}
function getAppSettingsFail(msg){
	_alert(msg);
	_log(msg);
}

AppSettings.prototype.setAppSettings = function(){
	return cordova.exec("AppSettings.setAppSettings",defaultAppSettings);
}
function setAppSettingsResult(msg){
	_alert(msg);
	_log(msg);
}
