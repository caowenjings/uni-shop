const base_url="http://front-api-netsec30.crudist.jp/";

function request(url, method, data, header = {}) {
	
	let mytoken = uni.getStorageSync('token');
	if (mytoken != null && mytoken != '') {
		header = { 'token': mytoken }
	}
	return new Promise((resolve, reject) => {
		wx.request({
			url: base_url + url,
			method: method,
			data: data,
			header: {
			    Accept: 'application/json',
			            'Content-Type': 'application/json',
			            'X-Company-Id': 'wpnBjjnm',
			            'X-DU': '380b9e2b-50a3-4e27-8d14-9ed3856c207d',
			            'X-SV': '2525',
			            'X-PF':'iOS',
			            'X-UA': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
			            'X-MD':'iPhone13.2.3',
			            'X-OV': '13.2.3',
			},
			success: function (res) {
				resolve(res.data)
			},
			fail: function (error) {
				reject(false);
			},
		})
	});
}
export function get(url, data) {
	return request(url, 'GET', data)
}
export function put(url, data) {
	return request(url, 'PUT', data)
}
export function del(url, data) {
	return request(url, 'DELETE', data)
}
export function post(url, data) {
	return request(url, 'POST', data)
}