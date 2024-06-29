<script>
export default {
    data() {

        return {

            inputText: null

        }
    },

    methods: {

        addNewItem() {

            this.$emit('addNewItemFromChild', this.inputText)

            this.inputText = null

        }

    }

}
</script>

<template>
    <div class='flex p-4 gap-2'>

        <input class='w-4/5 p-2 rounded-l-lg' v-model='inputText' placeholder='Enter your item..'>

        <button class='w-1/5 bg-orange-400 rounded-r-lg' @click='addNewItem'>Add</button>

    </div>
</template>
