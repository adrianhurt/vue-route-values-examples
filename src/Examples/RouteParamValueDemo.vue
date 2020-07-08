<template>
    <div>
        <section>
            <h1>RouteParamValue</h1>
            <p class="text">
                This is a simple example of <b><em>RouteParamValue</em></b> component.
                Now you can see at the URL the suffix <b>"/1"</b>.
                That's because the corresponding path has been configured on the router as:
            </p>
            <p class="text">
                <b><code>{ path: '/route-param-value/:fooId', ... }</code></b>
            </p>
            <p class="text">
                The number you see at the URL should be the same as you can see here:
            </p>

            <RouteParamValue
                #default="{ value, set }"
                name="fooId"
                type="number"
            >
                <Paginator
                    :value="value"
                    @input="set"
                />
            </RouteParamValue>
        </section>

        <section>
            <p class="text">
                Click on the arrows to modify its value and check how the URL changes.
            </p>
        </section>

        <section>
            <p class="text">
                The code for that <b><em>RouteParamValue</em></b> is the following:
            </p>
            <p class="text">
                <pre><code>
&lt;RouteParamValue
    name="fooId"
    type="number"
    #default="{ value, set }"
&gt;
    &lt;Paginator
        :value="value"
        @input="set"
    /&gt;
&lt;/RouteParamValue&gt;
                </code></pre>
            </p>
        </section>

        <section>
            <p class="text">
                Note that althought it's done a <em>"push"</em> navigation, the screen is re-used by Vue.
                If you prefer to force an update, you must add a key to the <em>&lt;router-view /&gt;</em>.
            </p>
            <p class="text">
                <b><code>&lt;router-view :key="$route.fullPath" /&gt;</code></b>
            </p>
            <p class="text">
                You can try that behaviour switching on the next option and play again with the <em>Route Value</em>.
            </p>
            <SwitchInput
                label="Add a key to the screen to force update:"
                :value="!keepScreenInstance"
                @input="$emit('keepScreenInstanceChange', !keepScreenInstance)"
            />
        </section>
    </div>
</template>

<script>
import VueTypes from 'vue-types'
import { RouteParamValue } from 'vue-route-values'
import { Paginator, SwitchInput } from './components'

export default {
    name: 'RouteParamValueDemo',
    components: { RouteParamValue, Paginator, SwitchInput },
    props: {
        keepScreenInstance: VueTypes.bool.isRequired,
    },
}
</script>
