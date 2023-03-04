<template>
  <v-app dark>
    <v-navigation-drawer 
      v-model="drawer"
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      mini-variant-width="65"
      width="auto"
      :permanent="$vuetify.breakpoint.mdAndUp"
      dark
      :color="colorNav"
      fixed
      app
      
      
    > 
      <v-list>

      
        <v-list-item  @click.stop="miniVariant = !miniVariant">
        <v-list-item-icon>
          <v-icon>mdi-apps</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Menu</v-list-item-title>
      </v-list-item>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          two-line
          @click.stop="drawer = !drawer"
        >
          <v-list-item-action >
            
          <div v-if="item.icon">  <v-icon :color="item.color">{{ item.icon }} </v-icon></div>
          <div v-if="item.avatar">  <v-avatar size="25"><img  :src="require('@/static/img/botonera/' + item.avatar)" alt="azimut"></v-avatar></div>
          <div v-if="item.peac">  <v-avatar size="25"> <img  src="@/static/img/botonera/peaclog.png" alt="peac"></v-avatar></div>
          <div v-if="item.sistema">  <v-avatar size="25"> <img  src="@/static/img/botonera/sistemalog.png" alt="azimut"></v-avatar></div>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }} </v-list-item-title>
          </v-list-item-content>
          
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-app-bar dark
      :clipped-left="clipped"
      fixed
      :color="colorNav"
      
      app
    >
     <v-app-bar-nav-icon  v-if="$vuetify.breakpoint.mdAndDown" @click.stop="drawer = !drawer" />
      
     
      
      <v-toolbar-title> <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
      <v-avatar size="25"> <img  src="@/static/img/sea-icon.png" alt="Icono Sea"/></v-avatar>  
      </v-btn> {{ title }} </v-toolbar-title>
     
      <v-spacer />
      
      <v-btn v-for="(icon,i) in icons" :href="icon.to" :key="i" class="mx-4 white--text" icon>
                <v-icon size="24px">
                    {{ icon.icon }}
                </v-icon>
            </v-btn>
            <v-btn v-show="$store.state.usuario.status" @click="cerrarSesion" class="mx-4 white--text" icon>
                <v-icon size="24px">
                  mdi mdi-logout
                </v-icon>Log-Out
            </v-btn>
      <v-switch
        class="mt-4 ml-8" 
        v-model="$vuetify.theme.dark"
        inset
        label="M-Obscuro"
        persistent-hint
        
      ></v-switch>
     
  
    
    </v-app-bar>
    
    <v-main>
      <lineUp/>
      <v-container class="mb-8 pa-3" >
        <v-row justify="center">
        <v-col cols="12" xl="11">
        <Nuxt />
        </v-col></v-row>
      </v-container>
      <footerN />
    </v-main>

    



  </v-app>
</template>

<script>
import lineUp from '@/components/LineUp'
import footerN from '@/components/Footer'
import {mapActions, mapstate} from 'vuex'


export default {
  name: 'DefaultLayout',
  
  components: {
    footerN,
    lineUp
  },
  data () {
    return {
      colorNav: '#1d2730',
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Inicio',
          to: '/',
          color: 'cyan lighten-1'
        },
        {
          icon: 'mdi-magnify',
          title: 'Transparencia',
          to: '/transparencia',
          color: 'teal lighten-1'
        },
        {
          avatar: 'peaclog.png',
          title: 'Política Estatal Anticorrupción',
          to: '/peac',
          color: 'warning'
        },
        {
          avatar: 'sistemalog.png',
          title: 'Sistema Estatal de Información',
          to: '/sei'
        },
       
        {
          avatar: 'azimutlog.png',
          title: 'Revista Azimut',
          to: '/azimut',
        },
        {
          icon: 'mdi-comma-circle-outline',
          title: 'Publicaciónes',
          to: '/publicaciones'
        },
        {
          icon: 'mdi-account-group',
          title: 'Comité Coordinador',
          to: '/cc',
          color: 'orange lighte-2'
        },
        {
          avatar: 'cpclog.png',
          title: 'Comité de Participación Ciudadana',
          to: '/CPC',
          color: 'purple lighten-2'
        },
        {
          icon: 'mdi-cogs',
          title: 'Secretaría ejecutiva',
          to: '/SE',
          color: 'pink'
        },
        {
          icon: 'mdi-cog',
          title: 'Comisión Ejecutiva',
          to: '/ce',
          color: 'blue-grey'
        },
        {
          icon: 'mdi-card-account-phone-outline',
          title: 'Contacto',
          to: '/contacto',
          color: 'cyan darken-3'
        },
        {
          icon: 'mdi-badge-account',
          title: 'Log-in Instituciónes',
          to: '/admin',
          color: ''
        },
      
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: 'Sea Coahuila',
      icons: [{
                icon: 'mdi-facebook',
                to: 'https://www.facebook.com/seseacoah'
            },
            {
                icon: 'mdi-twitter',
                to: 'https://twitter.com/seseacoah?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3Aseseacoah%7Ctwcon%5Es2'
            },
            {
                icon: 'mdi-youtube',
                to: 'https://www.youtube.com/@sistemaanticorrupciondeles8877'
            }
        ],
        
    }
  },
  methods:{
    ...mapActions(['readUserLocalStorage', 'cerrarSesion'])
  },
  created(){
    
    // this.readUserLocalStorage()
    },
  //   beforeMount() {
  //     this.readUserLocalStorage()
    
  // },
  // beforeCreate(){
  //   this.readUserLocalStorage()
  // }
}
</script>
