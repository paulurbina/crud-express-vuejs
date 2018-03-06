<template lang="html">
	<div>
		<h1>Actualiza Item</h1>
		<form v-on:submit.prevent="updateItem">
			<div class="form-group">
				<input type="text" v-model="item.name" class="form-control">
			</div>
			<div class="form-group">
				<input type="text" v-model="item.price" class="form-control">
			</div>
			<div class="form-group">
				<input type="text" v-model="item.quantity" class="form-control">
			</div>
			<div class="form-group">
				<input type="text" v-model="item.provider" class="form-control">
			</div>
			<button type="submit" name="button" class="btn btn-primary">
				Actualizar
			</button>
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
		created: function() {
			this.getItem();
		},
		methods: {
			getItem() {
				this.axios.get('/item/' + this.$route.params.id)
				.then(res => {
					console.log(this.item);
					this.item = res.data;
				})
				.catch(err => console.log(err));
			},
			updateItem() {
				this.axios.put('/item/' + this.$route.params.id, this.item)
				.then(res => {
					console.log(res);
					this.$router.push({ name: 'DisplayItem' })
				})
				.catch(err => console.log(err));
			},
		}
	};
</script>