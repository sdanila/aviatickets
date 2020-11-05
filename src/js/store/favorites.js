class Favorites {
    constructor() {
        this.container = document.querySelector('.dropdown-content');
        this.btnFavorites = [];
    }

    favButtons() {
        this.renderFavTickets();
        const addFavBtn = document.querySelectorAll('.add-favorite');
        addFavBtn.forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault();
                this.addTickets(btn.parentElement.children);
            })
        })
    }

    addTickets(ticket) {
        let acc = {
            src: ticket[0].firstElementChild.currentSrc,
            origin_name: ticket[1].children[0].children[0].innerText,
            depart_name: ticket[1].children[1].children[1].innerText,
            time: ticket[2].firstElementChild.innerText,
            price: ticket[2].lastElementChild.innerText,
            transfers: ticket[3].firstElementChild.innerText,
            flight_number: ticket[3].lastElementChild.innerText,
        }
        acc.id = acc.price + Math.random();
        this.btnFavorites.push(acc);
        this.renderFavTickets()
    }

    renderFavTickets() {

        this.clearContainer();

        if (!this.btnFavorites.length) {
            this.showEmptyMsg();
            return;
        }

        let fragment = '';
        this.btnFavorites.forEach(ticket => {
            const template = Favorites.renderr(ticket); 
            fragment += template;
        }, {})


        this.container.insertAdjacentHTML('afterbegin', fragment);

        const deleteBtns = document.querySelectorAll('.delete-favorite');

        deleteBtns.forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault();
                this.btnFavorites.forEach(ticket => {
                    if (ticket.id == btn.id) {
                        this.btnFavorites.splice(ticket, 1);
                        this.renderFavTickets();
                    }
                })
            } )
        })
    }

    clearContainer() {
        this.container.innerHTML = '';
    }

    showEmptyMsg() {
        const template = Favorites.emptyMsgTemplate()
        this.container.insertAdjacentHTML('afterbegin', template);
    }

    static emptyMsgTemplate() {
        return `
        <div class="favorite-empty-res-msg">
            Добавьте понравившиеся билеты в избранное :)
        </div>
        `
    }


    static renderr(acc) {
        return `
        <div class="favorite-item  d-flex align-items-start">
            <img
            src="${acc.src}"
            class="favorite-item-airline-img"
            />
            <div class="favorite-item-info d-flex flex-column">
            <div
                class="favorite-item-destination d-flex align-items-center"
            >
                <div class="d-flex align-items-center mr-auto">
                <span class="favorite-item-city">${acc.origin_name} </span>
                <i class="medium material-icons">flight_takeoff</i>
                </div>
                <div class="d-flex align-items-center">
                <i class="medium material-icons">flight_land</i>
                <span class="favorite-item-city">${acc.depart_name}</span>
                </div>
            </div>
            <div class="ticket-time-price d-flex align-items-center">
                <span class="ticket-time-departure">${acc.time}</span>
                <span class="ticket-price ml-auto">${acc.price}</span>
            </div>
            <div class="ticket-additional-info">
                <span class="ticket-transfers">${acc.transfers}</span>
                <span class="ticket-flight-number">${acc.flight_number}</span>
            </div>
            <a
                class="waves-effect waves-light btn-small pink darken-3 delete-favorite ml-auto"
                id=${acc.id}
                >Delete</a
            >
            </div>
        </div>
        `
    }


}

const favorites = new Favorites();

export default favorites; 