<template>
    <div>
        <section>
            <h1>RouteQueryValue</h1>
            <p class="text">
                This is a simple example of <b><em>RouteQueryValue</em></b> component.
            </p>
            <p class="text">
                The number you see at the URL (for <b><em>page</em></b> query param) should be the same as you can see here:
            </p>

            <RouteQueryValue
                #default="{ value, set }"
                name="page"
                type="number"
                :defaultValue="1"
            >
                <Paginator
                    :value="value"
                    @input="set"
                />
            </RouteQueryValue>
        </section>

        <section>
            <p class="text">
                Click on the arrows to modify its value and check how the URL changes.
                Note for value <b><em>page=1</em></b> it doesn't appear at the URL.
                This is because the <b><em>RouteQueryValue</em></b> component has that value declared as <em>default</em>.
            </p>
        </section>

        <section>
            <p class="text">
                The code for that <b><em>RouteQueryValue</em></b> is the following:
            </p>
            <p class="text">
                <pre><code>
&lt;RouteQueryValue
    name="page"
    type="number"
    :defaultValue="1"
    #default="{ value, set }"
&gt;
    &lt;Paginator
        :value="value"
        @input="set"
    /&gt;
&lt;/RouteQueryValue&gt;
                </code></pre>
            </p>
        </section>
    </div>
</template>

<script>
import { RouteQueryValue } from 'vue-route-values'
import { Paginator } from './components'

export default {
    name: 'RouteQueryValueDemo',
    components: { RouteQueryValue, Paginator },
}
</script>
