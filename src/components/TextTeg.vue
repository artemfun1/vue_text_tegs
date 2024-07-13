<script setup>
import { computed } from "vue";

const props = defineProps({
	arr: Array,
	toggleClass: Boolean,
});

const data = [];
props.arr.forEach(e => {
	data.push({
		text: e.text.trim().split(" "),
		icon: e.icon ? e.icon : 0,
	});
});

data.forEach(e=>{
	e.text= e.text.filter(e=>e!=="")
})


console.log(data);

const finalData = structuredClone(data);

finalData.forEach(e => {
		if(e.icon ===0){
			const array = [];
			for (let i = 0; i < e.text.length ; i++){
				array.push(`<p>${e.text[i]} </p>`);
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
				array.push(`<p>${e.text[i - count]} </p>`);
				isIcon = !isIcon;
				count += 1;
			} else if (!isIcon) {
				array.push(`<v-icon :icon='${e.icon}'/>`);
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

console.log(finalData);
</script>

<template>
	<div class="text-tags_item" v-for="item in arr" :key="item.text">
		<p class="left" :class="{ active: toggleClass }">{{ item.text }}</p>

		<div class="v-icon"><v-icon :icon="item.icon" /></div>
	</div>
</template>

<style scoped lang="scss">
.text-tags_item {
	.left {
		display: block;
		width: 100%;
		text-align: end;
		background-color: #be7676;
	}
	.active {
		display: flex;
		width: 100%;
		text-align: justify;
		background-color: #529a8c;
	}
	.v-icon {
	}
}
</style>
