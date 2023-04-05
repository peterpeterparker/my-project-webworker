<script lang="ts">
    import {onMount} from "svelte";
    import {initWorker} from "../lib/loader/worker.loader";

    onMount(async () => await initWorker());
</script>

<slot />