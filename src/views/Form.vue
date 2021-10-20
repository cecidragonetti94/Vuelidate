.<template>
  <div class="mt-5">
    <h1>Formulario</h1>

    <form>
      <b-row>
        <b-col md="3">
          <b-form-input
            type="text"
            v-model="texto"
            :state="comprobar"
          ></b-form-input>
          <small>Minimo 3 carácteres</small>
          {{ texto }}
        </b-col>
        <b-col md="3">
          <b-form-select v-model="select" :options="animales"></b-form-select>
          <small>{{select}} </small>
        </b-col>
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
      animales: [
          {value: null,text:'seleccione un animal'},
          {value: 'perro',text:'Guau guau'},
          {value: 'gato',text:'miaaauu'},
          {value: 'tortuga',text:'puuff'}

      ]
    };
  },
  computed:{
      comprobar(){
          return this.texto.length > 2 ? true : false
      }
  }
};
</script>

<style>
</style>