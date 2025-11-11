// Mallipohjat JV-Studio Code -editorille
const templates = [
  {
    name: 'Demo-sivu',
    code: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', sans-serif; background:#f0f0f0; padding:1rem; }
    h1 { color:#4f46e5; }
    p { color:#333; }
  </style>
</head>
<body>
  <h1>Tervetuloa JV-Studio Codeen!</h1>
  <p>Tämä on demo-sivu, voit muokata sisältöä vapaasti.</p>
</body>
</html>
`
  },
  {
    name: 'Kauppasivu',
    code: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body{font-family:'Segoe UI',sans-serif;margin:0;padding:0;} 
    header, footer{background:#4f46e5;color:white;padding:1rem;text-align:center;}
    nav a{margin:0 1rem;color:white;text-decoration:none;}
    section{padding:1rem;}
    .product{border:1px solid #ccc;padding:1rem;margin:0.5rem;display:inline-block;width:200px;text-align:center;}
    .product button{margin-top:0.5rem;padding:0.3rem 0.5rem;}
  </style>
</head>
<body>
<header>
  <h1>Kauppasivun otsikko</h1>
  <nav>
    <a href="#">Etusivu</a>
    <a href="#">Tuotteet</a>
    <a href="#">Yhteystiedot</a>
  </nav>
</header>
<section>
  <h2>Tuotteet</h2>
  <div class="product">
    <p>Tuote 1</p>
    <button onclick="alert('Lisätty koriin!')">Osta</button>
  </div>
  <div class="product">
    <p>Tuote 2</p>
    <button onclick="alert('Lisätty koriin!')">Osta</button>
  </div>
  <div class="product">
    <p>Tuote 3</p>
    <button onclick="alert('Lisätty koriin!')">Osta</button>
  </div>
</section>
<footer>© 2025 Kauppa</footer>
<script>
console.log('Kauppasivu ladattu');
</script>
</body>
</html>
`
  }
];
