events.listen('player.logged_in', function (event) {
	event.player.tell('Hi! ^-^')
});