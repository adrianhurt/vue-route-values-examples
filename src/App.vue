<template>
    <div id="app">
        <div class="navbar">
            <router-link
                tag="div"
                class="navbar-brand"
                :to="{ name: 'Home' }"
            >
                <img
                    alt="Vue logo"
                    src="./assets/logo.png"
                >
                <p>Vue Route Values</p>
            </router-link>
            <div class="navbar-demos">
                <router-link :to="{ name: 'RouteParamValueDemo', params: { fooId: 1 } }">
                    RouteParamValue
                </router-link>
                <router-link :to="{ name: 'RouteQueryValueDemo', query: { page: 2 } }">
                    RouteQueryValue
                </router-link>
                <router-link :to="{ name: 'RouteValuesDemo', params: { slug: 'foo-slug'} }">
                    RouteValues
                </router-link>
                <router-link :to="{ name: 'RouteValuesMixinDemo', params: { slug: 'foo-slug'} }">
                    routeQueryValueMixin
                </router-link>
            </div>
            <div class="github-button">
                <a
                    class="github-button"
                    href="https://github.com/adrianhurt/vue-route-values"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star adrianhurt/vue-route-values on GitHub"
                >
                    View on Github
                </a>
            </div>
        </div>

        <main>
            <transition
                name="main-router"
                mode="out-in"
            >
                <router-view
                    :key="keepScreenInstance ? undefined : $route.fullPath"
                    :keepScreenInstance="keepScreenInstance"
                    @keepScreenInstanceChange="keepScreenInstance = $event"
                />
            </transition>
        </main>

        <div class="footer">
            <div>
                © 2020 Adrian Hurtado (adrianhurt)
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'App',
    data () {
        return {
            keepScreenInstance: true,
        }
    },
}
</script>

<style lang="scss" scoped>
$brand-color: #4fc08d;
$navbar-color: lighten($brand-color, 44%);
$navbar-height: 60px;
$footer-height: 40px;

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
.navbar {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: $navbar-height;
	box-sizing: border-box;
	background-color: $navbar-color;
	border-bottom: 1px solid $brand-color;
	margin-bottom: 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 25px;

	&-brand {
		flex: 1;
		display: flex;
		align-items: center;
		cursor: pointer;
		img {
			width: 35px;
			margin-right: 10px;
		}
		p {
			font-size: 20px;
			font-weight: bold;
			text-decoration: none !important;
		}
	}

	&-demos {
		a {
			color: black;
			font-weight: 500;
			text-decoration: none;
			border: 1px solid transparent;
			border-radius: 50px;
			padding: 5px 10px;
			&.router-link-active {
				color:$brand-color;
				border-color: $brand-color;
			}
		}
		a + a {
			margin-left: 10px;
		}
	}
	.github-button {
		margin-left: 20px;
	}
}

$main-margin-top: $navbar-height + 40px;
$main-margin-bottom: 80px;
main {
	margin: $main-margin-top 0 $main-margin-bottom;
	box-sizing: border-box;
	min-height: calc(100vh - #{$main-margin-top + $main-margin-bottom + $footer-height});
}

.main-router-enter-active,
.main-router-leave-active {
    transition-duration: 0.5s;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
}

.main-router-enter {
    opacity: 0;
    transform: translate(0, -15px);
}

.main-router-leave-active {
    opacity: 0;
    transform: translate(0, -15px);
}
.footer {
	text-align: right;
	width: 100vw;
	height: $footer-height;
	box-sizing: border-box;
	background-color: $navbar-color;
	padding: 5px 20px;
	border-top: 1px solid $brand-color;
}
</style>

<style lang="scss">
body {
	margin: 0;
}
.max-width {
	max-width: 500px;
	margin: 0 auto;
}
p.text {
	max-width: 500px;
	margin: 0 auto 15px;
}
section + section {
	margin-top: 50px;
}
pre {
	text-align: left;
	border-radius: 4px;
	background: #475050;
	padding: 0 15px;
	color: white;
}
.flex-row {
	display: flex;
	justify-content: space-between;
	align-items: center;
	& > * {
		flex: 1;
	}
}
</style>
