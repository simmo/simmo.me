<script lang="ts">
  export let heading: string;
  export let style: string;
</script>

<section {style}>
  <h2>{heading}</h2>
  <slot />
</section>
