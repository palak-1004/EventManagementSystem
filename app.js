 const form = document.getElementById("event-form");
        const eventList = document.getElementById("event-list");
        let events = [];

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const newEvent = {
                title: document.getElementById("title").value,
                description: document.getElementById("description").value,
                venue: document.getElementById("venue").value,
                date: document.getElementById("date").value,
                capacity: document.getElementById("capacity").value,
                price: document.getElementById("price").value,
                attendees: []
            };

            events.push(newEvent);
            renderEvents();
            form.reset();
        });

        function renderEvents() {
            eventList.innerHTML = "";
            events.forEach((ev, index) => {
                const div = document.createElement("div");
                div.classList.add("event-card");
                div.innerHTML = `
          <h3>${ev.title}</h3>
          <p>${ev.description}</p>
          <p><b>Venue:</b> ${ev.venue}</p>
          <p><b>Date:</b> ${ev.date}</p>
          <p><b>Capacity:</b> ${ev.capacity} | <b>Price:</b> $${ev.price}</p>
          <button onclick="buyTicket(${index})">Buy Ticket</button>
        `;
                eventList.appendChild(div);
            });
        }

        function buyTicket(index) {
            const name = prompt("Enter your name:");
            const email = prompt("Enter your email:");
            if (!name || !email) return alert("Name and Email required!");

            if (events[index].attendees.length >= events[index].capacity) {
                alert("Sorry, tickets sold out!");
                return;
            }

            events[index].attendees.push({ name, email });
            alert(`Ticket purchased successfully for ${events[index].title}`);
        }