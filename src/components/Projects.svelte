<script lang="ts">
  import format from "date-fns/format";
  import { ProjectType } from "../types";
  import type { Project } from "../types";

  export let items: Project[];

  const projectDate = "MMMM yyyy";
</script>

<ul>
  {#each items as { from, name, to, type }}
    <li
      class:package={type === ProjectType.Package}
      class:site={type === ProjectType.Site}
    >
      <h3>{name}</h3>
      <p class="details">
        <small>
          <span class="type">
            {type}
          </span>
          &bull;
          {format(from, projectDate)}
          -
          {to ? format(to, projectDate) : "Present"}
        </small>
      </p>
    </li>
  {/each}
</ul>

<style>
  ul {
    justify-content: start;
    display: grid;
    grid-gap: var(--space-small) var(--space-large);
    list-style: none;
    margin-top: var(--space-medium);
    padding: 0;
  }

  @media (min-width: 35rem) {
    ul {
      grid-template-columns: repeat(2, auto);
    }
  }

  li {
    border-left: 2px solid;
    padding-left: var(--space-medium);
  }

  .details {
    color: var(--theme-text-subtle);
    margin-top: -0.1rem;
  }

  .site {
    border-left-color: var(--theme-accent-secondary);
  }

  .package {
    border-left-color: var(--theme-accent-primary);
  }
</style>
