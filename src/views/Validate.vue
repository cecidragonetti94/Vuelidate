.<template>
  
<div class="mt-5">
    <h1>Vuelidate</h1>
    <form>
        <input type="email" placeholder="Ingresa un mail" class="form-control my-3"
        v-model="$v.email.$model"
        :class="{'is-invalid' : $v.email.$error}"> 
        <small class="text-danger" v-if="!$v.email.email">Este email es incorrecto</small>
        <small class="text-primary" v-if="!$v.email.required">Campo requerido</small>
        <!-- <p>{{$v.email}}</p> -->
        <input type="password" placeholder="Ingrese Contraseña" class="form-control my-m">
    </form>
</div>
</template>

<script> 
import {required, email} from "vuelidate/lib/validators"
export default {
name:"Validate",
data(){
    return{
        email: ''
    }
},
validations:{
    email:{required, email}
}
}
</script>

<style>

</style>