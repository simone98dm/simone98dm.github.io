<script>
  export let item;
</script>

<div class="column col-4 col-sm-12 mb-2">
  <div class="card text-center card-shadow">
    <div class="card-header">
      <span class="card-title text-italic text-bold">{item.title}</span>
    </div>
    {#if item.description || item.links}
      <div class="card-body">
        {#if item.description && item.description.length > 0}
          <p>{item.description}</p>
        {/if}
        {#if item.links != null && item.links.length > 0}
          {#each item.links as link}
            <a class="btn btn-link" href={link.url} target="_blank"
              >{link.label}</a
            >
          {/each}
        {/if}
      </div>
    {/if}

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

<style>
  .card-shadow {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  }
</style>
