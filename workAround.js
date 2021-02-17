<script>
	function checkPostcode() {
		const postcodes = [
			'4702xv16',
			'4704rd13',
			'4756dr1',
			/* etc. */
		];
		let inputPc = document.getElementById('postcode').value;
		let pc = inputPc.toLowerCase();
		if (pc.length === 7) {
			var digits = pc.substring(0, 4);
			var letters = pc.substring(5, 7);
			
			pc = digits+letters;
		}
		let hn = document.getElementById('huisnummer').value;
		var input = pc+hn;
		
		if (pc.length === 6 && hn.length > 0) {
			if (postcodes.includes(input)) {
				window.open("https://www.komhetdakop.nl/aanmelden/", "_self");
			} else {
				window.open("https://www.komhetdakop.nl/aanmelden-bellijst/", "_self");
			}
		} else {
			document.getElementById('error').innerHTML = '<p>Er ging iets mis, controleer uw gegevens<br>En probeer opnieuw</p>';
		}
	}
</script>