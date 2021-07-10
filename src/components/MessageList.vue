<template>
    <div id="vt-message-list">
        <v-container>
            <h1 data-aos="fade-in" class="vt-title text-center primary--text">Pesan</h1>
        <v-list class="vt-post-container" data-aos="fade-in">
            <ul>
                <li v-for="(guest, index) in list" :key="index">
                    <div class="dark--text">
                        <span style="font-weight:bold">{{guest.name}}</span><span class="primary--text vt-attend" v-if="guest.attend">&#10003; Hadir</span>
                        <p>{{guest.message}}</p>
                    </div>
                </li>
            </ul>
        </v-list>
        </v-container>
    </div>
</template>

<script>

export default {
    props:{
        list : Array
    }
}
</script>

<style lang="scss" scoped>

#vt-message-list{
    padding: 0;
    .vt-post-container {
        max-height: 70vh;
        overflow-y: auto;
        background-color: transparent;
    }
    ul{
        list-style: none;
        display: grid;
        grid-gap: 1.5rem;
    }
    .vt-attend{
        margin-left: 15px;
    }

}

</style>