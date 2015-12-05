function FindProxyForURL(url, host) {
	if(host.indexOf(".google")!==-1) return "PROXY 192.168.1.100:8091";
	a=["facebook","twitter","youtube"];
	for(i=0;i<a.length;i++){
		if(host.indexOf(a[i])!==-1){
			return "PROXY 192.168.1.100:8091";
		}
	}
	return "DIRECT";
}