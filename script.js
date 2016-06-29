$(document).ready(function() {

	var caption = "";
	var imageNo = 1;

	var photoChange = function() {

		if (imageNo == 0) {
			imageNo = 1;
			caption = "Study Abroad Trip in 2014: Weekend Trip to Paris, France";
			$('#big-image').attr("src", "image" + imageNo + ".jpg");
		}

		else if (imageNo == 10) {
			imageNo = 9;
			caption = "Standing out in front of Microsoft's campus, taken by a friend. August 2015";
			$('#big-image').attr("src", "image" + imageNo + ".jpg");
		}

		else if (imageNo == 1) {
			caption = "Study Abroad Trip in 2014: Weekend Trip to Paris, France";
		}

		else if (imageNo == 2) {
			caption = "Our cat, Cosmo";
		}

		else if (imageNo == 3) {
			caption = "Gonzaga University Graduation, May 2016";
		}

		else if (imageNo == 4) {
			caption = "Gonzaga University Graduation Picture 2, May 2016";
		}

		else if (imageNo == 5) {
			caption = "Me with my parents in Burch Bay, WA. June 2016";
		}

		else if (imageNo == 6) {
			caption = "Me striking a pose with my Senior Design Project";
		}

		else if (imageNo == 7) {
			caption = "Our cat, Rudy";
		}

		else if (imageNo == 8) {
			caption = "At the Orleans arena in Vegas watching Gonzaga Basketball take the WCC title";
		}

		else if (imageNo == 9) {
			caption = "Standing out in front of Microsoft's campus, taken by a friend. August 2015";
		}

		else {
			caption = "No Image Here Yet";
		}

		$('#caption').html(caption);

	};

	$('#big-image').hide();
	$('#big-image').fadeIn(500);

	$('.small-images').click(function() {

		$('#big-image').hide();
		$('#big-image').fadeIn(500);

		var bigImageSrc = $(this).attr("src");
		$('#big-image').attr("src", bigImageSrc);

		imageNo = $(this).attr("id");

		photoChange();

	});

	$('#left-arrow').click(function() {

		$('#big-image').hide();

		imageNo -= 1;

		$('#big-image').attr("src", "image" + imageNo + ".jpg");
		$('#big-image').fadeIn(500);

		photoChange();

	});

	$('#right-arrow').click(function() {

		$('#big-image').hide();

		imageNo += 1;

		$('#big-image').attr("src", "image" + imageNo + ".jpg");
		$('#big-image').fadeIn(500);

		photoChange();
		
	});

})