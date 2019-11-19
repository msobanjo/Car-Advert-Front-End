function renderCars() {
	console.log("rendering...");
	document.getElementById("dynamicLoad").innerHTML="";
	$.ajax({
		type: "GET",
		url: "http://" + location.hostname + ":9001/CarAdvert/showCarAdvertDetails",
		success: function (data) {
			console.log("success")
			var count = 1;
			$.each(data, function (index, story) {
				$('#dynamicLoad').prepend(
					"<div class='col-md-6 col-lg-4'>" +
					"<div class='portfolio-item mx-auto' data-toggle='modal' data-target='#advert" + count + "'>" +
					"<div class='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>" +
					"<div class='portfolio-item-caption-content text-center text-white'>" +
					"<i class='fas fa-plus fa-3x'></i>" +
					"</div>" +
					"</div>" +
					"<img class='img-fluid' src='" + story.image + "' alt=''>" +
					"<div id = 'p1'>" + 'Model : ' + story.model + " </div>" +
					"<div id = 'p2'>" + 'Make : ' + story.make + "</div>" +
					"<div id = 'p3'>" + 'Price :£' + story.price + " </div>" +

					"</div>" +
					"</div>" +

					"<div class='portfolio-modal modal fade' id='advert" + count + "' tabindex='-1' role='dialog' aria-labelledby='portfolioModal1Label' aria-hidden='true'>" +
					"<div class='modal-dialog modal-xl' role='document'>" +
					"<div class='modal-content'>" +
					"<button type='button' class='close' data-dismiss='modal' aria-label='Close'>" +
					"<span aria-hidden='true'>" +
					"<i class='fas fa-times'>" + "</i>" +
					"</span>" +
					"</button>" +
					"<div class='modal-body text-center'>" +
					"<div class='container'>" +
					"<div class='row justify-content-center'>" +
					"<div class='col-lg-8'>" +

					"<h2 id='advertTitle' class='portfolio-modal-title text-secondary text-uppercase mb-0'> " + story.adverttitle + "</h2>" +

					"<div class='divider-custom'>" +
					"<div class='divider-custom-line'>" + "</div>" +
					"<div class='divider-custom-icon'>" +
					"<i class='fas fa-star'> " + "</i>" +
					"</div>" +
					"<div class='divider-custom-line'>" + "</div>" +
					"</div>" +

					"<img class='img-fluid rounded mb-5' src='" + story.image + "' alt='' width='400' height='400'>" +

					"<div id = 'description'>" + 'Advert Description : ' + story.advertdescription + "</div>" +
					"<div id = 'modelVariant'>" + 'Model Variant : ' + story.modelvariant + "</div>" +
					"<div id = 'modelYear'>" + 'Model Year : ' + story.modelyear + "</div>" +
					"<div id = 'mileage'>" + 'Mileage : ' + story.mileage + "</div>" +
					"<div id = 'colour'>" + 'Colour : ' + story.colour + "</div>" +
					"<div id = 'engineSize'>" + 'Engine Size : ' + story.enginesize + "</div>" +
					"<div id = 'gearBox'>" + 'Gearbox : ' + story.gearbox + "</div>" +
					"<div id = 'doors'>" + 'Number Of Doors : ' + story.doors + "</div>" +
					"<br>" +

					"<button class='btn btn-primary' data-dismiss='modal' onclick='setAdvertid(this.id)' data-toggle='modal' data-target='#updateModel" + count + "' id='" + story.advertid + "'>" + "Update Advert" + "</button>" + "&nbsp;" +
					"<button type='submit' class='btn btn-primary' onclick='deleteAdvert(this.id)' id='" + story.advertid + "'>" + "Delete Advert" + "</button>" +

					"</div>" +
					"</div>" +
					"</div>" +
					"</div>" +
					"</div>" +
					"</div>" +
					"</div>" +

					"<div class='modal fade' id='updateModel" + count + "' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'>" +
					"<div class='modal-dialog modal-dialog-scrollable' role='document'>" +
					"<div class='modal-content'>" +
					"<div class='modal-header'>" +
					"<h5 class='modal-title' id='exampleModalLongTitle'>" + 'Update Advert' + "</h5>" +
					"<button type='button' class='close' data-dismiss='modal' aria-label='Close'>" +
					"<span aria-hidden='true'>" + "&times;" + "</span>" +
					"</button>" +
					"</div>" +
					"<div class='modal-body'>" +
					"Image:" + "<input type='text' id = 'updateImage" + count + "' name='updateImages' value = '" + story.image + "' class='form-control'>" +
					"Advert title:" + "<input type='text' class='form-control' id='updateAdvertTitle" + count + "' value = '" + story.adverttitle + "' required>" +
					"Price:" + "<input type='number' class='form-control' id='updatePrice" + count + "' value = '" + story.price + "'  required>" +
					"Make:" + "<input type='text' class='form-control' id='updateMake" + count + "' value = '" + story.make + "' required>" +
					"Model:" + "<input type='text' class='form-control' id='updatemodel" + count + "' value = '" + story.model + "' required>" +
					"Model variant:" + "<input type='text' class='form-control' id='updateModelVariant" + count + "' value = '" + story.modelvariant + "' required>" +
					"Model year:" + "<input type='number' class='form-control' id='updateModelYear" + count + "' value = '" + story.modelyear + "' required>" +
					"Mileage:" + "<input type='number' class='form-control' id='updateMileage" + count + "' value = '" + story.mileage + "' required>" +
					"Colour:" + "<input type='text' class='form-control' id='updateColour" + count + "' value = '" + story.colour + "' required>" +
					"Engine Size:" + "<input type='text' class='form-control' id='updateEngineSize" + count + "' value = '" + story.enginesize + "' required>" +
					"Gearbox:" + "<select class='form-control' id='updateGearbox" + count + "' required>" +
					"<option value= '" + story.gearbox + "'>" + story.gearbox + "</option>" +
					"<option value='Automatic'>" + "Automatic" + "</option>" +
					"<option value='Manual'>" + "Manual" + "</option>" +
					"</select>" +
					"Number of doors:" + "<select class='form-control' id='updateDoors" + count + "' required>" +
					"<option value= '" + story.doors + "'>" + story.doors + "</option>" +
					"<option value='2 doors'>" + "2 doors" + "</option>" +
					"<option value='3 doors'>" + "3 doors" + "</option>" +
					"<option value='4 doors'>" + "4 doors" + "</option>" +
					"<option value='5 doors'>" + "5 doors" + "</option>" +
					"<option value='6 doors'>" + "6 doors" + "</option>" +
					"</select>" +
					"Enter advert description :" +
					"<textarea rows='4' cols='50' type='text' name='updateDetails' class='form-control' id='updateImageDetails" + count + "'>" +
					"" + story.advertdescription + "" +
					"</textarea>" +
					"</div>" +
					"<div class='modal-footer'>" +
					"<button type='button' class='btn btn-secondary' data-dismiss='modal'>" + "Close" + "</button>" +
					"<button type='button' class='btn btn-primary' onclick='updateAdvert(" + count + ")' data-dismiss='modal' >" + "Save changes" + "</button>" +
					"</div>" +
					"</div>" +
					"</div>" +
					"</div>"
				)
				count++;
				console.log(count);
			});
			return false;
		}
	});
}

renderCars();

function registrationRequest() {
	var username = document.getElementById("username").value;
	var email = document.getElementById('email').value;
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var password = document.getElementById('pass').value;
	var phoneNumber = document.getElementById('phoneNumber').value;

	var register = new Object();
	register.username = username;
	register.emailaddress = email;
	register.firstname = firstName;
	register.lastname = lastName;
	register.pswd = password;
	register.phonenumber = phoneNumber;

	var registerJSON = JSON.stringify(register);

	alert("Your account has been created");
	$.ajax({
		type: "POST",
		url: "http://" + location.hostname + ":9001/CarSeller/saveCarSellerDetails",
		contentType: "application/json",
		data: registerJSON,
		success: function (data) {
			renderCars();
		},
		error: function (data) {
			renderCars();
		},
		dataType: 'json'
	});

}

function deleteAdvert(advertId) {
	alert("Advert has been deleted");
	$.ajax({
		url: "http://" + location.hostname + ":9001/CarAdvert/deleteCarAdvert/" + advertId,
		type: 'DELETE',
		success: function (result) {
			window.location = window.location;
		},
		error: function (data) {
			window.location = window.location;
		}
	});
}

var gAdvertId;

function setAdvertid(advertId) {
	console.log(advertId);
	gAdvertId = advertId;
}

function updateAdvert(count) {
	var image = document.getElementById("updateImage" + count).value;
	var advertTitle = document.getElementById('updateAdvertTitle' + count).value;
	var price = document.getElementById("updatePrice" + count).value;
	var make = document.getElementById('updateMake' + count).value;
	var model1 = document.getElementById('updatemodel' + count).value;
	var modelVariant = document.getElementById('updateModelVariant' + count).value;
	var modelYear = document.getElementById('updateModelYear' + count).value;
	var mileage = document.getElementById('updateMileage' + count).value;
	var colour = document.getElementById('updateColour' + count).value;
	var engineSize = document.getElementById('updateEngineSize' + count).value;
	var gearbox = document.getElementById('updateGearbox' + count).value;
	var doors = document.getElementById('updateDoors' + count).value;
	var advertDescription = document.getElementById('updateImageDetails' + count).value;


	var carAdvert = new Object();
	carAdvert.advertid = gAdvertId;
	carAdvert.username = "dwdwd";
	carAdvert.image = image;
	carAdvert.advertdescription = advertDescription;
	carAdvert.price = price;
	carAdvert.make = make;
	carAdvert.model = model1;
	carAdvert.modelvariant = modelVariant;
	carAdvert.modelyear = modelYear;
	carAdvert.mileage = mileage;
	carAdvert.colour = colour;
	carAdvert.enginesize = engineSize;
	carAdvert.gearbox = gearbox;
	carAdvert.doors = doors;
	carAdvert.adverttitle = advertTitle;

	var carAdvertJSON = JSON.stringify(carAdvert);

	alert("Your advert has been updated");

	$.ajax({
		type: "PUT",
		url: "http://" + location.hostname + ":9001/CarAdvert/updateCarAdvert",
		contentType: "application/json",
		data: carAdvertJSON,
		success: function (data) {
			renderCars();
		},
		error: function (data) {
			renderCars();
		},
		dataType: 'json'
	});

}




