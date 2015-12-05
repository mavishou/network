function FindProxyForURL(url, host) {
	if (host){return "PROXY 192.168.1.100:8091"};
	return "DIRECT";
}