$(function() {
	$(".add-coffee").on("submit", function(event) {
		event.preventDefault();
		var newCoffee = {
			name: $("#co").val().trim()
		};
		$.ajax("/api/coffees", {
			type:"POST",
			data: newCoffee
		}).then(
			function() {
				console.log("created new coffee");
				location.reload();
			}
		);
	});
	$(".drink").on("click", function(event) {
		var id = $(this).data("id");
		var newDrank = $(this).data("newdrank");
		var newCoffeeState = {
			drank: newDrank
		};
		$.ajax("/api/coffees/" + id, {
			type:"PUT",
			data: newCoffeeState
		}).then(
			function() {
				console.log("changed drank to", newDrank);
				location.reload();
			}
		);
	});
	$(".delete-coffee").on("click", function(event) {
		var id = $(this).data("id");
		$.ajax("/api/coffees/" + id, {
			type: "DELETE",
		}).then(
			function() {
			console.log("deleted coffee" + id);
			location.reload();
			}
		);
	});
});