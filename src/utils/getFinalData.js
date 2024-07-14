import { computed } from 'vue'

export default function getFinalData(arr){

  const finalData = computed(() => {

	const data = [];
	arr.forEach(e => {
		data.push({
			text: e.text.trim().split(" "),
			icon: e.icon ? e.icon : 0,
		});
	});
	data.forEach(e => {
		e.text = e.text.filter(e => e !== "");
	});

	const unionData = structuredClone(data);
	unionData.forEach(e => {
		if (e.icon === 0) {
			const array = [];
			for (let i = 0; i < e.text.length; i++) {
				array.push(`${e.text[i]}`);
			}
			e.text = array;
		}

		if (e.icon !== 0) {
			const num = e.text.length - 1;

			const array = [];
			let isIcon = true;
			let count = 0;
			for (let i = 0; i < e.text.length + num; i++) {
				if (isIcon) {
					array.push(`${e.text[i - count]}`);
					isIcon = !isIcon;
					count += 1;
				} else if (!isIcon) {
					array.push(e.icon);
					isIcon = !isIcon;
				}
			}
			if (array.length === 2) {
				e.text = array;
			} else {
				if (array[array.length - 1] === e.icon) {
					array.pop();
				}
				e.text = array;
			}
		}
	});

	return unionData;
})

return finalData
}


 