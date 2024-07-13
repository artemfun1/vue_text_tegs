<script setup>
import { ref } from "vue";

defineProps({
	arr: Array,
});

const count = ref(0);
</script>

<template>
  <v-icon icon="mdi-home" />

  
		<v-list lines="one">
			<v-list-item
				v-for="item in arr"
				:key="item.text"
				:title="item.icon"
        :subtitle="item.text"
			>
      <!-- <v-icon icon="mdi-account" /> -->
    </v-list-item>
		</v-list>

</template>

<style scoped lang="scss">
.text-tags {
	width: 100dvw;
	height: 100dvh;
	background-color: #5ad0d2;

	.text-tags_item {
		display: flex;
		gap: 10px;
		background: #9d9d9d;
	}
}
</style>
