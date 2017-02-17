var Ticket = (function ticket() {

	// Ticket constructor
	function Ticket(options) {
		var This = this;
		var defaults = {
			name: 'Unset',
			description: '',
			ticket: ++Ticket.tickets,
			issued: new Date(),
			technicians: [],
			bounty: 'Pro bono',
			status: 'Pending',
		};
		options = $.extend(defaults, options);

		this.name = options.name;
		this.description = options.description;
		this.ticket = options.ticket;
		this.bounty = options.bounty;
		this.issued = options.issued;
		this.technicians = options.technicians;
		this.status = options.status;

		// Create the card element.
		this.card = $(`
			<div class="col s12 m6 l4">
				<div class="card hoverable">
					<div class="card-content">
						<span class="card-title blue-text activator">` + this.name + `<i class="material-icons right black-text">more_vert</i></span>
						<p class="black-text">Description:</p>
						<p class="truncate">` + this.description + `</p>
						<br />
						<table>
							<tr class="condensed"><td class="black-text">Status:</td><td><strong class="blue-text">` + this.status + `</strong></td></tr>
							<tr class="condensed"><td class="black-text">Issued:</td><td><small>` + new Date(this.issued).toLocaleDateString() + `</small></p></tr>
							<tr class="condensed"><td class="black-text">Ticket #:</td><td><strong>` + this.ticket + `</strong></p></tr>
							<tr class="condensed"><td class="black-text">Bounty:</td><td><strong class="green-text">` + this.bounty + `</strong></p></tr>
						</table>
						<div class="card-reveal">
							<span class="card-title blue-text close">` + this.name + `<i class="material-icons right black-text">close</i></span>
							<span class="black-text">Technicians:</span>
							<div class="technicians">
								
							</div>
						</div>
					</div>
					<div class="card-action">
						<a class="blue-text" href="#">View</a>
					</div>
				</div>
			</div>
		`);

		// Add user proficiencies to the card.
		for (var i = 0; i < this.technicians.length; i++) {
			this.card.find('.technicians').append($('<div class="chip">' + this.technicians[i] + '</div>'))
		}

		// Make card reveal content when vertical menu is pressed.
		this.card.find('.activator').on('click', function() {
			This.card.find('.card').addClass('active');
		});

		// Make card reveal hide when close button is pressed.
		this.card.find('.close').on('click', function() {
			This.card.find('.card').removeClass('active');
		});
	}

	Ticket.prototype = {

	}

	Ticket.tickets = 0;

	return Ticket;
})();