<template>
    <div class="w-screen h-screen flex">
        <!-- side bar -->
        <div class="w-[400px] h-full bg-gray-200 text-white" >
            <!-- sidebar header -->
            <div class="h-[50px] bg-gray-900 flex justify-start items-center">
                <div class="px-[20px]">

                    <h3 class="font-bold text-xl">

                        Admin Dashboard
                    </h3>
                </div>
            </div>

            <!-- menu -->
            <div class="h-[calc(100vh-50px)] bg-gray-800 py-[20px]" >
                <div class="px-[20px] flex flex-col space-y-[10px]">
                    <router-link to="/home" class="inline-flex items-center py-[10px] w-full text-small ">
                        Home
                    </router-link>
                    <router-link to="/profile" class="inline-flex items-center py-[10px] w-full text-small ">
                        Profile
                    </router-link>
                    <router-link to="/home" class="inline-flex items-center py-[10px] w-full text-small ">
                        Settings
                    </router-link>
                    <router-link to="/home" class="inline-flex items-center py-[10px] w-full text-small ">
                        Help
                    </router-link>
                </div>
            </div>
        </div>
        <!-- main -->
        <div class="w-full h-full bg-gray-400">
             <!-- main header -->
            <div class="h-[50px] bg-gray-900">
                side bar header
            </div>
            <!-- main -->
            <div class="h-[calc(100vh-50px)] bg-white" >
                menu
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        
    }
</script>

<style >

</style>