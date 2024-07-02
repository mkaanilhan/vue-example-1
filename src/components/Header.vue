<script>
export default {
    props: ['header', 'numberOfItem'],


    data() {

        return {

            componentData1: 'Welcome from slot props'

        }
    },


    beforeCreate() { console.log('CHILD BEFORE CREATE') },
    created() { console.log('CHILD CREATED') },
    beforeMount() { console.log('CHILD BEFORE MOUNTE') },
    mounted() { console.log('CHILD MOUNTED') },
    beforeUpdate() { console.log('CHILD BEFORE UPDATE') },
    updated() { console.log('CHILD UPDATED') },
    beforeUnmount() { console.log('CHILD BEFORE UNMOUNT') },
    unmounted() { console.log('CHILD UNMOUNT') },



}
</script>

<template>
    <div class='p-4 flex justify-between border-2 border-red-300'>

        <div class=' text-3xl'>

            {{ header }}


        </div>

        <div class='text-xl underline'>

            {{ numberOfItem }}
        </div>



        <slot name='header' :id='componentData1' />

        <slot name='header2' />

    </div>
</template>
