<template>
    <div class="flex justify-between py-3 pl-20 pr-10 items-center border-b-100 border-black-900 bg-gray-100">
        <div>
            <a href="/"><img src="../../../assets/logo.png" alt="Kaffe" class="h-10"></a>
        </div>
        <div>
            <ul class="flex justify-between items-center">
                <li class="flex justify-start mr-5">
                    <div><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg></div>
                    <div class="text-xs text-white bg-primary px-1 h-4">1</div>
                </li>
                <li>
                    <div class="relative flex justify-center items-center border border-gray-400 py-0.5 px-2 bg-white rounded-full">
                        <svg class="absoulte left-0 w-4 h-4" fill="none" stroke="gray" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <input type="text" placeholder="Search Restaurant..." autocomplete="off" class="text-base placeholder-gray">
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>