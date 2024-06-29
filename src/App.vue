<script>
export default {

}
</script>

<template>

    <div class='mx-auto'>

        <nav class='container mx-auto w-640 flex justify-center p-4'>

            <div class='w-320 flex gap-4'>
                <RouterLink to='/' activeClass='bg-slate-100 rounded-lg p-2 font-bold' class='p-2'>Home</RouterLink>
                <RouterLink to='/about' activeClass='bg-slate-100 rounded-lg p-2 font-bold' class='p-2'>About
                </RouterLink>

            </div>

        </nav>

        <RouterView />

    </div>




</template>