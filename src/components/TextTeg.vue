<script setup>
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

data.forEach(e => {
	e.text = e.text.filter(e => e !== "");
});

const unionData = structuredClone(data);

unionData.forEach(e => {
	if (e.icon === 0) {
		const array = [];
		for (let i = 0; i < e.text.length; i++) {
			array.push(`${e.text[i]}`);
			console.log(e.text[i]);
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

console.log(unionData[0]);
</script>

<template>
	<v-card
		color="#adadad"
		class="text-tags_item"
		v-for="item in unionData"
		:key="item.text"
		@click="console.log(item)"
	>
		<div v-if="item.icon === 0" v-for="(elem, i) in item.text" :key="i">
			<p>{{ elem }}</p>
		</div>

		<div else v-for="(elem, i) in item.text" :key="i">
			<v-icon v-if="elem === item.text[1]" :icon="elem" />
			<p v-else>{{ elem }}</p>
		</div>
		
	</v-card>
</template>

<!-- <p class="left" :class="{ active: toggleClass }">{{ item.text }}</p>

		<div class="v-icon">
			<v-icon :icon="item.icon" /></div> -->

<style scoped lang="scss">
.text-tags_item {
	height: 30px;
	margin: 10px;

	display: flex;
	.left {
		display: block;
		// width: 100%;
		text-align: end;
		background-color: #adadad;
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
