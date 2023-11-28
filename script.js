//FILTER EVENT SYSTEM
const allButton = document.getElementById('allFilter');
const soccerButton = document.getElementById('soccerFilter');
const basketballButton = document.getElementById('basketballFilter');

const events = document.querySelectorAll('.container > div');

allButton.addEventListener('click', () => {
    events.forEach(event => {
        event.style.display = 'block';
    });
});

soccerButton.addEventListener('click', () => {
    filterEvents('item-container-soccer');
});

basketballButton.addEventListener('click', () => {
    filterEvents('item-container-basketball');
});

function filterEvents(type) {

    if (!document.querySelector(`.${type}`)) {
        showError(); 
        return;
    }

    events.forEach(event => {
      if (event.classList.contains(type)) {
        event.style.display = 'block'; 
      } else {
        event.style.display = 'none'; 
     }
    });
}

function showError() {
    
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Ce type d\'événement n\'existe pas.';
    document.body.appendChild(errorMessage);
  
    setTimeout(() => {
      errorMessage.remove();
    }, 3000); 
}

//FETCH API SYSTEM

const fetchButton = document.getElementById('fetchData');
const IdInput = document.getElementById('IdInput');
const errorMsg = document.getElementById('errorData');

fetchButton.addEventListener('click', () => {
    const gameId = IdInput.value.trim(); 
  
    if (gameId) {
      fetchGameData(gameId);
    } else {
      errorMsg.textContent = 'Veuillez entrer un ID de match valide.';
    }
});
  
function fetchGameData(gameId) {
    fetch(`https://www.balldontlie.io/api/v1/games/${gameId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
        .then(data => {

        
        console.log(data); 
            
        const event_date = data.date;

        const homeTeamName = data.home_team.full_name;
        const homeTeamConf = data.home_team.conference;
        const homeTeamScore = data.home_team_score;
        const homeTeamCity = data.home_team.city;

        const visitorTeamName = data.visitor_team.full_name;
        const visitorTeamConf = data.home_team.conference;
        const visitorTeamScore = data.visitor_team_score;

        const GameDetailsHTML = 
        `
            <div class="item-container item-container-soccer">
                <div class="img-container">
                    <img src="/src/img/nba.webp" alt="Event image">
                </div>

                <div class="body-container">
                    <div class="overlay"></div>

                    <div class="event-info">
                        <p class="title">NBA Game</p>
                        <div class="separator"></div>
                        <p class="info">${homeTeamCity} , US</p>
                        <p class="price">Passed</p>

                        <div class="additional-info">
                            <p class="info">
                                <i class="fas fa-map-marker-alt "></i>
                                ${homeTeamCity} Stadium 
                            </p>
                            <p class="info">
                                <i class="far fa-calendar-alt "></i>
                                ${event_date}   
                            </p>
                            
                            <p class="decription info"> 
                            There are the details about the ${gameId}th game's ID
                            An intense matchup unfolded between the ${homeTeamName} from the ${homeTeamConf}, scoring ${homeTeamScore}, 
                            and the visiting ${visitorTeamName} from the ${visitorTeamConf}, tallying ${visitorTeamScore}. <span> more...</span>
                            </p>
                        </div>
                    </div>
                    <button class="action">Book it</button>
                </div> 
            </div>
        `
        const container = document.querySelector('.fetch-container');

        container.innerHTML = GameDetailsHTML;

      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        errorMsg.textContent = 'Une erreur est survenue lors de la récupération des données.';
    });
}