<template>
    <div itemscope itemtype="http://schema.org/Person">
        <form action="">
            <user-photo photo="" :user-name="user.name" :legend="user.email" Editing="true"></user-photo>
            <!--Perfil-->
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">{{$t('profile')}}</h3>
                </div>
                <!-- /.box-header -->
                <!-- form start -->

                <div class="box-body">
                    <div class="form-group">
                        <div class="col-md-9 margin-bottom">
                            <label for="name" class="control-label">{{$t('name')}}</label>
                            <input type="text" itemprop="name" maxlength="250" size="250" pattern="[a-zA-Z\sà-úÀ-Ú]{10,}" autocomplete="name" class="form-control text-capitalize"
                                id="name" name="name" v-model="user.name" :title="$t('input.title.fullName')" :placeholder="$t('input.placeholder.fullName')"
                                autofocus required/>

                        </div>
                        <div class="col-md-3 margin-bottom">
                            <label for="birthDate" class="control-label">{{$t('label.text.birthDate')}}</label>

                            <div class="input-group">

                                <input id="birthDate" type="date" min="1930-01-01" maxlength="10" size="10" max="2020-01-01" name="birthDate" autocomplete="bday"
                                    class="form-control" :placeholder="$t('input.placeholder.birthDate')" :title="$t('input.title.birthDate')"
                                    itemprop="birthDate" isDate required/>
                                <div class="input-group-addon">
                                    <i class="fa fa-calendar"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-md-4 margin-bottom">
                            <label for="email" class="control-label">{{$t('label.text.email')}}</label>
                            <div class="input-group">
                                <input type="email" itemprop="email" name="email" maxlength="130" pattern="^([a-z0-9][a-z0-9-.]{0,32}[a-z0-9])(@[a-z0-9][a-z0-9-]{0,32}[a-z0-9])((?:.[a-z]{2,5}){1,2})$"
                                    class="form-control text-lowercase" v-model="user.email" id="email" :title="$t('input.title.email')"
                                    :placeholder="$t('input.placeholder.email')" required />
                                <div class="input-group-addon">
                                    <i class="fa fa-envelope-o"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 margin-bottom">
                            <label for="telephone" class="control-label">{{$t('label.text.principalPhone')}}</label>
                            <div class="input-group">
                                <div class="input-group-addon">
                                    <select name="telephoneCountry" autocomplete="tel-country-code" class="" id="telephoneCountry">
                                        <option value="55">BRL (+55)</option>
                                    </select>
                                </div>
                                <input type="text" itemprop="telephone" maxlength="25" size="30" pattern="[0-9-)()\s]{6,}" autocomplete="tel" class="form-control"
                                    id="telephone" name="telephone" v-model="user.telephone" :title="$t('input.title.principalPhone')"
                                    :placeholder="$t('input.placeholder.principalPhone')" />
                            </div>
                        </div>
                        <div class="col-md-3 margin-bottom">
                            <label for="cellPhone" class="control-label">{{$t('label.text.cellPhone')}}</label>
                            <div class="input-group">
                                <div class="input-group-addon">
                                    <select id="cellPhoneCountry" name="cellPhoneCountry" autocomplete="tel-country-code" class="">
                                        <option value="55">BRL (+55)</option>
                                    </select>
                                </div>
                                <input type="text" itemprop="telephone" maxlength="25" size="30" pattern="[0-9-)()\s]{6,}" autocomplete="tel" class="form-control"
                                    id="cellPhone" name="cellPhone" v-model="user.cellPhone" :title="$t('input.title.cellPhone')"
                                    :placeholder="$t('input.placeholder.cellPhone')" />
                            </div>
                        </div>
                        <div class="col-md-2 margin-bottom">

                            <label for="gender" class="control-label">{{$t('label.text.gender')}}</label>
                            <div class="input-group">
                                <select class="form-control" name="gender" id="gender" itemprop="gender">
                               <option value="Male">
                                   {{$t('male')}}
                                   </option>
                               <option value="Female">
                                   {{$t('female')}}
                               </option>
                               </select>
                                <div class="input-group-addon">
                                    <i class="fa fa-venus-mars"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>




            </div>
            <!-- /.Perfil -->

            <div class="box box-success" itemscope itemprop="address" itemtype="http://schema.org/PostalAddress">
                <div class="box-header with-border">
                    <h3 class="box-title">{{$t('contact')}}</h3>
                </div>
                <div class="box-body">
                    <div class="form-group">

                        <div class="col-md-2 margin-bottom">
                            <label for="postalCode" class="control-label">{{$t('label.text.postalCode')}}</label>
                            <input type="text" itemprop="postalCode" name="postalCode" maxlength="9" pattern="[0-9]{8}|\d{5}-\d{3}" class="form-control"
                                v-model="postalCode" id="postalCode" :title="$t('input.title.postalCode')" :placeholder="$t('input.placeholder.postalCode')"
                                required />
                        </div>

                        <div class="col-md-9 margin-bottom">
                            <label for="" class="control-label">{{$t('label.text.streetAddress')}}</label>
                            <input type="text" itemprop="streetAddress" name="streetAddress" maxlength="200" pattern="[0-9]{8}|\d{5}-\d{3}" class="form-control"
                                v-model="address.streetAddress" id="streetAddress" :title="$t('input.title.streetAddress')" :placeholder="$t('input.placeholder.streetAddress')"
                                required />
                        </div>

                        <div class="col-md-1 margin-bottom">
                            <label for="homeNumber" class="control-label">{{$t('label.text.homeNumber')}}</label>
                            <input type="text" itemprop="postOfficeBoxNumber" name="homeNumber" maxlength="6" pattern="[0-9]{1,6}" class="form-control"
                                v-model="address.number" id="homeNumber" :title="$t('input.title.homeNumber')" :placeholder="$t('input.placeholder.homeNumber')"
                                required />
                        </div>
                    </div>


                    <div class="form-group">


                        <div class="col-md-3 margin-bottom">
                            <label for="bairro" class="control-label">{{$t('label.text.bairro')}}</label>
                            <input type="text" name="bairro" disabled="true" class="form-control" v-model="address.bairro" id="bairro" :title="$t('input.title.bairro')"
                                :placeholder="$t('input.placeholder.bairro')" required />
                        </div>
                        <div class="col-md-3 margin-bottom">
                            <label for="addressLocality" class="control-label">{{$t('label.text.addressLocality')}}</label>
                            <input type="text" itemprop="addressLocality" name="addressLocality" disabled="true" class="form-control" v-model="address.addressLocality"
                                id="addressLocality" :title="$t('input.title.addressLocality')" :placeholder="$t('input.placeholder.addressLocality')"
                                required />
                        </div>



                        <div class="col-md-1 margin-bottom">
                            <label for="addressRegion" class="control-label">{{$t('label.text.addressRegion')}}</label>
                            <input type="text" itemprop="addressRegion" name="postalCode" maxlength="2" disabled="true" class="form-control" v-model="address.addressRegion"
                                id="addressRegion" :title="$t('input.title.addressRegion')" :placeholder="$t('input.placeholder.addressRegion')"
                            />
                        </div>
                        <div class="col-md-6"></div>
                    </div>




                </div>
            </div>


            <div class="box-footer">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</template>
<script>
    // import userProfile from '../components/profile/user-profile.vue'

    export default {
        name: "user-create",
        data() {
            return {
                postalCode: "",
                user: {
                    name: "",
                    email: ""
                },
                address: {
                    postalCode: "",
                    streetAddress: "",
                    bairro: ""
                }
            }
        },
        locales: {
            "en-US": {
                name: "Name",
                male: "Male",
                contact: "Contact",
                female: "Female",
                label: {
                    text: {
                        birthDate: "Birthday",
                        gender: "Gender",
                        principalPhone: "Primary Phone",
                        cellPhone: "Cell Phone",
                        "postalCode": "CEP",
                        "streetAddress": "Address",
                        "homeNumber": "Number",
                        "addressRegion": "UF",
                        "addressLocality": "City",
                        "bairro": "Bairro"
                    }
                },
                input: {
                    title: {
                        fullName: "Name must contain 10 to 250 characters with letters and space",
                        birthDate: "Enter your birthdate in format dd-MM-YYYY",
                        principalPhone: "Primary Phone",
                        cellPhone: "Cell Phone",
                        "homeNumber": "Number for home",
                        "addressRegion": "UF",
                        "postalCode": "CEP",
                        "addressLocality": "City",
                        "bairro": "Bairro"
                    },
                    placeholder: {
                        fullName: "Write the full name",
                        email: "Write the email",
                        principalPhone: "Primary Phone",
                        birthDate: "Write the birth date",
                        cellPhone: "Cell Phone",
                        "postalCode": "CEP",
                        "streetAddress": "Address",
                        "homeNumber": "123",
                        "addressRegion": "UF",
                        "addressLocality": "City",
                        "bairro": "Bairro"
                    }
                }
            },
            "pt-BR": {
                name: "Nome",
                male: "Masculino",
                contact: "Contato",
                female: "Feminino",
                label: {
                    text: {
                        birthDate: "Data de nascimento",
                        gender: "Sexo",
                        principalPhone: "Telefone Principal",
                        email: "E-mail",
                        cellPhone: "Celular",
                        "postalCode": "CEP",
                        "streetAddress": "Endereço",
                        "homeNumber": "Nº",
                        "addressRegion": "UF",
                        "addressLocality": "Cidade",
                        "bairro": "Bairro"
                    }
                },
                input: {
                    title: {
                        fullName: "O nome deve conter de 10 até 250 caracteres com letras e espaço",
                        email: "digite seu email no formato XPTO",
                        principalPhone: "Telefone principal",
                        birthDate: "Digite sua data de nascimento no formato dd-MM-YYYY",
                        cellPhone: "Celular",
                        "postalCode": "CEP",
                        "homeNumber": "Número da casa",
                        "addressRegion": "UF",
                        "addressLocality": "Cidade",
                        "bairro": "Bairro"
                    },
                    placeholder: {
                        fullName: "Digite seu nome completo",
                        principalPhone: "Telefone principal",
                        birthDate: "Digite a data de nascimento",
                        cellPhone: "Celular",
                        "postalCode": "CEP",
                        "homeNumber": "Digite o número da casa",
                        "streetAddress": "Address",
                        "addressRegion": "UF",
                        "addressLocality": "Cidade",
                        "bairro": "Bairro"
                    },
                    title: {
                        principalPhone: "Telefone principal",
                        email: "Só aceita emails que comecem com letras ou números, tenha de 0 a 32 caracteres, letras, números, ponto ou hífen, antes do @",
                        cellPhone: "Celular",
                        "homeNumber": "Digite o número da casa",
                        "addressRegion": "UF",
                        "addressLocality": "Cidade",
                        "bairro": "Bairro"
                    }
                }
            }
        },
        methods: {
            loadCep() {

            }
        },
        watch: {
            postalCode(newValue, old) {
                var cep = newValue.replace(/[^0-9]/, '');
                if (cep == null || cep.length != 8) return;

                var model = this;
                var routeLink = 'http://viacep.com.br/ws/' + cep + '/json';
                this.$http.get(routeLink)
                    .then(json => {
                        debugger
                        var body = json.body;
                        model.address.streetAddress = body.logradouro;
                        model.address.postalCode = body.cep;
                        model.address.addressRegion = body.uf;
                        model.address.addressLocality = body.localidade;
                        model.address.bairro = body.bairro;

                    }).catch(err => {
                        console.clear();
                        console.error(err);
                    })
            }
        }
    }
</script>