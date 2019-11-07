<script>
  import ThemeSwitcher from "../components/ThemeSwitcher.svelte";
</script>

<style>
  main {
    display: grid;
    grid-gap: var(--gutter);
    grid-template-columns:
      [full-start] minmax(0, 1fr)
      [main-start] minmax(0, 1280px) [main-end]
      minmax(0, 1fr) [full-end];
    min-height: 100%;
  }

  main > :global(*) {
    grid-column: main;
    padding: var(--gutter) 0;
  }

  main > :global(.full) {
    grid-column: full;
  }
</style>

<main>
  <slot />
</main>

<ThemeSwitcher />
