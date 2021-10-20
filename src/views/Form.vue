.<template>
  <div class="mt-5">
    <h1>Formulario</h1>
    <br />
    <form>
      <b-row>
        <b-col md="3">
          <b-form-input
            type="text"
            v-model.lazy="texto"
            :state="comprobar"
          ></b-form-input>
          <small>Minimo 3 carácteres</small>
          {{ texto }}
        </b-col>
        <b-col md="3">
          <b-form-select v-model="select" :options="lenguajes"></b-form-select>
          <small>{{ select }} </small>
        </b-col>

        <b-form-group class="ml-5" label="Desarrollador" v-slot="{ ariaDescribedby }">
          <b-form-radio
            v-model="selected"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="A"
            >Back-End</b-form-radio
          >
          <b-form-radio
            v-model="selected"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="B"
            >Front-End</b-form-radio
          >
           <b-form-radio
            v-model="selected"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="B"
            >FullStack</b-form-radio
          >
        </b-form-group>
      </b-row>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      texto: "",
      select: null,
      radio: null,
      lenguajes: [
        { value: null, text: "Seleccione un lenguaje" },
        { value: "Front-end", text: "React" },
        { value: "Back-end", text: "PHP" },
        { value: "Front-end", text: "Vue" },
        { value: "Back-end", text: "Node" },
      ],
    };
  },
  computed: {
    comprobar() {
      return this.texto.length > 2 ? true : false;
    },
  },
};
</script>

<style>
</style>