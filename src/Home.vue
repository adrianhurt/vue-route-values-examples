<template>
    <div>
        <h1>Vue Route Values</h1>
        <section>
            <p class="text">
                A set of simple components to manage route and query params using Vue Router
            </p>
        </section>

        <section>
            <p class="text">
                Select one of these demos to see:
            </p>

			<h4 class="demo">
				<router-link :to="{ name: 'RouteParamValueDemo', params: { fooId: 1 } }">
					&lt;RouteParamValue /&gt;
				</router-link>
			</h4>
			<h4 class="demo">
				<router-link :to="{ name: 'RouteQueryValueDemo', query: { page: 2 } }">
					&lt;RouteQueryValue /&gt;
				</router-link>
			</h4>
			<h4 class="demo">
				<router-link :to="{ name: 'RouteValuesDemo', params: { slug: 'foo-slug'} }">
					&lt;RouteValues /&gt;
				</router-link>
			</h4>
			<h4 class="demo">
				<router-link :to="{ name: 'RouteValuesMixinDemo', params: { slug: 'foo-slug'} }">
					routeValuesMixin
				</router-link>
			</h4>
		</section>

		<section>
            <h4 class="text">
                Please check all the <a href="https://adrianhurt.github.io/vue-route-values/" target="_blank">documention here</a>.
            </h4>
        </section>
    </div>
</template>

<script>

export default {
	name: 'Home',
	// Handles special redirection to manage github pages bug (https://github.com/rafgraph/spa-github-pages).
	// It works together with the file 404.html
	beforeRouteEnter (to, from, next) {
		const { p, q } = to.query
		if (p || q) {
			next({ path: p + (q ? `?${q}` : '') })
		} else {
			next()
		}
	},
}
</script>

<style scoped>
.demo {
	margin-bottom: 10px;
}
</style>
