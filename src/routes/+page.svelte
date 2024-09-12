<script>
  export let data;
</script>

<html lang="en">
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <main>
      <div class="title"><h1>Profile</h1></div>
    </main>
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


    <div class="about">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius
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
  </body>
</html>

<style>
  /* COMMON CSS */
  
  :root {
    --background-color: #ebe6e6;
  }

  * {
    font-family: "Jost", sans-serif;
  }

  html {
    background-color: var(--background-color);
  }

  .flex {
    display: flex;
    gap: 8px;
  }



  .title {
    display: flex;
    justify-content: center;
    margin-top: 5em;
  }

  /* PROFILEPICTURE */

  .profilepicture {
    display: flex;
    justify-content: center;
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
    align-items: center;
    flex-direction: column;
  }

  .person-info {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: -2em;
    margin: 0.5em;
    margin-left: 1.75em;
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
    margin-top: -0.5em;
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
    border: none;
    text-align: center;
    background-color: var(--background-color);
    cursor: pointer;
    color: black;
    text-decoration: none;
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4em;
    gap: 2em;
  }

  @media (min-width: 600px) {
    img {
      width: 350px;
    }

    p {
      max-width: 60ch;
      text-align: center;
    }
  }
</style>
