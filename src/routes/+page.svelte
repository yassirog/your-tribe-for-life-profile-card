<script>
  export let data;
  import { fly } from "svelte/transition"; 

  let animate = false; 
  let rotateAngle = 0; 

 
  const animatePortion = () => {
    animate = !animate; 
  };

  const rotatePortion = () => {
    rotateAngle += 180; 
  };
</script>

<h1>OUDE NOTITIEBLOK</h1>

<div class="photos">
  <!-- Klikbare foto1 om de hele portion te laten draaien -->
  <p class="foto1" on:click={rotatePortion} style="cursor: pointer;">
    draai draaidraai draaidraai draaidraai draaidraai draaidraai draaidraai
    draaidraai draaidraai draaidraai draaidraai draaidraai draaidraai draaidraai
    draaidraai draaidraai draaidraai draaidraai draaidraai draaidraai draaidraai
    draaidraai draaidraai draaidraai draaidraai draaidraai draaidraai draaidraai
    draaidraai draaidraai draaidraai draaidraai draaidraai draaidraai draai
  </p>
  <picture class="foto2">
    <img
      src="/assets/graffiti.png"
      loading="lazy"
      alt="Foto van een Graffiti"
    />
  </picture>
  <picture class="foto3">
    <img
      src="/assets/splatter.png"
      loading="lazy"
      alt="Foto van een Graffiti"
    />
  </picture>
  <picture class="foto4">
    <img src="/assets/morocco.png" loading="lazy" alt="Foto van een Graffiti" />
  </picture>
  <!-- Klikbare foto5 om animatie te triggeren -->
  <p class="foto5" on:click={animatePortion} style="cursor: pointer;">
    in uit in uit in uit in uit in uit in uit in uit in uit in uit in uit in uit
    in uit in uit in uit in uit in uit in uit in uit in uit in uit in uit in uit
    in uit in uit in uit in uit in uit in uit in uit in uit in uit in uit in uit
    in uit in uit in uit in uit in uit in uit in uit in uit in uit in uit in uit
    in uit in uit in uit in uit in uit in uit in uit in uit in uit in uit in uit
    in uit
  </p>
  <ul class="foto6">
    <li>pindakaas</li>
    <li>hagelslag</li>
    <li>uien</li>
    <li>knoflook</li>
    <li>(risotto)rijst</li>
    <li>pasta</li>
    <li>bloem</li>
    <li>lasagnebladen</li>
    <li>olijfolie</li>
    <li>(room)boter</li>
  </ul>
  <p class="foto7">Sprint 13 | Week 3
    Epic -> Stories -> Tasks Epic zijn een handige manier om werk te organiseren en een hiërarchie te creëren. Het idee is om werk op te splitsen in opleverbare stukken, zodat grotere projecten kunnen worden afgerond en klanten op regelmatige basis warde krijgen. Epics helpen teams werk op te splitsen terwijl ze naar een groter doel toewerken.</p>
</div>

<div
  class="portion"
  style:transform={`rotate(${rotateAngle}deg)`}
  class:rotating={rotateAngle % 360 !== 0}
>
  <div class="title">
    <h1>Profile</h1>
  </div>
  <div class="card">
    {#if animate}
      <div class="profilepicture" transition:fly={{ y: 100, duration: 500 }}>
        <img src={data.person.avatar} alt="Foto van {data.person.name}" />
      </div>
      <div class="person-info" transition:fly={{ y: 100, duration: 500 }}>
        <h2 class="naam">{data.person.name}</h2>
        <h3>- ({data.person.nickname})</h3>
        <h2>•</h2>
        <h3>Squad 2C</h3>
      </div>
      <div class="extra-info" transition:fly={{ y: 100, duration: 500 }}>
        <h3 class="italic">Front-end Developer</h3>
      </div>
    {/if}
  </div>
</div>

<div class="about">
  <p>
    Klik op random dingen of hover erop, misschien gebeurt er wat vets (Alleen op desktop). Ik heb
    cursor pointer gebruikt dus die verraad het al ;p
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
  p,
  li {
    font-size: 105%;
  }
  /* COMMON CSS */
  .rotate180 {
    transform: rotate(180deg);
    transition: transform 1s ease-in-out;
  }

  .foto1 {
    position: absolute;
    top: 0%;
    left: 5%;
    transform: rotate(-10deg);
  }

  .foto2 {
    position: absolute;
    top: 30%; 
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

  .foto5 {
    cursor: pointer;
    position: absolute;
    top: 70%;
    left: 10%;
    transform: rotate(10deg);
  }

  .foto6 {
    position: absolute;
    top: 50%;
    right: 20%;
    transform: rotate(6deg);
  }

  .foto7 {
    position: absolute;
    right: -5%;
    transform: rotate(2deg);
  }

  .changepicture {
    cursor: pointer;
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
    width: 400px;
    height: 620px;
    border: black solid 10px;
    border-radius: 10px;
    position: relative;
    overflow: hidden; 
    transition: transform 1s ease-in-out; 
  }

  .portion::before {
    content: "";
    position: absolute;
    top: -100%;
    left: -100%;
    width: 30%;
    height: 200%;
    background: rgba(255, 255, 255, 0.2); 
    transform: rotate(45deg); 
    pointer-events: none; 
    transition: none;
    opacity: 0; 
  }
  .portion .card,
  .portion .person-info,
  .portion .extra-info {
    position: relative; 
    z-index: -1;
  }

  .portion:hover::before {
    animation: glimmer 2s infinite;
    opacity: 1;
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
    margin-bottom: 0em;
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
    transition: 0.3s;
  }

  a:hover {
    transform: scale(1.2);
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
