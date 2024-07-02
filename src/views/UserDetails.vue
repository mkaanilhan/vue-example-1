<script>
export default {
    props: ['id']

}
</script>

<template>
    <div class='text-xl p-4'>

        {{ id }}
        {{ $route.query.email }}



    </div>
</template>