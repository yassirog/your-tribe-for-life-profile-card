<script>
  export let data;

</script>
<div class="photos">
  <picture class="foto1">
    <img src="/assets/arrows.png" loading="lazy" alt="">
  </picture>
  <picture class="foto2">
    <img src="/assets/graffiti.png" loading="lazy" alt="">
  </picture>
  <picture class="foto3">
    <img src="/assets/splatter.png" loading="lazy" alt="">
  </picture>
  <picture class="foto4">
    <img src="/assets/morocco.png" loading="lazy" alt="">
  </picture>
  <picture class="foto5">
    <img src="/assets/arro2.png" loading="lazy" alt="">
  </picture>
</div>

<div class="portion">
      <div class="title"><h1>Profile</h1></div>
    <div class="card">
    <div class="profilepicture">
      <img src={data.person.avatar} alt="Foto van {data.person.name}" />
    </div>
    <div class="person-info">
      <h2 class="naam">{data.person.name}</h2>
      <h3>- ({data.person.nickname})</h3>
      <h2>•</h2>
      <h3>Squad 2C</h3>
    </div>
    <div class="extra-info">
      <h3 class="italic">Front-end Developer</h3>
    </div>
    </div>
  </div>


    <div class="about">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia,molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborumnumquam blanditiis harum quisquam eius
      </p>
    </div>

    <div class="buttons">
      <a class="flex" href={data.person.website}>
        <picture>
          <img class="icon" loading="lazy" src="/assets/id.png" />
        </picture>
        <p>Visitekaart</p>
      </a>
      <hr /> 
      <a class="flex" href={data.person.github_handle}>
        <picture>
          <img class="icon" loading="lazy" src="assets/github.png" />
        </picture>
        <p>Github</p>
      </a>
    </div>





<style>
  /* COMMON CSS */

  .foto1 {
  position: absolute;
  top: -10%;  /* Pas deze waarden aan om de positie van de foto te regelen */
  left: 5%;
  transform: rotate(45deg);
}

.foto2 {
  position: absolute;
  top: 30%;  /* Willekeurige positie */
  right: -5%;
  transform: rotate(20deg);
}

.foto3 {
  position: absolute;
  top: -8%;
  right: 30%;
  width: 200px;
  z-index: -1;
  transform: rotate(5deg);
}

.foto4 {
  position: absolute;
  top: 25%;
  left: 10%;
  transform: rotate(-5deg);
}

.foto5{
  position: absolute;
  top: 60%;
  left: 18%;
  transform: rotate(30deg);


}

  .flex {
    display: flex;
    gap: 8px;
  }



  .title {
    display: flex;
    justify-content: center;
    margin-top: 3em;
  }

  /* PROFILEPICTURE */

  .portion {
    border: black solid 1px;
    position: relative; /* Om het pseudo-element correct te positioneren */
    overflow: hidden; /* Zorgt ervoor dat de gloed binnen de grenzen blijft */
  }

  .portion::before {
  content: '';
  position: absolute;
  top: -100%;
  left: -100%;
  width: 30%;
  height: 200%;
  background: rgba(255, 255, 255, 0.2); /* Witte gloed met transparantie */
  transform: rotate(45deg); /* Zorgt ervoor dat de gloed diagonaal beweegt */
  pointer-events: none; /* Maakt de animatie niet interactief */
  transition: none; /* Geen animatie tenzij gehoverd */
  opacity: 0; /* Zorgt ervoor dat het effect onzichtbaar is */
}
.portion .card, .portion .person-info, .portion .extra-info {
  position: relative; /* Zorgt ervoor dat de inhoud onder de gloed blijft */
  z-index: -1; /* Zet de content onder het pseudo-element */
}

.portion:hover::before {
  animation: glimmer 2s infinite; /* Voegt de animatie toe bij hover */
  opacity: 1; /* Maakt het effect zichtbaar */
}

@keyframes glimmer {
  0% {
    top: -100%;
    left: -100%;
  }
  100% {
    top: 100%;
    left: 100%;
  }
}

  .profilepicture {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 350px;
    filter: grayscale(100%);
  }

  .icon {
    width: 50px;
  }

  .title h1 {
    font-weight: lighter;
  }

  .card {
    display: flex;
    flex-direction: column;
    padding: 1em;
    width: 22.5rem;
  }

  .person-info {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: -2em;
    margin: 0.5em;
  }

  .extra-info {
    display: flex;
    margin-left: 1.75em;
    margin-top: -3em;
  }

  .naam {
    font-weight: normal;
  }

  .italic {
    font-weight: 200;
    font-style: italic;
    display: flex;
    justify-content: baseline;
  }

  h3 {
    text-align: center;
    font-weight: 200;
  }

  .about {
    display: flex;
    text-align: left;
    margin: 2em;
  }

  hr {
    margin: 0 5px;
    height: 60px;
    width: 1px;
    border: none;
    background-color: black;
  }

  a {
    border-radius: 10px;
    width: 8em;
    text-align: center;
    cursor: pointer;
    color: black;
    text-decoration: none;
    border: solid black 1px;
    padding-left: 1em;
    padding-right: 1em;
  }

  a:hover {
    transform: rotate3d(180deg);
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
  }

  /* NEW PHOTOS */
  

  @media (min-width: 600px) {
    img {
      width: 350px;
    }

    p {
      max-width: 60ch;
      text-align: center;
    }

    .card {
      width: 23rem;
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 1000px) {
    .photos {
      display: none;
    }
  }
</style>
