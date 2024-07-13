<script setup>
import { ref } from "vue";
import TextTeg from "./components/TextTeg.vue";

const arr = ref([
	{
		text: "текст1 текст1 текст1",
	},
	{
		text: "текст2 текст2 текст2  текст2 текст2 ",
		icon: "mdi-home",
	},
	{
		text: "текст3 текст3 текст3",
		icon: "mdi-account",
	},
	// {
	// 	text: "текст4 текст4 текст4",
	// },
]);




const position = ref(false);

function changePosition() {
	console.log(position.value);
	position.value = !position.value;
}
</script>

<template>
	<TextTeg :arr="arr" :toggleClass="position" />

	<div class="btn">
		<v-btn 
		variant="tonal" @click="changePosition">Изменить</v-btn></div>
</template>

<style lang="scss">
body {
	width: 100%;
	height: 100%;
}
.btn {
	margin-top: 10px;
}
</style>
