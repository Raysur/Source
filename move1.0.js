function getStyle(obj, attr) {
	return getComputedStyle(obj, false)[attr];
}

function startMove(obj, attr, target, fnEnd) {
	clearInterval(obj.timer)

	obj.timer = setInterval(function() {
		var cur = 0;

		if (attr == "opacity") {
			cur = Math.round(parseFloat(getStyle(obj, attr)) * 100)
		} else {
			cur = parseInt(getStyle(obj, attr));
		}

		var speed = (target - cur) / 6;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

		if (cur != target) {
			if (attr == "opacity") {
				obj.style.opacity = (cur + speed) / 100;
			} else {
				obj.style[attr] = cur + speed + "px";
			}
		} else {
			clearInterval(obj.timer)
			if (fnEnd) fnEnd()
		}
	}, 30)
}