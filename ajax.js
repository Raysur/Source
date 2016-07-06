function ajax(url, fnSucc, fnFaild) {
	//1.创建Ajax对象
	var oAjax = new XMLHttpRequest()

	//2.连接服务器
	oAjax.open('GET', url, true)

	//3.发送
	oAjax.send()

	//4.接收
	oAjax.onreadystatechange = function() {
		if (oAjax.readyState == 4) { 	//读取完成
			if (oAjax.status == 200) {  //成功
				//alert("成功)
				fnSucc(oAjax.responseText)
			} else {
				//alert("失败："+oAjax.status) 	/*常为404错误*/
				if (fnFaild) {
					fnFaild(oAjax.status)
				}
			}
		}
	}
}