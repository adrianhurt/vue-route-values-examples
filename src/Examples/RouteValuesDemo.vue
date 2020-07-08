<template>
    <div>
        <section>
            <h1>RouteValues</h1>
            <p class="text">
                This is a simple example of <b><em>RouteValues</em></b> component where you can see how to manage multiple route params at once.
            </p>

            <div class="max-width">
                <RouteValues
                    #default="{ slug, page, sort, set }"
                    :optsByName="{
                        slug: {
                            where: 'params',
                        },
                        page: {
                            type: 'number',
                            defaultValue: 1,
                        },
                        sort: {
                            defaultValue: 'option1',
                        },
                    }"
                >
                    <div class="flex-row">
                        <p>Slug: <b>{{ slug }}</b></p>
                        <Paginator
                            :value="page"
                            @input="set('page', $event)"
                        />
                        <SelectInput
                            :value="sort"
                            :options="sortOptions"
                            @input="set('sort', $event)"
                        />
                    </div>
                </RouteValues>
            </div>
        </section>

        <section>
            <p class="text">
                Click on the arrows to modify the <em>page</em> and <em>sort</em> values and check how the URL changes.
            </p>
        </section>

        <section>
            <p class="text">
                The code for that <b><em>RouteValues</em></b> is the following:
            </p>
            <p class="text">
                <pre><code>
&lt;RouteValues
    #default="{ slug, page, sort, set }"
    :optsByName="{
        slug: {
            where: 'params',
        },
        page: {
            type: 'number',
            defaultValue: 1,
        },
        sort: {
            defaultValue: 'option1',
        },
    }"
&gt;
    &lt;div class="flex-row"&gt;
        &lt;p&gt;Slug: &lt;b&gt;{&shy;{ slug }&shy;}&lt;/b&gt;&lt;/p&gt;
        &lt;Paginator
            :value="page"
            @input="set('page', $event)"
        /&gt;
        &lt;SelectInput
            :value="sort"
            :options="sortOptions"
            @input="set('sort', $event)"
        /&gt;
    &lt;/div&gt;
&lt;/RouteValues&gt;
                </code></pre>
            </p>
        </section>
    </div>
</template>

<script>
import { RouteValues } from 'vue-route-values'
import { Paginator, SelectInput } from './components'

export default {
    name: 'RouteValuesDemo',
    components: { RouteValues, Paginator, SelectInput },
    created () {
        this.sortOptions = [
            { key: 'option1', label: 'Option 1' },
            { key: 'option2', label: 'Option 2' },
            { key: 'option3', label: 'Option 3' },
        ]
    },
}
</script>
