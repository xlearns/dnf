<template>
	<div :id="containerId" v-if="downloaded" />
	<div class="placeholder" v-else>Downloading ...</div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, nextTick } from "vue";
export default defineComponent({
	setup(props, { emit }) {
		const state = reactive({
			containerId: "game-container",
			downloaded: false,
			gameInstance: null,
		});
		onMounted(() => {
			const _game: any = import("@/game/game");
			_game.then((game: any) => {
				state.downloaded = true;
				nextTick(() => {
					state.gameInstance = game.launch(state.containerId);
				});
			});
		});
		return {
			...toRefs(state),
		};
	},
});
</script>
