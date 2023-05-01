<script>
	import { page } from '$app/stores';
    console.log($page.params.slug)
    const arr = $page.params.slug.split('/')
</script>
<h1>docs</h1>
{#if arr.length ===1}
     <h1>views 4 {arr[0]}</h1>
{:else if arr.length === 2}
     <b>viewing {arr[0]} and {arr[1]}</b>
     {/if}
