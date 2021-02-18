<script>
  import Header from "./Header.svelte";
  import Section from "./Section.svelte";
  const thingsToKnow = [
    {
      id: 1,
      title: "Languages",
      tags: [
        "C#",
        "ASP.Net Core",
        "Javascript",
        "Typescript",
        "Java",
        "PHP",
        "Python",
        "HTML/CSS",
        "SQL",
        "Bash",
        "SASS"
      ],
    },
    {
      id: 2,
      title: "Frameworks",
      tags: [
        "React",
        "Angular",
        "Bootstrap",
        "Svelte",
        "JQuery",
        "EntityFramework",
        "Express",
        "Ionic",
        "Sapper",
      ],
    },
    {
      id: 3,
      title: "Other",
      tags: [
        "Linux/Windows",
        "Azure/AWS",
        "Docker",
        "Git",
        "Postman",
        "Nmap",
        "NodeJS",
        "RabbitMQ",
        "Redis",
        "MySQL/Postgresql",
      ],
    },
  ];

  const works = [
    {
      id: 1,
      title: "Certifications",
      links: [
        {
          url:
            "https://docs.microsoft.com/en-us/learn/certifications/exams/70-483",
          label: "Microsoft 70-483",
        },
        {
          url:
            "https://docs.microsoft.com/en-us/learn/certifications/exams/mb-200",
          label: "Microsoft MB-200",
        },
      ],
    },
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
    <Header />
    <div class="my-5">
      {#await thingsToKnow}
        <p>Loading...</p>
      {:then data}
        <Section list={data} title="Things about me" />
      {:catch error}
        {console.error(error)}
        <p>An error occurred!</p>
      {/await}
    </div>
    <div class="my-5">
      {#await works}
        <p>Loading...</p>
      {:then data}
        <Section list={data} title="Else" />
      {:catch error}
        {console.error(error)}
        <p>An error occurred!</p>
      {/await}
    </div>
  </div>
</div>
