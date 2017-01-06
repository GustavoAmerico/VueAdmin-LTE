<template>

    <div class="box box-primary">
        <div class="box-header with-border">
            <h3 class="box-title">{{$t('profile')}} photo</h3>
        </div>

        <div class="box-body box-profile">
            <img class="profile-user-img img-responsive img-circle" property="image" :src="photo" alt="User profile picture {userName}">


            <h3 property="name" class="profile-username  text-center text-capitalize">{{userName}}</h3>

            <p property="alternateName" class="text-muted text-center text-lowercase">{{legend}}</p>
            <p class="text-muted text-center text-capitalize">
                <input type="file" class="btn-primary text-center" id="avatarInput" name="avatarInput" accept="image/*" v-on:change="refreshPhoto"
                    value="selected image">

            </p>
            <!--            
            <ul class="list-group list-group-unbordered">
                <li class="list-group-item">
                    <b>Followers</b> <a class="pull-right">1,322</a>
                </li>
                <li class="list-group-item">
                    <b>Following</b> <a class="pull-right">543</a>
                </li>
                <li class="list-group-item">
                    <b>Friends</b> <a class="pull-right">13,287</a>
                </li>
            </ul>
              <a href="#" class="btn btn-primary btn-block"><b>Follow</b></a>
            -->


        </div>
        <!-- /.box-body -->
    </div>


</template>


<script> 

    export default {
        name: 'userPhoto',
        created() {
        },
        data() {
            return {}
        },
        props: ['photo', 'userName', 'legend'],
        methods: {
            refreshPhoto(event) {
                var file = event.target.files[0];
                var reader = new FileReader();
                var x = this;
                reader.addEventListener("load", function () {
                    console.log(x.photo);
                    x.photo = reader.result;
                }, false);

                if (file)
                    reader.readAsDataURL(file);
                console.log('refreshPhoto', input.files[0]);
            }
        },
        watch: {

        }

    }

</script>