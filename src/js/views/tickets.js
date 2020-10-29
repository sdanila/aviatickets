class TicketsUI {
    constructor() {
        this.container = document.querySelector('.tickets-sections .row');
    }

    renderTickets(tickets) {

        this.clearContainer();

        if (!tickets.length) {
            this.showEmptyMsg();
            return;
        }

        let fragment;

        console.log(tickets);

        tickets.forEach(ticket => {
            const template = TicketsUI.ticketTemplate(ticket);
            fragment += template;
        });

        this.container.insertAdjacentHTML('beforeend', fragment);
    }

    clearContainer() {
        this.container.innerHTML = '';
    }

    showEmptyMsg() {
        const template = TicketsUI.emptyMsgTemplate();
        this.container.insertAdjacentHTML('afterbegin', template);
    }

    static emptyMsgTemplate() {
        return `
        <div class="ticket-empty-res-msg">
            Билетов по вашему запросу не найдено.
        </div>
        `
    }

    static ticketTemplate(ticket) {
        return `
        <div class="col s12 m6">
            <div class="card ticket-card">
                <div class="ticket-airline d-flex align-items-center">
                    <img 
                        src="${ticket.airline_logo}" 
                        alt="Logo" 
                        class="ticket-airline-img"
                    >
                    <span class="ticket-airline-name">${ticket.airline_name}</span>
                </div>
                <div class="ticket-destination d-flex align-items-center">
                    <div class="d-flex align-items-center mr-auto">
                        <span class="ticket-city">${ticket.origin_name}</span>
                        <i class="medium material-icons">flight_takeoff</i>
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="medium material-icons">flight_land</i>
                        <span class="ticket-city">${ticket.destination_name}</span>
                    </div>
                </div>
                <div class="ticket-time-price d-flex align-items-center">
                    <span class="ticket-time-departure">${ticket.departure_at}</span>
                    <span class="ticket-price ml-auto">${ticket.price}</span>
                </div>
                <div class="ticket-additional-info">
                    <span class="ticket-transfers">
                        Пересадок: ${ticket.transfers}
                    </span>
                    <span class="ticket-flight-number">
                        Номер рейса: ${ticket.flight_number}
                    </span>
                </div>
            </div>
        </div>
        `
    }
}

const ticketUI = new TicketsUI();

export default ticketUI;