<template>

  <div>

    <h1>Create An Item</h1>

    <form v-on:submit.prevent="addItem">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Item Name:</label>
            <input type="text" class="form-control" v-model="item.name">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Item Price:</label>
            <input type="text" class="form-control col-md-6" v-model="item.price">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Item quantity:</label>
            <input type="text" class="form-control col-md-6" v-model="item.quantity">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Item provider:</label>
            <input type="text" class="form-control col-md-6" v-model="item.provider">
          </div>
        </div>
      </div>

      <br/>

      <div class="form-group">
        <button class="btn btn-primary">Add Item</button>
      </div>

    </form>

</div>

</template>



<script>
export default {
  data() {
    return {
      item: {}
    }
  },
  methods: {
    addItem() {
      this.axios.post('/item', this.item)
      .then(res => {
        this.$router.replace({name: 'DisplayItem'})
      })
      .catch(err => console.log(err));
    }
  }
};

</script>