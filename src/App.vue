<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark barra-principal shadow-sm">
    <div class="container-fluid">
      <span class="navbar-brand">
        Programación Front End
      </span>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menuPrincipal"
        aria-controls="menuPrincipal"
        aria-expanded="false"
        aria-label="Abrir navegación"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        id="menuPrincipal"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink
              class="nav-link enlace-menu"
              to="/"
            >
              Calificaciones
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink
              class="nav-link enlace-menu"
              to="/registro"
            >
              Registro
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main class="contenido-principal">
    <div class="container py-5">
      <RouterView />
    </div>
  </main>
</template>

<style>
body {
  background-color: #f3f6fa;
}

.barra-principal {
  background: linear-gradient(135deg, #173f68, #256da7);
  padding-top: 12px;
  padding-bottom: 12px;
}

.navbar-brand {
  color: #ffffff;
  font-size: 1.15rem;
  font-weight: 700;
  white-space: nowrap;
}

.enlace-menu {
  color: rgba(255, 255, 255, 0.88) !important;
  border-radius: 8px;
  margin: 0 3px;
  padding-left: 12px !important;
  padding-right: 12px !important;
}

.enlace-menu:hover {
  color: #ffffff !important;
  background-color: rgba(255, 255, 255, 0.15);
}

.enlace-menu.router-link-exact-active {
  color: #ffffff !important;
  background-color: rgba(255, 255, 255, 0.22);
  font-weight: 600;
}

.contenido-principal {
  min-height: calc(100vh - 70px);
  background: linear-gradient(
    180deg,
    #eef4fa 0%,
    #f8f9fb 45%,
    #ffffff 100%
  );
}

@media (max-width: 991.98px) {
  .navbar-collapse {
    padding-top: 12px;
  }

  .enlace-menu {
    margin: 2px 0;
  }
}
</style>