<script lang="ts">
	import { page } from "$app/stores";


const greetings : any ={
        en:'hi',
        es:'hola',
        fr:'bonjour',
   
    }
    const {lang = 'en' } = $page.params
    const  greet : any = greetings[lang]
</script>
<h1 class="text-green-950">{greet}</h1>