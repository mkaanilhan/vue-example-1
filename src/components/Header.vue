<script>
export default {
    props: ['header', 'numberOfItem'],
    data() {

        return {

        }
    }

}
</script>

<template>
    <div class='p-4 flex justify-between'>
        <div class=' text-3xl'>

            {{ header }}

        </div>

        <div class='text-xl underline'>

            {{ numberOfItem }}
        </div>
    </div>
</template>
