<template>
    <div id="vt-message-list" class="grey">
        <v-container>
            <h1 data-aos="fade-in" class="vt-title text-center primary--text">Pesan</h1>
        <v-list class="vt-post-container grey" data-aos="fade-in">
            <v-list-item v-for="(guest, index) in list" :key="index">
                <v-list-item-content>
                    <v-list-item-title>
                        <span class="dark--text" style="font-weight:bold">{{guest.name}}</span><span class="primary--text" style="margin-left:10px" v-if="guest.attend">&#10003; Hadir</span>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        <p class="dark--text">{{guest.message}}</p>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
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
        max-height: 50vh;
        overflow-y: auto;
    }
}

</style>