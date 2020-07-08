<template>
    <div>
        <section>
            <h1>routeValuesMixin</h1>
            <p class="text">
                This is a simple example of <b><em>routeValuesMixin</em></b> where you can see how to manage multiple route params at once.
            </p>

            <div class="max-width">
                <div class="flex-row">
                    <p>Slug: <b>{{ slug }}</b></p>
                    <Paginator v-model="page" />
                    <SelectInput
                        v-model="sort"
                        :options="sortOptions"
                    />
                </div>
            </div>
        </section>

        <section>
            <p class="text">
                Click on the arrows to modify the <em>page</em> and <em>sort</em> values and check how the URL changes.
            </p>
        </section>

        <section>
            <p class="text">
                With the following code we configure the params with <b><em>routeValuesMixin</em></b>
                and it adds every value as a computed one (with <b><em>computed setters</em></b> as well).
            </p>
            <p class="text">
                <pre><code>
mixins: [routeValuesMixin([
    { where: 'params', name: 'slug' },
    { name: 'page', type: 'number', defaultValue: 1 },
    { name: 'sort', defaultValue: 'option1' },
])],
                </code></pre>
            </p>
            <p class="text">
                Then you can use them directly within your template section.
            </p>
            <p class="text">
                <pre><code>
&lt;div class="flex-row"&gt;
    &lt;p&gt;Slug: &lt;b&gt;{&shy;{ slug }&shy;}&lt;/b&gt;&lt;/p&gt;
    &lt;Paginator v-model="page" /&gt;
    &lt;SelectInput
        v-model="sort"
        :options="sortOptions"
    /&gt;
&lt;/div&gt;
                </code></pre>
            </p>
        </section>
    </div>
</template>

<script>
import { routeValuesMixin } from 'vue-route-values'
import { Paginator, SelectInput } from './components'

export default {
    name: 'RouteValuesMixinDemo',
    components: { Paginator, SelectInput },
    mixins: [routeValuesMixin([
        { where: 'params', name: 'slug' },
        { name: 'page', type: 'number', defaultValue: 1 },
        { name: 'sort', defaultValue: 'option1' },
    ])],
    created () {
        this.sortOptions = [
            { key: 'option1', label: 'Option 1' },
            { key: 'option2', label: 'Option 2' },
            { key: 'option3', label: 'Option 3' },
        ]
    },
}
</script>
