<template>
	<h1>socket.io</h1>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { start } from "@/utils/usesocket";
export default defineComponent({
	setup() {
		start();
	},
});
</script>
