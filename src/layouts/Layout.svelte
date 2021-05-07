<script lang="ts">

	import Navbar from "../components/reusable/Navbar.svelte";
	import Footer from "../components/reusable/Footer.svelte";

</script>

<main>
	<div class="navbar-area">
		<Navbar />
	</div>


	<div class="content-area">

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
		padding-bottom: 58px;
		min-height: calc(100vh - 60px);
	}

	.footer-area {
        left: 0;
        bottom: 0px;
        width: 100%;
        position: absolute;
    }

</style>