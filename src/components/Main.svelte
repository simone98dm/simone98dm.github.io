<script>
  import Section from "./Section.svelte";
  const thingsToKnow = [
    {
      id: 1,
      title: "Languages",
      description: "C#, Javascript, Typescript, HTML, CSS, SQL, PHP, Bash",
    },
    {
      id: 2,
      title: "Frameworks",
      description: "React, Angular, Bootstrap, Svelte, JQuery, Sapper",
    },
    {
      id: 3,
      title: "Other",
      description: "Linux, Windows, Azure, AWS, Git, Postman, Nmap",
    },
  ];

  const works = [
    {
      id: 2,
      title: "Todo SPA Projects",
      description: "Some TODO List wrote using different js frameworks",
      links: [
        {
          url: "https://github.com/simone98dm/angular-todoapp",
          label: "Angular",
        },
        {
          url: "https://github.com/simone98dm/react-todoapp",
          label: "React",
        },
        {
          url: "https://github.com/simone98dm/svelte-todoapp",
          label: "Svelte",
        },
      ],
      tags: ["react", "angular", "svelte", "typscript"],
    },
    {
      id: 3,
      title: "TSAC2019",
      description: "Complex queue based api and frontend",
      links: [
        {
          url: "https://github.com/simone98dm/ITS-TSAC2019-Esame",
          label: "repo",
        },
      ],
      tags: [
        "docker",
        "angular",
        "postgresql",
        "rabbitmq",
        "queue-workers",
        "publish-subscribe",
        "api",
      ],
    },
  ];
</script>

<div class="section animate__animated animate__fadeIn">
  <div class="container grid-lg" id="overview">
    <div class="my-5">
      <h3 class="text-italic">My name is</h3>
      <h1 class="text-bold">Simone</h1>
      <h3 class="text-muted">
        I am a <code>web developer</code>,
        <mark>tech enthusiast</mark>, and
        <span class="text-success">pi</span>
        <span class="text-secondary">z</span>
        <span class="text-error">za</span> lover.
      </h3>
    </div>
    <div class="my-5">
      {#await thingsToKnow}
        <p>Loading...</p>
      {:then data}
        <Section list={data} title="Things to know" />
      {:catch error}
        {console.error(error)}
        <p>An error occurred!</p>
      {/await}
    </div>
    <div class="my-5">
      {#await works}
        <p>Loading...</p>
      {:then data}
        <Section list={data} title="Some works" />
      {:catch error}
        {console.error(error)}
        <p>An error occurred!</p>
      {/await}
    </div>
  </div>
</div>
