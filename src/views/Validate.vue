.<template>
  <div class="mt-5">
    <h1>Vuelidate</h1>
    <br>
    <form @submit.prevent="submit">
      <input
        type="email"
        placeholder="Ingresa un mail"
        class="form-control my-1"
        v-model.lazy="$v.email.$model"
        :class="{ 'is-invalid': $v.email.$error }"
      />
      <small class="text-danger" v-if="!$v.email.email"
        >Este email es incorrecto</small
      >
      <small class="text-primary" v-if="!$v.email.required"
        >Campo requerido</small
      >
      <!-- <p>{{$v.email}}</p> -->
      <input
        type="password"
        placeholder="Ingrese Contraseña"
        class="form-control my-3"
        v-model.lazy="$v.password.$model"
        :class="{ 'is-invalid': $v.password.$error }"
      />
      <small class="text-danger" v-if="!$v.password.minLength"
        >Mínimo 6 caracteres</small
      >

      <input
        type="password"
        placeholder="Repetir Contraseña"
        class="form-control my-3"
        v-model.lazy="$v.repeatPassword.$model"
        :class="{ 'is-invalid': $v.repeatPassword.$error }"
      />
      <small class="text-danger" v-if="!$v.repeatPassword.sameAsPassword"
        >Contraseña incorrecta</small
      >
      <b-button class="mt-5" variant="danger" type="submit" :disabled="$v.$invalid">Enviar</b-button>
 
    </form>
  </div>
</template>

<script>
import { required, email, sameAs, minLength } from "vuelidate/lib/validators";
export default {
  name: "Validate",
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
    };
  },
  validations: {
    email: { required, email },
    password: {
      required,
      minLength: minLength(6),
    },
    repeatPassword: {
      sameAsPassword: sameAs("password"), //compara la pass con la rep
    },

  },
  methods:{
      submit(){
          console.log('submit!')
          this.$v.$touch()
          if(this.$v.$invalid){
            //   this.submitStatus = 'ERROR'
            console.log('se genero un error')
          } else{
            console.log('todos los campos correctos')
            console.log('Enviando información...' + this.$v.email.$model + ' ' + this.$v.password.$model )
          }
      }
  }
};
</script>

<style>
</style>