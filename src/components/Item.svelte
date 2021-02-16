<script>
  export let item;
</script>

<div class="column col-4 col-xs-12">
  <div class="card text-center">
    <div class="card-header">
      <span class="card-title text-italic text-bold">{item.title}</span>
    </div>
    <div class="card-body">
      <p>{item.description}</p>
      {#if item.links != null && item.links.length > 0}
        {#each item.links as link}
          <a class="btn btn-link" href={link.url} target="_blank"
            >{link.label}</a
          >
        {/each}
      {/if}
    </div>

    <div class="card-footer">
      {#if item.tags != null && item.tags.length > 0}
        <div class="divider text-center" data-content="#" />
        <div class="text-tiny">
          {#each item.tags as tag}
            <span class="label label-rounded label-secondary text-dark m-1"
              >{tag}</span
            >
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>
