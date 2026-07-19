<script>
export default {
  data() {
    return {
      nombre: '',
      correo: '',
      contrasena: '',
      repetirContrasena: '',

      errores: {
        nombre: '',
        correo: '',
        contrasena: '',
        repetirContrasena: ''
      }
    }
  },

  computed: {
    correoValido() {
      const expresionCorreo =
        /^[^\s@]+@[^\s@]+\.(com|cl|net|org|edu|com\.cl)$/i

      return expresionCorreo.test(this.correo.trim())
    },

    contrasenasCoinciden() {
      return (
        this.contrasena !== '' &&
        this.repetirContrasena !== '' &&
        this.contrasena === this.repetirContrasena
      )
    }
  },

  methods: {
    enviarFormulario() {
      this.errores.nombre = ''
      this.errores.correo = ''
      this.errores.contrasena = ''
      this.errores.repetirContrasena = ''

      let formularioValido = true

      if (this.nombre.trim() === '') {
        this.errores.nombre =
          'El campo nombre es requerido'

        formularioValido = false
      }

      const expresionCorreo =
        /^[^\s@]+@[^\s@]+\.(com|cl|net|org|edu|com\.cl)$/i

      if (this.correo.trim() === '') {
        this.errores.correo =
          'El campo correo es requerido'

        formularioValido = false
      } else if (
        !expresionCorreo.test(this.correo.trim())
      ) {
        this.errores.correo =
          'El formato del correo no es válido'

        formularioValido = false
      }

      if (this.contrasena === '') {
        this.errores.contrasena =
          'El campo contraseña es requerido'

        formularioValido = false
      }

      if (this.repetirContrasena === '') {
        this.errores.repetirContrasena =
          'El campo repetir contraseña es requerido'

        formularioValido = false
      } else if (
        this.contrasena !== this.repetirContrasena
      ) {
        this.errores.repetirContrasena =
          'Las contraseñas no coinciden'

        formularioValido = false
      }

      if (formularioValido) {
        alert('El registro se ha realizado correctamente')
      }
    }
  }
}
</script>

<template>
  <section class="registro">
    <div class="tarjeta-registro mx-auto">
      <h1 class="titulo-registro">
        Formulario de registro
      </h1>

      <p class="descripcion-registro">
        Completa correctamente todos los campos.
      </p>

      <form
        novalidate
        @submit.prevent="enviarFormulario"
      >
        <div class="mb-3">
          <label
            for="nombre"
            class="form-label"
          >
            Nombre
          </label>

          <input
            id="nombre"
            v-model="nombre"
            class="form-control"
            type="text"
            placeholder="Ingrese su nombre"
          />

          <p
            v-if="errores.nombre"
            class="mensaje-error"
          >
            {{ errores.nombre }}
          </p>
        </div>

        <div class="mb-3">
          <label
            for="correo"
            class="form-label"
          >
            Correo
          </label>

          <div class="campo-con-validacion">
            <input
              id="correo"
              v-model="correo"
              class="form-control"
              :class="{
                'campo-correcto': correoValido
              }"
              type="text"
              placeholder="ejemplo@correo.com"
            />

            <span
              v-if="correoValido"
              class="palomita"
              aria-label="Correo correcto"
            >
              ✓
            </span>
          </div>

          <p
            v-if="errores.correo && !correoValido"
            class="mensaje-error"
          >
            {{ errores.correo }}
          </p>
        </div>

        <div class="mb-3">
          <label
            for="contrasena"
            class="form-label"
          >
            Contraseña
          </label>

          <div class="campo-con-validacion">
            <input
              id="contrasena"
              v-model="contrasena"
              class="form-control"
              :class="{
                'campo-correcto': contrasenasCoinciden
              }"
              type="password"
              placeholder="Ingrese una contraseña"
            />

            <span
              v-if="contrasenasCoinciden"
              class="palomita"
              aria-label="Contraseña correcta"
            >
              ✓
            </span>
          </div>

          <p
            v-if="
              errores.contrasena &&
              !contrasenasCoinciden
            "
            class="mensaje-error"
          >
            {{ errores.contrasena }}
          </p>
        </div>

        <div class="mb-4">
          <label
            for="repetirContrasena"
            class="form-label"
          >
            Repetir contraseña
          </label>

          <div class="campo-con-validacion">
            <input
              id="repetirContrasena"
              v-model="repetirContrasena"
              class="form-control"
              :class="{
                'campo-correcto': contrasenasCoinciden
              }"
              type="password"
              placeholder="Repita la contraseña"
            />

            <span
              v-if="contrasenasCoinciden"
              class="palomita"
              aria-label="Contraseñas coinciden"
            >
              ✓
            </span>
          </div>

          <p
            v-if="
              errores.repetirContrasena &&
              !contrasenasCoinciden
            "
            class="mensaje-error"
          >
            {{ errores.repetirContrasena }}
          </p>
        </div>

        <button
          type="submit"
          class="btn btn-success boton-enviar"
        >
          Enviar registro
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.registro {
  padding: 10px 0 30px;
}

.tarjeta-registro {
  max-width: 520px;
  padding: 32px;
  background-color: #ffffff;
  border: 1px solid #dce4ec;
  border-radius: 16px;
  box-shadow: 0 10px 28px
    rgba(32, 70, 110, 0.12);
}

.titulo-registro {
  margin-bottom: 8px;
  color: #173f68;
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
}

.descripcion-registro {
  margin-bottom: 28px;
  color: #6c757d;
  text-align: center;
}

.form-label {
  display: block;
  color: #30475e;
  font-weight: 600;
}

.campo-con-validacion {
  position: relative;
}

.form-control {
  min-height: 44px;
  padding-right: 48px;
}

.campo-correcto {
  border-color: #198754;
  box-shadow: 0 0 0 0.15rem
    rgba(25, 135, 84, 0.12);
}

.palomita {
  position: absolute;
  top: 50%;
  right: 13px;
  display: flex;
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: #198754;
  border-radius: 50%;
  font-size: 0.95rem;
  font-weight: 700;
  transform: translateY(-50%);
}

.mensaje-error {
  margin-top: 6px;
  margin-bottom: 0;
  color: #dc3545;
  font-size: 0.9rem;
}

.boton-enviar {
  width: 100%;
  min-height: 44px;
  font-weight: 600;
}

@media (max-width: 575.98px) {
  .tarjeta-registro {
    padding: 23px 18px;
  }

  .titulo-registro {
    font-size: 1.45rem;
  }
}
</style>