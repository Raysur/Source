function startMove(obj, json, fnEnd) {
	clearInterval(obj.timer)
	obj.timer = setInterval(function() {

		var bStop = true

		for (attr in json) {
			var cur = 0

			function getStyle(obj, attr) {
				return getComputedStyle(obj, false)[attr];
			}
			
			if (attr == 'opacity') {
				cur = Math.round(parseFloat(getStyle(obj, attr)) * 100)
			} else {
				cur = parseInt(getStyle(obj, attr))
			}

			var speed = (json[attr] - cur) / 6
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)

			if (cur != json[attr]) {
				bStop = false
			}

			if (attr == 'opacity') {
				obj.style.opacity = (cur + speed) / 100
			} else {
				obj.style[attr] = cur + speed + 'px'
			}
		}

		if (bStop) {
			clearInterval(obj.timer)

			if (fnEnd) {
				fnEnd()
			}
		}

	}, 30)
}