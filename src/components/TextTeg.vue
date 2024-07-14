<script setup>
import clsx from "clsx";
import { nextTick, onMounted, onUpdated, ref } from "vue";
import getFinalData from "../utils/getFinalData";

const props = defineProps({
	arr: Array,
	toggleClass: Boolean,
});

const finalData = getFinalData(props.arr);

const render = ref(true);
const onceTime = ref(false);

function forceRender() {
	render.value = false;
	console.log(1);
	nextTick(() => {
		render.value = true;
	});
	onceTime.value = true;
}

function funcOne() {
	setTimeout(() => {
		if (onceTime.value === false) {
			forceRender();
			setTimeout(() => {
				onceTime.value = false;
			}, 600);
		}
	}, 1000);
}

const elemArray = [];

const vEscape = el => {
	elemArray.push(el);

	window.addEventListener("resize", () => {
		funcOne();
		if (
			el.getBoundingClientRect().left < 0 ||
			document.body.getBoundingClientRect().width -
				el.getBoundingClientRect().right <
				0
		) {
			el.hidden = true;
		}
	});

	window.addEventListener("load", () => {
		if (
			el.getBoundingClientRect().left < 0 ||
			document.body.getBoundingClientRect().width -
				el.getBoundingClientRect().right <
				0
		) {
			el.hidden = true;
		}
	});
};

onMounted(() => {
	elemArray.forEach(el => {
		if (
			el.getBoundingClientRect().left < 0 ||
			document.body.getBoundingClientRect().width -
				el.getBoundingClientRect().right <
				0
		) {
			el.hidden = true;
		}
	});
});
onUpdated(() => {
	elemArray.forEach(el => {
		if (
			el.getBoundingClientRect().left < 0 ||
			document.body.getBoundingClientRect().width -
				el.getBoundingClientRect().right <
				0
		) {
			el.hidden = true;
		}
	});
});
</script>

<template>
	<div v-if="render">
		<v-card
			color="#adadad"
			:class="clsx('left', 'text-tags_item', toggleClass && 'between')"
			v-for="item in finalData"
			:key="item.text"
		>
			<div
				v-escape
				v-if="item.icon === 0"
				v-for="(elem, i) in item.text"
				:key="i"
			>
				<p>{{ elem }}</p>
			</div>

			<div v-escape v-else v-for="(elem, i) in item.text" :key="i + elem">
				<v-icon v-if="elem === item.text[1]" :icon="elem" />
				<p v-else>{{ elem }}</p>
			</div>
		</v-card>
	</div>
</template>

<style scoped lang="scss">
.text-tags_item {
	height: 30px;
	margin-top: 10px;
	display: flex;

	.hide {
		display: none;
	}

	.noHide {
		display: block;
	}
}
.left {
	justify-content: end;
}
.between {
	justify-content: space-between;
}
@media (max-width: 500px) {
	.elem-block {
	}
}
</style>
