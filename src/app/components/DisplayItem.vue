<template lang="html">
	<div>
		<h3>Mostrando Items</h3>
		<table class="table table-hover table-bordered">
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Price</th>
					<th>Quantity</th>
					<th>Provider</th>
					<th>Operaciones</th>
				</tr>
			</thead>
			 <tbody>
			 	<tr v-for="item in items">
			 		<td>{{item._id}}</td>
			 		<td>{{item.name}}</td>
			 		<td>{{item.price}}</td>
			 		<td>{{item.quantity}}</td>
			 		<td>{{item.provider}}</td>
			 		<td>
			 			<a href="#" class="btn btn-primary" v-on:click="deleteItem(item._id)">
			 				Eliminar
			 			</a>
			 			<router-link :to="{ name: 'EditItem', params: {id: item._id} }" class="btn btn-dark">
							Actualizar
						</router-link>
			 		</td>
			 	</tr>
			 </tbody>
		</table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				items: []
			}
		},
		created() {
			this.fetchItems();
		},
		methods: {
			fetchItems() {
				this.axios.get('/item')
				.then(res => {
					this.items = res.data;
				})
				.catch(err => console.log(err));
			},
			deleteItem(id) {
				const response = confirm('Borrara este dato?');
				if (response) {
					this.axios.delete('/item/' + id)
					.then(res => {
						this.items.splice(id, 1);
					})
					.catch(err => console.log(err));
				}
				else
					return;
			}
		}
	};
</script>
