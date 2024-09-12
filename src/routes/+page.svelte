<script>
  export let data;
</script>

<html lang="en">
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Carme&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <main>
      <div class="title"><h1>Profile</h1></div>
    </main>
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
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius 
  </p>
</div>

    <div class="buttons">
      <a href="{data.person.website}"><p>Visitekaart</p></a>
      <hr>
      <a href="{data.person.github_handle}"><p>Github</p></a>
    </div>


  </body>
</html>

<style>
  :root {
    --background-color: #ebe6e6;
  }

  * {
    font-family: "Corme", sans-serif;
  }

  html {
    background-color: var(--background-color);
  }

  .profilepicture {
    display: flex;
    justify-content: center;
  }

  .title {
    display: flex;
    justify-content: center;
    margin-top: 5em;
  }

  img {
    width: 350px;
  }

  .title h1 {
    font-weight: lighter;
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
    margin-top: -2.5em;
  }

  .naam {
    font-weight: normal;
  }

  .italic {
    font-weight: lighter;
    font-style: italic;
    display: flex;
    justify-content: baseline;
  }

  h3 {
    text-align: center;
    font-weight: lighter;
  }

  .about {
    display: flex;
    text-align: center;
    margin: 1em;
  }

  hr {
    margin: 0 5px;
    height: 40px;
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
    margin-top: 4em;
    gap: 2em;
  }
</style>
