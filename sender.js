$(document).ready(function() { // вся магия после загрузки страницы	
	// ПЕРЕЗВОНИТЕ МНЕ
	$("#ajaxform").submit(function() { // перехватываем все при событии отправки
		var form = $(this); // запишем форму, чтобы потом не было проблем с this
		var errorText = ''; // предварительно ошибок нет
		var error = false; // предварительно ошибок нет
		form.find('input').each( function() { // пробежим по каждому полю в форме
			if($(this).val() == '') { // если находим пустое
				errorText += 'Заполните поле "'+$(this).attr('placeholder')+'"!'; // говорим заполняй!
				error = true; // ошибка
			}
		});
		if(!error) { // если ошибки нет
			var data = form.serialize(); // подготавливаем данные
			console.log(data);
			$.ajax({ // инициализируем ajax запрос
		    type: 'POST', // отправляем в POST формате, можно GET
		    url: 'sender.php', // путь до обработчика, у нас он лежит в той же папке
		    dataType: 'json', // ответ ждем в json формате
		    data: data, // данные для отправки
	        beforeSend: function(data) { // событие до отправки
	            form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
	        },
	        success: function(data){ // событие после удачного обращения к серверу и получения ответа
	       		if(data['error']) { // если обработчик вернул ошибку
	       			console.log(data['error']); // покажем её текст
	       		} else { // если все прошло ок
	       			alert('Спасибо!'); // пишем что все ок
	       		}
	        },
	        error: function (xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
	            console.log(xhr.status+thrownError); // покажем ответ сервера и текст ошибки
	        },
	        complete: function(data) { // событие после любого исхода
	            form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
	        }
	    });
		} else {
			alert(errorText); // покажем ошибку
		}
		return false; // вырубаем стандартную отправку формы
	});
	
	// АНКЕТА РАЗМЕРОВ
	$("#ajaxform2").submit(function() { // перехватываем все при событии отправки
		$('.final-name').text(', ' + $('.fname').val());
		console.log('FORM SUBMITED!');
		var form = $(this); // запишем форму, чтобы потом не было проблем с this
		var errorText = ''; // предварительно ошибок нет
		var error = false; // предварительно ошибок нет
		form.find('input').each( function() { // пробежим по каждому полю в форме
			// if($(this).val() == '') { // если находим пустое
			// 	errorText += 'Заполните "'+$(this).attr('placeholder')+'"!'; // говорим заполняй!
			// 	error = true; // ошибка
			// }
		});
		if(!error) { // если ошибки нет
			var data = form.serialize(); // подготавливаем данные
			console.log(data);
			$.ajax({ // инициализируем ajax запрос
		    type: 'POST', // отправляем в POST формате, можно GET
		    url: 'sender2.php', // путь до обработчика, у нас он лежит в той же папке
		    dataType: 'json', // ответ ждем в json формате
		    data: data, // даINO6/нные для отправки
	        beforeSend: function(data) { // событие до отправки
	            form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
	        },
	        success: function(data){ // событие после удачного обращения к серверу и получения ответа
	       		if(data['error']) { // если обработчик вернул ошибку
	       			console.log(data['error']); // покажем её текст
	       		} else { // если все прошло ок
	       			alert('Письмо отвравлено!'); // пишем что все ок
	       		}
	        },
	        error: function (xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
	            console.log(xhr.status+thrownError); // покажем ответ сервера и текст ошибки
	        },
	        complete: function(data) { // событие после любого исхода
	            form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
	        }
	    });
		} else {
			alert(errorText); // покажем ошибку
		}
		return false; // вырубаем стандартную отправку формы
	});
	
	// ОСТАВИТЬ СООБЩЕНИЕ
	$("#ajaxform3").submit(function() { // перехватываем все при событии отправки
		var form = $(this); // запишем форму, чтобы потом не было проблем с this
		var error = false; // предварительно ошибок нет
		var errorText = ''; // предварительно ошибок нет
		form.find('input').each( function() { // пробежим по каждому полю в форме
			if($(this).val() == '') { // если находим пустое
				errorText += 'Заполните поле "'+$(this).attr('placeholder')+'"!'; // говорим заполняй!
				error = true; // ошибка
			}
		});
		if(!error) { // если ошибки нет
			var data = form.serialize(); // подготавливаем данные
			console.log(data);
			$.ajax({ // инициализируем ajax запрос
		    type: 'POST', // отправляем в POST формате, можно GET
		    url: 'sender3.php', // путь до обработчика, у нас он лежит в той же папке
		    dataType: 'json', // ответ ждем в json формате
		    data: data, // даINO6/нные для отправки
	        beforeSend: function(data) { // событие до отправки
	            form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
	        },
	        success: function(data){ // событие после удачного обращения к серверу и получения ответа
	       		if(data['error']) { // если обработчик вернул ошибку
	       			console.log(data['error']); // покажем её текст
	       		} else { // если все прошло ок
	       			alert('Письмо отвравлено!'); // пишем что все ок
	       		}
	        },
	        error: function (xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
	            console.log(xhr.status+thrownError); // покажем ответ сервера и текст ошибки
	        },
	        complete: function(data) { // событие после любого исхода
	            form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
	        }
	    });
		} else {
			alert(errorText); // покажем ошибку
		}
		return false; // вырубаем стандартную отправку формы
	});
});