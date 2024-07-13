<script setup>
import { ref } from "vue";
import TextTeg from "./components/TextTeg.vue";

const arr = ref([
	{
		text: "текст1",
	},
	{
		text: "текст2",
		icon: "название иконки",
	},
  {
		text: "текст3",
		icon: "название иконки",
	},
  {
		text: "текст4",
		
	},
]);

const number = ref(4)

</script>

<template>
	<TextTeg :arr='arr' />
</template>

<style lang="scss">
body{
  width: 100%;
  height: 100%;
}
</style>
