<script lang="ts">
  import { ProjectType } from "../types";
  import type { Project as Item } from "../types";
  import Section from "../components/Section.svelte";
  import Projects from "../components/Projects.svelte";
  import Socials from "../components/Socials.svelte";
  import { spring } from "svelte/motion";
  import { onMount } from "svelte";

  const projects: Item[] = [
    {
      type: ProjectType.Package,
      name: "Gulp Stats",
      from: new Date("2015-01-01"),
    },
    {
      type: ProjectType.Site,
      name: "South West Trains",
      from: new Date("2015-12-01"),
      to: new Date("2017-09-01"),
    },
    {
      type: ProjectType.Site,
      name: "Greene King",
      from: new Date("2017-02-01"),
      to: new Date("2020-02-01"),
    },
    {
      type: ProjectType.Site,
      name: "MINI/BMW",
      from: new Date("2017-11-01"),
      to: new Date("2018-11-01"),
    },
    {
      type: ProjectType.Package,
      name: "Zone Front-end toolkit",
      from: new Date("2018-04-01"),
    },
    {
      type: ProjectType.Site,
      name: "Genomics England",
      from: new Date("2019-06-01"),
      to: new Date("2020-04-01"),
    },
    {
      type: ProjectType.Site,
      name: "Electrolux",
      from: new Date("2020-05-01"),
      to: new Date("2020-07-01"),
    },
    {
      type: ProjectType.Site,
      name: "Stannah",
      from: new Date("2020-07-01"),
    },
  ].sort(({ from: aFrom, to: aTo }, { from: bFrom, to: bTo }) => {
    if (!bTo && !!aTo) return 1;

    if (aFrom === bFrom) return 0;

    return bFrom > aFrom ? 1 : -1;
  });

  const from = { opacity: 0, y: -20 };
  const to = { opacity: 1, y: 0 };
  const config = { stiffness: 0.1, damping: 0.3, precision: 0.01 };

  const header = spring(from, config);
  const changelog = spring(from, config);
  const socials = spring(from, config);

  onMount(async () => {
    await header.set(to);
    await changelog.set(to);
    await socials.set(to);
  });
</script>

<svelte:head>
  <title>Mike Simmonds - Lead front-end developer</title>
</svelte:head>

<div class="container">
  <header
    style="opacity:{$header.opacity};transform:translate3d(0,{$header.y}px,0)"
  >
    <img alt="" src="me.png" class="me" />
    <h1>Mike Simmonds</h1>
    <p>
      Hi, I’m Mike, a UK based, Lead front-end developer living in Sussex,
      working in London or remote. Currently
      <a
        href="https://zonedigital.com"
        rel="noopener noreferrer"
        target="_blank">@Zone</a
      >.
    </p>
  </header>

  <Section
    heading="Changelog"
    style="opacity:{$changelog.opacity};transform:translate3d(0,{$changelog.y}px,0)"
  >
    <p>
      I’ve spent over 10 years working across marketing and publishing sectors
      to deliver high-end web apps, sites and products.
    </p>
    <Projects items={projects} />
  </Section>

  <Section
    heading="Socials"
    style="opacity:{$socials.opacity};transform:translate3d(0,{$socials.y}px,0)"
  >
    <Socials />
  </Section>
</div>

<style>
  .container {
    display: grid;
    gap: var(--space-large);
  }

  p {
    max-width: 30rem;
  }

  .me {
    display: block;
    height: 70px;
    width: 70px;
    margin-bottom: var(--space-medium);
  }
</style>
