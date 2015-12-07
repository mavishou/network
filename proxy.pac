function FindProxyForURL(url, host) {
	if(host.indexOf(".google")!==-1) return "PROXY 127.0.0.1:8091";
	a=["facebook","twitter","youtube","wikipedia",".gmail"];
	for(i=0;i<a.length;i++){
		if(host.indexOf(a[i])!==-1){
			return "PROXY 127.0.0.1:8091";
		}
	}
	return "DIRECT";
}
