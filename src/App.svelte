<script lang="ts">
  import Counter from './lib/Counter.svelte'
  import Landing from './lib/Landing.svelte'
  import Background from './lib/Background.svelte'

  import {togglePortfolio} from './stores.ts'
  const toggle = () => {
      togglePortfolio.update(state => !state);
  }

  togglePortfolio.subscribe(value => {
      console.log(`Toggle state is now: ${value}`);
  });
</script>

<main>
  {#if $togglePortfolio}
  <p on:click={toggle}> portfolio </p>
  {:else}
  <Background/>
  <div class="card">
    <Landing />
  </div>
  {/if}
  
</main>

<style>
</style>
