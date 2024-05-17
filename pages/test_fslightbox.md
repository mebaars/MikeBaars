import FsLightbox from "fslightbox-vue/v3";
<template>
<div>
	<button @click="toggler = !toggler">
		Open the lightbox.
	</button>

	<FsLightbox
		:toggler="toggler"
		:sources="[
			"/Images/Example.jpg",
			"https://i.imgur.com/fsyrScY.jpg",
			"https://www.youtube.com/watch?v=3nQNiWdeH2Q",
			"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
		]"
	/>
</div>
</template>

<script>
import FsLightbox from "fslightbox-vue";

export default {
	components: { FsLightbox },
	data() {
		return {
			toggler: false
		}
	}
};
</script>
