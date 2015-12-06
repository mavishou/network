function FindProxyForURL(url, host) {
	if (host){return "PROXY 127.0.0.1:8091"};
	return "DIRECT";
}
