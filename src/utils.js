export function getRedirectPath({type, integrity}){
	// 根据用户信息 返回跳转地址
	let url = (type==='boss')?'/boss': '/hunter'
	if (!integrity) {
		url += 'info'
	}
	return url
}