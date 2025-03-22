/* Colores base */
:root {
    --principal: #ffc2b7;
    --blanco: #ffffff;
    --negro: #212529;
  }
  
  /* General */
  body {
    background-color: var(--blanco);
    color: var(--negro);
    font-family: 'Arial', sans-serif;
  }
  
  .navbar {
    background-color: var(--principal) !important;
  }
  
  .navbar-brand,
  .nav-link {
    color: var(--negro) !important;
    font-weight: bold;
  }
  
  .nav-link:hover {
    text-decoration: underline;
  }
  
  .hero {
    background-color: var(--principal);
    color: var(--negro);
    padding: 60px 0;
    text-align: center;
  }
  
  .hero .btn-primary {
    background-color: var(--negro);
    border: none;
  }
  
  .hero .btn-primary:hover {
    background-color: #333;
  }
  
  .card {
    border: 1px solid var(--principal);
    transition: transform 0.3s ease;
  }
  
  .card:hover {
    transform: scale(1.03);
  }
  
  .card-title {
    color: var(--negro);
  }
  
  .btn-success {
    background-color: var(--principal);
    border: none;
    color: var(--negro);
  }
  
  .btn-success:hover {
    background-color: #ffa89b;
  }
  
  .footer {
    background-color: var(--principal);
    color: var(--negro);
    text-align: center;
    padding: 20px 0;
    margin-top: 50px;
  }
  