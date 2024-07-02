<script>
import { RouterView } from 'vue-router'

export default {
    data() {

        return {

            contactList: [

                { id: 1, name: 'Kaan' },
                { id: 2, name: 'Aydın' },
                { id: 3, name: 'Sercan' }


            ]
        }
    },

    methods: {

        goToDetails(id) {

            this.$router.push({ name: "UserDetails", params: { id: id }, query: { email: true } })


        },

        goBack() {
            this.$router.go(-2)

        }
    }

}
</script>

<template>
    <div>

        <RouterLink to='/about'>
            Move to about
        </RouterLink>

        <RouterLink :to='{ name: "Home" }' class='mx-4'>
            Move to home
        </RouterLink>

        <button @click='goBack' class='border border-black p-4 rounded-lg m-4'>Go back</button>


        <div v-for='(item, index) in contactList' :key='item.id' class='my-8'>

            <!--
                  <RouterLink class='p-4' :to='{ name: "UserDetails", params: { id: item.id }, query: { email: true } }'>
                {{ item.name }}
            </RouterLink>
            -->


            <button @click='goToDetails(item.id)' class='border border-black p-4 rounded-lg m-4'>{{ item.name
                }}</button>




        </div>

        <RouterView />




    </div>
</template>