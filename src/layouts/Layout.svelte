<script lang="ts">

	import Navbar from "../components/reusable/Navbar.svelte";
	import Content from "../components/reusable/Content.svelte";
	import Footer from "../components/reusable/Footer.svelte";

</script>

<main>
	<div class="navbar-area">
		<Navbar />
	</div>

	<div class="content-area">
		<Content />
	</div>

	<div class="footer-area">
		<Footer />
	</div>

</main>

<style>
	main {
		height: 100vh;
	}

	.content-area{
		margin-bottom: 0;
		padding: 3rem 3.625rem;
		min-height: calc(100vh - 60px);
	}

	.footer-area {
        left: 0;
        bottom: 0;
        width: 100%;
        position: absolute;
    }

</style>