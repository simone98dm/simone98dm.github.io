<script>
  export let item;
</script>

<div class="column col-4 col-xs-12">
  <div class="card text-center">
    <div class="card-header">
      <span class="card-title">{item.title}</span>
    </div>
    <div class="card-body">
      {item.description}
    </div>
  </div>
</div>