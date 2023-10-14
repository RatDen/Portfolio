$(function() {
	const buttons 	= document.getElementsByClassName("menu-button");
	const b_len 	= buttons.length;
	const menuItems = document.getElementsByClassName("menu-item-btn");
	const m_len		= menuItems.length;

	for (i = 0; i < b_len; ++i) {
		/*event скрывающий кнопку когда opasity 0*/
		buttons[i].addEventListener("transitionend", function() {
			if (menu.classList.contains("menu-closed")) { /*когда закрывается*/
				this.classList.add("hidden");
			} else {
				this.parentNode.getElementsByClassName("lamp")[0].classList.remove("lamp-onTransitionTimer") /*убирает таймер после перехода*/
			}
		}, false);

		/*event делает только эту кнопку активной*/
		if (i != 2) {
			buttons[i].addEventListener("click", function() {
				for (j = 0; j < m_len; ++j) {
					if (menuItems[j].classList.contains("menu-item-active")) {
						menuItems[j].classList.remove("menu-item-active");
					}
				}
				this.parentNode.classList.add("menu-item-active");
			}, false);
		}
	}

	const modalsContent = document.getElementsByClassName("menu-modal-content");
	const menuModals 	= document.getElementsByClassName("menu-modal");

	for (i = 0; i < menuModals.length; ++i) {
		menuModals[i].addEventListener("transitionend", function() {
			if (this.classList.contains("menu-modal-closed")) { /*if closed*/
				this.classList.add("hidden")
			} else { /*if not closed*/
				this.getElementsByClassName("menu-modal-content")[0].classList.remove("menu-modal-content-closed");
			}
		});

		modalsContent[i].addEventListener("transitionend", function() {
			if (this.classList.contains("menu-modal-content-closed")) {
				this.parentNode.classList.add("menu-modal-closed");
			}
		});
	}
});

$("#menuToggler").click(function() {
	const menu 		= document.getElementById("menu");
	const buttons 	= document.getElementsByClassName("menu-button");
	const b_len 	= buttons.length;
	const lamps 	= document.getElementsByClassName("lamp");

	if (menu.classList.contains("menu-closed")) {
		for (i = 0; i < b_len; ++i) {
			buttons[i].classList.remove("hidden");
		}
		setTimeout(function() { /*чтобы была отрисовка появления*/
			menu.classList.remove("menu-closed");
			for (i = 0; i < b_len; ++i) {
				lamps[i].classList.add("lamp-onTransitionTimer");
				lamps[i].classList.remove("lamp-off");
			}
		}, 0);
	} else { /*if not closed*/
		menu.classList.add("menu-closed");
		for (i = 0; i < b_len; ++i) {
			lamps[i].classList.add("lamp-off");
		}
	}
})

function closeModal(modal) {
	if (!modal.classList.contains("menu-modal-closed")) {
		modal.getElementsByClassName("menu-modal-content")[0].classList.add("menu-modal-content-closed");
		document.getElementById("slogan").classList.remove("slogan-closed");
		document.getElementsByClassName("menu-item-active")[0].classList.remove("menu-item-active");
	}
}

function openModal(modal) {
	if (modal.classList.contains("menu-modal-closed")) {
		const modals = document.getElementsByClassName("menu-modal");
		for (i = 0; i < modals.length; ++i) { /*закрытие других модальных окон*/
			if (!modals[i].classList.contains("menu-modal-closed")) {
				closeModal(modals[i]);
			}
		}

		modal.classList.remove("hidden");
		setTimeout(function() { /*чтобы была отрисовка появления*/
			modal.classList.remove("menu-modal-closed");
		}, 0);
		document.getElementById("slogan").classList.add("slogan-closed");
	}
}

