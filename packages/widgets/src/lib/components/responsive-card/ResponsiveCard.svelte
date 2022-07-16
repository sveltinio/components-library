<div class="container">
	<div class="text">
		<h2>10 CSS Tricks to Blow your Mind</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptate. Odit deserunt
			suscipit dolorem adipisci iste.
		</p>
		<a href="#">Read the article</a>
	</div>
	<img
		class="sm:order-none sm:ml-4 sm:mt-0"
		src="https://res.cloudinary.com/thirus/image/upload/v1656571059/css-simplified/2/css_bs8meo.jpg"
		alt="CSS3"
	/>
</div>

<style>
	.container {
		margin: 2rem;
		background-color: #f3f4f6;
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 0.75rem;
		border-radius: 0.375rem;
		padding: 2rem;
	}
	.text {
		display: contents;
		gap: 0.75rem;
	}
	img {
		max-width: 100%;
		max-height: 13rem;
		border-radius: 0.375rem;
		order: -1;
	}
	h2 {
		font-size: 1.5rem;
		line-height: 2rem;
		order: -1;
	}
	p {
		color: #374151;
	}
	a {
		display: inline-block;
		text-decoration: none;
		font-weight: 600;
		color: #2563eb;
	}
	@media screen and (min-width: 640px) {
		.container {
			flex-direction: row;
			align-items: center;
			gap: 1.5rem;
		}
		.text {
			display: flex;
			flex-direction: column;
		}
		img {
			order: 0;
		}
	}
</style>
