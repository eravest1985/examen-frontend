<script>
export default {
  data() {
    return {
      nota1: '',
      nota2: '',
      nota3: '',
      asistencia: '',
      promedio: null,
      estado: '',
      mensajeError: ''
    }
  },

  methods: {
    mostrarErrorValidacion() {
      this.promedio = null
      this.estado = ''
      this.mensajeError =
        'Por favor, ingrese valores válidos para las notas y la asistencia.'
    },

    calcularPromedio() {
      this.mensajeError = ''
      this.promedio = null
      this.estado = ''

      const nota1 = Number(this.nota1)
      const nota2 = Number(this.nota2)
      const nota3 = Number(this.nota3)
      const asistencia = Number(this.asistencia)

      const notasValidas =
        nota1 >= 10 &&
        nota1 <= 70 &&
        nota2 >= 10 &&
        nota2 <= 70 &&
        nota3 >= 10 &&
        nota3 <= 70

      const asistenciaValida =
        asistencia >= 0 &&
        asistencia <= 100

      if (
        this.nota1 === '' ||
        this.nota2 === '' ||
        this.nota3 === '' ||
        this.asistencia === '' ||
        !notasValidas ||
        !asistenciaValida
      ) {
        this.mensajeError =
          'Por favor, ingrese valores válidos para las notas y la asistencia.'
        return
      }

      const resultado =
        nota1 * 0.35 +
        nota2 * 0.35 +
        nota3 * 0.30

      this.promedio = resultado.toFixed(2)

      if (resultado >= 40 && asistencia >= 80) {
        this.estado = 'Aprobado'
      } else {
        this.estado = 'Reprobado'
      }
    }
  }
}
</script>

<template>
  <section class="calificaciones">
    <form
      class="mx-auto formulario mt-5"
      @submit.prevent="calcularPromedio"
      @invalid.capture="mostrarErrorValidacion"
    >
      <div class="mb-3">
        <label for="nota1" class="form-label">
          Nota 1
        </label>

        <input
          id="nota1"
          v-model.number="nota1"
          class="form-control"
          type="number"
          min="10"
          max="70"
          placeholder="Nota 1"
          required
        />
      </div>

      <div class="mb-3">
        <label for="nota2" class="form-label">
          Nota 2
        </label>

        <input
          id="nota2"
          v-model.number="nota2"
          class="form-control"
          type="number"
          min="10"
          max="70"
          placeholder="Nota 2"
          required
        />
      </div>

      <div class="mb-3">
        <label for="nota3" class="form-label">
          Nota 3
        </label>

        <input
          id="nota3"
          v-model.number="nota3"
          class="form-control"
          type="number"
          min="10"
          max="70"
          placeholder="Nota 3"
          required
        />
      </div>

      <div class="mb-3">
        <label for="asistencia" class="form-label">
          Asistencia %
        </label>

        <input
          id="asistencia"
          v-model.number="asistencia"
          class="form-control"
          type="number"
          min="0"
          max="100"
          placeholder="Asistencia"
          required
        />
      </div>

      <div class="text-center">
        <button
          type="submit"
          class="btn btn-primary btn-sm"
        >
          Calcular
        </button>
      </div>

      <p
        v-if="mensajeError"
        class="text-danger text-center mt-4"
      >
        {{ mensajeError }}
      </p>

      <div
        v-if="promedio !== null"
        class="text-center mt-4"
      >
        <p>El promedio es: {{ promedio }}</p>
        <p>Tu estado es: {{ estado }}</p>
      </div>
    </form>
  </section>
</template>

<style scoped>
.formulario {
  max-width: 430px;
}

.form-label {
  display: block;
  text-align: center;
}
</style>