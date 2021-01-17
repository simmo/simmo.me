<script lang="ts">
  import { onMount } from "svelte";
  import { tweened } from "svelte/motion";
  import ThemeToggle from "../components/ThemeToggle.svelte";

  const currentYear = new Date().getFullYear();
  const opacity = tweened(0, { delay: 500, duration: 300 });

  onMount(() => {
    opacity.set(1);
  });
</script>

<main>
  <div class="content">
    <slot />
  </div>
  <p class="copyright" style={`opacity: ${$opacity}`}>
    &copy; {currentYear} Made by Mike
  </p>
  <div class="toggle">
    <ThemeToggle />
  </div>
</main>

<style>
  main {
    display: grid;
    gap: var(--space-medium);
    grid-template-rows: auto minmax(1fr, 1280px) auto;
    min-height: 100%;
    padding: var(--space-large);
  }

  .toggle {
    grid-row: 1;
    justify-self: end;
  }

  .content {
    align-self: start;
  }

  .copyright {
    color: var(--theme-text-subtle);
    font-size: 0.9rem;
  }
</style>
