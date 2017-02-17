var User = (function user() {

	// User constructor
	function User(options) {
		var This = this;
		var defaults = {
			name: 'Unknown',
			title: 'Unknown',
			biography: '...',
			proficiencies: [],
			profile_link: '#',
			email: '#',
			thumbnail: '#'
		};
		options = $.extend(defaults, options);

		this.name = options.name;
		this.title = options.title;
		this.biography = options.biography;
		this.proficiencies = options.proficiencies;
		this.profile_link = options.profile_link;
		this.email = options.email;
		this.thumbnail = options.thumbnail;

		// Create the card element.
		this.user_card = $(`
			<div class="row">
				<div class="col s12 l8 offset-l2">
					<div class="card small horizontal hoverable">
						<div class="card-image">
							<div class="card-image-fixed"></div>
						</div>
						<div class="card-stacked">
							<div class="card-content">
								<div class="row">
									<div class="col s12">
										<span class="card-title activator grey-text text-darken-4">` + this.name + `<i class="material-icons right">more_vert</i></span>
										<h6><strong>` + this.title + `</strong></h6>
										<p>` + this.biography + `</p>
									</div>
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4 close">` + this.name + `<i class="material-icons right">close</i></span>
									<h6><strong>Proficiencies</strong></h6>
									<div class="proficiencies"></div>
								</div>
							</div>
							<div class="card-action">
								<a class="blue-text" href="` + this.profile_link + `">LinkedIn Profile</a>
								<a class="blue-text" href="mailto:` + this.email + `">Contact</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		`);

		// Add user proficiencies to the card.
		for (var i = 0; i < this.proficiencies.length; i++) {
			this.user_card.find('.proficiencies').append($('<div class="chip">' + this.proficiencies[i] + '</div>'))
		}

		// Apply user thumbnail.
		this.user_card.find('.card-image-fixed').css('background-image', 'url(' + this.thumbnail + ')');

		// Make card reveal content when vertical menu is pressed.
		this.user_card.find('.activator').on('click', function() {
			This.user_card.find('.card').addClass('active');
		});

		// Make card reveal hide when close button is pressed.
		this.user_card.find('.close').on('click', function() {
			This.user_card.find('.card').removeClass('active');
		});
	}

	User.prototype = {

	}

	return User;
})();